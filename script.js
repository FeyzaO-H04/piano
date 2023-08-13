const qButton = document.getElementById("q-btn")
const wButton = document.getElementById("w-btn")
const eButton = document.getElementById("e-btn")
const rButton = document.getElementById("r-btn")
const tButton = document.getElementById("t-btn")
const yButton = document.getElementById("y-btn")
const uButton = document.getElementById("u-btn")
const iButton = document.getElementById("i-btn")
const oButton = document.getElementById("o-btn")
const pButton = document.getElementById("p-btn")
const aButton = document.getElementById("a-btn")
const sButton = document.getElementById("s-btn")
const dButton = document.getElementById("d-btn")
const fButton = document.getElementById("f-btn")
const gButton = document.getElementById("g-btn")
const hButton = document.getElementById("h-btn")
const jButton = document.getElementById("j-btn")
const kButton = document.getElementById("k-btn")
const lButton = document.getElementById("l-btn")
const zButton = document.getElementById("z-btn")
const xButton = document.getElementById("x-btn")
const cButton = document.getElementById("c-btn")
const vButton = document.getElementById("v-btn")
const bButton = document.getElementById("b-btn")


qButton.addEventListener("click", playQ);
function playQ(){new Audio("sounds/do1.wav").play()}

wButton.addEventListener("click", playW);
function playW(){new Audio("sounds/fa1.wav").play()}

eButton.addEventListener("click", playE);
function playE(){new Audio("sounds/mi1.wav").play()}

rButton.addEventListener("click", playR);
function playR(){new Audio("sounds/la1.wav").play()}

tButton.addEventListener("click", playT);
function playT(){new Audio("sounds/fa2.wav").play()}

yButton.addEventListener("click", playY);
function playY(){new Audio("sounds/do2.wav").play()}

uButton.addEventListener("click", playU);
function playU(){new Audio("sounds/note1.mp3").play()}

iButton.addEventListener("click", playI);
function playI(){new Audio("sounds/do2.wav").play()}

oButton.addEventListener("click", playO);
function playO(){new Audio("sounds/note2.mp3").play()}

pButton.addEventListener("click", playP);
function playP(){new Audio("sounds/note4.mp3").play()}

aButton.addEventListener("click", playA);
function playA(){new Audio("sounds/note8.mp3").play()}

sButton.addEventListener("click", playS);
function playS(){new Audio("sounds/note1.mp3").play()}

dButton.addEventListener("click", playD);
function playD(){new Audio("sounds/do1.wav").play()}

fButton.addEventListener("click", playF);
function playF(){new Audio("sounds/fa1.wav").play()}

gButton.addEventListener("click", playG);
function playG(){new Audio("sounds/mi1.wav").play()}

hButton.addEventListener("click", playH);
function playH(){new Audio("sounds/note1.mp3").play()}

jButton.addEventListener("click", playJ);
function playJ(){new Audio("sounds/la1.wav").play()}

kButton.addEventListener("click", playK);
function playK(){new Audio("sounds/do2.wav").play()}

lButton.addEventListener("click", playL);
function playL(){new Audio("sounds/note3.mp3").play()}

zButton.addEventListener("click", playZ);
function playZ(){new Audio("sounds/fa1.wav").play()}

xButton.addEventListener("click", playX);
function playX(){new Audio("sounds/note5.mp3").play()}

cButton.addEventListener("click", playC);
function playC(){new Audio("sounds/do1.wav").play()}

vButton.addEventListener("click", playV);
function playV(){new Audio("sounds/note6.mp3").play()}

bButton.addEventListener("click", playV);
function playV(){new Audio("sounds/la2.wav").play()}



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








