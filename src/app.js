function adventure() {
  let name = prompt("What is your name?");
  let family = prompt("Have you been on an adventure in Middle Earth?");
  if (family.length <= 2) {
    alert("Let's go on an adventure!");
  } else {
    alert(name + ", Enjoy adventures with those you love!");
  }
}
let traditionButton = document.querySelector("Button");
traditionButton.addEventListener("click", adventure);
