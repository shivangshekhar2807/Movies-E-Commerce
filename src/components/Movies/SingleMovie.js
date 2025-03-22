import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import './SingleMovie.css';
function SingleMovie({singeitem}) {
   return (
    <Col sm={12} md={6} lg={4} xl={3} className="mb-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={singeitem.imageUrl}  className="zoom-img"/>
        <Card.Body>
          <Card.Title>{singeitem.title}</Card.Title>
          <Card.Text>
            {`$${singeitem.price}`}
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
    
}
export default SingleMovie;
