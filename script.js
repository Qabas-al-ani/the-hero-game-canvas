/*
If you want to know how this game was made, check out this video, that explains how it's made: 
https://youtu.be/eue3UdFvwPo
Follow me on twitter for more: https://twitter.com/HunorBorbely
*/
// Extend the base functionality of JavaScript
Array.prototype.last = function () {
  return this[this.length - 1];
};
// A sinus function that accepts degrees instead of radians
Math.sinus = function (degree) {
  return Math.sin((degree / 180) * Math.PI);
};
// Game data
let phase = "waiting"; // waiting | stretching | turning | walking | transitioning | falling
let lastTimestamp; // The timestamp of the previous requestAnimationFrame cycle

let heroX; // Changes when moving forward
let heroY; // Only changes when falling
let sceneOffset; // Moves the whole game

let platforms = [];
let sticks = [];
let trees = [];
