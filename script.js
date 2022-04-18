/*
If you want to know how this game was made, check out this video, that explains how it's made: 
https://youtu.be/eue3UdFvwPo
Follow me on twitter for more: https://twitter.com/HunorBorbely
*/
// Extend the base functionality of JavaScript
Array.prototype.last = function () {
  return this[this.length - 1];
};
// A sinus function that acceps degrees instead of radians
Math.sinus = function (degree) {
  return Math.sin((degree / 180) * Math.PI);
};
