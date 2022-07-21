import React from 'react'
import { useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup,Card } from 'react-bootstrap'
import Review from './Review'

function RestaurantDetails() {

  const [restaurants, setRestaurantDetails] = useState([])
  const params = useParams()

  async function fetchData() {
    await fetch('/restaurants.json')
      .then((data) => data.json())
      .then((res) => setRestaurantDetails(res.restaurants))


  }
  useEffect(() => {
    fetchData()
  }, [])

  const details = restaurants.find((item) => item.id == params.id)

  console.log(details)

  return (
    <>
    <Link className="btn btn-outline-dark my-2 rounded btn-sm" to="/">Back</Link>
    {


      details ? (
        < Row className="my-3">
          <Col md={3}>
            <Image className="img" src={details.photograph} alt={details.name} fluid></Image>
          </Col>
          <Col md={4} >
            <ListGroup.Item>
              <h2>{details.name}</h2>
              <p>{details.neighborhood}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Cusine Type:{details.cuisine_type}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Address:{details.address}</p>
            </ListGroup.Item>
          </Col>
          <Col md={4}>
        <ListGroup.Item>
          <h4>Operating Hours :</h4>
          <p>Monday : {details.operating_hours.Monday}</p>
          <p>Tuesday : {details.operating_hours.Tuesday}</p>
          <p>Wednesday : {details.operating_hours.Monday}</p>
          <p>Thursday : {details.operating_hours.Monday}</p>
          <p>Friday : {details.operating_hours.Monday}</p>
          <p>Saturday : {details.operating_hours.Monday}</p>
          <p>Sunday : {details.operating_hours.Monday}</p>

        </ListGroup.Item>
      </Col>
      <Row>

      </Row>
        <Card className="my-3 mx-3 p-3 rounded card" >
        <Review data={details.reviews} />
        </Card>
          </Row>
        ) : 'null'
  
    }
     </>
 )
}










      export default RestaurantDetails