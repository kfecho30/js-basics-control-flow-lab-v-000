// Write your code in this file!
function scuberGreetingForFeet(dist) {
  let msg
  if (dist <= 400) {
    msg = "This one is one me!";
  } else if (dist < 2500) {
    msg = "You owe $30.";
  } else {
    msg = "Sorry, we don't go that far."
  }
  return msg
}
