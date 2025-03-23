import { useState } from "react";
import SeeTheCart from "./SeeTheCart";
import SingleMovie from "./SingleMovie";
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Loader from "./Loader";

const productsArr = [

{

title: 'Colors',

price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    id: 1,

},

{

title: 'Black and white Colors',

price: 50,

  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

  id:2,

},

{

title: 'Yellow and Black Colors',

price: 70,

  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  id:3,

},

{

title: 'Blue Color',

price: 100,

  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

  id:4,

}

]


function AvailableMovies({ showCartHandler}) {

  const [showMovies, setShowMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  async function FetchMovie() {

    ShowLoading();

    const fetchedData = await fetch("https://swapi.dev/api/films");

    const fetchedDatajson = await fetchedData.json();

    const transformedMovies = fetchedDatajson.results.map((movieData) => {
          return (
            {
              id: movieData.episode_id,
              title: movieData.title,
              imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
              price: 100,

            }
          )
    })
   
    setShowMovies(transformedMovies);
     ShowMovies();

   
  }

   function ShowLoading() {
    setIsLoading(true);
  }

  function ShowMovies() {
    setIsLoading(false);
  }

    return (
        <>
        <h2 className="text-center fs-1 fw-bold text-dark mb-4 mt-5">Movies</h2>
        {isLoading && <Loader></Loader>}

    {!isLoading &&<Row className="m-5">
      {showMovies.map((singeitem, index) => (
        <SingleMovie key={index} singeitem={singeitem} />
      ))}
            </Row>}
            <div className="d-flex justify-content-center mt-4 mb-4">
          <SeeTheCart showCartHandler={showCartHandler} />
        </div>
        <Button variant="success" onClick={FetchMovie}>Fetch</Button>
            </>
  );
    
}
export default AvailableMovies;

