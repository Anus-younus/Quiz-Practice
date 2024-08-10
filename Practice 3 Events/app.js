function clickMe(){
    console.log('Hello');
}

const imgEle = document.querySelector('#hidden')
const paraEle = document.querySelector('#text')

console.log(imgEle);


function show(){
    imgEle.src = "https://img.freepik.com/free-photo/mountain-with-snow_1112-564.jpg?t=st=1723284747~exp=1723288347~hmac=6f7b94a450b52a0dfc05b0d3bda72ffbb17dc37b77c0fe8b5e4cc7575da1d1cd&w=826"
}

function hide(){
    imgEle.src = "https://img.freepik.com/free-photo/breathtaking-view-snowy-mountains-cloudy-sky-patagonia-chile_181624-9696.jpg?t=st=1723283903~exp=1723287503~hmac=ee5a8877474490350f7e4ac2fc0fdedead610411b350cdcf968368d1a60a477a&w=740"
}

function changeText(){
    paraEle.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil debitis quos quaerat? Delectus earum laborum quibusdam quod recusandae obcaecati soluta."
    paraEle.style.color = "red"
}

function restoreText(){
    paraEle.innerHTML = "Hy I am Anus Developer I am Sofware Developer"
}