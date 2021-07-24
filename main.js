// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(
    document.getElementById(key))});

// The audio is an object that stores the audio sound file source

const audio = {
  'c-key' : new Audio('https://freesound.org/data/previews/442/442980_9159373-lq.mp3'),
  'c-sharp-key':new Audio('http://www.tremblingsandwarblings.com/wp-content/uploads/2017/05/piano-Cs4-long.mp3'), 
 'd-key' : new Audio('https://freesound.org/data/previews/442/442983_9159373-lq.mp3'),
  'd-sharp-key' : new Audio('https://freesound.org/data/previews/562/562755_7538492-lq.mp3'),
 'e-key' : new Audio('https://freesound.org/data/previews/442/442977_9159373-lq.mp3'),
  'f-key' : new Audio('https://freesound.org/data/previews/442/442979_9159373-lq.mp3'),
  'f-sharp-key' : new Audio('https://freesound.org/data/previews/562/562762_7538492-lq.mp3'),
  'g-key' : new Audio('https://freesound.org/data/previews/442/442981_9159373-lq.mp3'),
  'g-sharp-key' : new Audio('https://freesound.org/data/previews/562/562763_7538492-lq.mp3'),
  'a-key' : new Audio('https://freesound.org/data/previews/442/442978_9159373-lq.mp3'),
  'a-sharp-key' : new Audio('https://freesound.org/data/previews/562/562753_7538492-lq.mp3'),
  'b-key' : new Audio('https://freesound.org/data/previews/442/442982_9159373-lq.mp3'),
  'high-c-key': new Audio('https://freesound.org/data/previews/442/442984_9159373-lq.mp3'),
}


// Functions that change the color of the keys clicked on

const keyPlay = function(event) {
  console.log("Style", event.target.style)
  event.target.style.background = 'rgb(255,121,9)';
  //event.target.style.background: 'linear-gradient(red, yellow, blue)';
  let keyNote = event.target.id || event.target.parentElement.id;
  audio[keyNote].play();
}

const keyReturn = function (event) {
  event.target.style.backgroundColor = '';
  let keyNote = event.target.id || event.target.parentElement.id;
  audio[keyNote].pause();
  audio[keyNote].currentTime = 0;
}

// Function with event handler properties

let eventAssignment = function(note) {
  note.onmousedown = function() {keyPlay(event)}
  note.onmouseup = function() {keyReturn(event)}
}

// A loop that runs the array elements through the function
notes.forEach(eventAssignment);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// These variables store the text that indicates progression through the lyrics/lines
let lyric1 = document.getElementById('lyric-1');
let lyric2 = document.getElementById('lyric-2');
let lyric3 = document.getElementById('lyric-3');
let lyric4 = document.getElementById('lyric-4');


// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true; //Displays "line 3" when visible
nextThree.hidden = true; //Displays "line 4" when visible
startOver.hidden= true; //Displays "Reset" when visible

// These statements are "hiding" all the text that shows progression through the lyric/lines, but the first one
lyric2.hidden = true;
lyric3.hidden = true;
lyric3.hidden = true;
lyric4.hidden = true;


// Event handler property and function for the first progress button
nextOne.onclick = function(event) {
  //Hides and unhides elements
  event.target.hidden = true;
  nextTwo.hidden = false;
  lyric1.hidden = true;
  lyric2.hidden = false;
  //Changes notes to play
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}


// Event handler property and function for the second progress button
nextTwo.onclick = function(event) {
  //Hides and unhides elements
  event.target.hidden = true;
  nextThree.hidden = false;
  lyric2.hidden = true;
  lyric3.hidden = false;
  //Changes lyrics
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  lastLyric.style.display = 'inline-block';
  //Changes notes to play
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
   document.getElementById('letter-note-five').innerHTML = '<sup>^</sup>C';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

// Event handler property and function for the third progress button
nextThree.onclick = function(event) {
  //Hides and unhides elements
  event.target.hidden = true;
  startOver.hidden = false;
  lyric3.hidden = true;
  lyric4.hidden = false;
  //Changes lyrics
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
  lastLyric.style.display = 'none';
  //Changes notes to play
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

// Event handler property and function for the startOver ("Reset") button
startOver.onclick = function() {
  //Hides and unhides elements
  nextOne.hidden = false;
  startOver.hidden = true;
  lyric4.hidden = true;
  lyric1.hidden = false;
  //Changes lyrics
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
  //Changes notes to play
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('letter-note-five').innerHTML = '<sup>^</sup>C';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

//Script for Audio Recording
 const recordAudio = () =>
  new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    const start = () => mediaRecorder.start();

    const stop = () =>
      new Promise(resolve => {
        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({ audioBlob, audioUrl, play });
        });

        mediaRecorder.stop();
      });

    resolve({ start, stop });
  });

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const handleAction = async () => {
  const recorder = await recordAudio();
  const actionButton = document.getElementById('action');
  actionButton.disabled = true;
  recorder.start();
  await sleep(40000);
  const audio = await recorder.stop();
  audio.play();
  await sleep(3000);
  actionButton.disabled = false;
}
