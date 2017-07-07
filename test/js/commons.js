/**
*	Unit Testing commons
*	@author kuakman <3dimentionar@gmail.com>
**/

/**
*	Create Default Container for Full Render
**/
var div = document.createElement('div');
var divClass = document.createAttribute('class');
divClass.value = "container";
div.setAttributeNode(divClass);
document.getElementsByTagName('body')[0].appendChild(div);
