handleSend = () => {
  event.preventDefault();
  var li = document.createElement("li");
  var inputValueDrug = document.getElementById("drug").value;
  var inputValuePrice = document.getElementById("price").value;
  var x = document.createTextNode(inputValueDrug);
  var y = document.createTextNode(` - R$${inputValuePrice},00`);

  li.appendChild(x);
  li.appendChild(y);

  if (inputValueDrug === '' || inputValuePrice === '') {
    alert("Campo vazio!");
  } else {
    document.getElementById("list").appendChild(li);
  }

}