import { useState } from 'react';
import { Logo, FooterPoster} from './assets/index.js'
import './Home.css';
import Footer from './footer'
import './FAQ.css';

function FAQ() {

  return (
    <div className="container_outer">
      <div className="container">
        <div className="container_inner">
          <div className="header">
            <a href="/">
              <img src={Logo.default} className="logo" alt="Detour Bus Logo" />
            </a>          
          </div>
          <div className="content">
            <p className="content_bold" style={{marginBottom: '10vh'}}>Frequently Asked Questions</p>
            <div className="content_faq">
                <div className="content_question">WHEN WILL I BE ABLE TO PLAY DETOUR BUS?</div>
                <div className="content_answer">Detour Bus is scheduled to be released in May 2021, on the Oculus Store and Steam.</div>
            </div>
            <div className="content_faq">
                <div className="content_question">HOW CAN I PLAY?</div>
                <div className="content_answer">Detour Bus can be played with any VR headset that supports the Oculus Store or Steam. If you have an Oculus Quest, you can play Detour Bus via <a href="https://support.oculus.com/444256562873335/" target="_blank" rel="noopener noreferrer">Oculus Link.</a></div>
            </div>
            <div className="content_faq">
                <div className="content_question">DO I NEED TO BE AN EXPERT AT VR TO PLAY?</div>
                <div className="content_answer">No! Detour Bus is designed specifically to be picked up by anyone who has just put a headset on for the first time - and their grandma, too!</div>
            </div>
            <div className="content_faq">
                <div className="content_question">WHAT ACCESSIBILITY OPTIONS ARE THERE?</div>
                <div className="content_answer">Default gameplay uses only controller position and the trigger button, and Detour Bus aims to provide accessible controls for people of many abilities. These include a sitting mode, one-controller mode, no-reaching mode, multiple artificial locomotion options, and full control remapping.</div>
            </div>
            <div className="content_faq">
                <div className="content_question">HOW DO I LEARN MORE ABOUT DETOUR BUS?</div>
                <div className="content_answer">You can read our <a href="https://www.detourbus.com/blog" target="_blank" rel="noopener noreferrer">blog</a> or sign up to receive our <a href="https://mailchi.mp/09cffd2f8ac6/detourbus" target="_blank" rel="noopener noreferrer">newsletter</a> for regular development updates, and also follow us on <a href="https://twitter.com/detourbus" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://www.instagram.com/detourbus/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://www.youtube.com/channel/UCsG33A62kZsJTi1mHjaipwQ/featured" target="_blank" rel="noopener noreferrer">YouTube</a>, or <a href="https://tiktok.com/@detourbus" target="_blank" rel="noopener noreferrer">TikTok</a> for fun, bus-related content!</div>
            </div>
            <div className="content_faq">
                <div className="content_question">HOW CAN I CONTACT YOU?</div>
                <div className="content_answer">For business and media inquiries, email <a href="mailto:detourbus@gmail.com">detourbus@gmail.com</a></div>
            </div>
            <div className="content_faq">
                <div className="content_question">WHAT ARE THE SYSTEM REQUIREMENTS?</div>
                <div className="content_answer">Detour Bus requires a VR headset and a PC with the following: <br/>
                <b>Processor:</b> Intel  i3-6100 / AMD Ryzen 3 1200 or greater<br/>
                <b>Graphics:</b> NVIDIA GTX 1050 Ti / AMD Radeon RX 470 or greater<br/>
                <b>Memory:</b> 8GB+ RAM or greater
                </div>
            </div>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      </div>
      <img src={FooterPoster.default} className="footer_poster" alt="Detour Bus Footer Poster" />
    </div>
  );
}

export default FAQ;
