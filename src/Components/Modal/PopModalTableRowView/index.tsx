import React from "react";
import { Modal } from "react-bootstrap";

export default function PopModalTableRowView(props: any) {
  console.log("PopModalTableRowViewprops:", props);
  return (
    <div>
      <Modal
        show={props.show}
        onHide={() => props.handleOnHide()}
        dialogClassName="w-100"
        aria-labelledby="example-custom-modal-styling-title"
        size={"lg"}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.rowData[0]}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {props.rowData &&
              props.rowData.length > 0 &&
              props.rowData.map((item: any, index: number) => {
                console.log("item", index);
                let rowTitle = "";
                switch (index) {
                  case 0:
                    rowTitle = "Amoulet name";
                    break;
                  case 1:
                    rowTitle = "Description";
                    break;
                  case 2:
                    rowTitle = "Passphrase1";
                    break;
                  case 3:
                    rowTitle = "Passphrase2";
                    break;
                  case 4:
                    rowTitle = "RFID (Serial Number)";
                    break;
                  case 5:
                    rowTitle = "NFC Code";
                    break;
                  case 6:
                    rowTitle = "Mode of sale";
                    break;
                  case 7:
                    rowTitle = "Note";
                    break;
                }
                if (index <= props.rowData.length - 2) {
                  return (
                    <div className="row mb-1">
                      <div className="col">
                        <span className="text-theme">{rowTitle}</span>
                      </div>
                      <div className="col">{item}</div>
                    </div>
                  );
                }
              })}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
