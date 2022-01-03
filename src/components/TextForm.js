import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
export default function TextForm(props) {
  const [text, setText] = useState("");
  function handleOnChange(event) {
    // console.log(" workinghandleOnChange" + event.target.value);
    let textChange = event.target.value;
    setText(textChange);
  }
  function handleUpChange(event) {
    // console.log("working handleUpChange");
    let textUpChange = text.toUpperCase();
    setText(textUpChange);
  }
  function handleLoChange(event) {
    // console.log("working handleUpChange");
    let textLoChange = text.toLowerCase();
    setText(textLoChange);
  }

  return (
    <div
      style={{
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <Form className="my-3">
        <Container style={{ textAlign: "left" }}>
          <h2>Enter the text to analyse </h2>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              as="textarea"
              rows={8}
              value={text}
              onChange={handleOnChange}
            />
          </Form.Group>
        </Container>
        <Button onClick={handleUpChange} className="mx-2">
          Update to Uppercase
        </Button>
        <Button onClick={handleLoChange} className="mx-2">
          Update to Lowercase
        </Button>
      </Form>
      <Container style={{ textAlign: "left" }}>
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length - 1} Words & {text.length} Characters
        </p>
        <p>
          <strong>{0.08 * text.split(" ").length}</strong> minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </Container>
    </div>
  );
}
