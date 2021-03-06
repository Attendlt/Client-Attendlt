import React, { useEffect } from "react";
import * as faceapi from "face-api.js";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";

/**
 * use useState to store 5 frames detected from camera, after that
 * fed into function to detect the faces, if atleast 3/5 passed,
 * marked the attendance if server timestamp:
 *  morning: 9-10
 *  evening: 4-5
 *
 * first fetch the features dataset from the firestore if not present
 * in the datalayer, then apply the above function
 */

function Detect() {
  const [{ uid, features, name }, dispatch] = useStateValue();

  useEffect(() => {
    // database queries
    async function checkFeatures() {
      if (features === null) {
        try {
          var data = await db.collection("users").doc(uid).get();
          if (data.exists) {
            data = data.data();

            dispatch({
              type: "SET_USER",
              features: data.features,
              name: data.name,
              collegeId: data.collegeId,
              finishedSetup: data.finishedSetup,
            });
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
    checkFeatures();

    var video = document.querySelector("#video");

    const startVideo = () => {
      var constraints = {
        audio: false,
        video: true,
      };

      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then((stream) => {
            video.srcObject = stream;
            video.onloadedmetadata = (e) => video.play();
          })
          .catch(function (err) {
            console.log(err.name + ": " + err.message);
          });
      }
    };

    Promise.all([
      faceapi.nets.faceLandmark68Net.loadFromUri("./models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
    ])
      .then(startVideo)
      .catch((err) => console.log(err));

    return () => {};
  }, [dispatch, features, uid]);

  useEffect(() => {
    if (features !== null) {
      var video = document.querySelector("#video");

      function stopStream() {
        if (video.srcObject) {
          const stream = video.srcObject;
          const tracks = stream.getTracks();

          tracks.forEach(function (track) {
            track.stop();
          });

          video.srcObject = null;
        } else {
          console.log("Video doesn't have any src");
        }
      }

      video.addEventListener("playing", async () => {
        console.log("Playing");

        const parsedUserFeatures = JSON.parse(features);

        const labeledFaceDescriptors = await faceapi.LabeledFaceDescriptors.fromJSON(
          parsedUserFeatures
        );

        const faceMatcher = new faceapi.FaceMatcher(
          labeledFaceDescriptors,
          0.6
        );

        const displaySize = {
          width: video.videoWidth,
          height: video.videoHeight,
        };

        const recogRes = [];

        async function recogniseFace() {
          const detections = await faceapi
            .detectAllFaces(video)
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
            if (result.label === name) recogRes.push(true);
            else recogRes.push(false);
          });
        }

        const interval = setInterval(() => {
          if (recogRes.length === 5) {
            stopStream();
            let cnt = 0;

            recogRes.forEach((res) => {
              if (res) cnt++;
            });

            if (cnt >= recogRes.length / 2 + 1) console.log("Result passed");
            clearInterval(interval);
          }

          console.log(recogRes.length);
          recogniseFace();
        }, 100);
      });
    }

    return () => {};
  }, [features, name]);

  return (
    <div>
      <video autoPlay={true} muted={true} id="video" />
    </div>
  );
}

export default Detect;
