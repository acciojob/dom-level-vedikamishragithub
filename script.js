//your JS code here. If required.
let childElement = document.getElementById('level');
let parentElement = childElement.parentNode;
let i;
for(i=1; parentElement != null; i++){
    parentElement = parentElement.parentNode;
}
alert(`The level of the element is: ${i-1}`);