///////////////////////////////////////////////////////////////////////////////
/* 1Keys - A 1 Kilobyte JavaScript Piano - CodePen Version

By Frank Force 2020
GNU General Public License v3.0
https://github.com/KilledByAPixel/1Keys
Orignally made for JS1024

1k Features...
- Four different instrument sounds
- Keyboard and mouse support
- Multiple notes can be played independently
- Notes can be held for any length of time
- Keys light up red when played
- Sounds stop if focus is lost
- Sounds ramp on and off to eliminate pops
- Pure vanilla JS with no external files

Extra CodePen Features...
- Octave and Key control
- Show keyboard keys on piano
- Sine instrument

*/

C = new AudioContext; // audio context
A = [];               // active sounds
I = 0;                // instrument type

// instrument select
[...`∿🎻🎷🎹`].map((i,j)=>                       // instrument icons
    K.innerHTML += i +                             // icon
    `<input type=radio name=I checked onclick=I=${ // radio input
    3 - j}> &nbsp;`);                              // instrument select

// piano keys
for(i = 0; i < 36; i++) // 3 x 12 keys
        
    document.body.innerHTML +=
        `${i%12 ? `` : `<br>`                                       // new row
        }<div id=K${                                                // create key
            k = 24 + i%12 - (i/12|0)*12                             // reorder keys
        } style='display:inline-block;outline:3px solid #000;background:${ // style
        (w = `02579`.indexOf(i%12 - 1) < 0) ?                       // b or w?
        `#fff;color:#000;width:60px;height:140px` :                 // white
        `#000;position:absolute;margin-left:-15px;width:29px;height:79px` // black
        }'onmouseover=event.buttons&&P(${ k                         // mouse over
        }) onmousedown=P(${ k                                       // mouse down
        }) onmouseup=X(${ k                                         // mouse up
        }) onmouseout=X(${ k                                        // mouse out
        })>` + (w ? `<br>` : ``) +                                  // lower white keys
        `ZSXDCVGBHNJMQ2W3ER5T6Y7UI9O0P[=]    `[k];                  // show key

///////////////////////////////////////////////////////////////////////////////
// sound

// play note
P = i=> i < 0 || A[i] || // is valid and note not playing?
(
    k = eval(`K`+i),            // get key
    k.g = k.style.background,   // save original color 
    k.style.transition = ``,    // unset transition
    k.style.background = `red`, // set key color red
    k.innerHTML,                // force reset transition

     A[i] = [         // instruments
        [...`1248`], // 🎹 organ
        [...`3579`], // 🎷 brass
        [...`123`],  // 🎻 strings
        [...`4`],    // ∿ sine
    ][ I ].map(j=>(
        o = C.createOscillator(),                 // create oscillator
        o.connect(                                // oscillator to gain
            o.g = C.createGain(                   // create gain node
                o.frequency.value =               // set frequency
                    j * 55 *                      // A 55 root note
                    2**((i+3)/12                  // music scale formula
                        + O.value*1               // octave control
                        + Y.value/12)))           // key control
        .connect(C.destination),                  // gain to destination
        o.g.gain.value = .2/(1+Math.log2(j)),     // set gain
        o.start(),                                // play sound
        o)                                        // return sound
    )
);

// cancel note
X = i=> A[i] &&  // is note playing?
(
    k = eval(`K`+i),            // get key
    k.style.transition = `.5s`, // set transition
    k.style.background = k.g,   // reset original color

    A[i].map(o=>
        setTimeout(e=>o.stop(), 350,            // stop sound after delay
            o.g.gain.linearRampToValueAtTime(   // set gain start ramp
                o.g.gain.value, C.currentTime), // set gain
            o.g.gain.linearRampToValueAtTime(   // ramp off gain
                A[i] = 0, C.currentTime + .3)   // clear note  
        )
    )
);

// stop all sounds if focus lost
onblur = e=> A.map((e,i)=> X(i));

///////////////////////////////////////////////////////////////////////////////
// keyboard controls

// keyboard key to piano key
T = i=>
    (k = `ZSXDCVGBHNJM,L.;/Q2W3ER5T6Y7UI9O0P[=]` // map key to note
    .indexOf(i.key.toUpperCase()),               // find key in string
    k - 5 * (k > 16));                           // remap second row of keys

// play note on key down
onkeydown = i=> P(T(i));

// release note on key up
onkeyup = i=> X(T(i));