import { useEffect, useState } from "react";
import SeeTheCart from "./SeeTheCart";
import SingleMovie from "./SingleMovie";
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Loader from "./Loader";
import MoviesForm from "./MoviesForm";

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
  const [error, setError] = useState(null);
  const [addMovie, setAddMovies] = useState([]);
  const [deleteMovies, setDeleteMovies] = useState();
  const [showForm, setShowForm] = useState(false);
  
 
//   async function FetchMovie() {

//     ShowLoading();
//     setError(null);
    
//     try {
      
  
      
//        const  fetchedData = await fetch("https://swapi.dev/api/films");
      

      
      
//       if (!fetchedData.ok) {
//         throw new Error("Something went wrong ....Retrying")
//       }

//     const fetchedDatajson = await fetchedData.json();

//     const transformedMovies = fetchedDatajson.results.map((movieData) => {
//           return (
//             {
//               id: movieData.episode_id,
//               title: movieData.title,
//               imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
//               price: 100,

//             }
//           )
//     })
   
//     setShowMovies(transformedMovies);
//       ShowMovies();
//     }
    
//     catch (error){
//       setError(error.message);
//     }
    
// }

  
  // useEffect(() => {
    
  //   const fetchMovies = async () => {
  //     setIsLoading(true);
      
  //     try {
  //       const fetchedData = await fetch("https://swapi.dev/api/films");
       
  //       if (!fetchedData.ok) {
  //         throw new Error("something went wrong ....")
  //       }

  //       const fetchedDatajson = await fetchedData.json();
    
  //       const transformedMovies = fetchedDatajson.results.map((movieData) => {
  //         return (
  //           {
  //             id: movieData.episode_id,
  //             title: movieData.title,
  //             imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  //             price: 100,

  //           }
  //         )
  //       })
  //       setShowMovies(transformedMovies);
  //     }
  //     catch (error) {
  //       setError(error.message);
  //     }
  //    setIsLoading(false);
  //   }
  //   fetchMovies();
    
  //   },[])
  
  
  
  //  function ShowLoading() {
  //   setIsLoading(true);
  // }

  // function ShowMovies() {
  //   setIsLoading(false);
  // }


  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {

        const databaseMovies = await fetch("https://movies-e-commerce-default-rtdb.firebaseio.com/movies.json");

        if (!databaseMovies.ok) {
          throw new Error("Something Went Wrong");
        }

        const data = await databaseMovies.json();

        const tranformedMovies = [];

        for (const key in data) {
          tranformedMovies.push({
            title: data[key].title,
            price: data[key].price,
            id: key,
          })
        }
        setShowMovies(tranformedMovies);
      }
      
      catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchMovies();

  },[addMovie,deleteMovies])

  function ShowFormhandler() {
    setShowForm(true);
  }

  function dontShowFormhandler() {
    setShowForm(false);
  }

    return (
        <>
        <h2 className="text-center fs-1 fw-bold text-dark mb-4 mt-5">Movies</h2>

        {showForm&&<MoviesForm setAddMovies={setAddMovies}></MoviesForm>}
        {!showForm&&<Button variant="dark" onClick={ShowFormhandler} >Add</Button>}
        {showForm&&<Button variant="dark" onClick={dontShowFormhandler} > Hide</Button>}
 
        {error && <p>{error}</p>}

        {isLoading && <Loader></Loader>}

    {!isLoading &&<Row className="m-5">
      {showMovies.map((singeitem, index) => (
        <SingleMovie key={index} singeitem={singeitem} setDeleteMovies={setDeleteMovies} />
      ))}
            </Row>}
            <div className="d-flex justify-content-center mt-4 mb-4">
          <SeeTheCart showCartHandler={showCartHandler} />
        </div>
        {/* <Button variant="success" onClick={FetchMovie}>Fetch</Button> */}
           
            </>
  );
    
}
export default AvailableMovies;

