import { useState } from 'react';
import { Logo, FooterPoster, Oculus, Instagram, Mail, Presskit, Twitch, Twitter, YouTube } from './assets/index.js'
import './Home.css';
import './FAQ.css';

function FAQ() {
  const [mailingListValue, setMailingListValue] = useState('')

  return (
    <div className="container_outer">
      <div className="container">
        <div className="container_inner">
          <div className="header">
            <a href="/">
              <img src={Logo.default} className="logo" alt="Detour Bus Logo" />
            </a>          </div>
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
            <div className="footer_nav">
              <a href="/" className="content">HOME</a>
              <a href="https://www.detourbus.com/faqs" className="content">FAQ</a>
              <a href="https://www.detourbus.com/press" className="content">PRESSKIT</a>
              <a href="https://www.detourbus.com/blog" className="content">BLOG</a>
              <a href="/" className="content">ACCESSIBILITY</a>
              <a href="https://www.detourbus.com/team" className="content">TEAM</a>
            </div>
            <div className="footer_row">
              <div className="footer_row_mailinglist">
                <div className="content">HOP ON BOARD THE DETOUR BUS MAILING LIST!</div>
                <div className="footer_row_mailinglist_container">
                  <div className="footer_row_mailinglist_input">
                    <img src={Mail.default} alt="Mail" className="footer_row_mailinglist_icon"/> 
                    <input className="footer_row_mailinglist_text" type="text" id="fname" name="fname" placeholder="johndoe@gmail.com" value={mailingListValue} onChange={(e) => setMailingListValue(e.target.value)}/>
                  </div>
                  <div className="footer_row_mailinglist_submit" onClick={() => {
                    if (mailingListValue) {

                    }
                    else {
                      alert("Please enter a valid email address.")
                    }
                  }}>
                    SUBSCRIBE
                  </div>
                </div>
              </div>
              <div className="footer_row_contact">
                <div className="content">CONTACT US</div>
                  <a href="mailto:detourbus@gmail.com" className="footer_row_contact_row">
                    <img src={Mail.default} alt="Mail" className="footer_row_contact_row_icon"/> 
                    <div className="content">detourbus@gmail.com</div>
                  </a>
                  <a href="mailto:press@detourbus.com" className="footer_row_contact_row">
                    <img src={Presskit.default} alt="Presskit" className="footer_row_contact_row_icon"/> 
                    <div className="content">press@detourbus.com</div>
                  </a>
              </div>
            </div>
            <div className="footer_row" style={{alignItems: 'center'}}>
              <div className="footer_row_caveat">
                <div className="content">Detour Bus is in no way affiliated with and does not sponsor any automobile manufacturing company.</div>
              </div>
              <div className="footer_row_socials">
                <a href="https://twitter.com/detourbus" target="_blank" rel="noreferrer noopener"><img src={Twitter.default} alt="Twitter"/></a>
                <a href="https://www.instagram.com/detourbus/" target="_blank" rel="noreferrer noopener"><img src={Instagram.default} alt="Instagram"/></a>
                <a href="https://www.youtube.com/channel/UCsG33A62kZsJTi1mHjaipwQ/featured" target="_blank" rel="noreferrer noopener"><img src={YouTube.default} alt="YouTube"/></a>
                <a href="https://www.twitch.tv/detourbus" target="_blank" rel="noreferrer noopener"><img src={Twitch.default} alt="Twitch"/></a>
                <a href="mailto:detourbus@gmail.com" target="_blank" rel="noreferrer noopener"><img src={Mail.default} alt="Mail"/></a>
              </div>
            </div>
            <div className="footer_row" style={{alignItems: 'center'}}>
              <div className="footer_row_oculuslogo">
                <img src={Oculus.default} className="footer_row_oculuslogo_logo" alt="Detour Bus x Oculus" />
                <div className="content" style={{marginLeft: '1vw'}}>©2020 Late Stage Interactive LLC</div>
              </div>
              <div className="footer_row_oculus">
                <div className="content">Created in parternship with Oculus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={FooterPoster.default} className="footer_poster" alt="Detour Bus Footer Poster" />
    </div>
  );
}

export default FAQ;
