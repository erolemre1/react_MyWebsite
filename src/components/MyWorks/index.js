import React, { useState, useEffect } from 'react'
import { myWorks } from './myworks'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import './style.scss'
import { Link } from "react-router-dom";

const MyWorks = () => {
  return (
    <Container>
      <h2>My Works</h2>
      <Row>
        <Col className='my-works'>
          {myWorks &&
            myWorks.map((myWork) => {
              return (
                <Card style={{ width: '18rem' }} key={myWork.id}>
                  <Card.Img variant="top" src={myWork.imgUrl} />
                  <Card.Body>
                    <Card.Title>{myWork.title}</Card.Title>
                    <Card.Text>
                      {myWork.description}
                    </Card.Text>
                    <a href={myWork.url} target="_blank">
                      <Button variant="primary">Projeye Git</Button>
                    </a>
                  </Card.Body>
                </Card>
              )
            })
          }
        </Col>

      </Row>
      <h2>Diğer projelerimi incelemek için <a href="https://github.com/erolemre1"> tıklayınız. <i class="fab fa-github"></i> </a>  </h2>
    </Container>
  )
};

export default MyWorks
