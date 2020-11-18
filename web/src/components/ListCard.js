import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { BsPencil, BsSearch, BsX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteList } from "../store/ducks/shoppingLists"

const ListCard = ({ item }) => {

  const dispatch = useDispatch();

  const removeList = (id) => {
    dispatch(deleteList(id))
  }


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
        <Col>
          <div className="list-card-actions">
            <Link to={`/shopping-lists/${item.id}`}>
              <BsSearch />
            </Link>

            <a href="#" onClick={(e) => window.alert("editar")}>
              <BsPencil />
            </a>

            <a href="#" onClick={() => removeList(item.id)}>
              <BsX />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ListCard;
