import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Item = ({item}) => {
    
    const {nombre, precio, imagen, categoria, id} = item

  return (
    <Card className="m-auto text-center" style={{ width: '18rem' }}>
      <Card.Img 
        variant="top" 
        src={imagen}
        alt={categoria}
        width={100}
        height={200}
        />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>$ {precio}</Card.Text>
        <Button variant="dark"><Link to={`/details/${id}`}>Detalles</Link></Button>
      </Card.Body>
    </Card>
  )
}

export default Item