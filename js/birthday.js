(function () {
  var $birth = $('#birthday');                         // Поле для даты рождения
  var $parentsConsent = $('#parents-consent');         // Флажок родительского согласия
  var $consentContainer = $('#consent-container');     // Контейнер флажка

  // Создаем виджет выбора даты с помощью jQuery UI
  $birth.prop('type', 'text').data('type', 'date').datepicker({
    dateFormat: 'yy-mm-dd'
  });

  $birth.on('blur change', checkDate);                 // Поле ввода даты теряет фокус

  function checkDate() {                               // Объявляем checkDate()
    var dob = this.value.split('-');                   // Массив из даты
    // Передаем в toggleParentsConsent() дату рождения в виде объекта Date
    toggleParentsConsent(new Date(dob[0], dob[1] - 1, dob[2]));
  }

  function toggleParentsConsent(date) {                 // Объявляем функцию
    if (isNaN(date)) return;                            // Выходим, если дата некорректная
    var now = new Date();                               // Новый объект Date: сегодня
	// Если разница меньше 13 лет (мс * секунды * минуты * часы * дни * годы)
	// високосные годы не учитываются!
	// Если пользователю меньше 13, выводим флажок родительского согласия
    if ((now - date) < (1000 * 60 * 60 * 24 * 365 * 13)) { 
      $consentContainer.removeClass('hide');            // Удаляем класс hide
      $parentsConsent.focus();                          // Переводим фокус на флажок
    } else {                                            // В противном случае
      $consentContainer.addClass('hide');               // Добавляем класс hide
      $parentsConsent.prop('checked', false);           // Присваиваем checked значение false
    }
  }
}());