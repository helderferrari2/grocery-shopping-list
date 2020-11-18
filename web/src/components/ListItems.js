import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { BsPencil, BsX } from "react-icons/bs";

const ListItems = ({ items }) => {
  return (
    <div className="w-100 ">
      <Row className="my-3">
        <Col>1 de 12 items</Col>
        <Col className="text-center">
          <strong>Total: $12,50</strong>
        </Col>
        <Col>
          <Form.Control size="sm" as="select">
            <option>Category</option>
            <option>A - Z</option>
            <option>Z - A</option>
          </Form.Control>
        </Col>
      </Row>

      <Row>
        <table className="table mx-3">
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <Form.Check
                    custom
                    type={"checkbox"}
                    defaultChecked={item.completed}
                    onChange={() => console.log("aq")}
                    label={item.name}
                  />
                </td>
                <td>{item.category}</td>
                <td className="text-right">
                  <div className="list-items-actions">
                    <a href="#" onClick={() => window.alert("editar")}>
                      <BsPencil />
                    </a>

                    <a href="#" onClick={() => window.alert("Deletar")}>
                      <BsX />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>
    </div>
  );
};

export default ListItems;
