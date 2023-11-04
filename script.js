
var redPepper = "red-pepper";
var redPepperQuantity = 0;

var potatoes = "potatoes";
var potatoesQuantity = 0;

var scallions = "scallions";
var scallionsQuantity = 0;

var tomatoes = "tomatoes";
var tomatoesQuantity = 0;

var broccoli = "broccoli";
var broccoliQuantity = 0;

var banana = "banana";
var bananaQuantity = 0;

var berries = "berries";
var berriesQuantity = 0;

var mango = "mango";
var mangoQuantity = 0;

var blueberry = "blueberry";
var blueberryQuantity = 0;

var orange = "orange";
var orangeQuantity = 0;



function decrement(product){
  if(product == redPepper && redPepperQuantity > 0){
    redPepperQuantity = redPepperQuantity - 1;
    document.getElementById("red-pepper-quantity").innerText = redPepperQuantity;
  }

  if(product == potatoes && potatoesQuantity > 0){
    potatoesQuantity = potatoesQuantity - 1;
    document.getElementById("potatoes-quantity").innerText = potatoesQuantity;
  }

  if(product == scallions && scallionsQuantity > 0){
    scallionsQuantity = scallionsQuantity - 1;
    document.getElementById("scallions-quantity").innerText = scallionsQuantity;
  }

  if(product == tomatoes && tomatoesQuantity > 0){
    tomatoesQuantity = tomatoesQuantity - 1;
    document.getElementById("tomatoes-quantity").innerText  = tomatoesQuantity;
  }

  if(product == broccoli && broccoliQuantity > 0){
    broccoliQuantity = broccoliQuantity - 1;
    document.getElementById("broccoli-quantity").innerText = broccoliQuantity;
  }

  if(product == banana && bananaQuantity > 0){
    bananaQuantity = bananaQuantity - 1;
    document.getElementById("banana-quantity").innerText = bananaQuantity;
  }

  if(product == berries && berriesQuantity > 0){
    berriesQuantity = berriesQuantity - 1;
    document.getElementById("berries-quantity").innerText = berriesQuantity;

  }

  if(product == mango && mangoQuantity > 0){
    mangoQuantity = mangoQuantity - 1;
    document.getElementById("mango-quantity").innerText = mangoQuantity;

  }

  if(product == blueberry && blueberryQuantity > 0){
    blueberryQuantity = blueberryQuantity - 1;
    document.getElementById("blueberry-quantity").innerText = blueberryQuantity;

  }

  if(product == orange && orangeQuantity > 0){
    orangeQuantity = orangeQuantity - 1;
    document.getElementById("orange-quantity").innerText = orangeQuantity;
  }

  



}


// Increment function...........................>


function increment(product){
  if(product == redPepper){
    redPepperQuantity = redPepperQuantity + 1;
    document.getElementById("red-pepper-quantity").innerText = redPepperQuantity;
  }

  if(product == potatoes){
    potatoesQuantity = potatoesQuantity + 1;
    document.getElementById("potatoes-quantity").innerText = potatoesQuantity;
  }

  if(product == scallions){
    scallionsQuantity = scallionsQuantity + 1;
    document.getElementById("scallions-quantity").innerText = scallionsQuantity
  }
  
  if(product == tomatoes){
    tomatoesQuantity = tomatoesQuantity + 1;
    document.getElementById("tomatoes-quantity").innerText = tomatoesQuantity
  }

  if(product == broccoli){
    broccoliQuantity = broccoliQuantity + 1;
    document.getElementById("broccoli-quantity").innerText = broccoliQuantity
  }

  if(product == banana){
    bananaQuantity = bananaQuantity + 1;
    document.getElementById("banana-quantity").innerText = bananaQuantity
  }

  if(product == berries ){
    berriesQuantity = berriesQuantity +1;
    document.getElementById("berries-quantity").innerText = berriesQuantity;
  }

  if(product == mango){
    mangoQuantity = mangoQuantity + 1;
    document.getElementById("mango-quantity").innerText = mangoQuantity;

  }

  if(product == blueberry){
    blueberryQuantity = blueberryQuantity + 1;
    document.getElementById("blueberry-quantity").innerText = blueberryQuantity;
  }

  if(product == orange){
    orangeQuantity = orangeQuantity + 1;
    document.getElementById("orange-quantity").innerText = orangeQuantity;
  }


}
var redPepperCost = 5.50
var  potatoesCost = 4.50	
var scallionsCost	= 3.50	
var tomatoesCost	=	2.50	
var broccoliCost  = 1.50	
var bananaCost		= 5.50	
var berriesCost		= 4.50	
var mangoCost		  = 3.50	
var blueberryCost	= 2.50	
var orangeCost		= 1.50
var userName = ""

