import ADOFAI from "./ADOFAI-WebModule.js"; // import ADOFAI

const ready = () => {
  window.adofai = ADOFAI;
  var m = new ADOFAI(); // create a level instance.

  // m = ADOFAI.Import(``); // you can also import from a string

  let arr = []; // this will be MapEvent[]

  m.actions.forEach((a) => {
    if (["SetSpeed", "Twirl"].includes(a.eventType)) {
      arr.push(a); // push a action
    }
  });
  m.actions = arr; // set action to arr so you only have setspeed and twirl events

  return console.log(m.Export()); // console.log the output
};

if (
  document.readyState == "complete" ||
  (document.readyState != "loading" && !document.documentElement.doScroll)
)
  ready();
else document.addEventListener("DOMContentLoaded", ready);
