var acc = document.getElementsByClassName("accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.firstElementChild.classList.toggle('chevron--right');
    p = this.nextElementSibling.nextElementSibling;
    p.style.maxHeight?p.style.maxHeight = null:p.style.maxHeight = `${100}px`;
  });
}