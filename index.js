const navToggel = document.querySelector("#menu-btn");

navToggel.addEventListener("click", function () {
  if (document.querySelector("aside").classList.contains("-top-full")) {
    document.querySelector("aside").classList.remove("-top-full");
    document.querySelector("aside").classList.add("top-0");
    this.children[0].name = "close-outline";
  } else {
    document.querySelector("aside").classList.remove("top-0");
    document.querySelector("aside").classList.add("-top-full");
    this.children[0].name = "menu-outline";
  }
});
