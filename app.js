const setImageLarge = (element) => {
  const imageDiv = document.getElementsByClassName(element)[0];

  const body = document.getElementsByTagName("body")[0];

  if (imageDiv.classList.contains("img-large")) {
    imageDiv.classList.remove("img-large");
    imageDiv.getElementsByTagName("img")[0].classList.add("img-hover");
    body.classList.remove("blocked-body");
  } else {
    imageDiv.getElementsByTagName("img")[0].classList.remove("img-hover");
    imageDiv.classList.add("img-large");
    body.classList.add("blocked-body");
  }
};

checkHeroSize = () => {
  if (window.innerWidth <= 768) {
    const heroImage = document.querySelector(".hero-img__mob");
    document.querySelector(
      ".hero"
    ).style.marginTop = `${heroImage.offsetHeight}px`;
  } else {
    document.querySelector(".hero").style.marginTop = 0;
  }
};

bodyLoaded = () => {
  document.querySelector(".body-loading").style.display = "none";
  document.querySelector(".body-content").style.display = "block";

  checkHeader();
  checkHeroSize();
};

checkHeader = () => {
  const header = document.querySelector('header')
  
  if (window.innerWidth <= 768) {
    header.classList.remove("transparent");
    header.classList.add("solid");
  } else {
    if (window.scrollY >= 50) {
      header.classList.remove("transparent");
      header.classList.add("solid");
    } else {
      header.classList.remove("solid");
      header.classList.add("transparent");
    }
  }
}

window.addEventListener("resize", () => {
  checkHeader();
  checkHeroSize();
});

window.addEventListener("scroll", () => {
  checkHeader();
});

let initialIndex = 1;

const scrollGallery = (direction) => {
  const content = document.querySelector(".gallery");
  const image = document.querySelector(`.item-${initialIndex}`);
  content.style.overflow = scroll;

  if (direction === "right") {
    content.scrollLeft += image.offsetWidth + 20;
  } else if (direction === "left") {
    content.scrollLeft -= image.offsetWidth + 20;
  }

  content.style.overflow = "hidden";
};

const pageScroll = (section) => {
  const element = document.getElementById(section);
  element.scrollIntoView();
};

let isMenuOpen = false;

const toggleMenu = () => {
  isMenuOpen = !isMenuOpen;

  const menu = document.querySelector(".menu");
  const burger = document.querySelector(".burger");
  const cross = document.querySelector(".cross");
  const body = document.getElementsByTagName("body")[0];

  if (isMenuOpen) {
    burger.style.display = 'none';
    cross.style.display = "block"
    menu.style.height = "300px";
    body.classList.add("blocked-menu");
  } else {
    burger.style.display = "block";
    cross.style.display = "none";
    menu.style.height = "0px";
    body.classList.remove("blocked-menu");
  }
};
