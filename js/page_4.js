function myFunction(x){
    x.classList.toggle("change")
  }
  document.querySelector(".nav-button").addEventListener
  ("click", function() {
    document.querySelector(".nav-items").classList.toggle("hide-show")
  })
  ///s
  function copyEmailToClipboard() {
    const email = 'example@example.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email скопійовано в буфер обміну: ' + email);
    }).catch(err => {
        console.error('Не вдалося скопіювати: ', err);
    });
  }
  
  function copyPhoneToClipboard() {
    const phone = '+1234567890';
    navigator.clipboard.writeText(phone).then(() => {
        alert('Телефон скопійовано в буфер обміну: ' + phone);
    }).catch(err => {
        console.error('Не вдалося скопіювати: ', err);
    });
  }
  