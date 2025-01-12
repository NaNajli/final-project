import { events } from "./events";
import { drawCanvas } from "./canvas";


function logo() {
  const p = document.createElement("p");
  const newmesa = document.querySelector(".root").appendChild(p);
  newmesa.innerText = "API Marvel";
}

function footer() {
  let content = document.querySelector("footer");
  content.textContent = `copyright ©  ${new Date().getFullYear()}`;
}

export function app() {
  return logo(), drawCanvas()  , footer(), events();
}
