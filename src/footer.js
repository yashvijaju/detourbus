import { useState } from 'react';
import { OculusStock, Instagram, Mail, /*Presskit,*/ Twitch, Twitter, YouTube } from './assets/index.js'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import './footer.css';

const SimpleForm = ({ status, message, onSubmitted }) => {
  let input;
  const submit = () => {
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });
    document.getElementById("subscribe_text_id").placeholder = input.value;
    document.getElementById("subscribe_text_id").value = "";

  }

  console.log(status)
  return (
    <div className="footer_row_mailinglist_container">
      <div className="footer_row_mailinglist_input">
        <img src={Mail.default} alt="Mail" className="footer_row_mailinglist_icon"/> 
        <input
          className="footer_row_mailinglist_text"
          id="subscribe_text_id"
          ref={node => (input = node)}
          type="email"
          placeholder="johndoe@gmail.com"
        />
      </div>
      {status === "sending" && <button className="footer_row_mailinglist_submit" style={{cursor: "not-allowed"}}>Sending</button>}
      {status === "error" && <button className="footer_row_mailinglist_submit" style={{cursor: "not-allowed"}} onClick={submit}>Error</button>}
      {status === "success" && <button className="footer_row_mailinglist_submit" style={{cursor: "not-allowed"}}>Submitted!</button>}
      {status === null && <button className="footer_row_mailinglist_submit" onClick={submit}>Submit</button>}

    </div>
  );
};

function Footer() {
    return (
        <>
            <div className="footer_nav">
              <a href="/" className="content">HOME</a>
              <a href="/faq" className="content">FAQ</a>
              <a href="https://latestageinteractive.squarespace.com/blog" target="_blank" rel="noreferrer noopener" className="content">BLOG</a>
              <a href="/accessibility" className="content">ACCESSIBILITY</a>
              <a href="/team" className="content">TEAM</a>
              <a href="https://latestageinteractive.squarespace.com/press" target="_blank" rel="noreferrer noopener" className="content">PRESSKIT</a>
            </div>
            <div className="footer_nav_mobile">
              <a href="/" className="content">HOME</a>
              <a href="/faq" className="content">FAQ</a>
              <a href="/accessibility" className="content">ACCESSIBILITY</a>
            </div>
            <div className="footer_nav_mobile">
              <a href="https://latestageinteractive.squarespace.com/blog" target="_blank" rel="noreferrer noopener" className="content">BLOG</a>
              <a href="/team" className="content">TEAM</a>
              <a href="https://latestageinteractive.squarespace.com/press" target="_blank" rel="noreferrer noopener" className="content">PRESSKIT</a>
            </div>
            <div className="footer_row">
              <div className="footer_row_mailinglist">
                <div className="content">HOP ON BOARD THE DETOUR BUS MAILING LIST!</div>
                <MailchimpSubscribe
                  url="https://detourbus.us4.list-manage.com/subscribe/post?u=cc5086d366a5bc0ed4f3d9f64&amp;id=b40357c424"
                  render={({ subscribe, status, message }) => (
                      <SimpleForm onSubmitted={formData => subscribe(formData)} status={status} message={message}/>
                  )}
                />
              </div>
              <div className="footer_row_contact">
                <div className="content">CONTACT US</div>
                  <a href="mailto:detourbus@gmail.com" className="footer_row_contact_row">
                    <img src={Mail.default} alt="Mail" className="footer_row_contact_row_icon"/> 
                    <div className="content">detourbus@gmail.com</div>
                  </a>
                  {/* <a href="mailto:press@detourbus.com" className="footer_row_contact_row">
                    <img src={Presskit.default} alt="Presskit" className="footer_row_contact_row_icon"/> 
                    <div className="content">press@detourbus.com</div>
                  </a> */}
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
                <div className="content">©2021 Late Stage Interactive LLC</div>
              </div>
              <div className="footer_row_oculus">
                <img src={OculusStock.default} className="footer_row_oculuslogo_logo" alt="Oculus" />
                <div className="content">Created in parternship with Oculus</div>
              </div>
            </div>
        </>
    );
}

export default Footer;
