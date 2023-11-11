document.addEventListener("DOMContentLoaded", function () {
  window.location.href= '#';
  const overlay = document.getElementById("overlay");
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const box = document.getElementById("box");
  const form =  document.getElementById("form");
  const send = document.getElementById("send");
  const successMessage = document.getElementById("successMessage");
  const dataFromForm = {
  };
  close.addEventListener("click", function(event) { 
    history.back();
  })
  open.addEventListener("click", function(event) { 
    history.pushState({ page: "popup1" }, "Форма", "#popup1"); 
  })
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const dataFromForm = {
      name: document.getElementById("fio").value,
      email: document.getElementById("mail").value,
      phone: document.getElementById("phone").value,
      organization: document.getElementById("org").value,
      message: document.getElementById("text").value,
      agree: document.getElementById("agree").checked,
  };
    var slapform = new Slapform();
    slapform.submit({
        form: 'Yesuhuwqb',
        data: dataFromForm,
    })
        .then(function (response) {

            console.log('Success', response)
        })
        .catch(function (e) {
            alert("Ошибка при отправке формы, перезагрузите страницу");
            console.error('Fail', e);
        })
        
  localStorage.setItem("dataFromForm", JSON.stringify(dataFromForm));
  setTimeout(function () {
    history.back();
    successMessage.style.display = "block";
    box.style.display = "none";
    form.reset();
    localStorage.removeItem("dataFromForm");
  }, 2000);

      }); });
