import "./styles/main.scss";

window.onload = () => {
  alert("hello world");
};

const createEl = (el, msg) => {
  const element = document.createElement(el ?? "div");
  element.textContent = msg ?? "This is a new div element";
  document.body.appendChild(element);
};

window && createEl();

setTimeout(() => {
  createEl("h1", "How can help you?");
}, 100000);
