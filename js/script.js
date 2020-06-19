
function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();


$(document).ready(function () {
   $('.all-blocks').on('click', function () {
      $('.table__row_hidden').toggle();
   });
});

$(document).ready(function () {
   $('.slider').slick({
      arrows: false,            //стрелки
      dots: true,              //точки переключения слайдов
      adaptiveHeight: true,   //автоизменение высоты при разной высоте изображений (для .slick-track                           // ставим align-items:flex-start;) 
      slidesToShow: 1,         //количество слайдов отображаемое за 1 раз на экране
      slidesToScroll: 1,       //количество слайдов пролистываемых за 1 нажатие
      speed: 1100,             //скорость пролистывания слайдов
      easing: 'linear',         //тип анимации прокрутки
      infinite: true,           //бесконечность пролистывания слайдов
      initialSlide: 0,          //стартовый слайд
      autoplay: true,           //автопроигрывание слайдов (по умолч false)
      autoplaySpeed: 3000,      //скорость прои автопроигрывании
      pauseOnFocus: true,      //паузы при наведении и фокусе
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: true,         //отвечает за перетаскивание мышью слайдов на пк
      swipe: true,             //свайп слайдов на телефонах
      touchThreshold: 5,       //расстояния, которое нужно протянуть свайпом для переключения на след                              //слайд
      touchMove: true,         //отключает возможность тянуть фото при свайпе. но свайп работать будет
      waitForAnimate: true,  //если отключить, можно быстро прокручивать слайды не ожидая конца анимации
      centerMode: false,      //фокусируется на центральном слайде и дает ему класс .slick-center.                              //Используется если нужно затемнить боковые с					cлайды и выделить центральный  (По умолч false)
      variableWidth: false,    // отобразит все слайды в ряд на экране скрывая края
      rows: 1,                  //количество рядов в сладере
      slidesPerRow: 1,          //слайды в ряду
      vertical: false,             //вертикальный слайдер (при использовании отключаем flex) и в slider__item указать высоту
      verticalSwiping: false,      //вертикальный свайп при вертикальном слайдере
      //привязка сладеров друг к другу
      response: [                      //изменение настроек при маленьких экранах
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2
            }
         }
      ]

      //        appendArrows:$('.content')    // можно вытащить стрелки или точки из стандартного класса и закинуть их в                          свой созданный
      //        appendDots:$('.content')


   });
})





