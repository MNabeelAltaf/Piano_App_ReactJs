import React, { useEffect, useState } from 'react';
import './Minor_Pentatonic.css'


import logo from './images/logo.png';

import tick from './images/tick.png';
import bg_img from './images/minor scale.jpeg'
import up_icon1 from './images/up_icon.png';
import up_icon2 from './images/down_icon.png';

import '../Components/assets/style.css';
import Piano from './Piano';
import Piano2 from './Piano2';
//react navigation
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import tune from '../Components/assets/tunes/tune.wav';

import './CustomAlert.css'

const Minor_Pentatonic = () => {


    const [currentNoteIndices, setCurrentNoteIndices] = useState(Array(6).fill(0));
    const notes = ['A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab'];
    const [answer, setAnswer] = useState(Array(6).fill('A')); // Initialize answer array with A alphabet

    const number_array = [6, 1, 2, 3, 5, 6];


    const [showAlert, setShowAlert] = useState(false);

    const [right_answer, setRightAnswer] = useState([]);

    const [showVideo, setShowVideo] = useState(false);


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


    const minor_scales_keys = ['A', 'E', 'B', 'F#', 'C#', 'G#', 'D', 'C', 'G', 'F', 'Bb']
    const u_tube_video = {
        1: ['https://www.youtube.com/embed/HrKD162cieI'],
        2: ['https://www.youtube.com/embed/aY62lZvc8lI'],
        3: ['https://www.youtube.com/embed/EaL12IM77eE'],
        4: ['https://www.youtube.com/embed/MB6bk7C_6g8'],
        5: ['https://www.youtube.com/embed/ZXiDOPbKkA0'],
        6: ['https://www.youtube.com/embed/SeBvvVrqq-8'],
        7: ['https://www.youtube.com/embed/UQkP5hW0ylE'],
        8: ['https://www.youtube.com/embed/9onYdt9Zo64'],
        9: ['https://www.youtube.com/embed/cTEFfWbOm0g?si=JTvmLr_GsUvPS1eb'],
        10: ['https://www.youtube.com/embed/UEiYb04-P2M'],
        11: ['https://www.youtube.com/embed/W8-r-64jQN8']
    };
    let selectedVideo = '';



    function video_selection() {
        const matchIndex = minor_scales_keys.findIndex(item => item === right_answer[0]);

        if (matchIndex !== -1) {
            selectedVideo = u_tube_video[matchIndex + 1] || '';
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

                setShowVideo(true);

                break;

            }else {
                setShowVideo(false);
                setRightAnswer([])
                setShowAlert(false);
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
        1: ['A', 'C', 'D', 'E', 'G', 'A'],
        2: ['E', 'G', 'A', 'B', 'D', 'E'],
        3: ['B', 'D', 'E', 'F#', 'A', 'B'],
        4: ['F#', 'A', 'B', 'C#', 'E', 'F#'],
        5: ['C#', 'E', 'F#', 'G#', 'B', 'C#'],
        6: ['G#', 'B', 'C#', 'D#', 'F#', 'G#'],
        7: ['D', 'F', 'G', 'A', 'C', 'D'],
        8: ['G', 'Bb', 'C', 'D', 'F', 'G'],
        9: ['C', 'Eb', 'F', 'G', 'Bb', 'C'],
        10: ['F', 'Ab', 'Bb', 'C', 'Eb', 'F'],
        11: ['Bb', 'Db', 'Eb', 'F', 'Ab', 'Bb'],
    }

    return (

        <div className="homePage-bg_minor_pentatonic">

            {/* navbar code */}
            <div >
                <div className='cont0_navbar_minor_pentatonic'>
                    <div className='cont1_navbar'>
                        <img src={logo} className='logo' />
                        <a href='#' className='nav_bar_txt'>Musical Scales Games</a>
                    </div>

                    <div className='cont2_navbar'>
                        <a href="#" className='nav_btns_minor_pentatonic' >
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }} >
                                Major Scales
                            </Link>
                        </a>
                        <a href="#" className='nav_btns_minor_pentatonic' >
                            <Link to="/major-pentatonic" style={{ color: 'white', textDecoration: 'none' }}>
                                Major Pentatonic
                            </Link>
                        </a>
                        <a href="#" className='nav_btns_minor_pentatonic' >
                            <Link to="/major-blues" style={{ color: 'white', textDecoration: 'none' }}>
                                Major Blues
                            </Link>
                        </a>
                    </div>
                    <div className='cont3_navbar'>
                        <a href="#" className='nav_btns_minor_pentatonic' >
                            <Link to="/minor-scales" style={{ color: 'white', textDecoration: 'none' }}>
                                Minor Scales
                            </Link>
                        </a>
                        <a href="#" className='nav_btns_minor_pentatonic' >
                            <Link to="/minor-pentatonic" style={{ color: 'white', textDecoration: 'none' }}>
                                Minor Pentatonic
                            </Link>
                        </a>
                        <a href="#" className='nav_btns_minor_pentatonic' >
                            <Link to="/minor-blues" style={{ color: 'white', textDecoration: 'none' }}>
                                Minor Blues
                            </Link>
                        </a>
                    </div>
                    <div className='cont3_navbar'>
                        {/* <a href="#" className='nav_btns_minor_pentatonic' >Logout</a> */}

                    </div>
                </div>
            </div>
            {/* navbar code */}


            <div className='s1_cont'>
                <h3 className='heading' >Minor Pentatonic Scales</h3>
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
                            {/* <h3 style={{ textAlign: 'center', marginTop: '10px', fontSize: '20px', color: 'white' }} >Correct Keys</h3> */}
                            <div className='correct-words' >
                                {/* {right_answer.map((word, index) => (
                                    <div key={index} className="word">{word}</div>
                                ))} */}

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

export default Minor_Pentatonic;