(function(){ 
    var form = document.getElementById('login');       // Получаем элемент form
    addEvent(form, 'submit', function(e) {             // При отправке формы
      e.preventDefault();                              // Останавливаем отправку
      var elements = this.elements;                    // Получаем все элементы формы
      var username = elements.name.value;          // Получаем введенное имя пользователя
      var msg      = 'Добро пожаловать, ' + username + '. ' + 'На вашу почту придёт сообщение(по крайней мере должно) с данными для авторизации.';  // Создаем приветствие
      document.getElementById('main').textContent = msg; // Выводим приветствие
      document.getElementById('substitute').textContent="Вернуться на страницу авторизации?"+txt.link("input-type.html");
      //if(username=='Ron' && passw=='qwerty'){
      //document.getElementById('main').textContent = msg; // Выводим приветствие
      //}
      //else if(username == 0 || passw==0)
      //{document.getElementById('main').textContent = 'Error';
    //}
      //else {document.getElementById('main').textContent='Error';}
    //
  });
    
  }());