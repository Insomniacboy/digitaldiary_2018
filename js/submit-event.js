(function(){ 
  var form = document.getElementById('login');       
  let count = 1;
  addEvent(form, 'submit', function(e) {          
    e.preventDefault();                              
    var elements = this.elements;                   
    var username = elements.username.value;          
    var passw= elements.pwd.value;
    var msg      = 'Добро пожаловать, ' + username;  
   
    document.getElementById("main").style.cssText="text-align: center;"
    //document.getElementById("main").style.fontSize = "xx-small";
    if(username=='AbcD' && passw=='qwerty'){
    document.getElementById('main').textContent = msg;
    setInterval(()=>{
    document.getElementById('main').textContent = count;
    count++;

    if(count>5) window.location.href = "main.html";
},
1000)
  }
    else {document.getElementById('main').textContent='Неверный логин или пароль'; 
    setInterval(()=>{
      count++;
  
      if(count>1) location.reload(true);
  },1000)}
  
});
  
}());