import './App.css';
import Link from './components/Link';
import CategoryHeader from './components/CategoryHeader';

import githubImg from './images/github_black_and_white.jpg';
import whatsappImg from './images/whatsapp_black_and_white.jpg';
import linkedinImg from './images/linkedin_black_and_white.jpg';
import cvImg from './images/CV_logo.jpg';

import image1 from './images/garage_image.png';
import image2 from './images/sudoku_image.png';
import image3 from './images/cards_image.png';
import image4 from './images/solar_system.png';
import image5 from './images/to-do-list_image.png';
import image6 from './images/calulator_app_image.png';

function App() {
  const categories = ["Websites", "Tools", "Games"];
  const links = [
    {
      name:'Garage manager',
      link:"https://jasonrlh95.github.io/garage_app/",
      image:image1,
      desc:"Garage clients managing site",
      category:"Websites",
      lang: "[ React ]"
    },
    {
      name:"To-Do list",
      link:"https://jasonrlh95.github.io/to_do_list/",
      image:image5,
      desc:"To do list",
      category:"Tools",
      lang: "[ React ]"
    },
    {
      name:'Solar system webpage',
      link:"https://jasonrlh95.github.io/solar_system/",
      image:image4,
      desc:'A travel into out of space',
      category:"Websites",
      lang: "[ HTML + CSS ]"
    },
    {
      name:'Cards war game',
      link:"https://jasonrlh95.github.io/cards_game_app/",
      image:image3,
      desc:'Cards game against the computer',
      category:"Games",
      lang: "[ React ]"
    },
    {
      name:'Sudoku game',
      link:"https://jasonrlh95.github.io/sudoku/",
      image:image2,
      desc:'Sudoku game with login page and difficulty level',
      category:"Games",
      lang: "[ JS + HTML + CSS ]"
    },
    {
      name:'Calculator app',
      link:"https://jasonrlh95.github.io/calculator_app/",
      image:image6,
      desc:"Simple calculator application, web&mobile",
      category:"Tools",
      lang: "[ JS + HTML + CSS ]"
    }
  ]
  
  const socials = [
    {
      name:"CV",
      link:"https://1drv.ms/b/s!AqCLzuoJYnbkuMs_rNpLMYb9ZXgemw?e=yBWq6L",
      image:cvImg,
    },
    {
      name:"github",
      link:"https://github.com/JasonRLH95",
      image:githubImg,
    },
    {
      name:"linkedin",
      link:"https://www.linkedin.com/in/lioz-jason-ralston-hen-73a928165",
      image:linkedinImg,
    },
    {
      name:"whatsapp",
      link:"https://wa.me/0507170101",
      image:whatsappImg,
    }
  ];

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
            {links.map((val)=>{
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
