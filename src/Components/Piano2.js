
import React, { useEffect, useState } from "react";



const Piano2 = () => {




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
        a: require('./assets/tunes_2/a4.wav'),
        ab: require('./assets/tunes_2/ab4.wav'),
        a2: require('./assets/tunes_2/a5.wav'),
        ab2: require('./assets/tunes_2/ab5.wav'),
        b:require('./assets/tunes_2/b4.wav'),
        bb: require('./assets/tunes_2/bb4.wav'),
        b2: require('./assets/tunes_2/b5.wav'),
        bb2: require('./assets/tunes_2/bb5.wav'),
        c: require('./assets/tunes_2/c4.wav'),
        c2: require('./assets/tunes_2/c5.wav'),
        d: require('./assets/tunes_2/d4.wav'),
        d2: require('./assets/tunes_2/d5.wav'),
        db: require('./assets/tunes_2/db4.wav'),
        db2: require('./assets/tunes_2/db5.wav'),
        e: require('./assets/tunes_2/e4.wav'),
        e2: require('./assets/tunes_2/e5.wav'),
        eb: require('./assets/tunes_2/eb4.wav'),
        eb2: require('./assets/tunes_2/eb5.wav'),
        f: require('./assets/tunes_2/f4.wav'),
        f2: require('./assets/tunes_2/f5.wav'),
        g: require('./assets/tunes_2/g4.wav'),
        g2: require('./assets/tunes_2/g5.wav'),
        gb: require('./assets/tunes_2/gb4.wav'),
        gb2: require('./assets/tunes_2/gb5.wav')
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
                        <span id="0" >


                            {piano_keys[0]}

                        </span>
                    </li>

                    <li
                        className="key black"
                        data-key="w"
                        onClick={() => playTune("db")}

                    >
                        <p id="1" style={{ color: "white", textAlign: 'center', marginTop: 70 }} >
                            {piano_keys[1]}
                        </p>

                        <p style={{ color: "white", textAlign: 'center' }} id="2" >
                            {piano_keys[2]}
                        </p>


                    </li>

                    <li
                        className="key white"
                        data-key="s"
                        onClick={() => playTune("d")}
                        id="D"
                    >
                        <span id="3">

                            {piano_keys[3]}
                        </span>
                    </li>

                    <li
                        className="key black"
                        data-key="e"
                        onClick={() => playTune("eb")}

                    >

                        <p id="4" style={{ color: "white", textAlign: 'center', marginTop: 70 }} >
                            {piano_keys[4]}
                        </p>

                        <p id="5" style={{ color: "white", textAlign: 'center' }}>
                            {piano_keys[5]}
                        </p>
                    </li>

                    <li
                        className="key white"
                        data-key="d"
                        onClick={() => playTune("e")}
                        id="E"
                    >
                        <span id="6">

                            {piano_keys[6]}
                        </span>
                    </li>

                    <li className="key white" data-key="f" onClick={() => playTune("f")}>
                        <span id="7">

                            {piano_keys[7]}
                        </span>
                    </li>

                    <li className="key black" data-key="t" onClick={() => playTune("gb")}>


                        <p id="8" style={{ color: "white", textAlign: 'center', marginTop: 70 }} >
                            {piano_keys[8]}
                        </p>

                        <p id="9" style={{ color: "white", textAlign: 'center' }} >
                            {piano_keys[9]}
                        </p>
                    </li>

                    <li className="key white" data-key="g" onClick={() => playTune("g")}>
                        <span id="10"  >

                            {piano_keys[10]}
                        </span>
                    </li>


                    <li className="key black" data-key="y" onClick={() => playTune("ab")}>


                        <p id="11" style={{ color: "white", textAlign: 'center', marginTop: 70 }} >
                            {piano_keys[11]}
                        </p>

                        <p id="12" style={{ color: "white", textAlign: 'center' }} >
                            {piano_keys[12]}
                        </p>
                    </li>

                    <li className="key white" data-key="h" onClick={() => playTune("a")}>
                        <span id="13">

                            {piano_keys[13]}
                        </span>
                    </li>

                    <li className="key black" data-key="u" onClick={() => playTune("bb")}>


                        <p id="14" style={{ color: "white", textAlign: 'center', marginTop: 70 }} >
                            {piano_keys[14]}
                        </p>

                        <p id="15" style={{ color: "white", textAlign: 'center' }}>
                            {piano_keys[15]}
                        </p>
                    </li>

                    <li className="key white" data-key="j" onClick={() => playTune("b")}>
                        <span id="16" >
                            {piano_keys[16]}
                        </span>
                    </li>

                    <li className="key white" data-key="k" onClick={() => playTune("c2")}>
                        <span id="17" >

                            {piano_keys[17]}
                        </span>
                    </li>

                    <li className="key black" data-key="o" onClick={() => playTune("db2")}>


                        <p id="18" style={{ color: "white", textAlign: 'center', marginTop: 70 }} >
                            {piano_keys[18]}
                        </p>

                        <p id="19" style={{ color: "white", textAlign: 'center' }} >
                            {piano_keys[19]}
                        </p>
                    </li>

                    <li className="key white" data-key="l" onClick={() => playTune("d2")}>
                        <span id="20">

                            {piano_keys[20]}
                        </span>
                    </li>

                    <li className="key black" data-key="p" onClick={() => playTune("eb2")}>

                        <p id="21" style={{ color: "white", textAlign: 'center', marginTop: 70 }} >
                            {piano_keys[21]}
                        </p>

                        <p id="22" style={{ color: "white", textAlign: 'center' }} >
                            {piano_keys[22]}
                        </p>
                    </li>

                    <li className="key white" data-key=";" onClick={() => playTune("e2")}>
                        <span id="23">
                            {piano_keys[23]}
                        </span>
                    </li>


                    <li className="key white" data-key="f2" onClick={() => playTune("f2")}>
                        <span id="24" >

                            {piano_keys[24]}
                        </span></li>

                    <li className="key black" data-key="t2" onClick={() => playTune("gb2")}>

                        <p id="25" style={{ color: "white", textAlign: 'center', marginTop: 70 }} >
                            {piano_keys[25]}
                        </p>

                        <p id="26" style={{ color: "white", textAlign: 'center' }} >
                            {piano_keys[26]}
                        </p>
                    </li>

                    <li className="key white" data-key="g2" onClick={() => playTune("g2")}>
                        <span id="27" >

                            {piano_keys[27]}
                        </span></li>

                    <li className="key black" data-key="y2" onClick={() => playTune("ab2")}>

                        <p id="28" style={{ color: "white", textAlign: 'center', marginTop: 70 }} >
                            {piano_keys[28]}
                        </p>

                        <p id="29" style={{ color: "white", textAlign: 'center' }} >
                            {piano_keys[29]}
                        </p>
                    </li>

                    <li className="key white" data-key="h2" onClick={() => playTune("a2")}>
                        <span id="30">

                            {piano_keys[30]}
                        </span></li>

                    <li className="key black" data-key="u2" onClick={() => playTune("bb2")}>


                        <p id="31" style={{ color: "white", textAlign: 'center', marginTop: 70 }} >
                            {piano_keys[31]}
                        </p>

                        <p id="32" style={{ color: "white", textAlign: 'center' }} >
                            {piano_keys[32]}
                        </p>
                    </li>

                    <li className="key white" data-key="j2" onClick={() => playTune("b2")}>
                        <span id="33">

                            {piano_keys[33]}
                        </span></li>
                </ul>
            </div>
        </div>
    );
};

export default Piano2;