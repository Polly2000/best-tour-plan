$(document).ready(function () {
// Инициализация первого слайдера
const hotelSlider = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button_next',
    prevEl: '.slider-button_prev',
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});


// Инициализация второго слайдера
const reviewsSlider = new Swiper('.swiper-reviews', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button_right',
    prevEl: '.slider-button_left',
  },

  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});

// Parallax
$('.newsletter').parallax({
  imageSrc: 'img/subscribe.jpg',
  speed: 0.4,
});

// Код для показа меню в мобильной версии при нажатии на кнопку
let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
  console.log('Клик по кнопке меню');
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom_visible');
});


// Код для модальных окон (код ниже на JQuery)
let modalButton = $('[data-toggle="modal"]');
let closeModalButton = $('.modal__close');
modalButton.on('click', openModal); 
closeModalButton.on('click', closeModal);

// Функция открытия модального окна
function openModal () {
  let targetModal = $(this).attr('data-href');
  $(targetModal).find('.modal__overlay').addClass('modal__overlay_visible');
  $(targetModal).find('.modal__dialog').addClass('modal__dialog_visible');
};

// Функция закрытия модального окна
// event в аругментах функции и event.preventDefault(); - чтобы не перебрасывало обратно вверх страницы после закрыти модального окна
function closeModal (event) {
  event.preventDefault();
  let modalOverlay = $('.modal__overlay');
  let modalDialog = $('.modal__dialog');
  modalOverlay.removeClass('modal__overlay_visible');
  modalDialog.removeClass('modal__dialog_visible');
};

// Закрытие модального окна при нажатии на Esc
$(document).keyup(function (e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      let modalOverlay = $('.modal__overlay');
      let modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay_visible');
      modalDialog.removeClass('modal__dialog_visible');
    }
  });

// Обработка форм
$('.form').each(function () {
  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Please specify your name",
      minlength: "The name must be at least two letters long",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    emailadress: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
      required: "Phone is required",
      minlength: "Phone must be at least 16 digits",
    },
  },
});
})

$('.test-form').each(function () {
  $(this).validate({
    errorClass: "invalid-email",
    messages: {
    emailadress: {
      required: "We need your email adress",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
      required: "Phone is required",
      minlength: 16,
    },
    }
  })
})


// Маска для номера телефона
$(document).ready(function() {
  $('.phone').mask('+7(999)999-99-99');
});

// Инициализация AOS библиотеки (анимация)
AOS.init();
});
