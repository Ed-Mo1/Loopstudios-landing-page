const navToggel = document.querySelector("#menu-btn");

navToggel.addEventListener("click", function () {
  if (document.querySelector("aside").classList.contains("-right-[100vw]")) {
    document.querySelector("aside").classList.remove("-right-[100vw]");
    document.querySelector("aside").classList.add("right-0");
    this.children[0].name = "close-outline";
  } else {
    document.querySelector("aside").classList.remove("right-0");
    document.querySelector("aside").classList.add("-right-[100vw]");
    this.children[0].name = "menu-outline";
  }
});
