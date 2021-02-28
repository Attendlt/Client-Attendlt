import React, {useCallback, useEffect, useRef, useState} from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

const vidWidth = 720;
const vidHeight = 560;

const videoConstraints = {
  width: vidWidth,
  height: vidHeight,
  facingMode: "user"
};

function Enroll() {
  const webcamRef = useRef(null)
  const [imgSrc, setImgSrc] = useState("#")
  const [images, setImages] = useState([])
  const [showWebcam, setShowWebcam] = useState(true)

  // first save 25 images in an array of images, then process them to faceapi
  // save json object to the firebase
  // handle conditions such "sakal nahi dikh rahi, etc, etc"
  // use face detector to only store "sakla"
  // then save it to images array and then repeat the process

  useEffect(()=>{
    function loadLabeledImages() {
      const labels = [
        "UserName",
      ];

      return Promise.all(
          labels.map(async (label) => {
            const descriptions = [];
            images.forEach(async (image)=>{
              const img = await faceapi.fetchImage(
                  image
              );
              console.log(img)
              const detections = await faceapi
                  .detectSingleFace(img)
                  .withFaceLandmarks()
                  .withFaceDescriptor();

              if(detections?.descriptor){
                descriptions.push(detections?.descriptor);
              }
            })
            // console.log(descriptions)
            return new faceapi.LabeledFaceDescriptors(label, descriptions);
          })
      );
    }

    async function capture() {
      if(imgSrc!=='#'){
        setImages((oldImages)=>[...oldImages, imgSrc])
        console.log(images.length)
        // console.log(webcamRef.current.stream.getVideoTracks()[0])
        if(images.length >= 4){
          const stream = webcamRef?.current?.stream?.getVideoTracks()[0]
          stream?.stop()
          setShowWebcam(false)
          const labeledFaceDescriptors = await loadLabeledImages()
          console.log(labeledFaceDescriptors);
        }
      }
    }

    Promise.all([
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
    ]).then(capture);

  }, [imgSrc])

  // const handleUserMedia = () =>{
  //   const
  // }

  const capture = useCallback(
      ()=>{
        const imageSrc = webcamRef?.current?.getScreenshot() || "#"
        // console.log(imageSrc)
        setImgSrc(imageSrc)
      },
      [webcamRef]
  )

  return <div>
    {showWebcam && <Webcam
                      ref={webcamRef}
                      audio={false}
                      videoConstraints={videoConstraints}
                      height={vidHeight}
                      width={vidWidth}
                      screenshotFormat="image/jpg"
                  />
    }

    {/*<video*/}
    {/*    width={vidWidth}*/}
    {/*    height={vidHeight}*/}
    {/*    autoPlay={true}*/}
    {/*    muted={true}*/}
    {/*    id="video"*/}
    {/*/>*/}

    {/*<canvas id="canvas"></canvas>*/}

    <button onClick={capture}>Capture Photo</button>

    {images.map(img=>{
      // console.log(img.length)
      return <img src={img} alt=""/>
    })}
  </div>;
}

export default Enroll;
