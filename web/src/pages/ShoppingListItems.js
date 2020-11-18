import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import ListItemCard from "../components/ListItemCard";
import ListItems from "../components/ListItems";

const ShoppingListItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    fetchShoppingListItems();
  }, []);

  const fetchShoppingListItems = () => {
    let items = [
      { id: 1, quantity: 1, name: "Arroz", completed: true, category: "Mercearia", value: 12.5 },
      { id: 2, quantity: 3, name: "Feijão", completed: false, category: "Mercearia", value: 2.5 },
      { id: 3, quantity: 10, name: "Geladeira", completed: true, category: "Eletronicos", value: 9.99 },
      { id: 4, quantity: 1, name: "Leite C", completed: true, category: "Doces", value: 9.99 },
      { id: 5, quantity: 1, name: "Leite", completed: true, category: "Leite", value: 9.99 },
      { id: 6, quantity: 1, name: "Pinga", completed: true, category: "Destilados", value: 9.99 },
      { id: 7, quantity: 1, name: "Danone", completed: true, category: "Grosso", value: 998.99 },
    ];
    return setItems(items);
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col lg={8}>
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

              {/* Shopping List Items */}
              <div className="shopping-lists">
                <ListItems items={items} />
              </div>
              {/* End Shopping List Items*/}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingListItems;
