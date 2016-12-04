jQuery(document).ready(function() {

  $('input[placeholder], textarea[placeholder]').placeholder();

  // select style
  $('select').styler();

  function isDesktop() {
    return window.matchMedia('(max-width: 1024px)').matches
  }

  function isTablet() {
    return window.matchMedia('(max-width: 767px)').matches
  }

  function isMobile() {
    return window.matchMedia('(max-width: 480px)').matches
  }

  $('.js-form-toggle').click(function () {
    $('.hidden-panel .search-form').slideToggle()
  });


  $('.js-drowdown-toggle').click(function (e) {
    if ( isDesktop() ) {
      $(this).toggleClass('drowdown-btn-toggle--open');
      $('.drowdown-menu').toggleClass('drowdown-menu--open');
      e.preventDefault();
    }
    if ( isTablet() ) {
      $('.mobile-dark-wrap').toggleClass('open');
    }
  });

  $('.drowdown-menu li').click(function () {
    if ( isTablet() ) {
      $(this).find('.caret-left').toggleClass('open');
      $(this).find('.submenu').toggleClass('open');
    }
    
  });

  $('.js-btn-menu-toggle').click(function () {
    $(this).toggleClass('open')
    $('.right-menu').toggleClass('open')
    $('.buttons-list').toggleClass('buttons-list--open')
  });

  $('.js-submenu-toggle').click(function () {
    $(this).toggleClass('open')
    $('.toggle-btn').toggleClass('open')
    $('.hidden-menu-item').toggleClass('open')
  });

  $('.menu-toggle').click(function () {
    $('.hidden-main-menu').toggleClass('open');
    $('.mobile-dark-wrap').addClass('open')
  });

  $('.mobile-dark-wrap').click(function () {
    $(this).toggleClass('open');
    $('.hidden-main-menu').removeClass('open');
    $('.drowdown-menu ').removeClass('drowdown-menu--open');
    $('.drowdown-btn-toggle').removeClass('drowdown-btn-toggle--open');

  });

  $('.js-filter-toggle').click(function () {
    $('.filter-form').toggleClass('open')
  })

  $('.toggle-text-btn').click(function () {
    $('.toggle-text').toggleClass('open')
    $(this).toggleClass('open')
  })

  $('.js-toggle-form').click(function () {
    console.log("this");
    $('.submission-form').slideToggle()
  })

  $('.banner-slider').flexslider({
    animation: "slide"
  });

  $('.tablet-menu').click(function () {
    $(this).find('.js-footer-menu').toggleClass('hidden')
    $(this).find('.toggle-btn').toggleClass('active')
  })


  $('.btn-responsive').click(function () {
    $(this).toggleClass('open');
  })

  $('.js-show-filter').click(function () {
    $(this).next().slideToggle();
    $(this).children().toggleClass('open')
  });

  $('.js-show-filter .plus').click(function () {
    $(this).parent().parent().next().slideToggle()
  });


  $('.js-fast-filter-toggle').click(function () {
    $('.links-list').toggleClass('open')
  })

  //fancybox

  $(".various").fancybox({
    maxWidth  : 620,
    maxHeight : 600,
    fitToView : true,
    width   : '100%',
    height    : '70%',
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'fade',
    closeEffect : 'fade'
  });

  $(".fancybox").fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    margin: 0,
    padding: 0
  });

  // owl carousel
  $('.main-carousel').owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      dots: true,
      responsive:{
          0:{
              items:1,
              dots: false
          },
          480:{
              items:2
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  });

  $('.product-carousel').owlCarousel({
      loop: true,
      margin: 1,
      nav: true,
      responsive:{
          0:{
            items:1,
            dots: false
          },
          480:{
            items:2
          },
          768:{
            items:3
          },
          1024:{
            items:4
          },
          1300:{
            items:5
          }
      }
  });

  

  // tabs

  $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })

  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 80,
    itemMargin: 12,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });


  // PLUS MINUS

  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $('.plus').click(function () {
     var $input = $(this).parent().find('input');
     $input.val(parseInt($input.val()) + 1);
     $input.change();
     return false;
   });


  //slider 1 ??????????????????????
  var sliderPriceOne = document.getElementById('sliderPriceOne');
  var oneinput0 = document.getElementById('input-with-sliderPriceOne-0');
  var oneinput1 = document.getElementById('input-with-sliderPriceOne-1');
  var oneinputs = [oneinput0, oneinput1];

  noUiSlider.create(sliderPriceOne, {
    start: [10000, 25000],
    connect: true,
    step: 500,
    behaviour: 'tap',
    range: {
      'min': 3000,
      'max': 35000
    }
  });

  sliderPriceOne.noUiSlider.on('update', function( values, handle ) {
    oneinputs[handle].value = Math.round(values[handle]);
  });

  function setSliderHandle(i, value) {
    var r = [null,null];
    r[i] = value;
    sliderPriceOne.noUiSlider.set(r);
  }

  // Listen to keydown events on the input field.
  oneinputs.forEach(function(input, handle) {
    input.addEventListener('change', function(){
      setSliderHandle(handle, this.value);
    });
  });

  //slider 2 ??????????????????????
  var sliderPriceTwo = document.getElementById('sliderPriceTwo');
  var twoinput0 = document.getElementById('input-with-sliderPriceTwo-0');
  var twoinput1 = document.getElementById('input-with-sliderPriceTwo-1');
  var twoinputs = [twoinput0, twoinput1];

  noUiSlider.create(sliderPriceTwo, {
    start: [10000, 25000],
    connect: true,
    step: 500,
    behaviour: 'tap',
    range: {
      'min': 3000,
      'max': 35000
    }
  });

  sliderPriceTwo.noUiSlider.on('update', function( values, handle ) {
    twoinputs[handle].value = Math.round(values[handle]);
  });

  function setSliderHandle(i, value) {
    var r = [null,null];
    r[i] = value;
    sliderPriceTwo.noUiSlider.set(r);
  }

  // Listen to keydown events on the input field.
  twoinputs.forEach(function(input, handle) {
    input.addEventListener('change', function(){
      setSliderHandle(handle, this.value);
    });
  });

  //slider 3 ??????????????????????
  var sliderPriceThree = document.getElementById('sliderPriceThree');
  var threeinput0 = document.getElementById('input-with-sliderPriceThree-0');
  var threeinput1 = document.getElementById('input-with-sliderPriceThree-1');
  var threeinputs = [threeinput0, threeinput1];

  noUiSlider.create(sliderPriceThree, {
    start: [10000, 25000],
    connect: true,
    step: 500,
    behaviour: 'tap',
    range: {
      'min': 3000,
      'max': 35000
    }
  });

  sliderPriceThree.noUiSlider.on('update', function( values, handle ) {
    threeinputs[handle].value = Math.round(values[handle]);
  });

  function setSliderHandle(i, value) {
    var r = [null,null];
    r[i] = value;
    sliderPriceThree.noUiSlider.set(r);
  }

  // Listen to keydown events on the input field.
  threeinputs.forEach(function(input, handle) {
    input.addEventListener('change', function(){
      setSliderHandle(handle, this.value);
    });
  });


});//end ready

