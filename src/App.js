import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import StarRating from './StarRating';

import {Routes,Route} from 'react-router-dom'
import Details from './Details';



function App() {
  const [filterTitle, setFilterTitle] = useState(''); 
  const[filterRating,setFilterRating]=useState(1)

  const [ movies,setMovie]=useState([
    { id:1,
    title :"Mon chat et Moi",
  description:" Quand Clémence, 10 ans, adopte Rroû, chaton intrépide habitué aux toits parisiens, et l'emmène dans sa maison de campagne, elle ne se doute pas qu'une grande aventure va commencer pour eux deux, à travers la nature sauvage des Vosges…",
  rating: 3.9,
  posterURL: "https://www.ugc.fr/dynamique/films/60/15160/fr/poster/large/2487016_5.jpg",
trailer:"https://youtu.be/QkVuLCXJkT0?si=Xv2078jU37DxWrib"},

  {id:2,
    title:"ponyo",
  description:"Ponyo, une petite fille poisson rouge fort curieuse du monde, est recueillie par Sosuke, 5 ans, qui habite dans une maison perchée en haut d'une falaise",
  rating:5 ,
  posterURL: "https://www.lejournaltoulousain.fr/wp-content/uploads/2021/03/ponyo-sur-la-falaise-a.jpg",
  trailer:"https://youtu.be/Syqy1MQyLL0?si=29VS6A8R1Vi2LqVH", 
},

  {id:3,
    title:"Barbie",
  description:"Barbie (Margot Robbie), the most popular of all the Barbies in Barbieland, begins experiencing an existential crisis. ",
  rating:2 ,
  posterURL:"https://fr.web.img4.acsta.net/pictures/23/06/16/12/04/4590179.jpg" ,
trailer:"https://youtu.be/JF9z-GCaZYc?si=laNh-EgLTQTXCkVw",},

  {
    id:4,
    title:"wish",
  description:" King Magnifico and his wife Queen Amaya establish the kingdom of Rosas on an island in the Mediterranean Sea.",
  rating:3 ,
  posterURL:"https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0,0,540,810" ,
  trailer:"https://youtu.be/3JuKuSLI5sw?si=xgukbGIh3whzDBAX",
},
  
  
  ])


const handleAdd = (newMovie) => {
  setMovie([...movies,newMovie]);
  }
  const filterData =(filtered)=>{
    setFilterTitle(filtered)
  }
  const filterRate =(filtRate) =>{
    setFilterRating(filtRate)
  }


return (
<div className="App " >
  <div className="container">
      <h2 style={{color : "rgb(95, 164, 229  )",fontWeight:'bold'}} > <span>T</span> O  <span>P</span> 
       M <span>O</span> V <span>I</span> E</h2>

      <input type="text" placeholder="Search" onChange={(e) => filterData(e.target.value)}/> 
      <AddMovie handleAdd={handleAdd}/>
  </div>
  <div className='star'> <StarRating filterData={filterData} filterRate={filterRate}/></div>
<Routes>
<Route path='/' element={<MovieList movie={movies.filter((movie) => movie.rating >= filterRating && movie.title.toLocaleLowerCase().includes(filterTitle.trim().toLowerCase()))}/>}/>
<Route path='/details/:id' element={<Details movie={movies} />}/>
</Routes>
</div>
);
}

export default App;