import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import ListCard from "../components/ListCard";

const ShoppingLists = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    fetchShoppingLists();
  }, []);

  const fetchShoppingLists = () => {
    let items = [
      { id: 1, name: "Lista 1", completed: true },
      { id: 2, name: "Lista Condor", completed: false },
      { id: 3, name: "Lista Carrefour", completed: false },
      { id: 4, name: "Lista mercado 20/2010", completed: false },
      { id: 5, name: "List", completed: false },
      { id: 6, name: "List", completed: false },
      { id: 7, name: "List", completed: false },
      { id: 8, name: "List", completed: false },
      { id: 9, name: "List", completed: false },
    ];
    return setList(items);
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col lg={8}>
          <Card>
            <Card.Body>
              <Card.Title>Add new List</Card.Title>
              {/* Form */}
              <Form>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control mr-2"
                    placeholder="Type for a new list..."
                  ></input>
                  <button className="btn btn-primary">Add</button>
                </div>
              </Form>
              {/* End form */}

              <div className="shopping-lists">
                <ul>
                  {list.map((item) => (
                    <li key={item.id}>
                      <ListCard item={item}></ListCard>
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingLists;
