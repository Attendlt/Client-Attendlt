import React, { useEffect } from "react";
import * as faceapi from "face-api.js";
import "./facedetection.css";

const vidWidth = 720;
const vidHeight = 560;

function FaceDetection() {
  useEffect(() => {
    var video = document.querySelector("#video");
    let predictedAges = [];

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
      // runs all async calls in parallels to run it quickly
      faceapi.nets.tinyFaceDetector.loadFromUri("./models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("./models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
      faceapi.nets.faceExpressionNet.loadFromUri("./models"),
      faceapi.nets.ageGenderNet.loadFromUri("/models"),
    ])
      .then(startVideo)
      .catch((err) => console.log(err));

    video.addEventListener("playing", () => {
      const canvas = faceapi.createCanvasFromMedia(video);
      document.body.append(canvas);

      const displaySize = { width: vidWidth, height: vidHeight };
      faceapi.matchDimensions(canvas, displaySize);

      setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks()
          .withFaceExpressions()
          .withAgeAndGender();

        const resizedDetections = faceapi.resizeResults(
          detections,
          displaySize
        );

        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

        if (resizedDetections.length > 0) {
          const age = resizedDetections[0].age;
          const interpolatedAge = interpolateAgePredictions(age);

          const bottomRight = {
            x: resizedDetections[0].detection.box.bottomRight.x,
            y: resizedDetections[0].detection.box.bottomRight.y,
          };

          new faceapi.draw.DrawTextField(
            [`${faceapi.utils.round(interpolatedAge, 0)} years`],
            bottomRight
          ).draw(canvas);
        }
      }, 100);
    });
    function interpolateAgePredictions(age) {
      predictedAges = [age].concat(predictedAges).slice(0, 30);
      const avgPredictedAge =
        predictedAges.reduce((total, a) => total + a) / predictedAges.length;

      return avgPredictedAge;
    }

    return () => {};
  }, []);

  return (
    <div>
      <video
        width={vidWidth}
        height={vidHeight}
        autoPlay={true}
        muted={true}
        id="video"
      />
    </div>
  );
}

export default FaceDetection;