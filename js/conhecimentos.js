const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const text5 = document.getElementById("text5");
const text6 = document.getElementById("text6");
const image1 = document.getElementById("image1");
const image1Text = document.getElementById("image1-text");
const image2 = document.getElementById("image2");
const image2Text = document.getElementById("image2-text");
const image3 = document.getElementById("image3");
const image3Text = document.getElementById("image3-text");
const image4 = document.getElementById("image4");
const image4Text = document.getElementById("image4-text");
const image5 = document.getElementById("image5");
const image5Text = document.getElementById("image5-text");
const image6 = document.getElementById("image6");
const image6Text = document.getElementById("image6-text");

//html//
text1.onmouseover = function() {
  image1.style.display = "block"; 
  image1Text.style.display = "block";
};

text1.onmouseout = function() {
  image1.style.display = "none";
  image1Text.style.display = "none";
};
  
//html//

//css//
text2.onmouseover = function() {
  image2.style.display = "block";
};

text2.onmouseout = function() {
  image2.style.display = "none";
};
//css//

//js//
text3.onmouseover = function() {
    image3.style.display = "block";
};
  
  text3.onmouseout = function() {
    image3.style.display = "none";
};
//js//

//react//
  text4.onmouseover = function() {
    image4.style.display = "block";
};
  
  text4.onmouseout = function() {
    image4.style.display = "none";
};
//react//

//bootstrap//
  text5.onmouseover = function() {
    image5.style.display = "block";
};
  
  text5.onmouseout = function() {
    image5.style.display = "none";
};
//bootstrap//

//git & github//
  text6.onmouseover = function() {
    image6.style.display = "block";
};
  
  text6.onmouseout = function() {
    image6.style.display = "none";
};
//git & github//

