import React from "react";
import AgoraRTC from 'agora-rtc-sdk'
import "./agaropart/scripts/script.js"
const Agora_new = () => {
  return (
    <div>
      <h1>
        Video Call
        <br />
        <small style={{fontSize: 14}}>Powered by Agora.io</small>
      </h1>
      <h4>Local video</h4>
      <div id="me"></div>
      <h4>Remote video</h4>
      <div id="remote-container"></div>
    </div>
  );
};

export default Agora_new
