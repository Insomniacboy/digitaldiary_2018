(function() {                                        // Помещаем код внутрь IIFE
  // Проверка: создаем поле ввода и смотрим, поддерживает ли оно заполнитель
  if ('placeholder' in document.createElement('input')) {
    return;
  }

  var length = document.forms.length;               // Получаем количество форм
  for (var i = 0, l = length; i < l; i++ ) {        // Перебираем каждую из них
    showPlaceholder(document.forms[i].elements);    // Вызываем showPlaceholder()
  }

  function showPlaceholder(elements) {              // Объявляем функцию
    for (var i = 0, l = elements.length; i < l; i++) { // Для каждого элемента
      var el = elements[i];                         // Сохраняем этот элемент

      if (!el.placeholder) {                        // Если нет заполнителя
        continue;                                   // Переходим к следующему элементу
      }                                             // В противном случае

      el.style.color = '#666666';                      // Делаем текст серым
      el.value = el.placeholder;                    // Добавляем текст заполнителя

      addEvent(el, 'focus', function () {           // Если он получаем фокус
        if (this.value === this.placeholder) {      // Если value=placeholder 
          this.value = '';                          // Очищаем поле ввода
          this.style.color = '#000000';                // Делаем текст черным
        }
      });

      addEvent(el, 'blur', function () {            // При событии blur
        if (this.value === '') {                    // Если поле ввода пустое
          this.value = this.placeholder;            // присваиваем ему заполнитель
          this.style.color = '#666666';             // Делаем цвет серым
        }
      }); 
    }                                                // Конец цикла
  }                                                  // Конец showPlaceholder()
}());