import { useState } from 'react';
import { Logo, FooterPoster, Road1, Road2, Road3, Road4, Road5, Road6, Road7, Road8, Road9, Road10, Road11, Road12, MiniBus } from './assets/index.js'
import './Home.css';
import Footer from './footer'
// libraries
import Draggable from 'react-draggable';


function Home() {
  const [road, setRoad] = useState([{
    x: (Math.random() * 0.8 * window.innerWidth), 
    y: (Math.random() * 0.2 * window.innerHeight),
    img: Road2.default
  }])
  const [roadCombined, setRoadCombined] = useState([{
    x: (0), 
    y: (Math.random() * 0.4 * window.innerHeight) + 100,
    img: Road1.default
  }])
  const [showMiniBus, setShowMiniBus] = useState(false)
  const [roadSet, setRoadSet] = useState([Road1.default, Road2.default, Road3.default, Road4.default, Road5.default, Road6.default, Road7.default, Road8.default, Road9.default, Road10.default, Road11.default, Road12.default])
  const [roadSetSize, setRoadSetSize] = useState([{x:"76.79px", y:"21.01px"},{x:"54.88px", y:"61.75px"},{x:"43.96px", y:"69.75px"},{x:"82.20px", y:"82.38px"},{x:"79.10px", y:"80.95px"},{x:"64.22px", y:"57.67px"},{x:"76.79px", y:"21.01px"},{x:"54.88px", y:"61.75px"},{x:"43.96px", y:"69.75px"},{x:"82.20px", y:"82.38px"},{x:"79.10px", y:"80.95px"},{x:"64.22px", y:"57.67px"},{x:"76.79px", y:"21.01px"}])
  const [roadSetAnglesX, setRoadSetAnglesX] = useState([59, 72, 35, 30, 48, 37, 59, 72, 35, 30, 48, 36.5])
  const [roadSetAnglesY, setRoadSetAnglesY] = useState([35, 0, 57, 28, -40, -48, 2, -41, -65, -40, 41, 70])
  const [roadSetAnglesXMobile, setRoadSetAnglesXMobile] = useState([47.5, 48, 46.5, 48, 50])
  const [roadSetAnglesYMobile, setRoadSetAnglesYMobile] = useState([0.5, -39, 1.3, 37.5, 10])
  const [roadSetIndex, setRoadSetIndex] = useState(1)
  const [minibusClassName, setMinibusClassName] = useState("minibus1")

  function dragRoad(e, data, index) {
    let newArray = [...road];
    newArray[index].x = data.x;
    newArray[index].y = data.y;
    setRoad(newArray)
    stopDragRoad(e,data,"single")
  }

  function stopDragRoad(e, data, roadType) {
    if (roadType === "single") {
      // for (var i = 0; i < roadCombined.length; i++) {
        // if ((Math.abs(data.x - roadCombined[i].x) < 200) && (Math.abs(data.y - roadCombined[i].y) < 185)) {
        if ((Math.abs(data.x - roadCombined[roadCombined.length-1].x) < 100) && (Math.abs(data.y - roadCombined[roadCombined.length-1].y) < 100)) {
          let newArray_ = [...roadCombined];
          // to delete old index
          // if (newArray_.length === 12) {
          //   newArray_.shift()
          // }
          if (newArray_.length === 12) {
            setMinibusClassName("minibus1")
            setRoad([{
              x: (Math.random() * 0.8 * window.innerWidth), 
              y: (Math.random() * 0.2 * window.innerHeight),
              img: Road2.default
            }])
            setRoadCombined([{
              x: (0), 
              y: (Math.random() * 0.4 * window.innerHeight) + 100,
              img: Road1.default
            }])
            setRoadSetIndex(1)
            setShowMiniBus(false)
            return;
          }
          newArray_.push({x: roadCombined[roadCombined.length-1].x + roadSetAnglesX[roadSetIndex], y: roadCombined[roadCombined.length-1].y + roadSetAnglesY[roadSetIndex], img: road[0].img})
          setRoadCombined(newArray_);
  
          let newArray = [...road];
          newArray[0].x = Math.random() * 0.8 * window.innerWidth;
          newArray[0].y = Math.random() * 0.2 * window.innerWidth;
          if (roadSetIndex === 11) {
            newArray[0].img = roadSet[0];
            setRoadSetIndex(0);
            runBus(12);
            setMinibusClassName("minibus3")
          }
          else {
            newArray[0].img = roadSet[roadSetIndex+1];
            if (roadSetIndex === 3) {
              runBus(4);
              setMinibusClassName("minibus1")
            }
            else if (roadSetIndex === 7) {
              runBus(8);
              setMinibusClassName("minibus2")
            }
            else {
              runBus(1);
            }
            setRoadSetIndex(roadSetIndex+1);
          }
          setRoad(newArray);
          return;
        }
      // }
    }
    else if (roadType === "combined") {
      for (var j = 0; j < road.length; j++) {
        // only adds road pieces at the end. to add throughout chain, run roadCombined[roadCombined.length-1].x in a for loop with i instead of roadCombined.length-1
        if ((Math.abs(roadCombined[roadCombined.length-1].x - road[j].x) < 200) && (Math.abs(roadCombined[roadCombined.length-1].y - road[j].y) < 185)) {
          let newArray_ = [...roadCombined];
          if (newArray_.length === 4) {
            newArray_.shift()
          }
          newArray_.push({x: roadCombined[roadCombined.length-1].x + roadSetAnglesX[roadSetIndex], y: roadCombined[roadCombined.length-1].y + roadSetAnglesY[roadSetIndex], img: road[0].img})
          setRoadCombined(newArray_);
  
          let newArray = [...road];
          newArray[0].x = Math.random() * 0.8 * window.innerWidth;
          newArray[0].y = Math.random() * 0.2 * window.innerWidth;
          if (roadSetIndex === 3) {
            newArray[0].img = roadSet[0];
            setRoadSetIndex(0);
            runBus(2);
          }
          else {
            newArray[0].img = roadSet[roadSetIndex+1];
            if (roadSetIndex === 2) {
              runBus(4);
            }
            else {
              runBus(2);
            }
            setRoadSetIndex(roadSetIndex+1);
          }
          setRoad(newArray);
          return;
        }
      }
    }
  }

  function stopDragRoadMobile(e, data, roadType) {
    if (roadType === "single") {
      for (var i = 0; i < roadCombined.length; i++) {
        if ((Math.abs(data.x - roadCombined[i].x) < 50) && (Math.abs(data.y - roadCombined[i].y) < 46.25)) {
          let newArray_ = [...roadCombined];
          if (newArray_.length === 4) {
            newArray_.shift()
          }
          newArray_.push({x: roadCombined[i].x + roadSetAnglesXMobile[roadSetIndex], y: roadCombined[i].y + roadSetAnglesYMobile[roadSetIndex], img: road[0].img})
          setRoadCombined(newArray_);
  
          let newArray = [...road];
          newArray[0].x = Math.random() * 0.8 * window.innerWidth;
          newArray[0].y = Math.random() * 0.2 * window.innerWidth;
          if (roadSetIndex === 3) {
            newArray[0].img = roadSet[0];
            setRoadSetIndex(0);
            runBus(2);
          }
          else {
            newArray[0].img = roadSet[roadSetIndex+1];
            if (roadSetIndex === 2) {
              runBus(4);
            }
            else {
              runBus(2);
            }
            setRoadSetIndex(roadSetIndex+1);
          }
          setRoad(newArray);
          return;
        }
      }
    }
    else if (roadType === "combined") {
      for (var j = 0; j < road.length; j++) {
        // only adds road pieces at the end. to add throughout chain, run roadCombined[roadCombined.length-1].x in a for loop with i instead of roadCombined.length-1
        if ((Math.abs(roadCombined[roadCombined.length-1].x - road[j].x) < 50) && (Math.abs(roadCombined[roadCombined.length-1].y - road[j].y) < 46.25)) {
          let newArray_ = [...roadCombined];
          if (newArray_.length === 4) {
            newArray_.shift()
          }
          newArray_.push({x: roadCombined[roadCombined.length-1].x + roadSetAnglesXMobile[roadSetIndex], y: roadCombined[roadCombined.length-1].y + roadSetAnglesYMobile[roadSetIndex], img: road[0].img})
          setRoadCombined(newArray_);
  
          let newArray = [...road];
          newArray[0].x = Math.random() * 0.8 * window.innerWidth;
          newArray[0].y = Math.random() * 0.2 * window.innerWidth;
          if (roadSetIndex === 3) {
            newArray[0].img = roadSet[0];
            setRoadSetIndex(0);
            runBus(2);
          }
          else {
            newArray[0].img = roadSet[roadSetIndex+1];
            if (roadSetIndex === 2) {
              runBus(4);
            }
            else {
              runBus(2);
            }
            setRoadSetIndex(roadSetIndex+1);
          }
          setRoad(newArray);
          return;
        }
      }
    }
  }

  function dragCombinedRoad(e, data, index) {
    let newArray_ = [...roadCombined];
    let diffX = data.x - newArray_[index].x;
    let diffY = data.y - newArray_[index].y;
    
    for (var i = 0; i < roadCombined.length; i++) {
      newArray_[i].x = newArray_[i].x + diffX;
      newArray_[i].y = newArray_[i].y + diffY;
    }
    setRoadCombined(newArray_)
  }

  function runBus(length) {
    if (length % 4 === 0) {
      setShowMiniBus(true)
    }
    else {
      setShowMiniBus(false)
    }
  }

  return (
    <div className="container_outer">
      <div className="container">
        <div className="container_inner">
          <div className="header" onDragOver={(e)=>e.preventDefault()}>
            <img src={Logo.default} className="logo" alt="Detour Bus Logo"/>
            <div className="road" style={{display: 'none'}}>
              {road.map((key, index) => 
                <Draggable key={key.img} position={{x:key.x, y:key.y}} onDrag={(e, data)=>dragRoad(e, data, index)} onStop={(e, data)=>stopDragRoad(e, data, "single")}>
                  <div className="road_img" style={{backgroundImage: `url(${key.img})`, backgroundRepeat: "no-repeat", width: roadSetSize[roadSetIndex].x, height: roadSetSize[roadSetIndex].y}}/>
                </Draggable>)
              }
              {roadCombined.map((key, index) => 
                <Draggable disabled={true} key={key.img} position={{x:key.x, y:key.y}} onDrag={(e, data)=>dragCombinedRoad(e, data, index)} onStop={(e, data)=>stopDragRoad(e, data, "combined")}>
                  <img src={key.img} className="road_img_disabled" alt="Draggable Road Piece" style={{width: roadSetSize[index % 12].x, height: roadSetSize[index % 12].y}}/>
                </Draggable>)
              }
              <img src={MiniBus.default} className={minibusClassName} alt="MiniBus Animation" style={{display: showMiniBus ? 'block' : 'none', top: (minibusClassName==="minibus1") ? `calc(${roadCombined[0].y}px - 0px)` : (minibusClassName==="minibus2") ? `calc(${roadCombined[4].y}px - 80px)` : `calc(${roadCombined[8].y}px - 15px)`, left: (minibusClassName==="minibus1") ? roadCombined[0].x : (minibusClassName==="minibus2") ? `calc(${roadCombined[4].x}px + 30px)` : roadCombined[8].x}}/>
            </div>
            {/* <div className="road_mobile">
              {road.map((key, index) => 
                <Draggable position={{x:key.x, y:key.y}} onDrag={(e, data)=>dragRoad(e, data, index)} onStop={(e, data)=>stopDragRoadMobile(e, data, "single")}>
                  <div className="road_img" style={{backgroundImage: `url(${key.img})`, backgroundRepeat: "no-repeat"}}/>
                </Draggable>)
              }
              {roadCombined.map((key, index) => 
                <Draggable disabled={true} position={{x:key.x, y:key.y}} onDrag={(e, data)=>dragCombinedRoad(e, data, index)} onStop={(e, data)=>stopDragRoadMobile(e, data, "combined")}>
                  <img src={key.img} className="road_img_disabled" alt="Draggable Road Piece"/>
                </Draggable>)
              }
              <img src={MiniBus.default} className={minibusClassName} alt="MiniBus Animation" style={{display: showMiniBus ? 'block' : 'none', top: `calc(${roadCombined[0].y}px - 40px)`, left: roadCombined[0].x}}/>
            </div> */}
          </div>
          <div className="content">
          Snap together inconvenient road pieces to build ridiculously convoluted highways, and guide the dysfunctional Flowers family on a psychedelic road trip across post-infrastructure America!<br/><br/>
            <br/>
          </div>
            
          <div className="content_bold">
            <a className="content_bold">Arriving summer 2021 on Oculus Rift and </a>
            <a className="content_bold_link"><a href="https://store.steampowered.com/app/1342020/" target="_blank" rel="noopener noreferrer">SteamVR</a></a>
            <br/><br/>

          </div>
          {
            // Made by placeholder and friends, and published by placeholder. <br/>
            //  Please enjoy our screenshots, Twitter, and Email.
          } 
          <div className="youtube">
            <iframe 
              src="https://www.youtube.com/embed/eVtKsgXyZd0"
              title="YouTube video player" 
              frameborder="0"
              style={{borderColor: 'black'}} 
              className="youtube_embed"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
        <img src={FooterPoster.default} className="footer_poster" alt="Detour Bus Footer Poster" />
      </div>
    </div>
  );
}

export default Home;
