const mousemove = document.querySelector(".circle");
window.addEventListener("mousemove", (e) => {
  mousemove.style.top = e.pageY + "px";
  mousemove.style.left = e.pageX + "px";
  mousemove.style.visibility = "visible";
});
