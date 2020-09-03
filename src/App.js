// import {React, useState} from "react";
import React from "react";
import "./App.css";
import Video from "./Video";
import swal from 'sweetalert';
// import axios from "./axios";

function App() {
  // frontend- react and firebase, material-Uint16Array,flexboy, 3rd party ticker,
  //scroll snap
  // backend- nodejs expressjsserver, mongodb, hosting on herokuapp, to connect mongodb mongoose
  // const [videos, setVideos] = useState([]);




  // useEffect(() => {
  //  async function fetchPosts(){
  //    const response= await axios.get('/v2/posts')
  //    setVideos(response.data);
  //    return re
  //  }
function fun(){
  swal("Notice!", "Tap the video to play!");
}
  return (
    <div onload={fun()} className="app">
      {/* <h1 className="mainh1">TIKTOK</h1> */}
      {/* <h1>Lets build a full stack mern tiktok clone</h1> */}
      <div className="app__videos">
        <Video
          url="https://i.imgur.com/IgFfZkk.mp4"
          channel="pratyushshivam"
          description="Web Developer"
          song="Believe - Justin Bieber"
          likes={640}
          messages={543}
          shares={234}
        />
        <Video
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          channel="charlesanderson"
          description="24 Year old Child"
          song="Baba Blacksheep - Cartoon"
          likes={25}
          messages={15}
          shares={12}
        />
        <Video
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          channel="nishipeter"
          description="Musical Artist"
          song="Developer Fun - Pratyush Shivam"
          likes={20}
          messages={23}
          shares={19}
        />
        <Video
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          channel="fordsuzuki"
          description="Machine Learning"
          song="Code - Machine Bieber"
          likes={6}
          messages={10}
          shares={3}
        />
        <Video
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
          channel="selenagomez"
          description="Singer"
          song="Sorry - Justin Bieber"
          likes={3}
          messages={12}
          shares={3}
        />
        <Video
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
          channel="justinbieber"
          description="Singer"
          song="I'll never forgive you - Selena Gomez"
          likes={5}
          messages={6}
          shares={0}
        />
       
      

        {/* <Video /> */}
      </div>
    </div>
  );
}

export default App;
