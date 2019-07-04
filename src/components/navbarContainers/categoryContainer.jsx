import React, { Component } from "react";
import "./categoryContainer.css";
import { Container, Row, Col } from "react-bootstrap";
import Translate from "translate-components";

class CategoryContainer extends Component {
  state = {};
  render() {
    return (
      <Container
        className="card"
        // onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.props.handleMouseHover}
      >
        <Row className="card-body">
          <Col>
            <li>
              <a href="" className="categoryHeader">
                <Translate useRawText={true}>Sweets</Translate>
              </a>
            </li>
            <li>
              <a href="">Pure Bengali</a>
            </li>
            <li>
              <a href="">Pure Rajasthani</a>
            </li>
            <hr />
            <li>
              <a href="" className="categoryHeader">
                <Translate useRawText={true}>Beverages</Translate>
              </a>
            </li>
            <li>
              <a href="">Tea</a>
            </li>
          </Col>
          <Col>
            <li>
              <a href="" className="categoryHeader">
                <Translate useRawText={true}>Fruits and Vegetables</Translate>
              </a>
            </li>
            <li>
              <a href="">Exotic Veg</a>
            </li>
            <li>
              <a href="">Regular Veg</a>
            </li>
            <li>
              <a href="">Exotic Fruits</a>
            </li>
            <hr />
            <li>
              <a href="" className="categoryHeader">
                <Translate useRawText={true}>Bakery</Translate>
              </a>
            </li>
          </Col>
          <Col>
            <li>
              <a href="" className="categoryHeader">
                <Translate useRawText={true}>Spices</Translate>
              </a>
            </li>
            <hr />
            <li>
              <a href="" className="categoryHeader">
                <Translate useRawText={true}>Food Grains</Translate>
              </a>
            </li>
          </Col>
          <Col>
            <li>
              <a href="" className="categoryHeader">
                <Translate useRawText={true}>Cooked Food</Translate>
              </a>
            </li>
            <hr />
            <li>
              <a href="" className="categoryHeader">
                <Translate useRawText={true}>Raw and Fresh</Translate>
              </a>
            </li>
          </Col>
          <Col>
            <li>
              <a href="" className="categoryHeader">
                <Translate useRawText={true}>Street Food</Translate>
              </a>
            </li>
            <hr />
            <li>
              <a href="" className="categoryHeader">
                <Translate useRawText={true}>Accompaniments</Translate>
              </a>
            </li>
          </Col>
          <Col>
            <li>
              <a href="" className="categoryHeader">
                <Translate useRawText={true}>Organic</Translate>
              </a>
            </li>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CategoryContainer;
