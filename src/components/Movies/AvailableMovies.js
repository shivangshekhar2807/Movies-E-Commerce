import SeeTheCart from "./SeeTheCart";
import SingleMovie from "./SingleMovie";
import { Row, Col } from 'react-bootstrap';

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


function AvailableMovies() {

    return (
        <>
             <h2 className="text-center fs-1 fw-bold text-dark mb-4 mt-5">Movies</h2>
    <Row className="m-5">
      {productsArr.map((singeitem, index) => (
        <SingleMovie key={index} singeitem={singeitem} />
      ))}
            </Row>
            <div className="d-flex justify-content-center mt-4 mb-4">
          <SeeTheCart />
            </div>
            </>
  );
    
}
export default AvailableMovies;

