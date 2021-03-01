import React, { useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const vidWidth = 720;
const vidHeight = 560;

function Enroll() {
  const [faceDescriptors, setFaceDescriptors] = useState("");

  useEffect(() => {
    var video = document.querySelector("#video");

    const startVideo = () => {
      var constraints = {
        audio: false,
        video: { width: vidWidth, height: vidHeight },
      };

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          video.srcObject = stream;
          video.onloadedmetadata = function (e) {
            video.play();
          };
        })
        .catch(function (err) {
          console.log(err.name + ": " + err.message);
        });
    };

    Promise.all([
      faceapi.nets.faceLandmark68Net.loadFromUri("./models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
    ])
      .then(startVideo)
      .catch((err) => console.log(err));

    function processDescriptions() {
      console.log("video started");

      const descriptions = [];

      const interval = setInterval(async () => {
        //  save description of images if face detected
        console.log("interval started");
        const detections = await faceapi
          .detectSingleFace(video)
          .withFaceLandmarks()
          .withFaceDescriptor();

        console.log(detections);

        if (detections?.descriptor) {
          descriptions.push(detections.descriptor);
          console.log(descriptions.length);
        }

        // send data to firebase and clear interval after gettting 25 face detections
        if (descriptions.length >= 25) {
          const labeledFaceDescriptors = await new faceapi.LabeledFaceDescriptors(
            "user name",
            descriptions
          );
          setFaceDescriptors(labeledFaceDescriptors);

          const stream = video.srcObject;
          const tracks = stream.getTracks();

          tracks.forEach(function (track) {
            track.stop();
          });

          video.srcObject = null;
          clearInterval(interval);
          video.removeEventListener("playing", processDescriptions);
        }
      }, 100);
    }

    video.addEventListener("playing", processDescriptions);
  });

  useEffect(() => {
    var imageUpload = document.querySelector("#imageUpload");
    if (faceDescriptors !== "") {
      async function start() {
        const container = document.createElement("div");
        container.style.position = "relative";
        document.body.append(container);
        const labeledFaceDescriptors = faceDescriptors;
        // console.log(loadLabeledImages)
        console.log(labeledFaceDescriptors); // store this returned data to firebase
        const faceMatcher = new faceapi.FaceMatcher(
          labeledFaceDescriptors,
          0.6
        );
        let image;
        let canvas;
        document.body.append("Loaded");
        imageUpload.addEventListener("change", async () => {
          if (image) image.remove();
          if (canvas) canvas.remove();
          image = await faceapi.bufferToImage(imageUpload.files[0]);
          container.append(image);
          canvas = faceapi.createCanvasFromMedia(image);
          container.append(canvas);
          const displaySize = { width: image.width, height: image.height };
          faceapi.matchDimensions(canvas, displaySize);
          const detections = await faceapi
            .detectSingleFace(image)
            .withFaceLandmarks()
            .withFaceDescriptors();
          const resizedDetections = faceapi.resizeResults(
            detections,
            displaySize
          );
          const results = resizedDetections.map((d) =>
            faceMatcher.findBestMatch(d.descriptor)
          );
          results.forEach((result, i) => {
            const box = resizedDetections[i].detection.box;
            const drawBox = new faceapi.draw.DrawBox(box, {
              label: result.toString(),
            });
            drawBox.draw(canvas);
          });
        });
      }

      start();
    }
  }, [faceDescriptors]);

  return (
    <div>
      <video
        width={vidWidth}
        height={vidHeight}
        autoPlay={true}
        muted={true}
        id="video"
      />
      <input type="file" id="imageUpload" />
    </div>
  );
}

export default Enroll;
