import { useState } from 'react'
import porfimg from './Abhi.png'
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import Accordion from './Accordion';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='wrapper'>
        <aside className='about-left'>

          <div className='about-left-header'>
            <img src={porfimg} alt="" />
            <h2>Abhinandan</h2>
            <p>Hello,World !</p>
            <hr />
          </div>

          <div className='about-left-main'>
            <div className='person-infos'>
              <div className='information'>
                <h3><HourglassTopIcon /></h3>
                <div className='person-detals'>
                  <p>AGE</p>
                  <p>22 Years old</p>
                </div>
              </div>
            </div>
            <div className='person-infos'>
              <div className='information'>
                <h3><LocationOnIcon /></h3>
                <div className='person-detals'>
                  <p>LOCATION</p>
                  <p>Delhi, India</p>
                </div>
              </div>
            </div>
            <div className='person-infos'>
              <div className='information'>
                <h3><PersonIcon /></h3>
                <div className='person-detals'>
                  <p>PERSON TYPE</p>
                  <p>INTJ-T</p>
                </div>
              </div>
            </div>
          </div>

          <div className='about-left-footer'>
            <div className='media-icons'>
              <a href=""><GitHubIcon /></a>
              <a href=""><LinkedInIcon /></a>
              <a href=""><InstagramIcon /></a>
              <a href=""><TwitterIcon /></a>
            </div>
          </div>
        </aside>

        <main>
          <div className='about-right'>
            <div className="right-nav">
              <div className='right-nav-left'>
                <h1>About Me</h1>
                <p></p>
              </div>
              <nav>
                <ul>
                  <li><a href="">About</a></li>
                  <li><a href="">Certificate</a></li>
                  <li><a href="">Projects</a></li>
                  <li><a href="">More</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
              </nav>
            </div>

            <div className="right-header">
              <Accordion />
            </div>


            <h2 id='primary-focus'>Primary Focus</h2>
            <div className='primary-focus'>

              <div className='focus'>
                <div className="focus-left">
                  <p><LanguageIcon /></p>
                </div>
                <div className="focus-right">
                  <h2>Web development icon
                    Web Design & Development</h2>
                  <p>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
                </div>
              </div>
              <div className='focus'>
                <div className="focus-left">
                  <p><FindInPageIcon /></p>
                </div>
                <div className="focus-right">
                  <h2>Full-Stack Solutions</h2>
                  <p>Developing scalable web applications using JavaScript Frameworks, SQL Databases, PHP and Python.</p>
                </div>
              </div>
              <div className='focus'>
                <div className="focus-left">
                  <p><PhoneIphoneIcon /></p>
                </div>
                <div className="focus-right">
                  <h2>Mobile Apps & Games</h2>
                  <p>Creating and developing engaging mobile apps and games for iOS and Android devices.</p>
                </div>
              </div>
              <div className='focus'>
                <div className="focus-left">
                  <p><SignalCellularAltIcon /></p>
                </div>
                <div className="focus-right">
                  <h2>Marketing & SEO</h2>
                  <p>Using SEO and marketing strategies to boost online visibility and promote products or services.</p>
                </div>
              </div>


            </div>

            <h2 id='primary-focus'>Exploring Creativity</h2>
            <div className='primary-focus'>

              <div className='focus'>
                <div className="focus-left">
                  <p><CameraAltIcon /></p>
                </div>
                <div className="focus-right">
                  <h2>Visual Storytelling</h2>
                  <p>Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.</p>
                </div>
              </div>
              <div className='focus'>
                <div className="focus-left">
                  <p><ViewInArIcon /></p>
                </div>
                <div className="focus-right">
                  <h2>Digital Content Creation</h2>
                  <p>Creating digital elements, such as 3D models, graphics, animations, videos and AI-generated content.</p>
                </div>
              </div>



            </div>
          </div>

          <div className='languages-section'>
            <h2 id='primary-focus'>Languages</h2>
            <div className='laguages'>
              <div className='coding-languages'>
                <h3>Coding Languages</h3>
                <div className='language'>
                  <h4>JavaScript <span>90%</span></h4>
                  <p></p>
                </div>
                <div className='language'>
                  <h4>TypeScript <span>70%</span></h4>
                  <p></p>
                </div>
                <div className='language'>
                  <h4>CSS <span>95%</span></h4>
                  <p></p>
                </div>
                <div className='language'>
                  <h4>React <span>60%</span></h4>
                  <p></p>
                </div>
                <div className='language'>
                  <h4>HTML <span>100%</span></h4>
                  <p></p>
                </div>
              </div>
              <div className='human-languages'>
                <h3>Human Languages</h3>
                <div className='language'>
                  <h4>English <span>Fluent</span></h4>
                  <p></p>
                </div>
                <div className='language'>
                  <h4>Hindi <span>Fluent</span></h4>
                  <p></p>
                </div>
                <div className='Punjabi'>
                  <h4>Hindi <span>Basic</span></h4>
                  <p></p>
                </div>
              </div>

            </div>
          </div>

        </main>





      </div>
    </>
  )
}

export default App
