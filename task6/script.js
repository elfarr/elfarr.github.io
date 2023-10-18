window.addEventListener("DOMContentLoaded", function () {

  console.log("DOM fully loaded and parsed");
  let f = document.getElementById("field");
  let r = document.getElementById("result");
  const form = document.getElementById("form");
  let radio = document.getElementById("myradios");
  let checkbox = document.getElementById("checkbox");
  let s = document.getElementById("select1");
  const cup = document.getElementById("cup");
  const pencil = document.getElementById("pencil");
  const pen = document.getElementById("pen");
  const box = document.getElementById("box");
  const price = {
    cup: 100,
    erase: 100,
    gel: 20,
    meh: 200,
    pen: 40,
    pencil: 30,
    shar: 10
  };
  s.hidden = true;
  checkbox.hidden = true;
  radio.addEventListener("change", changeVisible);
  let product = "cup";
  function changeVisible() {
    if (pen.checked) {
      product = "pen";
      s.hidden = false;
      checkbox.hidden = true;
    }
    if (cup.checked) {
      product = "cup";
      s.hidden = true;
      checkbox.hidden = true;
    }
    if (pencil.checked) {
      product = "pencil";
      s.hidden = true;
      checkbox.hidden = false;
    }
  }
  function calculate() {
    let valid = /^[0-9]\d*$/.test(f.value);
    const quantity = parseInt(f.value);
    let total = quantity * price[product];
    if (!valid) {
      alert("Значение некорректно!");
      r.innerHTML = "";
      return false;
    }
    if (product === "pen") {
      total += quantity * price[s.value];
    } else if (product === "pencil" && box.checked) {
      total = price.meh * quantity;
    }
    r.innerHTML = "<p>Стоимость: " + total + " руб</p>";
    return false;
  }
  form.addEventListener("change", calculate);
});