//Plugin placeholder
(function(b,f,i){function l(){b(this).find(c).each(j)}function m(a){for(var a=a.attributes,b={},c=/^jQuery\d+/,e=0;e<a.length;e++)if(a[e].specified&&!c.test(a[e].name))b[a[e].name]=a[e].value;return b}function j(){var a=b(this),d;a.is(":password")||(a.data("password")?(d=a.next().show().focus(),b("label[for="+a.attr("id")+"]").attr("for",d.attr("id")),a.remove()):a.realVal()==a.attr("placeholder")&&(a.val(""),a.removeClass("placeholder")))}function k(){var a=b(this),d,c;placeholder=a.attr("placeholder");
b.trim(a.val()).length>0||(a.is(":password")?(c=a.attr("id")+"-clone",d=b("<input/>").attr(b.extend(m(this),{type:"text",value:placeholder,"data-password":1,id:c})).addClass("placeholder"),a.before(d).hide(),b("label[for="+a.attr("id")+"]").attr("for",c)):(a.val(placeholder),a.addClass("placeholder")))}var g="placeholder"in f.createElement("input"),h="placeholder"in f.createElement("textarea"),c=":input[placeholder]";b.placeholder={input:g,textarea:h};!i&&g&&h?b.fn.placeholder=function(){}:(!i&&g&&
!h&&(c="textarea[placeholder]"),b.fn.realVal=b.fn.val,b.fn.val=function(){var a=b(this),d;if(arguments.length>0)return a.realVal.apply(this,arguments);d=a.realVal();a=a.attr("placeholder");return d==a?"":d},b.fn.placeholder=function(){this.filter(c).each(k);return this},b(function(a){var b=a(f);b.on("submit","form",l);b.on("focus",c,j);b.on("blur",c,k);a(c).placeholder()}))})(jQuery,document,window.debug);