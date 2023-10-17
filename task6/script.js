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
  price = {
    pen: 40,
    cup: 100, 
    pencil: 30,
    shar: 10,
    gel: 20,
    erase: 100,
    meh: 200,
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
    total = quantity*price[product];
    if (!valid) {
      alert("Значение некорректно!");
      r.innerHTML = "";
      return false;
    }
    if (product === 'pen') {
    if (s.value === 'shar') {

      total += quantity*price["shar"];
    }
    else if (s.value === 'gel') {
      total += quantity*price["gel"];
  }
  else if (s.value === 'erase') {
    total += quantity*price["erase"];
}}
else if (product === 'pencil' && box.checked) {
  console.log("+");
  total = price["meh"]*quantity;}
    r.innerHTML = "<p>Стоимость: " + total +  " руб</p>";
    
    return false;
}
  form.addEventListener("change", calculate);

}
);