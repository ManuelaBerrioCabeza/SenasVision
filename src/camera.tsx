import React, {useRef, useState, useEffect } from 'react';
import Webcam from "react-webcam";
import { FilesetResolver, GestureRecognizer, DrawingUtils } from "@mediapipe/tasks-vision";
import gesture_recognizer_task from "./gesture_recognizer.task"


function Camera() {
    // here you will create the state
    const [gesture_name, setGesture] = useState(" ")


    useEffect(() => {
        const demosSection = document.getElementById("demos");
        let gestureRecognizer: GestureRecognizer;
        let enableWebcamButton: HTMLButtonElement;
        let webcamRunning: Boolean = false;
        const videoHeight = "720px";
        const videoWidth = "1080px";
        const video = document.getElementById("webcam") as HTMLVideoElement;
        const canvasElement = document.getElementById("output_canvas") as HTMLCanvasElement;
        const canvasCtx = canvasElement.getContext("2d");
        const gestureOutput = document.getElementById("gesture_output");

        const createGestureRecognizer = async () => {
            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
            );
            gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath:
                        gesture_recognizer_task,
                    delegate: "GPU"
                },
                runningMode: "VIDEO"
            });
            demosSection.classList.remove("invisible");
        };
        createGestureRecognizer();

        // Check if webcam access is supported.
        function hasGetUserMedia() {
            return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
        }

        // If webcam supported, add event listener to button for when user
        // wants to activate it.
        if (hasGetUserMedia()) {
            enableWebcamButton = document.getElementById("webcamButton");
            enableWebcamButton.addEventListener("click", enableCam);
        } else {
            console.warn("getUserMedia() is not supported by your browser");
        }

        // Enable the live webcam view and start detection.
        function enableCam(event) {
            if (!gestureRecognizer) {
                alert("Please wait for gestureRecognizer to load");
                return;
            }
            webcamRunning = true
            enableWebcamButton.style.display = "none";

            // getUsermedia parameters.
            const constraints = {
                video: true
            };

            // Activate the webcam stream.
            navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
                video.srcObject = stream;
                video.addEventListener("loadeddata", predictWebcam);
            });
        }

        let lastVideoTime = -1;
        let results = undefined;
        let palm = undefined
        async function predictWebcam() {
            const webcamElement = document.getElementById("webcam");
            let nowInMs = Date.now();
            if (video.currentTime !== lastVideoTime) {
                lastVideoTime = video.currentTime;

                results = gestureRecognizer.recognizeForVideo(video, nowInMs);
                if (results.gestures && results.gestures.length > 0) {
                    const gesture_name = results.gestures[0][0].categoryName;
                    console.log(gesture_name);
                    // here you will update the state
                    setGesture(gesture_name)
                }

            }

            canvasCtx.save();
            canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            const drawingUtils = new DrawingUtils(canvasCtx);

            canvasElement.style.height = videoHeight;
            webcamElement.style.height = videoHeight;
            canvasElement.style.width = videoWidth;
            webcamElement.style.width = videoWidth;

            if (results.landmarks) {
                for (const landmarks of results.landmarks) {
                    drawingUtils.drawConnectors(
                        landmarks,
                        GestureRecognizer.HAND_CONNECTIONS,
                        {
                            color: "#6200ff",
                            lineWidth: 5
                        }
                    );
                    drawingUtils.drawLandmarks(landmarks, {
                        color: "#ff0099",
                        lineWidth: 2
                    });
                }
            }
            canvasCtx.restore();
            gestureOutput.style.display = "none";
            // Call this function again to keep predicting when the browser is ready.
            if (webcamRunning === true) {
                window.requestAnimationFrame(predictWebcam);
            }
        }
    }, []);
    
    return (
        <div className="py-20 text-center">
        <section id="demos" className="invisible">

            <div id="liveView" className="videoView">
                <button id="webcamButton" className="mdc-button mdc-button--raised">
                    <span className="mdc-button__ripple"></span>
                    <span className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium">Enable Web Camera</span>
                </button>
                <div style={{ position: "relative" }}>
                    <video id="webcam" autoPlay playsInline style={{ width: "100%", height: "auto" }}></video>
                    <canvas className="output_canvas" id="output_canvas" width="1280" height="720" style={{ position: "absolute", left: "0px", top: "0px"}}></canvas>
                    <p id='gesture_output' className="output" />
                </div>
            </div>
        </section>
        <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{gesture_name}</h2>
        </div>
    </div>
    )
}

export default Camera;