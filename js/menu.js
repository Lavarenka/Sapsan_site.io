// Функциональность бургер-меню

document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.getElementById('burgerMenuBtn');
  const menuWrapper = document.querySelector('.head__top_wrapper');

  if (burgerBtn && menuWrapper) {
    // Переключение меню при клике на бургер-кнопку
    burgerBtn.addEventListener('click', function() {
      burgerBtn.classList.toggle('active');
      menuWrapper.classList.toggle('active');
      
      // Блокировка прокрутки body при открытом меню
      if (menuWrapper.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Закрытие меню при клике на ссылку
    const menuLinks = menuWrapper.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        burgerBtn.classList.remove('active');
        menuWrapper.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Закрытие меню при клике вне меню (на overlay)
    menuWrapper.addEventListener('click', function(e) {
      if (e.target === menuWrapper) {
        burgerBtn.classList.remove('active');
        menuWrapper.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Закрытие меню при изменении размера окна (если перешли на десктоп)
    window.addEventListener('resize', function() {
      if (window.innerWidth > 992) {
        burgerBtn.classList.remove('active');
        menuWrapper.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});

