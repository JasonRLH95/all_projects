import './App.css';
import Link from './components/Link';
import image1 from './images/calc_image.png';
import image2 from './images/cards_image.png';
import image3 from './images/sudoku_image.png';
import image4 from './images/bankApp_image.png';

function App() {
  const links = [
    {
      name:'event calculator',
      link:"https://jasonrlh95.github.io/event_calc_app/",
      image:image1,
      desc:'A calculator web/app responsively that calculate for events hall workers how many baskets of wine cups/egg cups/plates they need relative to the amount of tables/clients per event'
    },
    {
      name:'cards game',
      link:"https://jasonrlh95.github.io/cards_game_app/",
      image:image2,
      desc:'War card game against the computer responsive for web/mobile - let the best wins!'
    },
    {
      name:'sudoku game',
      link:"https://jasonrlh95.github.io/sudoku/",
      image:image3,
      desc:'A responsive for web/mobile sudoku game, first there is a login page, then dufficulty level choosing and then the famous familiar game'
    },
    {
      name:'bank app',
      link:'https://jasonrlh95.github.io/bankApp/',
      image:image4,
      desc:'bank management app - mobile styled alike'
    }
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
