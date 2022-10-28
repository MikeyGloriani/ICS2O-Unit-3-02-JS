// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-3-02-JS/sw.js", {
    scope: "/ICS2O-Unit-3-02-JS/",
  })
}

/**
 * This function calculates area of a triangle
 */
 function calculate() {
  // input
  const length = parseFloat(document.getElementById("length").value)
  const width = parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)

  // process
  const Volume = (length * width * height)/3

  // output
  document.getElementById("volume").innerHTML = "Volume is: " + Volume + " cm²"
}

