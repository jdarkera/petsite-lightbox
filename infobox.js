//Convert images from HTML to Javascript 
//Code conversion for partners 
var photos =[]; // Declare an empty array to store image element
var fileNames =[]; // Declare an empty element to store image file names
var imageList= []; // Declare an empty variable to store the assembled image list codes 
var image; // Declare an empty variable to store the assembled image list codes 
var openList = "<li class='gallery'>"; // Declare a variable to contain close list tag 
var closeList = "</li>"; // Declare a variable to contain a close list tag 
// Creat a loop to create 6 images starting with index 0
for (var i=0; i<10; i++) {
    fileNames.push("photo" + (i+1)); //Create image file name and store in the array 
    photos.push ('<a href="#/" class="lightbox-toggle">' + "<img src='images/"+fileNames[i]+".jpeg'>" + "</a>"); // Assemble file name into image element and store in an array 
    image = openList + photos[i] + closeList; // Assemble image element from array with list elements and store in a variable
    imageList.push(image); // Store (push) the assembled list codes into an array 
}
// Display all six image codes stored in the array 
document.getElementById("gallery").innerHTML=imageList;
// Caption
var photos =[];
var fileNames = [];
var imageList = [];
var image;

var openList = "<li class='pet' onClick='modal("; 
var closeFunction = ")'>";
var closeList = "</li>";

var openCaptionTag ="<p class='caption'>";
var closeCaptionTag ="</p>";

var openDescTag ="<p class='description'>";
var closeDescTag="</p>";

var captionTexts =
['pet1',
'pet2',
'pet3',
'pet4',
'pet5',
'pet6',
'pet7',
'pet8',
'pet9',
'pet10'];

var descTexts =['1find a pet today!',
'2find the right pet!',
'3find a pet today!',
'4find the right pet!', 
'5find a pet today!',
'6find the right pet!',
'7find a pet today!',
'8find the right pet!',
'9find a pet today!',
'10find the right pet!'];

for (var i=0; i<10; i++) {
fileNames.push("photo" + (i+1));
photos.push('<a href="#/" class="lightbox-toggle">' + "<img src='images/"+fileNames[i]+".jpeg'>"+ "</a>");
//openList ="<li id='photo" + (i+1)+"''>";
image= openList + i + closeFunction + photos[i] + openCaptionTag + captionTexts[i] + closeCaptionTag + openDescTag + descTexts[i] + closeDescTag + closeList;
imageList.push(image);
 }
 document.getElementById("gallery").innerHTML = imageList.join("");
 var infocontent = [
  {boxheading:"pet1", boxtext:"paragraph1"}, 
  {boxheading:"pet2", boxtext:"paragraph2"}, 
  {boxheading:"pet3", boxtext:"paragraph3"}, 
  {boxheading:"pet4", boxtext:"paragraph4"}, 
  {boxheading:"pet5", boxtext:"paragraph5"}, 
  {boxheading:"pet6", boxtext:"paragraph6"}, 
  {boxheading:"pet7", boxtext:"paragraph7"}, 
  {boxheading:"pet8", boxtext:"paragraph8"}, 
  {boxheading:"pet9", boxtext:"paragraph9"}, 
  {boxheading:"pet10", boxtext:"paragraph10"}, 
];
function modal(i){
  document.getElementById("InfoBox").style.display = "block";
  document.getElementById("InfoBoxHeading").innerHTML = infocontent[i].boxheading;
  document.getElementById("InfoBoxText").innerHTML = infocontent[i].boxtext;
}
document.getElementById("close").onclick=function(){
  document.getElementById("InfoBox").style.display = "none";
}

/* // Get the modal
//var myInfoBox = document.getElementById("InfoBox");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  myInfoBox.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() 
{
  myInfoBox.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == myInfoBox) {
    myInfoBox.style.display = "none";
  }
}

// click on image/description to call a function
// not sure if I should call for image or maybe descTexts 
function ClickImage() {
   document.getElementById("gallery").innerHTML= myInfoBox; 
}

//Declaring Variables 

var openInfoBoxHeading = "<h1 class='InfoBoxHeading'>";
var closeInfoBoxHeading ="</h1";
//var InfoBoxHeading = ['pet1','pet2','pet3','pet4','pet5','pet6','pet7','pet8','pet9','pet10'];

var openInfoBoxText = "<p class='InfoBoxText'>";
var closeInfoBoxText ="</p>";
//var InfoBoxText = ['paragraph1','paragraph2','paragraph3','paragraph4','paragraph5','paragraph6','paragraph7','paragraph8','paragraph9','paragraph10'];

var OpenInfoBox ="<id='InfoBox'>";
var CloseInfoBox ="</div>"; 
// function to assemble headline [x], infoText[x], and Info Box - to display info box
// for each method, lists each item in array 
// map() method 

//function GetContent (item) {
  //var insidebox = [item.boxheading(i),item.boxtext(i)].join(" ");
  //return insidebox;
//}
//function myFunction () {
//    document.getElementsByClassName("InfoBoxHeading","InfoBoxText").innerHTML = GetContent.map(GetContent);
//};

//Four loop, and  */

//lightbox

$(document).ready(function(){

  /* Open lightbox on button click */
  $('.lightbox-toggle img').click(function(){
      $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
      $('.box').fadeIn();

      //Check if lightbox has an image
      if ($('.box').contents('img')) {
          $('.box').contents().remove('img'); //If true, clear image
      }
      //Get text content in attribute
      // var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

      //if ($altvalue=="Angkor Wat") {
          var img = $(this).clone(); //Duplicate DOM element
          $('.box').append(img); //Insert duplicated element in another element
      //}
  });

  /* Click to close lightbox */
  $('.close, .backdrop').click(function(){
      $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
          $('.backdrop').css('display', 'none');
      });
      $('.box').fadeOut();
  });

});