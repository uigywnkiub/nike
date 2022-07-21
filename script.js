//floating header
$(window).scroll(
  {
    previousTop: 0,
  },
  function () {
    let currentTop = $(window).scrollTop()
    if (currentTop < this.previousTop) {
      if (currentTop != 0) {
        $('.header-container').addClass('float-header animate__slideInDown')
      }
    } else {
      $('.header-container').removeClass('float-header animate__slideInDown')
    }
    this.previousTop = currentTop
  }
)

let isClick = false
//removeable heart on favorite button
$('.btn-fav').click(() => {
  if (isClick) {
    $('.btn-fav>img').attr('src', './images/icons/heart-lighter.svg')
    $('.btn-fav>img').removeClass(
      'animate__animated animate__flip animate__faster'
    )
    $('.btn-fav>img').addClass(
      'animate__animated animate__faster animate__jello'
    )
    isClick = false
  } else {
    $('.btn-fav>img').attr('src', './images/icons/heart-fill.svg')
    $('.btn-fav>img').addClass(
      'animate__animated animate__flip animate__faster'
    )
    isClick = true
  }
})

//clicable blocks on description footer
$('.description-footer__first').click(() => {
  if (isClick) {
    $('.footer-first-visible-block ').addClass('hider')
    $('.description-footer__first').css('border-bottom', '1px solid lightgrey')
    $('.description-footer__first>img').attr(
      'src',
      './images/icons/caret-down-fill.svg'
    )
    isClick = false
  } else {
    $('.footer-first-visible-block ').removeClass('hider')
    $('.description-footer__first').css('border-bottom', '0')
    $('.description-footer__first>img').attr(
      'src',
      './images/icons/caret-up-fill.svg'
    )
    isClick = true
  }
})
