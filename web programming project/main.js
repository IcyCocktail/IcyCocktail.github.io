let sands1 = document.getElementById('sands1');
let sands2 = document.getElementById('sands2');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');
let camel = document.getElementById('camel');
let logo = document.getElementById('logo');

/*window.onscroll = function(){
    let value = scrollY;
    sands1.style.top = value * 0.6 + 'px';
    sands2.style.top = value * 0.4 + 'px';
    mountain1.style.left = value * 0.2 + 'px';
    mountain2.style.right = value * 0.2 + 'px';
    camel.style.left = value * 0.2 + 'px';
    text.style.marginTop = value * 4 + 'px';
}*/

window.addEventListener('scroll', function(){
let value = window.scrollY;

sands1.style.top = value * 0.3 + 'px';
logo.style.top = value * 0.7 + 'px';
sands2.style.top = value * 0.2 + 'px';
mountain1.style.left = value * 0.4 + 'px';
mountain2.style.right = value * 0.4 + 'px';
camel.style.left = value * 0.6 + 'px';
})