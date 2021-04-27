import { Logo, FooterPoster } from './assets/index.js'
import './Home.css';
import './FAQ.css';
import Footer from './footer'

function Team() {

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
            <div className="content_team">
                <div className="content_title"> A VIDEO GAME BY</div>
                <div className="content_answer">Zach Flores and Ezra J. Robinson</div>
            </div>
            <div className="content_team">
                <div className="content_title">PRODUCER</div>
                <div className="content_answer"><a href="https://www.linkedin.com/in/elibork/" target="_blank" rel="noopener noreferrer">Eli Börk</a></div>
            </div>
            <div className="content_team">
                <div className="content_title">DESIGNERS</div>
                <div className="content_answer"><a href="https://www.linkedin.com/in/skylarkelley/" target="_blank" rel="noopener noreferrer">Skylar Kelley</a> and <a href="https://www.oliviayinjx.com/" target="_blank" rel="noopener noreferrer">Olivia Yin</a></div>
            </div>
            <div className="content_team">
                <div className="content_title">ENGINEERS</div>
                <div className="content_answer">Kenny Wei and <a href="https://www.jingtaoh.com/" target="_blank" rel="noopener noreferrer">Jingtao Huang</a></div>
            </div>
            <div className="content_team">
                <div className="content_title">WRITERS</div>
                <div className="content_answer"><a href="https://www.milosmiley.dev/" target="_blank" rel="noopener noreferrer">Milo Smiley</a> and <a href="https://www.sullyzack.com/" target="_blank" rel="noopener noreferrer">Sully Zack</a></div>
            </div>
            <div className="content_team">
                <div className="content_title">SOUND DESIGNER</div>
                <div className="content_answer">Hanna Adams</div>
            </div>
            <div className="content_team">
                <div className="content_title">USABILITY RESEARCHERS</div>
                <div className="content_answer"><a href="https://davidlawrencebarrett.com/" target="_blank" rel="noopener noreferrer">David Barrett</a> and <a href="https://www.remiwedin.com/" target="_blank" rel="noopener noreferrer">Remi Wedin</a></div>
            </div>
            <div className="content_team">
                <div className="content_title">ART DIRECTOR</div>
                <div className="content_answer"><a href="https://quianadang.co/" target="_blank" rel="noopener noreferrer">Quiana Dang</a></div>
            </div>
            <div className="content_team">
                <div className="content_title">CONCEPT ARTIST</div>
                <div className="content_answer"><a href="https://shroonchu.wixsite.com/portfolio" target="_blank" rel="noopener noreferrer">Shon Xiao</a></div>
            </div>
            <div className="content_team">
                <div className="content_title">3D ARTISTS</div>
                <div className="content_answer"><a href="https://www.devongadzinski.com/" target="_blank" rel="noopener noreferrer">Devon Gadzinski</a>, <a href="https://www.remiwedin.com/" target="_blank" rel="noopener noreferrer">Remi Wedin</a>, <a href="https://www.artstation.com/meisenhu" target="_blank" rel="noopener noreferrer">Meisen Hu</a>, <a href="https://adenapark.com/" target="_blank" rel="noopener noreferrer">Adena Park</a>, and <a href="https://lnaia312.wixsite.com/alisa-chen" target="_blank" rel="noopener noreferrer">Alisa Chen</a></div>
            </div>
            <div className="content_team">
                <div className="content_title">3D ANIMATOR</div>
                <div className="content_answer"><a href="https://www.artstation.com/josephjacobs" target="_blank" rel="noopener noreferrer">Joe Jacobs</a></div>
            </div>
            <div className="content_team">
                <div className="content_title">MARKETING</div>
                <div className="content_answer">Jake Hirsch</div>
            </div>
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

export default Team;
