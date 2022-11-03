import React from 'react'
import { Button, Card, Col, Container, Form, Row, Stack } from 'react-bootstrap'


export default function LoginPage() {
  return (
    <Container className='w-100'>
        <Row>
            <Col className='left-rect'></Col>
            <Col className='right-rect'>
                <div>
                    <img className='logo mt-5' src={require('../images/RadicallX-Black-Logo 1.png')} alt='radicalX-logo'></img>
                </div>
                <div className="loginForm">
                    <Card>
                        <Card.Body>
                        <Form>
                        <h5>Login</h5>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className='w-100 d-flex text-center mb-1 f-password'>
                                <Stack direction="horizontal" gap={2}></Stack>
                                <div className=''><Form.Check type="checkbox" label="Remember Me" /></div>
                                <div className="ms-auto"><a href='#'>Forgot password</a></div>
                            </div>
                            <Button type='submit' className='w-100 button' style={{background: "#793EF5"}}>Submit</Button>
                    </Form>
                        </Card.Body>
                    </Card>
                    
                </div>
            </Col>
        </Row>
    </Container>
    
  )
}
