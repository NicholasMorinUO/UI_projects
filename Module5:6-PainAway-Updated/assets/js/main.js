

/**
* Template Name: Medilab - v4.3.0
* Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Gallery Lightbox
   */
  const galelryLightbox = GLightbox({
    selector: '.galelry-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

})()

function ValidateEmail(email)
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function phonenumber(a)
{
  telInteger = parseInt(a.replace(/[^0-9]/g,''));
  //var filter = /^(\([-+]?[0-9]+)\)$/;

  var n = telInteger.toString();
  //alert(n);
  if (1000000000<telInteger && telInteger<9999999999) {
      return true;
  }
  else {
      alert("You have entered an invalid phone number!")
      return false;
  }
}

function creditcard(a)
{
  telInteger = parseInt(a.replace(/[^0-9]/g,''));
  //var filter = /^(\([-+]?[0-9]+)\)$/;

  var n = telInteger.toString();
  //alert(n);
  if (1000000000000000<telInteger && telInteger<9999999999999999) {
      return true;
  }
  else {
      alert("You have entered an invalid credit card number!")
      return false;
  }
}

function nameValid(a)
{
  //alert(a);
  if (a!=null && a!="") {
      return true;
  }
  else {
      alert("You have entered an invalid name!")
      return false;
  }
}

function dateValid(a)
{
  //alert(a);
  if (a!=null && a!="") {
      return true;
  }
  else {
      alert("You have entered an invalid date!")
      return false;
  }
}

function timeValid(a)
{
  if (a!=null && a!="") {
      return true;
  }
  else {
      alert("You have entered an invalid time!")
      return false;
  }
}

function serviceValid(a)
{
  if (a!=null && a!="") {
      return true;
  }
  else {
      alert("You have entered an invalid service!")
      return false;
  }
}
function doctorValid(a)
{
  if (a!=null && a!="") {
      return true;
  }
  else {
      alert("You have entered an invalid doctor!")
      return false;
  }
}
function receiveAndClear(){
  var name="Jojo";
  var email="yoyo@yahoo.com";
  var number="123-898-1215";
  var date="05/03/2021";
  var time="1:00pm";
  var service="Massage";
  var doctor="Walter White";
  var creditCard="1234123412341234";
  var truth = true;

  name = document.getElementById("name").value;
  truth = truth && nameValid(name);
  email= document.getElementById("email").value;
  truth = truth && ValidateEmail(email);
  number= document.getElementById("phone").value;
  truth = truth && phonenumber(number);
  number = number.replace(/[^0-9]/g,'');
  date= document.getElementById("date").value;
  truth = truth && dateValid(date);
  time= document.getElementById("time").value;
  truth = truth && timeValid(time);
  service= document.getElementById("department").value;
  truth = truth && serviceValid(service);
  doctor= document.getElementById("doctor").value;
  truth = truth && doctorValid(doctor);
  creditCard= document.getElementById("creditCard").value;
  truth = truth && creditcard(creditCard);
  //$('myform')[0].reset();


  if (truth){
    alert("Hello "+name+", your "+service+" appointment with "+doctor+
    " has been booked for "+date+' at '+time+', we will contact you at '
    +email+' or '+number+' very soon');

    document.getElementById('myform').reset();
  }


  //
  // alert('Hello '+name+', your '+service+' appointment with '+doctor+' has been
  // booked for '+date+' at '+time+', we will contact you at '+email+' or '
  // +number+' very soon');
}
