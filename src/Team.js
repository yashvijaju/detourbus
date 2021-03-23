import { useState } from 'react';
import { Logo, FooterPoster, Oculus, Instagram, Mail, Presskit, Twitch, Twitter, YouTube } from './assets/index.js'
import './Home.css';
import './FAQ.css';

function Team() {
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
            <p className="content_bold" style={{marginBottom: '10vh'}}> The Team</p>
            <div className="content_faq">
                <div className="content_question"> A VIDEO GAME BY</div>
                <div className="content_answer">Zach Flores and Ezra J. Robinson</div>
            </div>
            <div className="content_faq">
                <div className="content_question">PRODUCER</div>
                <div className="content_answer"><a href="https://www.linkedin.com/in/elibork/" target="_blank" rel="noopener noreferrer">Eli Börk</a></div>
            </div>
            <div className="content_faq">
                <div className="content_question">DESIGNERS</div>
                <div className="content_answer"><a href="https://www.linkedin.com/in/skylarkelley/" target="_blank" rel="noopener noreferrer">Skylar Kelley</a> and <a href="https://www.oliviayinjx.com/" target="_blank" rel="noopener noreferrer">Olivia Yin</a></div>
            </div>
            <div className="content_faq">
                <div className="content_question">ENGINEERS</div>
                <div className="content_answer">Kenny Wei and <a href="https://www.jingtaoh.com/" target="_blank" rel="noopener noreferrer">Jingtao Huang</a></div>
            </div>
            <div className="content_faq">
                <div className="content_question">WRITERS</div>
                <div className="content_answer"><a href="https://www.milosmiley.dev/" target="_blank" rel="noopener noreferrer">Milo Smiley</a> and <a href="https://www.sullyzack.com/" target="_blank" rel="noopener noreferrer">Sully Zack</a></div>
            </div>
            <div className="content_faq">
                <div className="content_question">SOUND DESIGNER</div>
                <div className="content_answer">Hanna Adams</div>
            </div>
            <div className="content_faq">
                <div className="content_question">USABILITY RESEARCHERS</div>
                <div className="content_answer"><a href="https://davidlawrencebarrett.com/" target="_blank" rel="noopener noreferrer">David Barrett</a> and <a href="https://www.remiwedin.com/" target="_blank" rel="noopener noreferrer">Remi Wedin</a></div>
            </div>
            <div className="content_faq">
                <div className="content_question">ART DIRECTOR</div>
                <div className="content_answer"><a href="https://quianadang.co/" target="_blank" rel="noopener noreferrer">Quiana Dang</a></div>
            </div>
            <div className="content_faq">
                <div className="content_question">CONCEPT ARTIST</div>
                <div className="content_answer"><a href="https://shroonchu.wixsite.com/portfolio" target="_blank" rel="noopener noreferrer">Shon Xiao</a></div>
            </div>
            <div className="content_faq">
                <div className="content_question">3D ARTISTS</div>
                <div className="content_answer"><a href="https://www.devongadzinski.com/" target="_blank" rel="noopener noreferrer">Devon Gadzinski</a>, <a href="https://www.remiwedin.com/" target="_blank" rel="noopener noreferrer">Remi Wedin</a>, <a href="https://www.artstation.com/meisenhu" target="_blank" rel="noopener noreferrer">Meisen Hu</a>, <a href="https://adenapark.com/" target="_blank" rel="noopener noreferrer">Adena Park</a>, and <a href="https://lnaia312.wixsite.com/alisa-chen" target="_blank" rel="noopener noreferrer">Alisa Chen</a></div>
            </div>
            <div className="content_faq">
                <div className="content_question">3D ANIMATOR</div>
                <div className="content_answer"><a href="https://www.artstation.com/josephjacobs" target="_blank" rel="noopener noreferrer">Joe Jacobs</a></div>
            </div>
            <div className="content_faq">
                <div className="content_question">MARKETING</div>
                <div className="content_answer">Jake Hirsch</div>
            </div>
          </div>
          <div className="footer">
            <div className="footer_nav">
              <a href="/" className="content">HOME</a>
              <a href="https://www.detourbus.com/faqs" className="content">FAQ</a>
              <a href="https://www.detourbus.com/press" className="content">PRESSKIT</a>
              <a href="https://www.detourbus.com/blog" className="content">BLOG</a>
              <a href="/" className="content">ACCESSIBILITY</a>
              <a href="/team" className="content">TEAM</a>
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

export default Team;
