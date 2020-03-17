 /*jshint esversion: 6 */

var app = new Vue({
    el: '#app',
    data: {

    },
    methods: {

    }
});

// THIS SECTION NEEDED TO REGISTER SERVICE WORKER //
window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
                 .register('./sw.js');
    }
};


// functions for the SVG circle
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
  
  function setStop(id, radius, stop){
      var c = document.getElementById(id);
      c.className = "background";
      var stopVal = Math.PI * radius * 2 * (stop/10);
      c.setAttribute("stroke-dasharray", stopVal + ", 3000");
      c.setAttribute("stroke-dashoffset", stopVal);
      c.className = "overlayLine";
  }
  
  function randomStops(){
      setStop("line1", 20, getRandomIntInclusive(1, 10));
      setStop("line2", 30, getRandomIntInclusive(1, 10));
      setStop("line3", 40, getRandomIntInclusive(1, 10));
      setStop("line4", 50, getRandomIntInclusive(1, 10));
  }
  