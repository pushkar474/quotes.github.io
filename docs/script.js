

const url='https://api.quotable.io/random';
const next_btn=document.querySelector('.next_btn');
next_btn.addEventListener('click',function getQuote(){
fetch(url)
.then(response=>response.json())
.then(data=>{
const content=document.querySelector('.content');
const author=document.querySelector('.author');
content.innerHTML=`"${data.content}"`;
author.innerHTML=data.author;
})
});
getQuote();