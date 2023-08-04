window.addEventListener("keydown", (e) => {

 const sounds = {
  q: "sounds/do1.wav",
  w: "sounds/fa1.wav",
  e: "sounds/mi1.wav",
  r: "sounds/la1.wav",
  t: "sounds/fa2.wav",
  y: "sounds/do2.wav",
  u: "sounds/note1.mp3",
  i: "sounds/do2.wav",
  o: "sounds/note2.mp3",
  a: "sounds/note4.mp3",
  p: "sounds/note8.mp3",
  s: "sounds/note1.mp3",
  d: "sounds/do1.wav",
  f: "sounds/fa1.wav",
  g: "sounds/mi1.wav",
  h: "sounds/note1.mp3",
  j: "sounds/la1.wav",
  k: "sounds/do2.wav",
  l: "sounds/note3.mp3",
  z: "sounds/fa1.wav",
  x: "sounds/note5.mp3",
  c: "sounds/do1.wav",
  v: "sounds/note6.mp3",
  b: "sounds/la2.wav"
 }

 let pianoAudio = new Audio (sounds[e.key])
 pianoAudio.play()
});





/************************************************************************
 


 Jeg har prøvd å lage alt på JavaScript, det er ikke ferdig ennå.
 
// main

const main = document.createElement("div");
main.classList.add("main");
main.style.display = "flex";
main.style.alignItems = "center";
main.style.justifyContent = "center";
main.style.height = "100vh";
main.style.width = "100%";
main.style.opacity = "0.85";
main.style.background = "linear-gradient(rgb(36, 36, 36),rgb(114, 114, 114))";
// Appending main
document.body.append(main);

// container
const container = document.createElement("div");
container.classList.add("container");
container.style.width = "60%";
container.style.minWidth = "1132px";
container.style.height = "430px";
container.style.backgroundImage = "url('piano-image.png')";
container.style.backgroundRepeat = "noRepeat";
container.style.backgroundSize = "cover";
container.style.backgroundPosition = "center";
container.style.position = "relative";
container.style.opacity = "0.8";
container.style.borderRadius = "8px";
// Appending container
main.append(container);

// q-button
const qButton = document.createElement("button");
qButton.textContent = "Q"
// Appending q-button
container.append(qButton);

const buttons = [
  {
    buttonName : "Q",
  }
  
]

********************************************************************/





