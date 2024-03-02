
import React, { useEffect, useState } from "react";



const Piano = (props) => {


    let right_keys = null
    right_keys = props.correctAnswer;
    const keys = [...new Set(right_keys)];


    const piano_keys = [
        'C',
        'C#',
        'Db',
        'D',
        'D#',
        'Eb',
        'E',
        'F',
        'F#',
        'Gb',
        'G',
        'G#',
        'Ab',
        'A',
        'A#',
        'Bb',
        'B',
        'C',
        'C#',
        'Db',
        'D',
        'D#',
        'Eb',
        'E',
        'F',
        'F#',
        'Gb',
        'G',
        'G#',
        'Ab',
        'A',
        'A#',
        'Bb',
        'B'
    ];

    const tunes = {
        c: require('./assets/tunes/c.wav'),
        a: require('./assets/tunes/a.wav'),
        d: require('./assets/tunes/d.wav'),
        e: require('./assets/tunes/e.wav'),
        f: require('./assets/tunes/f.wav'),
        f2: require('./assets/tunes/f2.wav'),
        g: require('./assets/tunes/g.wav'),
        g2: require('./assets/tunes/g2.wav'),
        h: require('./assets/tunes/h.wav'),
        h2: require('./assets/tunes/h2.wav'),
        j: require('./assets/tunes/j.wav'),
        j2: require('./assets/tunes/j2.wav'),
        k: require('./assets/tunes/k.wav'),
        l: require('./assets/tunes/l.wav'),
        o: require('./assets/tunes/o.wav'),
        p: require('./assets/tunes/p.wav'),
        s: require('./assets/tunes/s.wav'),
        t: require('./assets/tunes/t.wav'),
        t2: require('./assets/tunes/t2.wav'),
        u: require('./assets/tunes/u.wav'),
        u2: require('./assets/tunes/u2.wav'),
        w: require('./assets/tunes/w.wav'),
        y: require('./assets/tunes/y.wav'),
        y2: require('./assets/tunes/y2.wav')
    };


    const playTune = (key) => {
        const audioPath = tunes[key];

        if (audioPath) {
            const audio = new Audio(audioPath);
            audio.play();
        } else {
            console.log(`Tune for key "${key}" not found.`);
        }
    };



    const eliminating_correct_keys = (key) => {

        if (keys.length != 0) {

            let first_index_of_correct_key = piano_keys.indexOf(right_keys[0]);


            let last_index_of_correct_key = piano_keys.lastIndexOf(right_keys[right_keys.length - 1]);

            let selected_keys = [];

            for (let i = first_index_of_correct_key; i <= last_index_of_correct_key; i++) {
                selected_keys.push(piano_keys[i]);
            }


            const firstIndex = piano_keys.indexOf(selected_keys[0]);

            if (firstIndex !== -1) {
                const endingIndex = firstIndex + selected_keys.length - 1;
                const matchingKeys = piano_keys.slice(firstIndex, endingIndex + 1);
                const matchingIndexes = matchingKeys.map((key, index) => firstIndex + index);
                const matchingObject = {};
                matchingIndexes.forEach((index, i) => {
                    matchingObject[index] = matchingKeys[i];
                });


                const matchedKeys = right_keys
                    .filter(key => Object.values(matchingObject).includes(key))
                    .map(key => {
                        const matchingIndexes = Object.keys(matchingObject).filter(index => matchingObject[index] === key);
                        return matchingIndexes;
                    })
                    .reduce((acc, indexes) => acc.concat(indexes), []);

            
                matchedKeys.forEach((id) => {
                    let piano_note = document.getElementById(id);
                    if (piano_note) {
                        piano_note.style.backgroundColor = 'green';
                        piano_note.style.color = 'white';
                    }
                })

            } else {
                console.log("First item not found in pianoKeys.");
            }

        }

    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', }} >
            <div className="wrapper">


                <ul className="piano-keys">

                    <li
                        className='key white'
                        data-key="c"
                        onClick={() => playTune("c")}
                        id="C"
                    >
                        <span id="0" className={keys.find(key => key === 'C') ? `${eliminating_correct_keys(keys.find(key => key === 'C'))} ` : ''}>


                            {piano_keys[0]}

                        </span>
                    </li>

                    <li
                        className="key black"
                        data-key="w"
                        onClick={() => playTune("w")}

                    >
                        <p id="1" style={{ color: "white", textAlign: 'center', marginTop: 70 }} >
                            {piano_keys[1]}
                        </p>

                        <p style={{ color: "white", textAlign: 'center' }} id="2" className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[2]}
                        </p>


                    </li>

                    <li
                        className="key white"
                        data-key="s"
                        onClick={() => playTune("s")}
                        id="D"
                    >
                        <span id="3" className={keys.find(key => key === 'D') ? `${eliminating_correct_keys(keys.find(key => key === 'D'))} ` : ''}>

                            {piano_keys[3]}
                        </span>
                    </li>

                    <li
                        className="key black"
                        data-key="e"
                        onClick={() => playTune("e")}

                    >

                        <p id="4" style={{ color: "white", textAlign: 'center', marginTop: 70 }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[4]}
                        </p>

                        <p id="5" style={{ color: "white", textAlign: 'center' }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[5]}
                        </p>
                    </li>

                    <li
                        className="key white"
                        data-key="d"
                        onClick={() => playTune("d")}
                        id="E"
                    >
                        <span id="6" className={keys.find(key => key === 'E') ? `${eliminating_correct_keys(keys.find(key => key === 'E'))} ` : ''}>

                            {piano_keys[6]}
                        </span>
                    </li>

                    <li className="key white" data-key="f" onClick={() => playTune("f")}>
                        <span id="7" className={keys.find(key => key === 'F') ? `${eliminating_correct_keys(keys.find(key => key === 'F'))} ` : ''} >

                            {piano_keys[7]}
                        </span>
                    </li>

                    <li className="key black" data-key="t" onClick={() => playTune("t")}>


                        <p id="8" style={{ color: "white", textAlign: 'center', marginTop: 70 }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[8]}
                        </p>

                        <p id="9" style={{ color: "white", textAlign: 'center' }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[9]}
                        </p>
                    </li>

                    <li className="key white" data-key="g" onClick={() => playTune("g")}>
                        <span id="10" className={keys.find(key => key === 'G') ? `${eliminating_correct_keys(keys.find(key => key === 'G'))} ` : ''} >

                            {piano_keys[10]}
                        </span>
                    </li>


                    <li className="key black" data-key="y" onClick={() => playTune("y")}>


                        <p id="11" style={{ color: "white", textAlign: 'center', marginTop: 70 }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[11]}
                        </p>

                        <p id="12" style={{ color: "white", textAlign: 'center' }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[12]}
                        </p>
                    </li>

                    <li className="key white" data-key="h" onClick={() => playTune("h")}>
                        <span id="13" className={keys.find(key => key === 'A') ? `${eliminating_correct_keys(keys.find(key => key === 'A'))} ` : ''}>

                            {piano_keys[13]}
                        </span>
                    </li>

                    <li className="key black" data-key="u" onClick={() => playTune("u")}>


                        <p id="14" style={{ color: "white", textAlign: 'center', marginTop: 70 }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[14]}
                        </p>

                        <p id="15" style={{ color: "white", textAlign: 'center' }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[15]}
                        </p>
                    </li>

                    <li className="key white" data-key="j" onClick={() => playTune("j")}>
                        <span id="16" className={keys.find(key => key === 'B') ? `${eliminating_correct_keys(keys.find(key => key === 'B'))} ` : ''}>
                            {piano_keys[16]}
                        </span>
                    </li>

                    <li className="key white" data-key="k" onClick={() => playTune("k")}>
                        <span id="17" className={keys.find(key => key === 'C') ? `${eliminating_correct_keys(keys.find(key => key === 'C'))} ` : ''}>

                            {piano_keys[17]}
                        </span>
                    </li>

                    <li className="key black" data-key="o" onClick={() => playTune("o")}>


                        <p id="18" style={{ color: "white", textAlign: 'center', marginTop: 70 }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[18]}
                        </p>

                        <p id="19" style={{ color: "white", textAlign: 'center' }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[19]}
                        </p>
                    </li>

                    <li className="key white" data-key="l" onClick={() => playTune("l")}>
                        <span id="20" className={keys.find(key => key === 'D') ? `${eliminating_correct_keys(keys.find(key => key === 'D'))} ` : ''}>

                            {piano_keys[20]}
                        </span>
                    </li>

                    <li className="key black" data-key="p" onClick={() => playTune("p")}>

                        <p id="21" style={{ color: "white", textAlign: 'center', marginTop: 70 }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[21]}
                        </p>

                        <p id="22" style={{ color: "white", textAlign: 'center' }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[22]}
                        </p>
                    </li>

                    <li className="key white" data-key=";" onClick={() => playTune("c")}>
                        <span id="23" className={keys.find(key => key === 'E') ? `${eliminating_correct_keys(keys.find(key => key === 'B'))} ` : ''}>
                            {piano_keys[23]}
                        </span>
                    </li>


                    <li className="key white" data-key="f2" onClick={() => playTune("f2")}>
                        <span id="24" className={keys.find(key => key === 'F') ? `${eliminating_correct_keys(keys.find(key => key === 'B'))} ` : ''}>

                            {piano_keys[24]}
                        </span></li>

                    <li className="key black" data-key="t2" onClick={() => playTune("t2")}>

                        <p id="25" style={{ color: "white", textAlign: 'center', marginTop: 70 }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[25]}
                        </p>

                        <p id="26" style={{ color: "white", textAlign: 'center' }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[26]}
                        </p>
                    </li>

                    <li className="key white" data-key="g2" onClick={() => playTune("g2")}>
                        <span id="27" className={keys.find(key => key === 'G') ? `${eliminating_correct_keys(keys.find(key => key === 'B'))} ` : ''}>

                            {piano_keys[27]}
                        </span></li>

                    <li className="key black" data-key="y2" onClick={() => playTune("y2")}>

                        <p id="28" style={{ color: "white", textAlign: 'center', marginTop: 70 }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[28]}
                        </p>

                        <p id="29" style={{ color: "white", textAlign: 'center' }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[29]}
                        </p>
                    </li>

                    <li className="key white" data-key="h2" onClick={() => playTune("h2")}>
                        <span id="30" className={keys.find(key => key === 'A') ? `${eliminating_correct_keys(keys.find(key => key === 'B'))} ` : ''}>

                            {piano_keys[30]}
                        </span></li>

                    <li className="key black" data-key="u2" onClick={() => playTune("u2")}>


                        <p id="31" style={{ color: "white", textAlign: 'center', marginTop: 70 }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[31]}
                        </p>

                        <p id="32" style={{ color: "white", textAlign: 'center' }} className={keys.find(key => key === 'C#' || key === 'Db') ? `${eliminating_correct_keys(keys.find(key => key === 'C#' || key === 'Db'))} ` : ''}>
                            {piano_keys[32]}
                        </p>
                    </li>

                    <li className="key white" data-key="j2" onClick={() => playTune("j2")}>
                        <span id="33" className={keys.find(key => key === 'B') ? `${eliminating_correct_keys(keys.find(key => key === 'B'))} ` : ''}>

                            {piano_keys[33]}
                        </span></li>
                </ul>
            </div>
        </div>
    );
};

export default Piano;