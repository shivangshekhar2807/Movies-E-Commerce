import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col,Form } from 'react-bootstrap';
import './SingleMovie.css';
import { useContext, useRef } from 'react';
import AllContext from '../Store/Store-Context';
function SingleMovie({ singeitem }) {
  
  const ContextFunction = useContext(AllContext);
  

  function handleOnSubmit(event) {
       event.preventDefault();
    const imageUrl = singeitem.imageUrl;
    const title = singeitem.title;
    const price = singeitem.price;
    const id = singeitem.id;
    

    ContextFunction.AddToCart({
      type: "ADD", payload: {
        imageUrl: imageUrl,
        title: title,
        price: price,
        id: id,
        quantity: 1,
    }})
   }

   return (
    <Col sm={12} md={6} lg={4} xl={3} className="mb-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={singeitem.imageUrl}
          className="zoom-img"
        />
        <Card.Body>
          <Card.Title>{singeitem.title}</Card.Title>
          <Card.Text>{`$${singeitem.price}`}</Card.Text>

          {/* Form inside Card.Body */}
          <Form onSubmit={handleOnSubmit}>
            <Button type="submit" variant="primary">
              Add to Cart
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
    
}
export default SingleMovie;
