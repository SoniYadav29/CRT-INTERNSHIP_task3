// Collection of quotes
const quotes = [
  {
    quote: "You must be the change you wish to see in the world",
    author: "-- Mahatma Gandhi"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "-- Steve Jobs"
  },
  {
    quote: "The best way to predict your future is to create it.",
    author: "-- Dr. APJ Abdul Kalam"
  },
  {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    author: "-- Mahatma Gandhi"
  },
  {
    quote: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    author: "-- Muhammad Waseem"
  },
  {
    quote: "How you look at it is pretty much how you'll see it.",
    author: "-- Steve Jobs"
  },
  {
    quote: "The most disastrous thing that you can ever learn is your first programming language.",
    author: "-- Alan Kay"
  },
  {
    quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
    author: "-- Mahatma Gandhi"
  },
  {
    quote: "Don't let anyone tell you that you're weak because you're a woman.",
    author: "-- Mary Kom"
  },
  {
    quote: "You have to dream before your dreams can come true.",
    author: "-- A.P.J. Abdul Kalam"
  }
];

// New Quote Button
const quoteBtn = document.getElementById("quote-btn");

// Get Quote and author Section
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

// Event Handler
quoteBtn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  author.innerHTML = quotes[random].author;
});

const soundBtn = document.querySelector(".sound"); // Add this line to select the sound button

quoteBtn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
  
    let utterance = new SpeechSynthesisUtterance(quote.innerHTML);
    speechSynthesis.speak(utterance);
    
});
