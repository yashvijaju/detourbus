import { Logo, FooterPoster } from './assets/index.js'
import './Home.css';
import './FAQ.css';
import Footer from './footer'

function Accessibility() {

  return (
    <div className="container_outer">
      <div className="container">
        <div className="container_inner">
          <div className="header">
            <a href="/">
              <img src={Logo.default} className="logo" alt="Detour Bus Logo" />
            </a>          </div>
          <div className="content">
            <p className="content_bold" style={{marginBottom: '10vh'}}> Accessibility</p>
            <p className="content_bold"> coming soon</p>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
        <img src={FooterPoster.default} className="footer_poster" alt="Detour Bus Footer Poster" />
      </div>
    </div>
  );
}

export default Accessibility;
