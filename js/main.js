window.onload = init;

function init(){
 document.getElementById("fruitButton").onclick = function() {typeSwitch("fruit","#fruitButton")};
 document.getElementById("indianaButton").onclick = function() {typeSwitch("indiana","#indianaButton")};
 document.getElementById("vampireButton").onclick = function() {typeSwitch("vampire","#vampireButton")};
 document.getElementById("egyptianButton").onclick = function() {typeSwitch("egyptian","#egyptianButton")};
 document.getElementById("crownedButton").onclick = function() {typeSwitch("golden","#crownedButton")};
 document.getElementById("bumblebeeButton").onclick = function() {typeSwitch("bumblebee","#bumblebeeButton")};
 document.getElementById("getNewFact").onclick = function() {newFact()};

 preloadImage();

 //preload all the type picture;
 function preloadImage(){
   var img1 = new Image();
   var img2 = new Image();
   var img3 = new Image();
   var img4 = new Image();
   var img5 = new Image();
   var img6 = new Image();

   img1.src = 'images/fruit.jpg'
   img2.src = 'images/indiana.jpg'
   img3.src = 'images/vampire.jpg'
   img4.src = 'images/egyptian.jpg'
   img5.src = 'images/golden.jpg'
   img6.src = 'images/vampire.jpg'
 }

 //funtion for adding and remove a selectType class base on the type switch
 function typeSwitch(type,key) {
   var descriptionType = "";
   $("#switchBatType").hide();
   $(".selectType").removeClass("selectType");
   $(key).addClass("selectType");

   //switch picture
   document.getElementById('typePicture').src= 'images/' + type + '.jpg'

   //switch description
   switch (type) {
     case 'fruit':
       descriptionType = "The fruit bat falls into the category of the Megabat and sometimes they are called the Flying Fox in some locations. There are many differences in their size from one location to the next.";
       break;
     case 'indiana':
       descriptionType = "The indiana bat is a medium sized species. It can range in coloring from brown, black, or gray. They are only 1 or 2 inches in length when full grown. The weight is about 1/4 of an ounce.";
       break;
     case 'vampire':
       descriptionType = "The vampire bat is a fascinating creature, and one that has been involved with legends for centuries. This particular species of bat features a short muzzle that is cone shaped.";
       break;
     case 'egyptian':
       descriptionType = "The egyptian fruit bat is a smaller type of bat with a length of about six inches. However, they have a large wing span of about two feet. They also have a weight of less than half a pound.";
       break;
     case 'golden':
       descriptionType = "The giant golden-crowned flying-fox bat is a rare species, and one that features very long wings. In fact, they are so long that it is often seen with them wrapped around the body like a cloak.";
       break;
     case 'bumblebee':
       descriptionType = "The kitti's hog-nosed bat or bumblebee bat has a very unique look to it. The fact that is so tiny also encourages the other name it is frequently called by Bumblebee Bat.";
       break;
   }
   //replace the old description to new description
   document.getElementById('descriptionType').innerHTML= descriptionType;

   //fade in after finish switch
   $("#switchBatType").fadeIn(500);
 }

 //fade in the whole body section
 $("#body-section").fadeIn(1000);

}
