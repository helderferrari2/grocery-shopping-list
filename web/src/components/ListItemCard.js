import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { BsPencil, BsX } from "react-icons/bs";

const ListCard = ({ item }) => {
  return (
    <div className="list-card">
      <Row>
        <Col>
          <Form.Check
            custom
            type={"checkbox"}
            defaultChecked={item.completed}
            onChange={() => console.log("aq")}
            label={item.name}
          />
        </Col>

        <Col>Category</Col>

        <Col>
          <div className="list-card-actions">
            <a href="#" onClick={() => window.alert("editar")}>
              <BsPencil />
            </a>

            <a href="#" onClick={() => window.alert("Deletar")}>
              <BsX />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ListCard;
