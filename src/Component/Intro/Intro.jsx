import React from 'react';
import './Intro.css'
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import LinkDin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Geeth from '../../img/WhatsApp Image 2022-06-14 at 7.16.09 PM_preview_rev_1.png'
import thumBump from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import GlassesImgi1 from '../../img/glassesimoji.png'
const MyComponent = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Geeth Malinda</span>
                    <span>Fulstack Developer With Well Demanded Experience.Mainly Focused On JavaScript</span>
                </div>
                <button className="button i-button">Hire me
                </button>
                <div className="intro-icons">
                    <img src={Github} alt=""/>
                    <img src={Instagram} alt=""/>
                    <img src={LinkDin} alt=""/>
                </div>
            </div>
            <div className="i-right">
               <img src={Vector1}/>
               <img src={Vector2}/>
               <img src={Geeth}/>

            </div>

        </div>
    );
};

export default MyComponent;
