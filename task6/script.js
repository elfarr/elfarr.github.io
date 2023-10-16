window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  let f = document.getElementsByName("field");
  let r = document.getElementById("result");
  let s = document.getElementsByName("select1");
  let btn = document.getElementById("button1");
  let radio = document.getElementById("myradios");
  price = {
    pen: 40,
    cup: 100, 
    pencil: 30,
    cup1: 50,
    cup2: 100,
    cup3: 150,
  }
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
    let total = quantity * price[product];
    let product = radio.querySelector("input:checked").value;
     if (product === "cup") {
      s.style.display = "none";
      radio.style.display = "none";
    } else if (product === "pen") {
      s.style.display = "block";
      checkboxElement.style.display = "none";
      totalCost += price[s.value] * quantity;
    } else if (selectedProduct === "pencil") {
      s.style.display = "none";
      checkboxElement.style.display = "block"; };
    
   
    r.innerHTML = "<p>Стоимость: " +  + " руб</p>";
    return false;
};
});