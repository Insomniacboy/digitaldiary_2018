(function () {
  var password = document.getElementById('password'); // Сохраняем поля для ввода паролей
  var passwordConfirm = document.getElementById('conf-password');
 
  function setErrorHighlighter(e) {
    var target = e.target || e.srcElement;             // Получаем целевой элемент
    if (target.value.length < 8) {                     // Если его длина < 8
      target.className = 'fail';                       // Присваиваем class значение fail
    } else {                                           // В противном случае
      target.className = 'pass';                       // Присваиваем class значение pass
    }
  }

  function removeErrorHighlighter(e) {
    var target = e.target || e.srcElement;              // Получаем целевой элемент
    if (target.className === 'fail') {                  // Присваиваем class значение fail
      target.className = '';                            // Очищаем class
    }
  }

  function passwordsMatch(e) {
    var target = e.target || e.srcElement;               // Получаем целевой элемент
    // Если значение совпадает с паролем содержит не меньше 8 символов
    if ((password.value === target.value) && target.value.length >= 8) { 
      target.className = 'pass';                         // Присваиваем class значение pass
    } else {                                             // В противном случае
      target.className = 'fail';                         // Присваиваем class значение fail
    }
  }

  addEvent(password, 'focus', removeErrorHighlighter); 
  addEvent(password, 'blur', setErrorHighlighter);
  addEvent(passwordConfirm, 'focus', removeErrorHighlighter);
  addEvent(passwordConfirm, 'blur', passwordsMatch);
}());