import React, { useState } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import './style.scss'


const Comments = () => {
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  function handleComment() {
    if (user !== '' && comment !== '') {
      const data = {
        id: allComments.length,
        user,
        comment
      };
      setAllComments([...allComments, data]);

      setComment('');
      setUser('');
    }
  }

  function handleDelete(id) {
    const comments = allComments.filter((comment) => comment.id !== id)
    setAllComments(comments)
  }

  return (
    <Container>
      <h2>Yorumlar</h2>
      <Row>
        <Col className='all-comments'>
          {allComments.length > 0 &&
            allComments.map((comment) => {
              return (
                <ListGroup horizontal='lg' className="my-2" key={'1'}>
                  <ListGroup.Item>{comment.user} </ListGroup.Item>
                  <ListGroup.Item>{comment.comment}</ListGroup.Item>
                  <ListGroup.Item onClick={() => handleDelete(comment.id)} > <Button variant="danger">Sil</Button>{' '}</ListGroup.Item>
                </ListGroup>
              )
            })
          }
        </Col>
      </Row>
      <Row>
        <h5>
          Yorum Yap
        </h5>
      </Row>
      <Row>
        <Col className='comments'>
          <InputGroup className="mb-3">
            <InputGroup.Text>İsim Soy ismi</InputGroup.Text>
            <FormControl
              value={user}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => setUser(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Yorumunuz</InputGroup.Text>
            <FormControl
              value={comment}
              aria-label="With textarea"
              onChange={(e) => setComment(e.target.value)}
            />
          </InputGroup>
          <Button className="btnsubmit" variant="success" onClick={() => handleComment()}>Gönder</Button>
        </Col>
      </Row>
    </Container>
  )
};

export default Comments
