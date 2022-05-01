var objPeople = [
	{ // Object @ 0 index
		username: "sam",
		password: "codify"
	},
	{ // Object @ 1 index
		username: "matt",
		password: "academy"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
	}

]

(function getInfo() {
  var form = document.getElementById('login');   

  addEvent(form, 'submit', function(e) {             // При отправке формы
    e.preventDefault();                              // Останавливаем отправку
    var elements = this.elements;                    // Получаем все элементы формы
    var username = elements.username.value;          // Получаем введенное имя пользователя
    var password= elements.pwd.value;
    for(var i = 0; i < objPeople.length; i++) {
      // check is user input matches username and password of a current index of the objPeople array
      if(username == objPeople[i].username && password == objPeople[i].password) {
        document.getElementById('main').textContent = username + "is logged in!";
        location.replace('file:///B:/Programs%20for%20Work(Me)/trash/Sample/validation.html')
        // stop the function if this is found to be true
        return
      }
    }
    document.getElementById('main').textContent = "incorrect username or password";
});

}());