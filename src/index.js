import "./styles/main.scss";

window.onload = () => {
  alert("hello world");
};

const createEl = () => {
  const div = document.createElement("div");
  div.textContent = "This is a new div element";
  document.body.appendChild(div);
};

window && createEl();
