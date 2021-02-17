import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import getMuiTheme from "../../dataTableStyle";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { getOrderDetailsRequestAction } from "./action";
import Swal from "sweetalert2";

import "../../assets/scss/style.scss";
import PopModalForOrderTable from "../../../../Components/Modal/PopModalForOrderTable";

const OrderDetails = (props: any) => {
  const dispatch = useDispatch();
  const [orderDetailsArray, setOrderDetailsArray] = useState([]);
  const [show, setShow] = useState(false);
  const [rowData, setRowData] = useState({});
  const [rfidStatus, setRfidStatus] = useState("");
  const [isEditPressed, setIsEditPressed] = useState(false);

  useEffect(() => {
    dispatch(getOrderDetailsRequestAction());
    props.orderDetails && setOrderDetailsArray(props.orderDetails);
  }, []);

  useEffect(() => {
    props.isLinkError === false && setShow(false);
    !props.isLinkError && dispatch(getOrderDetailsRequestAction());
  }, [props.isLinkError]);

  const handleOnEditRowData = (rowDataItem: any) => {
    setIsEditPressed(true);
    setRfidStatus(rowDataItem.rfId);
    setShow(true);
    setRowData(rowDataItem);
    console.log("rowDataItem", rowDataItem.rfId);
  };

  const data = props.orderDetails && props.orderDetails;

  var itemval: any = "";
  var itemvalstatus: any = "";
  var itemvalemail: any = "";
  var itemvalRFID: any = "";

  const columns = [
    {
      name: "orderId",
      label: "Order ID",
    },
    {
      name: "status",
      label: "Order Status",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          itemvalstatus =
            value !== undefined &&
            value.length > 0 &&
            value.map((item: any) => {
              return (
                <table className="w-100">
                  <tr>
                    <td className="w-100 justify-content-between d-flex my-2">
                      <span className="d-inline-block">{item}</span>
                    </td>
                  </tr>
                </table>
              );
            });
          return itemvalstatus;
        },
      },
    },
    {
      name: "rfid",
      label: "RFID",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          itemvalRFID =
            value !== undefined &&
            value.length > 0 &&
            value.map((item: any) => {
              return (
                <table className="w-100">
                  <tr>
                    <td className="w-100 justify-content-between d-flex my-2">
                      <span className="d-inline-block">{item}</span>
                    </td>
                  </tr>
                </table>
              );
            });
          return itemvalRFID;
        },
      },
    },
    {
      name: "email",
      label: "Customer Email",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          itemvalemail =
            value !== undefined &&
            value.length > 0 &&
            value.map((item: any) => {
              return (
                <table className="w-100">
                  <tr>
                    <td className="w-100 justify-content-between d-flex my-2">
                      <span className="d-inline-block">{item}</span>
                    </td>
                  </tr>
                </table>
              );
            });
          return itemvalemail;
        },
      },
    },
    {
      name: "amoulets",
      label: "Amoulet Name",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          itemval =
            value !== undefined &&
            value.length > 0 &&
            value.map((item: any) => {
              return (
                <table className="w-100">
                  <tr>
                    <td className="w-100 justify-content-between d-flex my-2">
                      <div className="d-flex justify-content-between w-50">
                        <span className="d-inline-block">{item.jewelName}</span>
                      </div>
                      <Link
                        onClick={() => handleOnEditRowData(item)}
                        to="#"
                        className="pl-5 d-inline-block w-50 text-right"
                      >
                        <i className="d-inline-block fas fa-edit fa-1x text-warning"></i>
                      </Link>
                    </td>
                  </tr>
                </table>
              );
            });
          return <span>{itemval}</span>;
        },
      },
    },
  ];

  let options: any = {
    selectableRows: "none",
    fixedHeader: true,
    filter: false,
    search: true,
    print: false,
    download: false,
    viewColumns: false,
  };

  const handleOnHide = () => {
    setShow(false);
    setIsEditPressed(false);
  };

  return (
    <section className="userlist p-0">
      <PopModalForOrderTable
        rowData={rowData}
        show={show}
        value={rfidStatus}
        handleOnChange={setRfidStatus}
        handleOnHide={handleOnHide}
        isEditPressed={isEditPressed}
      />
      <div>
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Order list"}
            data={data}
            columns={columns}
            options={options}
          />
        </MuiThemeProvider>
      </div>
    </section>
  );
};

const mapStateToProps: any = (state: any) => {
  return {
    orderDetails: state.orderDetailsReducer.orderDetails,
    isLinkError: state.orderDetailsReducer.isLinkError,
  };
};

export default connect(mapStateToProps)(withRouter(OrderDetails));
