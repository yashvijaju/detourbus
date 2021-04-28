import { useState } from 'react';
import { OculusStock, Instagram, Mail, /*Presskit,*/ Twitch, Twitter, YouTube } from './assets/index.js'
import './footer.css';

function Footer() {
    const [mailingListValue, setMailingListValue] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    function subscribeUser() {
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded', //application/json
          'Authorization': `Bearer d76e0ca19373ff26fa85ff38c8f75913-us4`,
        },
        body: JSON.stringify({
          email_address: mailingListValue,
          status: "subscribed",
        })
      };

      fetch("https://us4.api.mailchimp.com/3.0/lists/b40357c424/members?skip_merge_validation=false", requestOptions)
      .then(res => res.json())
      .then(
        (res) => {
          console.log(res);
          setMailingListValue("subscribed!");
          setSubscribed(true)
        },
        (error) => {
          console.log(error);
          alert("Please enter a valid email address.")
        }
      )
    }

    return (
        <>
            <div className="footer_nav">
              <a href="/" className="content">HOME</a>
              <a href="/faq" className="content">FAQ</a>
              <a href="https://www.detourbus.com/blog" className="content">BLOG</a>
              <a href="/" className="content">ACCESSIBILITY</a>
              <a href="/team" className="content">TEAM</a>
              <a href="https://www.detourbus.com/press" className="content">PRESSKIT</a>
            </div>
            <div className="footer_row">
              <div className="footer_row_mailinglist">
                <div className="content">HOP ON BOARD THE DETOUR BUS MAILING LIST!</div>
                <div className="footer_row_mailinglist_container">
                  <div className="footer_row_mailinglist_input">
                    <img src={Mail.default} alt="Mail" className="footer_row_mailinglist_icon"/> 
                    <input className="footer_row_mailinglist_text" type="text" id="fname" name="fname" placeholder="johndoe@gmail.com" value={mailingListValue} onChange={(e) => setMailingListValue(e.target.value)}/>
                  </div>
                  {!subscribed &&
                    <div className="footer_row_mailinglist_submit" onClick={() => {
                      if (mailingListValue) {
                        subscribeUser()
                      }
                      else {
                        alert("Please enter a valid email address.")
                      }
                    }}>
                      SUBSCRIBE
                    </div>
                  }
                  {subscribed &&
                    <div className="footer_row_mailinglist_submit" style={{cursor: "not-allowed"}}>
                      SUBSCRIBED!
                    </div>
                  }
                </div>
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
