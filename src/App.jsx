import './App.css'
import lupaIcon from './assets/lupaIcon.svg'
import profile from './assets/profile.svg'
import profile2 from './assets/profile2.svg'
import linha from './assets/linha.svg'
import iconLocation from './assets/iconLocation.svg'
import Component from './components/Component'
import iconEmail from './assets/emailIcon.svg'
import inIconn from './assets/inIconn.svg'
import iconCopyright from './assets/iconCopyright.svg'
import linhaRep from './assets/linhaRep.svg'
import emptyIcon from './assets/emptyIcon.svg'


function App() {
  return (
    <div className='container' >

      <div className='input'>
        <button className='btnIcon'>
          <img id="lupa-icon" src={lupaIcon} alt="icone de lupa" />
        </button>
          <input id='input' type="text" placeholder='Search the username here' />

        <div className='boxInfo'>
          <div id='profile'>
            <img className="profile2" src={profile2} alt="" />
            <img className="profile" src={profile} alt="" />
          </div>

          <p>@username</p>

          <div className='boxBtn'>
            <button id='btngithub'>
              <a className='link3'href="#">On github</a>
            </button>
          </div>

          <img id='linha'src={linha} alt="" />

          <div className='boxMedia'>
            <Component
            img={iconLocation}
            title="LOCATION"
            subtitle="Brazil"
            />
            <Component
            img={iconEmail}
            title="EMAIL"
            subtitle="example@gmail.com"
            />
            <Component
            img={inIconn}
            title="LINKEDIN"
            link="in/example" 
            />
          </div>

           <img id='linha'src={linha} alt="" />

          <div className='boxCopyright'>
            <img src={iconCopyright} alt="" />
           <span className='span'>2025</span>
           <a className='link2' href="https://www.instagram.com/_alencrx/">_alencrx</a>
          </div>

        </div>
      </div>
        <div className='boxRep'>
          <div id='boxRep'>
            <h2 className='infoRep'>Repositories</h2>
              <img className='linha2'src={linhaRep} alt="" />
              <img className='emptyIcon'src={emptyIcon} alt="" />
              <span className='noRep'>search for a username  <br /> and the repositories will appear</span>
          </div>
        </div>
    </div>
  )
}

export default App
