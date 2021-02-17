import React, { useState, createRef, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import { linkAmouletRequestAction } from "../../../Containers/Adminview/AdminComponents/OrderDetails/action";

const PopModalForOrderTable = (props: any) => {
  console.log("PopModalForOrderTable:", props, props.rowData.rfId);

  const rfidRef: React.RefObject<HTMLInputElement> = createRef();
  const orderStatusRef: React.RefObject<HTMLSelectElement> = createRef();

  const [isError, setIsError] = useState(false);
  const [linkingError, setLinkingError] = useState(props.isLinkError);
  const [rfidStatus, setRfidStatus] = useState(props.rowData.rfId);

  const dispatch = useDispatch();
  const history = useHistory();
  const uuid: any = props.rowData.uuid;

  useEffect(() => {
    if (props.errorMsg === "invalid_rfid") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid RFID",
      });
    }

    if (props.errorMsg === "jewel_already_exist") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "RFID already in use",
      });
    }
  }, [props.errorMsg]);

  useEffect(() => {
    console.log("props.isEditPressed:::::", props.isEditPressed);
    props.isEditPressed && setIsError(false);
  }, [props.isEditPressed]);

  const handleOnUpdate = () => {
    if (rfidRef?.current?.value === "") {
      setIsError(true);
    } else {
      let params = {
        rfid: rfidRef?.current?.value,
        orderDetails: uuid,
        orderStatus: orderStatusRef?.current?.value,
      };
      dispatch(linkAmouletRequestAction(params));
    }
  };

  const handleOnChange = (e: any) => {
    e.target.value === "" ? setIsError(true) : setIsError(false);
    setRfidStatus(e.target.value);
    console.log("e.target.value::::", e.target.value);
  };
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
                <label className="col-sm-6 col-form-label">RFID</label>
                <div className="col-sm-6">
                  <input
                    onChange={(e) => {
                      e.target.value === ""
                        ? setIsError(true)
                        : setIsError(false);
                      props.handleOnChange();
                    }}
                    // defaultValue={props.rowData.rfId}
                    value={props.value}
                    type="text"
                    className="form-control"
                    id="nfcCode"
                    name="nfcCode"
                    placeholder="RFID"
                    ref={rfidRef}
                  />
                  {isError && (
                    <span className="text-danger">Field is required</span>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-6 col-form-label">Order Status</label>
                <div className="col-sm-6">
                  <select
                    className="form-control"
                    name="orderStatus"
                    ref={orderStatusRef}
                  >
                    <option
                      value="SHIPPED"
                      selected={
                        props.rowData.orderStatus === "SHIPPED" ? true : false
                      }
                    >
                      SHIPPED
                    </option>
                    <option
                      value="IN_PROGRESS"
                      selected={
                        props.rowData.orderStatus === "IN_PROGRESS"
                          ? true
                          : false
                      }
                    >
                      IN_PROGRESS
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <button
                  disabled={isError}
                  onClick={handleOnUpdate}
                  className="btn btn-success"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps: any = (state: any) => {
  return {
    isLinkError: state.orderDetailsReducer.isLinkError,
    errorMsg: state.orderDetailsReducer.errorMsg,
  };
};

export default connect(mapStateToProps)(withRouter(PopModalForOrderTable));
