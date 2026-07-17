function details(name,cpu,ram,storage,display,price){

document.getElementById("popup").style.display="block";

document.getElementById("info").innerHTML=

"<b>Model :</b> "+name+"<br><br>"+

"<b>Processor :</b> "+cpu+"<br><br>"+

"<b>RAM :</b> "+ram+"<br><br>"+

"<b>Storage :</b> "+storage+"<br><br>"+

"<b>Display :</b> "+display+"<br><br>"+

"<b>Price :</b> "+price;

}

function closePopup(){

document.getElementById("popup").style.display="none";

}

function searchLaptop(){

let input=document.getElementById("search").value.toUpperCase();

let cards=document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){

let title=cards[i].getElementsByTagName("h2")[0];

if(title.innerHTML.toUpperCase().indexOf(input)>-1){

cards[i].style.display="block";

}else{

cards[i].style.display="none";

}

}

}