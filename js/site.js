$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Add year to footer dynamically using Date object
let addFooterYear = () => {
  let year = new Date().getFullYear();
  let footerYear = document.getElementById('date');
  footerYear.innerHTML = year;
}

// On load of page
window.addEventListener('load', function(e) {
    // Call date funcion
    console.log('test');
    addFooterYear();
});



