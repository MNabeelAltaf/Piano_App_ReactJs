import React, { useEffect, useState } from 'react';
import './Major_Pentatonic.css'

//react navigation
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import logo from './images/logo.png';

import tick from './images/tick.png';
import bg_img from './images/major scale.jpeg'
import up_icon1 from './images/up_icon.png';
import up_icon2 from './images/down_icon.png';

import '../Components/assets/style.css';
import Piano from './Piano';
import Piano2 from './Piano2';
import tune from '../Components/assets/tunes/tune.wav';

// image keys
import A from '../Components/assets/keys_images/major scale(a).jpeg';
import AB from '../Components/assets/keys_images/major scale(ab).jpeg';
import B from '../Components/assets/keys_images/major scale(b).jpeg';
import BB from '../Components/assets/keys_images/major scale(bb).jpeg';
import C from '../Components/assets/keys_images/major scale(c).jpeg';
import CB from '../Components/assets/keys_images/major scale(cb).jpeg';
import D from '../Components/assets/keys_images/major scale(d).jpeg';
import DB from '../Components/assets/keys_images/major scale(db).jpeg';
import E from '../Components/assets/keys_images/major scale(e).jpeg';
import EB from '../Components/assets/keys_images/major scale(eb).jpeg';
import F from '../Components/assets/keys_images/major scale(f).jpeg';
import G from '../Components/assets/keys_images/major scale(g).jpeg';


import './CustomAlert.css'

