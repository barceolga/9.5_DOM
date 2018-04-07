var main = document.getElementById('main');
console.log(main);
console.log(main.length);
var buttonsInsideMain = main.getElementsByClassName('button');
var buttonsArrayLength = main.getElementsByClassName('button').length;
console.log(buttonsArrayLength);
console.log(buttonsInsideMain);
console.log(typeof buttonsInsideMain);
var getButtonsInside = function getButtonInside() {

  for (i=0; i< buttonsArrayLength; i++) {
    var contentInsideButton = main.getElementsByClassName('button');
    alert(contentInsideButton[i].innerText);
  }

};

console.log(getButtonsInside(4));

var setButtonsStyle = function setButtonsStyle() {

  for (i=0; i< buttonsArrayLength; i++) {
    var myButtons = main.getElementsByClassName('button');
    myButtons[i].style.background = 'navy';
    myButtons[i].style.padding = '15px';
    myButtons[i].style.color = 'orange';
    myButtons[i].style.borderRadius = '20%';
    myButtons[i].style.border = 'none';
    console.log(myButtons[i].style);
  }
};
console.log(setButtonsStyle());
