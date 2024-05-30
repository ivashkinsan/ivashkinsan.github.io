const audioContext = new AudioContext();

// Функция для загрузки аудиофайла
function loadAudioFile(url) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'arraybuffer';
  
      request.onload = function() {
        audioContext.decodeAudioData(request.response, resolve, reject);
      };
  
      request.onerror = reject;
      request.send();
    });
  }

let allKeyForDataSet = document.querySelectorAll('.key');

  const keybNameAndSoundSharp = {
    '1C': 1,
    '1C#':2,
    '1D': 3,
    '1D#': 4,
    '1E': 5,
    '1F': 6,
    '1F#': 7,
    '1G': 8,
    '1G#': 9,
    '1A': 10,
    '1A#': 11,
    '1B': 12,
    '2C': 13,
    '2C#': 14,
    '2D': 15,
    '2D#': 16,
    '2E': 17,
    '2F': 18,
    '2F#': 19,
    '2G': 20,
    '2G#': 21,
    '2A': 22,
    '2A#': 23,
    '2B': 24,
    '3C': 25,
    '3C#': 26,
    '3D': 27,
    '3D#': 28,
    '3E': 29,
    '3F': 30,
    '3F#': 31,
    '3G': 32,
    '3G#': 33,
    '3A': 34,
    '3A#': 35,
    '3B': 36,
    '4C': 37,
    '4C#': 38,
    '4D': 39,
    '4D#': 40,
    '4E': 41,
    '4F': 42,
    '4F#': 43,
    '4G': 44,
    '4G#': 45,
    '4A': 46,
    '4A#': 47,
    '4B': 48,
    '4C': 49,
    '5C#': 50,
  }
  const keybNameAndSoundFlat = {
    "1C" : 1,
    "1Db": 2,
    "1D" : 3,
    "1Eb": 4,
    "1E" : 5,
    "1F" : 6,
    "1Gb": 7,
    "1G" : 8,
    "1Ab": 9,
    "1A" : 10,
    "1Bb": 11,
    "1B" : 12,
    "2C" : 13,
    "2Db": 14,
    "2D" : 15,
    "2Eb": 16,
    "2E" : 17,
    "2F" : 18,
    "2Gb": 19,
    "2G" : 20,
    "2Ab": 21,
    "2A" : 22,
    "2Bb": 23,
    "2B" : 24,
    "3C" : 25,
    "3Db": 26,
    "3D" : 27,
    "3Eb": 28,
    "3E" : 29,
    "3F" : 30,
    "3Gb": 31,
    "3G" : 32,
    "3Ab": 33,
    "3A" : 34,
    "3Bb": 35,
    "3B" : 36,
    "4C" : 37,
    "4Db": 38,
    "4D" : 39,
    "4Eb": 40,
    "4E" : 41,
    "4F" : 42,
    "4Gb": 43,
    "4G" : 44,
    "4Ab": 45,
    "4A" : 46,
    "4Bb": 47,
    "4B" : 48,
    "5C" : 49,
    "5Db": 50,
  }
  let addDataSetForKeys = function(){
    let keyArr = Object.entries(keybNameAndSoundFlat);
    for(let i = 0; i < allKeyForDataSet.length; i++){
      allKeyForDataSet[i].dataset.key = keyArr[i][0];
    }
    console.log();
  }
  addDataSetForKeys();

// Массив с путями к аудиофайлам
const audioFileUrls = [
    '/PianoSound/01.mp3',
    '/PianoSound/02.mp3',
    '/PianoSound/03.mp3',
    '/PianoSound/04.mp3',
    '/PianoSound/05.mp3',
    '/PianoSound/06.mp3',
    '/PianoSound/07.mp3',
    '/PianoSound/08.mp3',
    '/PianoSound/09.mp3',
    '/PianoSound/10.mp3',
    '/PianoSound/11.mp3',
    '/PianoSound/12.mp3',
    '/PianoSound/13.mp3',
    '/PianoSound/14.mp3',
    '/PianoSound/15.mp3',
    '/PianoSound/16.mp3',
    '/PianoSound/17.mp3',
    '/PianoSound/18.mp3',
    '/PianoSound/19.mp3',
    '/PianoSound/20.mp3',
    '/PianoSound/21.mp3',
    '/PianoSound/22.mp3',
    '/PianoSound/23.mp3',
    '/PianoSound/24.mp3',
    '/PianoSound/25.mp3',
    '/PianoSound/26.mp3',
    '/PianoSound/27.mp3',
    '/PianoSound/28.mp3',
    '/PianoSound/29.mp3',
    '/PianoSound/30.mp3',
    '/PianoSound/31.mp3',
    '/PianoSound/32.mp3',
    '/PianoSound/33.mp3',
    '/PianoSound/34.mp3',
    '/PianoSound/35.mp3',
    '/PianoSound/36.mp3',
    '/PianoSound/37.mp3',
    '/PianoSound/38.mp3',
    '/PianoSound/39.mp3',
    '/PianoSound/40.mp3',
    '/PianoSound/41.mp3',
    '/PianoSound/42.mp3',
    '/PianoSound/43.mp3',
    '/PianoSound/44.mp3',
    '/PianoSound/45.mp3',
    '/PianoSound/46.mp3',
    '/PianoSound/47.mp3',
    '/PianoSound/48.mp3',
    '/PianoSound/49.mp3',
    '/PianoSound/50.mp3',
];


// Загрузка аудиофайлов
const audioBuffers = [];
let loadPromises = audioFileUrls.map(url => loadAudioFile(url));
Promise.all(loadPromises).then(buffers => {
  audioBuffers.push(...buffers); 
  console.log('Все аудиофайлы загружены');
  // Запуск воспроизведения первого файла
//   playAudio(0);
});

// Функция для воспроизведения аудиофайла по индексу
let currentFileIndex = 0; 

function playAudio(index) {
  if (index < audioBuffers.length) {
    // Создаем новый источник звука для каждого файла
    const source = audioContext.createBufferSource(); 
    source.buffer = audioBuffers[index];
    source.connect(audioContext.destination);
    source.start();

    // // Переход к следующему файлу после окончания текущего
    // source.onended = () => {
    //   // Переключение на следующий файл
    //   currentFileIndex = (currentFileIndex + 1) % audioBuffers.length; 
    //   // Воспроизведение следующего файла
    //   playAudio(currentFileIndex); 
    // };
  }
}



// const playBtn = document.querySelector('#play');

let playArray = function(newArray,reverse, blok_chord, up_down){
  let arrPlay = [];

  for(let item of newArray){
    arrPlay.push(item.dataset.key);
  }

  if(reverse){
    arrPlay.reverse(); 
  }

  if(up_down){
      for (let i = arrPlay.length - 1; i > 0; i--) {
        arrPlay.push(arrPlay[i - 1]);
  }
  }
  console.log(arrPlay);
  // Загрузка аудиофайлов
  // let arrPlay = [1,3,5,6,5,3,1];
    let length = arrPlay.length
    let interval = 0;
    for(let i = 0; i < length; i++){
        setTimeout(playAudio,interval,keybNameAndSoundFlat[arrPlay.shift()]);
        if(blok_chord){
          interval = 0;
        } else { 
          interval +=300;
        }
    }
    // arrPlay = [1,5,10,15];
}
// playBtn.addEventListener('click', ()=>{
//     // Загрузка аудиофайлов
//     let length = arrPlay.length
//     let interval = 0;
//     for(let i = 0; i < length; i++){
//         setTimeout(playAudio,interval,arrPlay.shift());
//         interval +=400;

//     }
//     arrPlay = [1,5,10,15];
//   });