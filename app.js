"use strict";
const best = document.querySelector("#best");
const average = document.querySelector("#average");
const worst = document.querySelector("#worst");
const memory = document.querySelector("#memory");   
const start = async () => {
  let algoValue = Number(document.querySelector(".algo-menu").value);
  let speedValue = Number(document.querySelector(".speed-menu").value);
  if (speedValue === 0) {
    speedValue = 1;
  }
  if (algoValue === 0) {
    alert("No Algorithm Selected");
    return;
  }

  let algorithm = new sortAlgorithms(speedValue);
  if (algoValue === 1){
    best.textContent = "O(n)";
    average.textContent = "O(n²)";
    worst.textContent = "O(n²)";
    memory.textContent = "O(1)";
    await algorithm.BubbleSort();
  }
  if (algoValue === 2){
    best.textContent = "O(n²)";
    average.textContent = "O(n²)";
    worst.textContent = "O(n²)";
    memory.textContent = "O(1)";
    await algorithm.SelectionSort();
  }
  if (algoValue === 3){
    best.textContent = "O(n)";
    average.textContent = "O(n²)";
    worst.textContent = "O(n²)";
    memory.textContent = "O(1)";
    await algorithm.InsertionSort();
  }
  if (algoValue === 4){
    best.textContent = "O(nlog(n))";
    average.textContent = "O(nlog(n))";
    worst.textContent = "O(nlog(n))";
    memory.textContent = "O(n)";
    await algorithm.MergeSort();
  }
  if (algoValue === 5){
    best.textContent = "O(nlog(n))";
    average.textContent = "O(nlog(n))";
    worst.textContent = "O(n²)";
    memory.textContent = "O(n)";
    await algorithm.QuickSort();
  }
};

const RenderScreen = async () => {
  let algoValue = Number(document.querySelector(".algo-menu").value);
  best.textContent = "NA";
  average.textContent = "NA";
  worst.textContent = "NA";
  memory.textContent = "NA";
  await RenderList();
};

const RenderList = async () => {
  let sizeValue = Number(document.querySelector(".size-menu").value);
  await clearScreen();

  let list = await randomList(sizeValue);
  const arrayNode = document.querySelector(".array");
  console.log(arrayNode);
  console.log(list);
  for (const element of list) {
    const node = document.createElement("div");
    node.className = "cell";
    node.setAttribute("value", String(element));
    node.style.height = `${3.8 * element}px`;
    arrayNode.appendChild(node);
  }
};

const RenderArray = async (sorted) => {
  let sizeValue = Number(document.querySelector(".size-menu").value);
  await clearScreen();

  let list = await randomList(sizeValue);
  if (sorted) list.sort((a, b) => a - b);

  const arrayNode = document.querySelector(".array");
  const divnode = document.createElement("div");
  divnode.className = "s-array";

  for (const element of list) {
    const dnode = document.createElement("div");
    dnode.className = "s-cell";
    dnode.innerText = element;
    divnode.appendChild(dnode);
  }
  arrayNode.appendChild(divnode);
};

const randomList = async (Length) => {
  let list = new Array();
  let lowerBound = 1;
  let upperBound = 100;

  for (let counter = 0; counter < Length; ++counter) {
    let randomNumber = Math.floor(
      Math.random() * (upperBound - lowerBound + 1) + lowerBound
    );
    list.push(parseInt(randomNumber));
  }
  return list;
};

const clearScreen = async () => {
  document.querySelector(".array").innerHTML = "";
};

const response = () => {
  let Navbar = document.querySelector(".navbar");
  if (Navbar.className === "navbar") {
    Navbar.className += " responsive";
  } else {
    Navbar.className = "navbar";
  }
};
document.querySelector(".icon").addEventListener("click", response);
document.querySelector(".start").addEventListener("click", start);
document.querySelector(".size-menu").addEventListener("change", RenderScreen);
document.querySelector(".algo-menu").addEventListener("change", RenderScreen);
window.onload = RenderScreen;
