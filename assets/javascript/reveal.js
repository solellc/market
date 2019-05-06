(function() {
  var countRevealedOnClick = 3
  var revealDelay = 50 // miliseconds
  var revealButtonMarkup = '<h3><a href="#">Click to See More</a></h3>'

  $('.js-reveal').forEach(function(gallery) {
    gallery = $(gallery)
    var more = $(revealButtonMarkup)
    more.insertAfter(gallery)

    gallery
      .find('li:not(.js-pick)')
      .addClass('hide')

    more.on('click', function(e) {
      e.preventDefault()
      let items = gallery
        .find('li.hide')
        .slice(0, countRevealedOnClick)

      items
        .removeClass('hide')
        .addClass('show')
        .each(function(index, item) {
          var delay = 10 + index * revealDelay
          setTimeout(function() { $(item).addClass('reveal') }, delay)
        })

      if (gallery.find('li.hide').size() < 1) {
        more.hide()
      }
    })
  })
})()
