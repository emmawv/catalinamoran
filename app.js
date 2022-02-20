const setImageLarge = (element) => {

  const imageDiv = document
    .getElementsByClassName(element)[0]
  
  const body = document.getElementsByTagName('body')[0]
  
  if (imageDiv.classList.contains('img-large')) {
    imageDiv.classList.remove('img-large')
    imageDiv.getElementsByTagName("img")[0].classList.add("img-hover");
    body.classList.remove('blocked-body');

  } else {
    imageDiv.getElementsByTagName("img")[0].classList.remove("img-hover");
    imageDiv.classList.add("img-large");
    body.classList.add('blocked-body');
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
}

bodyLoaded = () => {
  document.querySelector('.body-loading').style.display = "none";
  document.querySelector('.body-content').style.display = "block";

  checkHeroSize()
}

window.addEventListener('resize', (() => {
  checkHeroSize();
}))

window.addEventListener('scroll', (() => {
  const header = document.getElementsByTagName('header')[0]

  if (window.innerWidth <= 768) {
    if (window.scrollY >= document.querySelector(".hero-img__mob").offsetHeight - 75) {
      header.classList.remove("transparent");
      header.classList.add("solid");
    } else {
      header.classList.remove("solid");
      header.classList.add("transparent");
    }

    checkHeroSize();
    
  } else {
    if (window.scrollY >= 50) {
      header.classList.remove("transparent");
      header.classList.add("solid");
    } else {
      header.classList.remove("solid");
      header.classList.add("transparent");
    }
  }
}))

let initialIndex = 1;

const scrollGallery = (direction) => {
  const content = document.querySelector('.gallery__mob')
  const image = document.querySelector(`.item-${initialIndex}__mob`);
  content.style.overflow = scroll;
  if (direction === 'right') {
    content.scrollLeft += image.offsetWidth + 20;
  } else if (direction === 'left') {
    content.scrollLeft -= image.offsetWidth + 20;
  }
  
  content.style.overflow = 'hidden';
}

const pageScroll = (section) => {
  const element = document.getElementById(section)
  element.scrollIntoView();
}