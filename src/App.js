import './App.css';
import Link from './components/Link';
import image1 from './images/garage_image.png';
import image2 from './images/sudoku_image.png';
import image4 from './images/cards_image.png';
import image5 from './images/solar_system.png';
import image6 from './images/to-do-list_image.png';
// import image3 from './images/bankApp_image.png';
// import image5 from './images/calc_image.png';

function App() {
  const links = [
    {
      name:'Garage manager',
      link:"https://jasonrlh95.github.io/garage_app/",
      image:image1,
      desc:"Responsive mobile/web site for managing a car issues and repairs history"
    },
    {
      name:"To-Do list",
      link:"https://jasonrlh95.github.io/to_do_list/",
      image:image6,
      desc:"To do list project on react - non-responsive(yet)"
    },
    {
      name:'Solar system webpage',
      link:"https://jasonrlh95.github.io/solar_system/",
      image:image5,
      desc:'A great travel into out of space - non-responsive webpage(yet)'
    },
    {
      name:'Cards war game',
      link:"https://jasonrlh95.github.io/cards_game_app/",
      image:image4,
      desc:'War card game against the computer responsive for web/mobile - let the best wins!'
    },
    {
      name:'Sudoku game',
      link:"https://jasonrlh95.github.io/sudoku/",
      image:image2,
      desc:'Responsive web/mobile sudoku game, first there is a login page, then dufficulty level choosing and then the famous familiar game'
    },
    // {
    //   name:'Bank expenses app',
    //   link:'https://jasonrlh95.github.io/bankApp/',
    //   image:image3,
    //   desc:'Expenses management responsive mobile/web site'
    // },
    // {
    //   name:'event calculator',
    //   link:"https://jasonrlh95.github.io/event_calc_app/",
    //   image:image5,
    //   desc:'A calculator web/app responsively that calculate for events hall workers how many baskets of wine cups/egg cups/plates they need relative to the amount of tables/clients per event'
    // },
  ]
  return (
    <div className="App">
      <div id="div1">
        <h1 id='mainHeader'>My Projects</h1>
        <div id='linksMainDiv'>
          {links.map((val)=>{
            return <Link link={val.link} name={val.name} image={val.image} desc={val.desc}/>
          })}
        </div>
      </div>
      <div id='rightsDiv'>
        <p id='rightsP'>&reg; JasonR95</p>
      </div>
    </div>
  );
}

export default App;
