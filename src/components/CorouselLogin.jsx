import React from "react";
import { Carousel } from "react-bootstrap";

function CorouselLogin() {
  return (
    <div style={{ width: "100%" }}>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ borderRadius: "10px" }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1614583225154-5fcdda07019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWUlMjBqYXBhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ borderRadius: "10px" }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1511360823-5c672a170787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWUlMjBqYXBhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ borderRadius: "10px" }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWUlMjBqYXBhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CorouselLogin;
