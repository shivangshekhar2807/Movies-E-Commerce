import Button from 'react-bootstrap/Button';

function SeeTheCart({ showCartHandler }) {
    
  function fetchmovie() {
    fetch("https://swapi.dev/api/films")
        .then((res) => res.json()) 
        .then((data) => {
            console.log(data.results[0].title); 
        })
        .catch((err) => {
            console.log(err); 
        });
}

    return <>  <Button variant="primary" onClick={showCartHandler}>See the Cart</Button>
        <button onClick={fetchmovie}>movie</button>
        </>
}
export default SeeTheCart;