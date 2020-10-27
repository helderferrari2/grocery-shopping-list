import React from "react";
import { Form } from "react-bootstrap";
import { BsX } from "react-icons/bs";

const ListCard = ({ item }) => {
  return (
    <div className="list-card">
      <Form>
        <table className="table m-0">
          <tbody>
            <tr>
              <td style={{ width: "5%" }}>
                <Form.Label></Form.Label>
                <Form.Check
                  custom
                  type={"checkbox"}
                  defaultChecked={item.completed}
                  onChange={() => console.log("aq")}
                />
              </td>
              <td style={{ width: "5%" }}>
                <Form.Label>Qtde</Form.Label>
                <Form.Control
                  value={item.quantity}
                  onChange={() => console.log("aq")}
                />
              </td>
              <td style={{ width: "30%" }}>
                <Form.Label>Produto</Form.Label>
                <Form.Control
                  value={item.name}
                  onChange={() => console.log("aq")}
                />
              </td>
              <td style={{ width: "20%" }}>
                <Form.Label>R$</Form.Label>
                <Form.Control
                  value={item.value}
                  onChange={() => console.log("aq")}
                />
              </td>

              <td style={{ width: "1%" }}>
                <BsX />
              </td>
            </tr>
          </tbody>
        </table>
      </Form>
    </div>
  );
};

export default ListCard;
