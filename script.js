const quotes = [
  {text: "Your life is your story, and the adventure ahead of you is the journey to fulfill your own purpose and potential.", author: "Kerry Washington"},
  {text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
  {text: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
  {text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill"},
  {text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
  {text: "You are stronger than you think.", author: "Unknown"},
  {text: "Small progress is still progress.", author: "Unknown"},
  {text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb"},
  {text: "Push yourself, because no one else is going to do it for you.", author: "Unknown"},
  {text: "Great things never come from comfort zones.", author: "Unknown"},
  {text: "Dream big and dare to fail.", author: "Norman Vaughan"},
  {text: "Your limitation—it's only your imagination.", author: "Unknown"},
  {text: "Stay focused and never give up on your dreams.", author: "Francis Bowai"},
  {text: "Lift yourself, then lift others.", author: "LiftDb"}
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');
const copyBtn = document.getElementById('copy-quote');
const shareBtn = document.getElementById('share-quote');

function newQuote(){
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.style.opacity = 0;
  setTimeout(()=>{
    quoteText.textContent = random.text;
    quoteAuthor.textContent = '- ' + random.author;
    quoteText.style.opacity = 1;
  },200);
}

newQuoteBtn.addEventListener('click', newQuote);

copyBtn.addEventListener('click', ()=>{
  const text = `"${quoteText.textContent}" ${quoteAuthor.textContent}`;
  navigator.clipboard.writeText(text).then(()=>{
    copyBtn.textContent = 'Copied!';
    setTimeout(()=> copyBtn.textContent='Copy', 1500);
  });
});

shareBtn.addEventListener('click', async ()=>{
  const text = `"${quoteText.textContent}" ${quoteAuthor.textContent}`;
  if(navigator.share){
    try{ await navigator.share({title:'LiftDb Quote', text}); }catch(e){}
  } else {
    navigator.clipboard.writeText(text);
    shareBtn.textContent='Copied!';
    setTimeout(()=> shareBtn.textContent='Share',1500);
  }
});

// auto change every 15 sec
setInterval(newQuote, 15000);
