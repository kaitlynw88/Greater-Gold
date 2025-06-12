import './App.css';
import Header from "./components/Header"
import Footer from './components/Footer';
import image1 from "./assets/greaterGoldLogos.png"

import popup1 from "./assets/GreaterGold_01.jpg"
import popup2 from "./assets/GreaterGold_02.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const App = () => {
  return (
    <div className="content">
      <Header/>
      <section>
        <p>
          A blurb about what you sell. Around 30 words. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, error aliquam culpa cumque provident ea sapiente deleniti iure dolorum.
        </p>
      </section>
      <section>
        <div className="wrapper">
          <h2>Get in Contact</h2>
          <div className='socials'>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <h2>
            Greater Gold Plus-Size Vintage Pop Up
          </h2>
          <h4>
            July 3rd - 31st, 2025 <br />
            Thursday - Sunday 12 - 7pm
          </h4>
          <h4>
            Chinatown Centre <br />
            222 Spadina Ave, Unit 121 
          </h4>
        <div className="container">
          <img src={popup1} alt="" />
          <img src={popup2} alt="" />
        </div>
        </div>
      </section>
      <img src={image1} alt="" />
      <Footer/>
    </div>
  );
};

export default App;
