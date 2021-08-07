(function() {

  var toggleMenuButton = document.querySelector('.header__toggle-menu');
  var menu = document.querySelector('.menu');
  var toggleMenuButtonWithMouse = false;

  if (toggleMenuButton) {
    toggleMenuButton.addEventListener('click', function(event) {
      var targetHeight;
      event.preventDefault();

      if (menu.offsetHeight) {
        toggleMenuButton.classList.remove('header__toggle-menu--close');
        menu.style.height = menu.offsetHeight + 'px';
        setTimeout(function() {
          menu.style.height = '0';
        }, 0);
      } else {
        toggleMenuButton.classList.add('header__toggle-menu--close');
        menu.style.height = 'auto';
        targetHeight = menu.offsetHeight;
        menu.style.height = '0';
        setTimeout(function() {
          menu.style.height = targetHeight + 'px';
        }, 0);
      }
    });

    toggleMenuButton.addEventListener('keydown', function(event) {
      if (event.keyCode === 9) {
        toggleMenuButtonWithMouse = false;
      }
    });

    toggleMenuButton.addEventListener('mousedown', function() {
      toggleMenuButtonWithMouse = true;
    });

    toggleMenuButton.addEventListener('focus', function() {
      if (toggleMenuButtonWithMouse) {
        toggleMenuButton.classList.add('header__toggle-menu--mouse-focus');
      }
    });

    toggleMenuButton.addEventListener('blur', function() {
      toggleMenuButton.classList.remove('header__toggle-menu--mouse-focus');
    });
  }
})();

// ScrollReveal //

window.sr = ScrollReveal()
sr.reveal('.header', {
  duration: 2000,
  origin: 'top'
});
sr.reveal('.video', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});

// //Get the button
// var button__top = document.getElementById("button__top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     button__top.style.display = "block";
//   } else {
//     button__top.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20) {
    document.querySelector('.button__container').classList.add('show');
  }else{
    document.querySelector('.button__container').classList.remove('show');
  }
}

/*function topFunction() {
document.window.scrollTop = 0;
document.documentElement.scrollTop = 0;
}*/

document.querySelector('.button__container').addEventListener('click', () => {
window.screenTop({
top: 0,
behavior: 'smooth'
});
});