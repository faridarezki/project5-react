import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CreateArticle = () => {
    const [ title, setTitle ]     = useState("");
    const [ content, setContent ] = useState("");
    const [ author, setAuthor ]   = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("titre : ", title);
        console.log("content : ", content);
        console.log("author : ", author);
        }

    const handleChange = (event) => {
        console.log("target name : ", event.target.name);
        console.log("target value : ", event.target.value);

        /*if (event.target.name === "title") {
            setTitle(event.target.value);
        } else if (event.target.value === "content") { 
            setContent(event.target.value);
        } else {
            setAuthor(event.target.value);
        }
        */ 

        switch(event.target.name) {
            case "title":
                setTitle(event.target.value);
                break;
            case "content":
                setContent(event.target.value);
                break;
            case "author":
                setAuthor(event.target.value);
                break;
            // no default

        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="article.title">
                    <Form.Label>ARTICLE</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={title}
                        placeholder="Title of your article"
                />
                </Form.Group>
                <Form.Group>
                    <Form.Label>CONTENT</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        onChange={handleChange}
                        value={content}
                        placeholder="Contents of your article"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>AUTHOR</Form.Label>
                    <Form.Control
                        type="number"
                        name="author"
                        onChange={handleChange}
                        value={author}
                        placeholder="Author id"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Create Article</Button>
            
            </Form>
       </Container>
    )
};

export default CreateArticle;