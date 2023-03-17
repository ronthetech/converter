/*
add the cylinder power to the sphere power,
change the cylinder power sign from + to –
and change the axis by 90 degrees.
*/

const sphereInput = document.getElementById("sphere");
const cylinderInput = document.getElementById("cylinder");
const axisInput = document.getElementById("axis");

const form = document.getElementById("form");

function results(event) {
  event.preventDefault();
  // console.log(event);
  // console.log(sphereInput.value);
  // console.log(cylinderInput.value);
  // console.log(axisInput.value);
  
  let sphereResult = (Number(sphereInput.value) + Number(cylinderInput.value));
  let cylinderResult = -Math.abs(cylinderInput.value);
  let axisResult = 0;
  if (Number(axisInput.value) <= 90) {
    axisResult = (Number(axisInput.value) + 90);
  } else if (Number(axisInput.value) > 90) {
    axisResult = (Number(axisInput.value) - 90);
  }
  
  console.log(sphereResult, cylinderResult, axisResult);
}

form.addEventListener("submit", results);