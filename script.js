const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media stream
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {}
}

button.addEventListener("click", async () => {
  //disable button
  button.disabled = true;
  //start PIP
  await videoElement.requestPictureInPicture();
  //reset button
  button.disabled = false;
});

selectMediaStream();
