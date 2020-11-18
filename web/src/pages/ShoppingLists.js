import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import ListCard from "../components/ListCard";
import { storeList, fetchAll } from "../store/ducks/shoppingLists";

const ShoppingLists = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState();
  const items = useSelector((state) => state.shoppingLists.items);

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  const handleChange = (value) => {
    setList(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!list) return;
    dispatch(storeList(list));
    e.target.reset();
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col lg={8}>
          <Card>
            <Card.Body>
              <Card.Title>Add new List</Card.Title>
              {/* Shopping List Form */}
              <Form onSubmit={handleSubmit}>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control mr-2"
                    placeholder="Type for a new list..."
                    onChange={(e) => handleChange(e.target.value)}
                  ></input>
                  <button className="btn btn-primary">Add</button>
                </div>
              </Form>
              {/* End Shopping List Form */}

              {/* Shopping Lists */}
              <div className="shopping-lists">
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <ListCard item={item} />
                    </li>
                  ))}
                </ul>
              </div>
              {/* Shopping Lists */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ShoppingLists;
