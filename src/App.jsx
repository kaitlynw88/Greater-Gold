import './App.css';
import Header from "./components/Header"
import Footer from './components/Footer';
import image1 from "./assets/greaterGoldLogos.png"

import popup1 from "./assets/GreaterGold_01.jpg"
import popup2 from "./assets/GreaterGold_02.jpg"
import popup3 from "./assets/GreaterGold_03.jpg"
import popup4 from "./assets/GreaterGold_04.jpg"
import popup5 from "./assets/GreaterGold_05.jpg"
import popup6 from "./assets/GreaterGold_06.jpg"
import popup7 from "./assets/GreaterGold_07.jpg"
import popup8 from "./assets/GreaterGold_08.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const App = () => {
  return (
    <div className="content">
      <Header/>
      <section className='blurb'>
        <p>
          A blurb about what you sell. Around 30 words. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, error aliquam culpa cumque provident ea sapiente deleniti iure dolorum.
        </p>
      </section>
      <section>
        <div className="wrapper">
          <h2>Get in Contact</h2>
          <div className=' container socials'>
                <a href="https://www.instagram.com/greatergoldvintage/">
                <div>
                  <FontAwesomeIcon icon={faInstagram} className="icon"/>
                  <p>
                    @greatergoldvintage
                  </p>
                </div>
                </a>
                <a href="mailto:della@greatergold.ca">
                  <div>
                    <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                    <p>
                      della@greatergold.ca
                    </p>
                  </div>
                </a>
          </div>
        </div>
      </section>
      <section className='popupSection'>
        <div className="wrapper">
          <h2>
            Greater Gold Plus-Size Vintage Pop Up
          </h2>
          <div className="container info">
            <h4>
              July 3rd - 31st, 2025 <br />
              Thursday - Sunday 12 - 7pm
            </h4>
            <h4>
              Chinatown Centre <br />
              222 Spadina Ave, Unit 121 
            </h4>
          </div>
          <div className="container popup">
            <img src={popup1} alt="" className='popupImg'/>
            <img src={popup2} alt="" className='popupImg'/>
            <img src={popup3} alt="" className='popupImg'/>
            <img src={popup4} alt="" className='popupImg'/>
            <img src={popup5} alt="" className='popupImg'/>
            <img src={popup6} alt="" className='popupImg'/>
            <img src={popup7} alt="" className='popupImg'/>
            <img src={popup8} alt="" className='popupImg'/>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default App;
