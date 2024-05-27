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


const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', ()=>{
    // Загрузка аудиофайлов

    let interval = 0;
    for(let i = 0; i < 4; i++){
        setTimeout(playAudio,interval,[i+10]);
        interval +=500;
    }
})

 