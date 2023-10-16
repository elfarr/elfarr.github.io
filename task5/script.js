window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  let f = document.getElementsByName("field");
  let r = document.getElementById("result");
  let s = document.getElementsByName("select1");
  let btn = document.getElementById("button1");
  btn.onclick = function calculatePrice() {
    let valid = /^[0-9]\d*$/.test(f[0].value);
    const quantity = parseInt(f[0].value);
    if (!valid) {
      alert("Значение некорректно!");
      r.innerHTML = "";
      f[-1].value = "";
      s.value = "";
      return false;
    }
    r.innerHTML = "<p>Стоимость: " + quantity * s[0].value + " руб</p>";
    return false;
  };
});