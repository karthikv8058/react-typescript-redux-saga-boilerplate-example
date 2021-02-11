import React from "react";
import { Modal } from "react-bootstrap";

export default function PopModalForOrderTable(props: any) {
  console.log("PopModalForOrderTable:", props);
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
          <Modal.Title id="example-custom-modal-styling-title text-center">
            {props.rowData.jewelName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="jumbotron">
              <div className="form-group row">
                <label className="col-sm-6 col-form-label">Jewel Name</label>
                <div className="col-sm-6 col-form-label">
                  {props.rowData.jewelName}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-6 col-form-label">
                  Customer Email
                </label>
                <div className="col-sm-6 col-form-label">
                  {props.rowData.customerEmail}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-6 col-form-label">Selling Mode</label>
                <div className="col-sm-6 col-form-label">
                  {props.rowData.sellingMode}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-6 col-form-label">Return Status</label>
                <div className="col-sm-6 col-form-label">
                  {props.rowData.isReturned ? "YES" : "NO"}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-6 col-form-label">Damage Status</label>
                <div className="col-sm-6 col-form-label">
                  {props.rowData.isDamaged ? "YES" : "NO"}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-6 col-form-label">NFC</label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="nfcCode"
                    name="nfcCode"
                    placeholder="NFC"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
