/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/* This is a random quote generator coded in javascript. First we create an array with quote objects */

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote: "Literature is the most agreeable way of ignoring life",
    source: "Fernando Pessoa",
    citation: "The Book of Disquiet",
    year: "1982",
  },

  {
    quote: "My past is everything I failed to be",
    source: "Fernando Pessoa",
    citation: "The Book of Disquiet",
    year: "1982",
  },

  {
    quote: " “I only achieve simplicity with enormous effort",
    source: " Clarice Lispector",
    citation: " A Hora Da Estrela ",
  },

  {
    quote: "I'd woken up early, and I took a long time getting ready to exist",
    source: "Fernando Pessoa",
    citation: "The Book of Disquiet",
    year: "1982",
  },

  {
    quote:
      "I am nothing. I'll never be anything. I couldn't want to be something. Apart from that, I have in me all the dreams in the world",
    source: "Fernando Pessoa",
    citation: "The Book of Disquiet",
    year: "1982",
  },

  {
    quote:
      "To be great, be whole; Exclude nothing, exaggerate nothing that is not you. Be whole in everything. Put all you are Into the smallest thing you do. So, in each lake, the moon shines with splendor Because it blooms up above",
    source: "Fernando Pessoa",
    citation: "The Book of Disquiet",
    year: "1982",
  },
];

/***
 * `getRandomQuote` function - returns a random number between zero and the last index in the `quotes` array
 * and uses it as index to pick a random quote
 ***/

function getRandomQuote() {
  quote = quotes[Math.floor(Math.random() * quotes.length)];
}

/***
 * `printQuote` function - Creates a variable that initiates a HTML string that will display
 * quotes properties such as quote and source - citation and year will be displayed when avaiblable
 ***/

function printQuote() {
  getRandomQuote();

  var finalString =
    `<p class="quote"> ${quote.quote} </p>` +
    `<p class="source">${quote.source}`;

  if (quote.citation) {
    finalString =
      finalString + `<span class="citation"> ${quote.citation}</span>`;
  }
  if (quote.year) {
    finalString = finalString + `<span class="year">${quote.year}</span>`;
  }

  document.querySelector("body").style.background =
    "#" + Math.floor(Math.random() * 1000);
  document.getElementById("quote-box").innerHTML = finalString + "</p>";
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
