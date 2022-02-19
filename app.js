const setImageLarge = (element) => {

  const imageDiv = document
    .getElementsByClassName(element)[0]
  
  const body = document.getElementsByTagName('body')[0]
  
  if (imageDiv.classList.contains('img-large')){
    imageDiv.classList.remove('img-large')
    imageDiv.getElementsByTagName("img")[0].classList.add("img-hover");
    body.classList.remove('blocked-body');

  } else {
    imageDiv.getElementsByTagName("img")[0].classList.remove("img-hover");
    imageDiv.classList.add("img-large");
    body.classList.add('blocked-body');
  }
}

window.addEventListener('scroll', (() => {
  const header = document.getElementsByTagName('header')[0]

  if (window.scrollY >= 10) {
    header.classList.remove("transparent");
    header.classList.add('solid')
  } else {
    header.classList.remove("solid");
    header.classList.add('transparent')
  }
}))

const pageScroll = (section) => {
  const element = document.getElementById(section)
  element.scrollIntoView(true);
}