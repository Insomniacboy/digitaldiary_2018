(function () {
  var bio = $('#bio');
  var bioCounter = $('#bio-count');

  // Отображаем счетчик, когда поле в фокусе, и обновляем класс
  // Указываем количество оставшихся символов
  bio.on('focus', updateCounter);
  bio.on('keyup', updateCounter);

  // Когда элемент textarea оказывается вне фокуса, скрываем счетчик,
  // оставляя количество символов
  bio.on('blur', function () {
    if (bioCounter.text() >= 0) {
      bioCounter.addClass('hide');
    }
  });


  function updateCounter(e) {
    var count = 140 - bio.val().length;
    var status = '';
    if (count < 0) {
      status = 'error';
    } else if (count <= 15) {
      status = 'warn';
    } else {
      status = 'good';
    }

    // Удаляем предыдущие классы
    bioCounter.removeClass('error warn good hide');
    // Добавляем новые классы
    bioCounter.addClass(status);
    bioCounter.text(count);
  }

}());