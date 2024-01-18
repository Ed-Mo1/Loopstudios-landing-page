const navToggel = document.querySelector("#menu-btn");

navToggel.addEventListener("click", function () {
  if (document.querySelector("aside").classList.contains("-right-full")) {
    document.querySelector("aside").classList.remove("-right-full");
    document.querySelector("aside").classList.add("right-0");
    document.querySelector('body').style.overflow='hidden'
    this.children[0].name = "close-outline";
  } else {
    document.querySelector("aside").classList.remove("right-0");
    document.querySelector("aside").classList.add("-right-full");
    document.body.classList.remove("overflow-hidden",'h-screen');
    document.querySelector('body').style.overflow='unset'

    this.children[0].name = "menu-outline";
  }
});
