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
//changeable sneakers button
$('#repeatIcon').click(() => {
  if (isClick) {
    isClick = false
    $('#repeatIcon').addClass('animate__animated animate__bounceIn ')
    $('#changeImg-1').attr('src', './images/extra_sneakers/sneaker-1.webp')
    $('#changeImg-2').attr('src', './images/extra_sneakers/sneaker-2.webp')
    $('#changeImg-3').attr('src', './images/extra_sneakers/sneaker-3.webp')
    $('#changeImg-4').attr('src', './images/extra_sneakers/sneaker-4.webp')
    $('#changeImg-1, #changeImg-2, #changeImg-3, #changeImg-4').removeClass(
      'animate__animated animate__wobble'
    )
    $('#changeImg-1, #changeImg-2, #changeImg-3, #changeImg-4').addClass(
      'animate__animated animate__swing'
    )
    $('.extra-block-text')
      .addClass('animate__animated animate__bounceInRight')
      .on('animationend', () => {
        $('.extra-block-text').removeClass(
          'animate__animated animate__bounceInRight'
        )
      })
  } else {
    $('.btn-fav>img').attr('src', './images/icons/heart-fill.svg')
    $('#repeatIcon')
      .addClass('animate__animated animate__bounceIn')
      .on('animationend', () => {
        $('#repeatIcon').removeClass('animate__animated animate__bounceIn')
      })
    $('#changeImg-1').attr(
      'src',
      './images/extra_sneakers_changeable/sneaker-1.webp'
    )
    $('#changeImg-2').attr(
      'src',
      './images/extra_sneakers_changeable/sneaker-2.webp'
    )
    $('#changeImg-3').attr(
      'src',
      './images/extra_sneakers_changeable/sneaker-3.webp'
    )
    $('#changeImg-4').attr(
      'src',
      './images/extra_sneakers_changeable/sneaker-4.webp'
    )
    $('#changeImg-1, #changeImg-2, #changeImg-3, #changeImg-4').addClass(
      'animate__animated animate__wobble'
    )
    $('.extra-block-text')
      .addClass('animate__animated animate__bounceInLeft ')
      .on('animationend', () => {
        $('.extra-block-text').removeClass(
          'animate__animated animate__bounceInLeft '
        )
      })
    isClick = true
  }
})

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
