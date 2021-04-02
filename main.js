// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the story
const firstAnimal= cleanAndCap(words.get('fav-1'));
const secondAnimal = cleanAndCap(words.get('fav-2'));

const answer = cleanAndCap(words.get('answer'));
const conjunction = answer === 'Iya' ? 'and' : 'but';

const speed = words.get('speed');
const adj1 = words.get('adj-1');

const thirdAnimal = cleanAndCap(words.get('fav-3'));
const quote = words.get('quote');

const verb1 = words.get('verb-1');
const num1 = words.get('num-1');
const message = words.get('message');

// The string containing HTML and text which will populate the story.html page
const story = `<p><span class="word" title="id: fav-1">${firstAnimal}</span> adalah tempat favorit kita. Ada banyak
 kisah berkesan terjadi di situ. Walaupun begitu, ada juga beberapa tempat lain yg cukup mengesankan. 
 Misalnya di <span class="word" title="id: fav-2">${secondAnimal}</span>. Tempat ini tidak kalah berkesan 
 karena memang di situ kita sering mengadakan kegiatan yg menarik. </p>

<p>Tapi sebenarnya ada lagi tempat lain yg tidak kalah menarik, yaitu di 
<span class="word" title="id: fav-3">${thirdAnimal}</span>. Di tempat ini biasanya kami merasa
<span class="word" title="id: adj-1">${adj1}</span> melakukan <span class="word" title="id: verb-1">${verb1}</span>.
Kadang kami <span class="word" title="id: verb-1">${verb1}</span> bisa sampai 
<span class="word" title="id: num-1">${num1}</span> kali. Bahkan pernah sampai 10 kali kalau dilakukan dengan
<span class="word" title="id: speed">${speed}</span>. Kalau tidak percaya tanya saja orang yg ada di 
<span class="word" title="id: fav-3">${thirdAnimal}</span>. Pasti jawabnya 
<span class="word" title="id: answer">${answer}</span>. Kalau ditanya sama
orang yg kebetulan sedang makan, pasti dia akan bilang "<span class="word" title="id: quote">${quote}</span>".`

// Grabbing the title element
const title = document.getElementById('title');
// Populating the title element with text
title.innerHTML = `Kisah kita di <span class="word" title="id: fav-1">${firstAnimal}</span> 
dan <span class="word" title="id: fav-2">${secondAnimal}</span>`;

// Grabbing the story element
const storyEl = document.getElementById('story');
// Populating the story element with the value of the story variable
storyEl.innerHTML = story;

// Grabbing the moral-message element
const moralMessage = document.getElementById('moral-message');
// Populating the moral-message element with text
moralMessage.innerHTML = `<span class="italics" title="id: message">"${message}"</span>`;