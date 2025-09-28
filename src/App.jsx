import { useState } from "react";
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
  const [username, setUsername] = useState("");
  const [userdata, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

const fetchRepos = async () => {
  if (!username) return; // se não tiver username, não faz nada

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await res.json();
    setRepos(data); // salva os repositórios no estado
  } catch (error) {
    console.error("Erro ao buscar repositórios:", error);
  }
};


  const fetchUserData = async() => {
    if(!username) return

    try{
      const res = await fetch(`https://api.github.com/users/${username}`)
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.error("erro ao buscar usuário", error)
    }
  }

const handleSearch = async () => {
  if(!username){
    setUserData(null)
    setRepos([])
  }
  await fetchUserData(); // busca dados do usuário
  await fetchRepos();     // busca os repositórios
};


  return (
    <div className='container' >

      <div className='input'>
        <button className='btnIcon' onClick={handleSearch} >
          <img id="lupa-icon" src={lupaIcon} alt="icone de lupa" />
        </button>
          <input id='input' type="text" placeholder='Search the username here' value={username} onChange={(e) => setUsername(e.target.value)}  onKeyDown={(e) => {
    if (e.key === "Enter") handleSearch(); 
  }} />

        <div className='boxInfo'>
          <div id='profile'>
            <img className="profile2" src={userdata?.avatar_url || profile2} alt="" />
            <img className="profile" src={profile} alt="" />
          </div>

          <p>@{userdata ? userdata.login : "username"}</p>

          <div className='boxBtn'>
            <button id='btngithub'>
              <a className='link3'href={userdata?.html_url || "Não informado"} target="_blank" rel="noopener noreferrer" >On github</a>
            </button>
          </div>

          <img id='linha'src={linha} alt="" />

          <div className='boxMedia'>
            <Component
            img={iconLocation}
            title="LOCATION"
            subtitle={userdata?.location || "Não especificado"}
            />
            <Component
            img={iconEmail}
            title="EMAIL"
            subtitle={userdata?.email || userdata?.blog || "Não especificado"}
            link={userdata?.email || userdata?.blog}
/>

            <Component
            img={inIconn}
            title="LINKEDIN"
            subtitle={"Não especificado"}
            link={userdata?.twitter_username ? `https://linkedin.com/in/${userdata.twitter_username}` : undefined}
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
    <img className='linha2' src={linhaRep} alt="" />

    {repos.length === 0 ? (
      <div className='noRep'>
        <img className='emptyIcon' src={emptyIcon} alt="" />
        <span className="noRep">search for a username <br /> and the repositories will appear</span>
      </div>
    ) : (
      <div className='repoGrid'>
        {repos.map(repo => (
          <div key={repo.id} className='repoCard'>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className='repoName'>
              {repo.name}
            </a>
            {repo.description && <p className='repoDesc'>{repo.description}</p>}
            {repo.language && <span className='repoLang'>{repo.language}</span>}
            <span className='repoStars'>⭐ {repo.stargazers_count}</span>
          </div>
        ))}
      </div>
    )}
  </div>
</div>



    </div>
  )
}

export default App
