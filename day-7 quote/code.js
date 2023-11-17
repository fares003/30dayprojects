const api_url="https://api.quotable.io/random";
const quoteBox=document.querySelector(".card blockquote");
const author=document.querySelector(".author");
const newquote=document.getElementById("newQuote");
async function getQuote(url){
const response=await fetch(url);
var data=await response.json();
quoteBox.innerHTML=`"${data.content}"`;
author.innerHTML=`"${data.author}"`;

}
function tweetQuote(){
    window.open("  https://twitter.com/intent/tweet?text= "+quoteBox.innerHTML+"----by"+author.innerHTML,"Tweet window","width= 600,height=300");
}
getQuote(api_url);