function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
  let openStateStr = element.getAttribute("aria-expanded");
  let openStateBool = openStateStr == "true";
  element.setAttribute("aria-expanded", `${!openStateBool}`);
}

const section1 = document.getElementById("section1");
section1.addEventListener("click", toggle);