const Major_Pentatonic = () => {


    const [currentNoteIndices, setCurrentNoteIndices] = useState(Array(6).fill(0));
    const notes = ['A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab'];
    const [answer, setAnswer] = useState(Array(6).fill('A')); // Initialize answer array with A alphabet

    const number_array = [1, 2, 3, 5, 6, 1];

    const [showAlert, setShowAlert] = useState(false);

    const [right_answer, setRightAnswer] = useState([]);

    const [showVideo, setShowVideo] = useState(false);


    const [majorScale, setMajorScale] = useState("major");
    let keyImage = '';


    const handleNoteChange = (step, boxIndex) => {
        setCurrentNoteIndices(prevIndices => {
            const newIndices = [...prevIndices];
            newIndices[boxIndex] = (newIndices[boxIndex] + step + notes.length) % notes.length;
            const noteText = notes[newIndices[boxIndex]];

            // Update the answer array with the note text at the corresponding index
            setAnswer(prevAnswer => {
                const newAnswer = [...prevAnswer];
                newAnswer[boxIndex] = noteText;
                return newAnswer;
            });
            return newIndices;
        });
    };


    const major_scales_keys = ['C', 'G', 'D', 'A', 'E', 'B', 'F', 'Bb', 'Eb', 'Ab', 'Db']
    const u_tube_video = {
        1: ['https://www.youtube.com/embed/F8ZXhKeepF4'],
        2: ['https://www.youtube.com/embed/K4x6eoaVckE'],
        3: ['https://www.youtube.com/embed/VpK3Vwbr0lQ'],
        4: ['https://www.youtube.com/embed/zivzdCsNcrE'],
        5: ['https://www.youtube.com/embed/giQ8soEZiaw'],
        6: ['https://www.youtube.com/embed/CK_4MTG2698'],
        7: ['https://www.youtube.com/embed/EiLG7s24blo'],
        8: ['https://www.youtube.com/embed/xCGDUXG0Bak'],
        9: ['https://www.youtube.com/embed/imWjopLN4mU'],
        10: ['https://www.youtube.com/embed/zjmbklT3eR4'],
        11: ['https://www.youtube.com/embed/aa3w_hQ8GIA']
    };
    let selectedVideo = '';

    const keys_img = {
        A: [A],
        Ab: [AB],
        B: [B],
        Bb: [BB],
        C: [C],
        Cb: [CB],
        D: [D],
        Db: [DB],
        E: [E],
        Eb: [EB],
        F: [F],
        G: [G]

    }

    var keyToDisplay = right_answer[0];
    var keyImg = keys_img[keyToDisplay];


    function video_selection() {

        const matchIndex = major_scales_keys.findIndex(item => item === right_answer[0]);

        if (matchIndex !== -1) {
            selectedVideo = u_tube_video[matchIndex + 1] || '';
            keyImage = keyImg
        } else {

            console.log('No matching item found');
        }
    }




    useEffect(() => {

        for (const boxIndex in correct_answer) {
            const correctAnswer = correct_answer[boxIndex];

            if (arraysAreEqual(answer, correctAnswer)) {

                const audio = new Audio(tune);
                audio.play();

                setRightAnswer([...correctAnswer])


                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 5000);

                setMajorScale("major");

                setShowVideo(true);

                break;
            }
            else {
                setShowVideo(false);
                setRightAnswer([])
                setShowAlert(false);
                setMajorScale("");
            }
        }
    }, [answer]);

    const arraysAreEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) {
            return false;
        }

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    };


    const correct_answer = {
        1: ['C', 'D', 'E', 'G', 'A', 'C'],
        2: ['G', 'A', 'B', 'D', 'E', 'G'],
        3: ['D', 'E', 'F#', 'A', 'B', 'D'],
        4: ['A', 'B', 'C#', 'E', 'F#', 'A'],
        5: ['E', 'F#', 'G#', 'B', 'C#', 'E'],
        6: ['B', 'C#', 'D#', 'F#', 'G#', 'B'],
        7: ['F', 'G', 'A', 'C', 'D', 'F'],
        8: ['Bb', 'C', 'D', 'F', 'G', 'Bb'],
        9: ['Eb', 'F', 'G', 'Bb', 'C', 'Eb'],
        10: ['Ab', 'Bb', 'C', 'Eb', 'F', 'Ab'],
        11: ['Db', 'Eb', 'F', 'Ab', 'Bb', 'Db'],
    }

    return (

        <div className="homePage-bg_major_pentatonic">

            {/* navbar code */}
            <div >
                <div className='cont0_navbar_major_pentatonic'>
                    <div className='cont1_navbar'>
                        <img src={logo} className='logo' />
                        <a href='#' className='nav_bar_txt'>Musical Scales Games</a>
                    </div>

                    <div className='cont2_navbar'>
                        <a href="#" className='nav_btns_major_pentatonic' >
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }} >
                                Major Scales
                            </Link>
                        </a>
                        <a href="#" className='nav_btns_major_pentatonic' >
                            <Link to="/major-pentatonic" style={{ color: 'white', textDecoration: 'none' }}>
                                Major Pentatonic
                            </Link>
                        </a>
                        <a href="#" className='nav_btns_major_pentatonic' >
                            <Link to="/major-blues" style={{ color: 'white', textDecoration: 'none' }}>
                                Major Blues
                            </Link>
                        </a>
                    </div>
                    <div className='cont3_navbar'>
                        <a href="#" className='nav_btns_major_pentatonic' >
                            <Link to="/minor-scales" style={{ color: 'white', textDecoration: 'none' }}>
                                Minor Scales
                            </Link>
                        </a>
                        <a href="#" className='nav_btns_major_pentatonic' >

                            <Link to="/minor-pentatonic" style={{ color: 'white', textDecoration: 'none' }}>
                                Minor Pentatonic
                            </Link>
                        </a>
                        <a href="#" className='nav_btns_major_pentatonic' >
                            <Link to="/minor-blues" style={{ color: 'white', textDecoration: 'none' }}>
                                Minor Blues
                            </Link>
                        </a>
                    </div>
                    <div className='cont3_navbar'>
                        {/* <a href="#" className='nav_btns_major_pentatonic' >Logout</a> */}

                    </div>
                </div>
            </div>
            {/* navbar code */}


            <div className='s1_cont'>
                <h3 className='heading' >Major Pentatonic Scales</h3>
                <div className='cont0'>
                    <img src={bg_img} className='bg-img' />
                </div>

                <div className='homeBtns'>
                    <h3 className='heading_majorscales' >
                        Use Arrows to change Notes
                    </h3>
                    <div class="text-container0">

                        {currentNoteIndices.map((currentNoteIndex, boxIndex) => (
                            <div className="text-container1" key={boxIndex}>
                                <a href="#" className="up_arrow_btn" onClick={(e) => { e.preventDefault(); handleNoteChange(1, boxIndex); }}>
                                    <img src={up_icon1} className="arrow_img" alt="Up Arrow" />
                                </a>
                                <p className="txt_cont">{notes[currentNoteIndex]}</p>
                                <a href="#" className="up_arrow_btn" onClick={(e) => { e.preventDefault(); handleNoteChange(-1, boxIndex); }}>
                                    <img src={up_icon2} className="arrow_img" alt="Down Arrow" />
                                </a>

                            </div>
                        ))}


                        {showAlert && (
                            <div className="custom-alert">
                                <img src={tick} className='tick-icon' />
                                <p className="alert-text">Correct Answer</p>
                            </div>
                        )}

                    </div>

                    <div className="text-container01">
                        {number_array.map((number, index) => (
                            <span className="text-container001" clas key={index}>{number}</span>
                        ))}
                    </div>



                    <div>
                        <h3 className='heading' >
                            Piano
                        </h3>
                        <div>
                            {right_answer.length != 0 ? (
                                <Piano correctAnswer={right_answer} />
                            ) : (
                                <Piano2 />
                            )}

                        </div>
                    </div>




                    {showVideo ? (
                        <div>

                            <div className='correct-words' >
                                {video_selection()}
                            </div>

                            <div>
                                <h3 style={{ textAlign: 'center', marginTop: '10px', fontSize: '25px', color: 'white' }}>Related Video</h3>
                                <div className='video'>
                                    <iframe
                                        title="My Video"
                                        width="800"
                                        height="160"
                                        style={{ borderRadius: '10px' }}
                                        src={selectedVideo}
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>) : null
                    }
                </div>
            </div>

        </div>

    );
};

export default Major_Pentatonic;