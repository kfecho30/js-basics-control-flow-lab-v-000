// Write your code in this file!
function scuberGreetingForFeet(dist) {
  let msg
  if (dist <= 400) {
    msg = "This one is on me!";
  } else if (dist < 2500) {
    msg = "I will gladly take your thirty bucks.";
  } else {
    msg = "No can do."
  }
  return msg
}

function ternaryCheckCity(city) {
  let msg = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return msg
}
