
import React from 'react';
import {  Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function info() {
    
    return (
        <Container >
            <Button
                as={Link} to="/" 
            >
                Close
            </Button>
            <p classname="align-items-center">fsdfsdfsfsdfsdf</p>
        </Container>
           
    );
}

export default info;