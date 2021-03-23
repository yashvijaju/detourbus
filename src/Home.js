import { useState } from 'react';
import { Logo, FooterPoster, Oculus, Instagram, Mail, Presskit, Twitch, Twitter, YouTube } from './assets/index.js'
import './Home.css';

function Home() {
  const [mailingListValue, setMailingListValue] = useState('')

  return (
    <div className="container_outer">
      <div className="container">
        <div className="container_inner">
          <div className="header">
            <img src={Logo.default} className="logo" alt="Detour Bus Logo" />
          </div>
          <div className="content">
            Detour Bus is a casual VR game where players build ridiculous winding highways around themselves to take the dysfunctional Flowers family on a road trip across Post-Infrastructure America. Get in the construction groove to take on corrupt Senator Joseph McCarthief’s attempts to turn all freeways into pay-to-drive tunnels and reclaim your right to transportation.<br/>
            <br/>
            Featuring: bison herding, 5G weather machines, 360-degree video, a giant tow truck mech, and of course lots of bus hats
            <br/><br/><br/><br/>
            <span className="content_bold">Arriving summer 2021 on Oculus Rift and SteamVR</span>
            <br/><br/>
            Made by placeholder and friends, and published by placeholder. <br/>
            Please enjoy our screenshots, Twitter, and Email.
          </div>
          <div className="youtube">
            <iframe 
              src="https://www.youtube.com/embed/eVtKsgXyZd0"
              title="YouTube video player" 
              frameborder="0" 
              className="youtube_embed"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            ></iframe>
          </div>
          <div className="footer">
            <div className="footer_nav">
              <a href="/" className="content">HOME</a>
              <a href="/faq" className="content">FAQ</a>
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

export default Home;
