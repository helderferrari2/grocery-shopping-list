import React from "react";
import { Form } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";

const ListCard = ({ item }) => {
  return (
    <Link to={`/shopping-lists/${item.id}`}>
      <div className="list-card">
        <Form>
          <table className="table m-0">
            <tbody>
              <tr>
                <td style={{ width: "10%" }}>
                  <Form.Check
                    custom
                    type={"checkbox"}
                    defaultChecked={item.completed}
                    onChange={() => console.log('aq')}
                  />
                </td>
                <td style={{ width: "50%" }}>
                  <Form.Control value={item.name} onChange={() => console.log('aq')} />
                </td>
                <td style={{ width: "10%" }}></td>
                <td style={{ width: "10%" }}>
                  <BsX />
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
      </div>
    </Link>
  );
};

export default ListCard;
