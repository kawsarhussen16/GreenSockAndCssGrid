import React, { useEffect } from 'react';
import './App.css';
import { TweenMax, Power3 } from 'gsap';
import Grid1 from './components/grid1.js';
import Grid2 from './components/grid2.js';
import Grid3 from './components/grid3.js';

function App() {
  useEffect(() => {
    // TweenMax.staggerFrom(
      // [".myText"],
    TweenMax.to(".circle-container",0, {css:{visibility: 'visible', background: "black"} })
    TweenMax.to(
      ".myText",
      3, {
      opacity: 3,
      y: 10,
      x: -50,
      ease: Power3.easeOut,
      delay: .1,
      rotation: 3,
      css: { fontSize: 30, background: "green", margin: 0, padding: 0, color: "pink"}
    })
  TweenMax.to(
    ".circle.blue",
    3, {
    opacity: 5,
    y: -100,
    x: 150,
    ease: Power3.easeOut,
    delay: .2,
    rotation: 30,
    css: { width: 20, height: 20, borderRadius: 5, margin: 5, padding: 5 }
  })
  TweenMax.to(
    ".circle.yellow",
    3, {
    opacity: 5,
    y: -50,
    x: 200,
    ease: Power3.easeOut,
    delay: .2,
    rotation: 30,
    css: {width: 20,height: 20, borderRadius: 5, margin: 5, padding: 5}
  })
    TweenMax.to(
      ".circle.red",
      3, {
      opacity: 5,
      y: -50,
      x: 20,
      ease: Power3.easeOut,
      delay: .2,
      css: { width: 20, height: 20, borderRadius: 5, margin: 5, padding: 5 }
    })
}, [])


return (
  <div className='App'>
    <p className="myText"> Hello Darkness, my old friends</p>
    <div className="circle-container">
      <div className="circle red"> </div>
      <div className="circle blue"> </div>
      <div className="circle yellow"> </div>
      <div className="circle red"> </div>
      <div className="circle blue"> </div>
      <div className="circle yellow"> </div>
      <div className="circle red"> </div>
      <div className="circle blue"> </div>
      <div className="circle yellow"> </div>
    </div>
    <Grid1 />
    <Grid2 />
    <Grid3 />

  </div>

);
}

export default App;

