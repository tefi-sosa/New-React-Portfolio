import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ImageCarousel from './Carousel'

export default function ProjectCard() {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>OSSIRA</Accordion.Header>
        <Accordion.Body>
          <p>Developed an eCommerce site that features a modern user interface for efficient search, purchase of products, and management of purchases/wishlist items</p>
          <hr />
          <p>
          React | Redux | Hooks | ReactRouter | JWT | CSS | JavaScript | Axios | Express | Sequelize | Node.js | Formik | Bcrypt.js | PostgreSQL | Heroku
          </p>
          <ImageCarousel/>        
        </Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>WANDERLUST</Accordion.Header>
        <Accordion.Body>
          <p>
          Developed a hiking application specific to the geographical location of Argentina to facilitate convenience and awareness surrounding hiking trails in the area
          </p>
          <hr />
          <p>HTML | CSS | JavaScript | Bootstrap | Axios | Express | Node.js | PostgreSQL | Heroku</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
