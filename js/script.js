var main = document.getElementById('main');
var buttonsArrayLength = main.getElementsByClassName('button').length;


var contentInsideButton = main.getElementsByClassName('button');
var getButtonsInside = function getButtonInside() {

  for (i=0; i< buttonsArrayLength; i++) {
    alert(contentInsideButton[i].innerText);
  }

};

console.log(getButtonsInside(4));

var myButtons = main.getElementsByClassName('button');

var setButtonsStyle = function setButtonsStyle() {

  for (i=0; i< buttonsArrayLength; i++) {
    myButtons[i].style.background = 'navy';
    myButtons[i].style.padding = '15px';
    myButtons[i].style.color = 'orange';
    myButtons[i].style.borderRadius = '20%';
    myButtons[i].style.border = 'none';
    console.log(myButtons[i].style);
  }
};
console.log(setButtonsStyle());
