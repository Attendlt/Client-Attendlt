import React, {useEffect, useState} from "react";
import * as faceapi from "face-api.js";

const vidWidth = 720;
const vidHeight = 560;

function Enroll() {
  const [faceDescriptors, setFaceDescriptors] = useState("")

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
      console.log("video started")

      const descriptions = [];

      const interval = setInterval(async ()=>{
        //  save description of images if face detected
        console.log("interval started")
        const detections = await faceapi
            .detectSingleFace(video)
            .withFaceLandmarks()
            .withFaceDescriptor()

        console.log(detections)

        if(detections?.descriptor){
          descriptions.push(detections.descriptor)
          console.log(descriptions.length)
        }

        // send data to firebase and clear interval after gettting 25 face detections
        if(descriptions.length >= 25){
          const labeledFaceDescriptors = await new faceapi.LabeledFaceDescriptors("user name", descriptions);
          setFaceDescriptors(labeledFaceDescriptors)

          video.pause()
          video.srcObject = null
          video.removeEventListener("playing", processDescriptions)
          clearInterval(interval)
        }
      }, 100)
    }

    video.addEventListener('playing', processDescriptions)
  })

useEffect(()=>{
  if(faceDescriptors !== ''){
    console.log(faceDescriptors)
  }
}, [faceDescriptors])

  return <div>
    <video
        width={vidWidth}
        height={vidHeight}
        autoPlay={true}
        muted={true}
        id="video"
    />
  </div>;
}

export default Enroll;
