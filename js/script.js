/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [

 { "quote": "Literature is the most agreeable way of ignoring life",
 "source": "Fernando Pessoa"  ,
 "citation": "The Book of Disquiet",
 "year": "1980"
 }, 

 { "quote": "My past is everything I failed to be",
 "source": "Fernando Pessoa",
 "citation": "The Book of Disquiet",
 "year": "1980"
 },

 { "quote": "I'd woken up early, and I took a long time getting ready to exist",
 "source": "Fernando Pessoa",
 "citation": "The Book of Disquiet",
 "year": "1980"
 },

 { "quote": "I am nothing. I'll never be anything. I couldn't want to be something. Apart from that, I have in me all the dreams in the world",
 "source": "Fernando Pessoa",
//  "citation": "The Book of Disquiet",
 "year": "1980"
 },

 { "quote": "To be great, be whole; Exclude nothing, exaggerate nothing that is not you. Be whole in everything. Put all you are Into the smallest thing you do. So, in each lake, the moon shines with splendor Because it blooms up above" ,
 "source": "Fernando Pessoa",
 "citation": "The Book of Disquiet",
//  "year": "1980"
 } 

]

/***
 * `getRandomQuote` function
***/

function getRandomQuote () {

  // document.getElementById("quote-box").innerHTML = (quotes[Math.floor(Math.random() * quotes.length)]).quote;
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  }

/***
 * `printQuote` function
***/

function printQuote () {

  getRandomQuote();
  
  var finalString =  `<p class="quote"> ${quote.quote} </p>` + 
  `<p class="source">${quote.source}`
  
  if (quote.citation) { 
    finalString =  finalString +`<span class="citation"> ${quote.citation}</span>`
  }
    if (quote.year) {
  finalString =  finalString  + `<span class="year">${quote.year}</span>`
}
  
  document.getElementById('quote-box').innerHTML = finalString +'</p>'; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);