function checkout(){
  userName = prompt("Enter your name "," ");
  document.getElementById("name").innerText = userName;

  var redPepperTotalCost = redPepperQuantity * redPepperCost
  var potatoesTotalCost  = potatoesQuantity * potatoesCost
  var scallionsTotalCost = scallionsQuantity * scallionsCost
  var tomatoesTotalCost  = tomatoesQuantity * tomatoesCost
  var broccoliTotalCost  = broccoliQuantity * broccoliCost
  var bananaTotalCost    = bananaQuantity * bananaCost
  var berriesTotalCost   = berriesQuantity * berriesCost
  var mangoTotalCost     = mangoQuantity * mangoCost
  var blueberryTotalCosts= blueberryQuantity * blueberryCost
  var orangeTotalCost    = orangeQuantity * orangeCost

  var subTotal = redPepperTotalCost + potatoesTotalCost + scallionsTotalCost 
  + tomatoesTotalCost + broccoliTotalCost + bananaTotalCost + berriesTotalCost +
  mangoTotalCost + blueberryTotalCosts + orangeTotalCost

  var totalQuantity = redPepperQuantity + potatoesQuantity + scallionsQuantity
  + tomatoesQuantity + broccoliQuantity + bananaQuantity + berriesQuantity
  + mangoQuantity + blueberryQuantity + orangeQuantity

  var gst = subTotal * 13 / 100

  var total = subTotal + gst


  var billTable = document.getElementById("bill")
  var billBody = document.getElementById("bill").getElementsByTagName("tbody")[0]

  if (redPepperQuantity > 0) {
    var redPepperRow = billBody.insertRow(billBody.rows.length)
    redPepperRow.innerHTML = "<tr><td>Red pepper</td><td>" + redPepperQuantity
    +"</td><td>$"+ redPepperCost +"</td><td>"+ redPepperTotalCost +"</td></tr>"
  }

  if (potatoesQuantity > 0) {
    var potatesRow = billBody.insertRow(billBody.rows.length)
    potatesRow.innerHTML = "<tr><td>Potatoes</td><td>" + potatoesQuantity
    +"</td><td>$"+ potatoesCost +"</td><td>"+ potatoesTotalCost +"</td></tr>"
  }
  
  if (scallionsQuantity > 0) {
    var scallionsRow = billBody.insertRow(billBody.rows.length)
    scallionsRow.innerHTML = "<tr><td>Scallions</td><td>" + scallionsQuantity
    +"</td><td>$"+ scallionsCost +"</td><td>"+ scallionsTotalCost +"</td></tr>"
  }

  if (tomatoesQuantity > 0) {
    var tomatoRow = billBody.insertRow(billBody.rows.length)
    tomatoRow.innerHTML = "<tr><td>Tomato</td><td>" + tomatoesQuantity
    +"</td><td>$"+ tomatoesCost +"</td><td>"+ tomatoesTotalCost +"</td></tr>"
  }

  if (broccoliQuantity > 0) {
    var broccoliRow = billBody.insertRow(billBody.rows.length)
    broccoliRow.innerHTML = "<tr><td>Broccoli</td><td>" + broccoliQuantity
    +"</td><td>$"+ broccoliCost +"</td><td>"+ broccoliTotalCost +"</td></tr>"
  }

  if (bananaQuantity > 0) {
    var bananaRow = billBody.insertRow(billBody.rows.length)
    bananaRow.innerHTML = "<tr><td>Banana</td><td>" + bananaQuantity
    +"</td><td>$"+ bananaCost +"</td><td>"+ bananaTotalCost +"</td></tr>"
  }

  if (berriesQuantity > 0) {
    var berriesRow = billBody.insertRow(billBody.rows.length)
    berriesRow.innerHTML = "<tr><td>Berries</td><td>" + berriesQuantity
    +"</td><td>$"+ berriesCost +"</td><td>"+ berriesTotalCost +"</td></tr>"
  }

  if (mangoQuantity > 0) {
    var mangoRow = billBody.insertRow(billBody.rows.length)
    mangoRow.innerHTML = "<tr><td>Mango</td><td>" + mangoQuantity
    +"</td><td>$"+ mangoCost +"</td><td>"+ mangoTotalCost +"</td></tr>"
  }

  if (blueberryQuantity > 0) {
    var blueberryRow = billBody.insertRow(billBody.rows.length)
    blueberryRow.innerHTML = "<tr><td>BlueBerry</td><td>" + blueberryQuantity
    +"</td><td>$"+ blueberryCost +"</td><td>"+ blueberryTotalCosts +"</td></tr>"
  }

  if (orangeQuantity > 0) {
    var orangeRow = billBody.insertRow(billBody.rows.length)
    orangeRow.innerHTML = createTableRow()
    /*"<tr>"+"<td>Orange</td><td>" + orangeQuantity
    +"</td><td>$"+ orangeCost +"</td><td>"+ orangeTotalCost +"</td></tr>"
  */
  }


  document.getElementById("sub-total-quantity").innerText = totalQuantity
  document.getElementById("sub-total-cost").innerText = subTotal
  document.getElementById("gst").innerText = gst
  document.getElementById("total").innerText = total

}

function createTableRow(productName, productQuantity, productCost, productTotalCost) {
  return (
    "<tr>" +
      "<td>" + productName + "</td>" +
      "<td>" + productQuantity + "</td>" +
      "<td>$" + productCost + "</td>" +
      "<td>" + productTotalCost + "</td>" +
    "</tr>"
  )

}




