import './App.css';
import Link from './components/Link';
import CategoryHeader from './components/CategoryHeader';
import projects from './data/projects';
import socials from './data/social';


function App() {
  const categories = ["Websites", "Tools", "Games"];

  

  const deploySocial=()=>{
    return socials.map((social)=>{
      return <div className='socialDiv'>
        <a href={social.link} target='_blank'><img id={`${social.name}_img`} className='socialDiv_img' src={social.image} alt={social.name}/></a>
      </div>
    })
  }

  const deployProjects=()=>{
    return categories.map((category)=>{
      return <div className='categoriesSubDivs'>
          <CategoryHeader headerName={category}/>
          <div className='linksDeployDiv'>
            {projects.map((val)=>{
              if(val.category === category){
                return <Link link={val.link} name={val.name} image={val.image} desc={val.desc} lang={val.lang}/>
              }
            })}
          </div>
        </div>
    })
  }

  return (
    <div className="App">
      <div id="div1">
        <div className='top_section'>
          <div className='socials_mainDiv'>
            {deploySocial()}
          </div>
          <h1 id='mainHeader'>Lioz Jason Ralston Hen - My Projects</h1>
        </div>
        <div id='categoriesMainDiv'>
          {deployProjects()}
        </div>
      </div>
      <div id='rightsDiv'>
        <p id='rightsP'>&reg; JasonR95</p>
      </div>
    </div>
  );
}

export default App;
