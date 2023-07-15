import React from 'react';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
           <p>&lt;Portfolio /&gt;</p>
          </div>
          <div className="social">
            <a href="https://www.youtube.com/@whynotkami?sub_confirmation=1" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/WhyNotKami" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Getting Things ready for Portfolio.</h1>
            <p>Portfolio coming soon. Shoot us an email if you wanna hire me.</p>
            <p>Or dm me on discord - notkami.#0000</p>
          </div>
          <div class="horiontal-button-group">
            <a href="mailto:notk4mi@gmail.com">
              <div className="cta">Send us an email</div>
            </a>
            <a href="https://github.com/WhyNotKami">
              <div className="cta"> Visit My GitHub</div>
            </a>
            <a href="https://instagram.com/notk4mi">
              <div className="cta"> Follow on Instagram!</div>
            </a>
          </div>
        </div>
        <div className="footer">
          <span>
            Made with ❤️ in Montreal QC 📍by <a className="underlined" href="https://github.com/WhyNotKami" target="_blank" rel="noopener noreferrer">NotKami</a> and <a className="underlined" href="https://www.youtube.com/@whynotkami?sub_confirmation=1" target="_blank" rel="noopener noreferrer">YouTube</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a></span>
        </div>
      </div>
    );
  }
}

export default App;