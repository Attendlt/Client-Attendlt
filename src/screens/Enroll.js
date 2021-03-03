import React, { useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import * as image from "../test-img.jpg";

const vidWidth = 720;
const vidHeight = 560;

function Enroll() {
  // datalayer call
  const [
    JSONstrLabeledFaceDescriptors,
    setJSONstrLabeledFaceDescriptors,
  ] = useState("");
  const [{ uid }, dispatch] = useStateValue();
  const history = useHistory();

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
        if (descriptions.length < 25) {
          // console.log("interval started");
          const detections = await faceapi
            .detectSingleFace(video)
            .withFaceLandmarks()
            .withFaceDescriptor();

          // console.log(detections);

          if (detections?.descriptor) {
            descriptions.push(detections.descriptor);
            console.log(descriptions.length);
          }

          // send data to firebase and clear interval after gettting 25 face detections
          if (descriptions.length === 25) {
            const labeledFaceDescriptors = await new faceapi.LabeledFaceDescriptors(
              "user name",
              descriptions
            );

            try {
              var JSONstringLabeledFaceDescriptors = "";
              const JSONlabeledFaceDescriptors = labeledFaceDescriptors.toJSON();
              JSONstringLabeledFaceDescriptors = JSON.stringify(
                JSONlabeledFaceDescriptors
              );

              setJSONstrLabeledFaceDescriptors(
                JSONstringLabeledFaceDescriptors
              );

              await db
                .collection("users")
                .doc(uid)
                .collection("features")
                .doc(uid)
                .set({
                  data: JSONstringLabeledFaceDescriptors,
                })
                .then(() => console.log("data saved"))
                .catch((e) => console.log("Caused an error: ", e));
            } catch (e) {
              console.log(e);
            }

            if (video?.srcObject) {
              const stream = video.srcObject;
              const tracks = stream.getTracks();

              tracks.forEach(function (track) {
                track.stop();
              });
            }

            video.srcObject = null;
            clearInterval(interval);
            video.removeEventListener("playing", processDescriptions);
            // history.replace("/");
          }
        }
      }, 100);
    }

    video.addEventListener("playing", processDescriptions);
  });

  useEffect(() => {
    if (JSONstrLabeledFaceDescriptors !== "") {
      const imageUpload = document.getElementById("imageUpload");

      const parseJSONstr = JSON.parse(JSONstrLabeledFaceDescriptors);

      const runFunc = async () => {
        const container = document.createElement("div");
        container.style.position = "relative";
        document.body.append(container);
        const labeledFaceDescriptors = await faceapi.LabeledFaceDescriptors.fromJSON(
          parseJSONstr
        );
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
            .detectAllFaces(image)
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
            console.log(result);
            drawBox.draw(canvas);
          });
        });
      };

      runFunc();
    }
    return () => {};
  }, [JSONstrLabeledFaceDescriptors]);

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
