function check(form) {
  if(form.userid.value == "id") {
      alert("correct username")
  } else if (form.userid.value == "") {
      alert ("blank username")
  } else if(form.pswrd.value == "123") {
      alert("correct details")
  } else if(form.pswrd.value == "") {
      alert ("blank password")
  }
}