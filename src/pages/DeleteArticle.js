import React, { useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const DeleteArticle = () => {
    const  [ id, setId] = useState("");

    const handleSubmit = (event ) => {
        event.preventDefault();

        console.log("id : ", id);
    }

    const  handleChange = (event) => {
        switch (event.target.name) {
            case "id":
                setId(event.target.value);
                break;
            // no default
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="article.title">
                    <Form.Label>ARTICLE TO DELETE</Form.Label>
                    <Form.Control
                        type="number"
                        name="id"
                        onChange={handleChange}
                        value={id}
                        placeholder="id Article to delete"
                    />
                </Form.Group>
                <Button type="submit">Delete Article</Button>
            </Form>
        </Container>
    );
}

export default DeleteArticle;