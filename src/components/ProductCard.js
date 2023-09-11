import {Card, Form, Col, Row, Button} from "react-bootstrap"

const ProductCard = (props) => {
    const product = props.product;


  return (
    <Card>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="primary">Add To Cart</Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard