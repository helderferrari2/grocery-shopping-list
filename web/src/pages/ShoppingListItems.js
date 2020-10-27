import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import ListItemCard from "../components/ListItemCard";

const ShoppingListItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    fetchShoppingListItems();
  }, []);

  const fetchShoppingListItems = () => {
    let items = [
      { id: 1, quantity: 1, name: "Arroz", completed: true, value: 12.5 },
      { id: 2, quantity: 3, name: "Feijão", completed: false, value: 2.5 },
      { id: 3, quantity: 10, name: "Geladeira", completed: true, value: 9.99 },
      { id: 4, quantity: 1, name: "Leite C", completed: true, value: 9.99 },
      { id: 5, quantity: 1, name: "Leite", completed: true, value: 9.99 },
      { id: 6, quantity: 1, name: "Pinga", completed: true, value: 9.99 },
      { id: 7, quantity: 1, name: "Danone", completed: true, value: 998.99 },
    ];
    return setItems(items);
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Add Item</Card.Title>
              {/* Form */}
              <Form>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control mr-2"
                    placeholder="Type for a new item..."
                  ></input>
                  <button className="btn btn-primary">Add</button>
                </div>
              </Form>
              {/* End form */}

              <div className="shopping-lists">
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <ListItemCard item={item}></ListItemCard>
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

export default ShoppingListItems;
