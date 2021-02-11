import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import getMuiTheme from "../../dataTableStyle";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { getOrderDetailsRequestAction } from "./action";

import "../../assets/scss/style.scss";

const OrderDetails = (props: any) => {
  const dispatch = useDispatch();
  const [orderDetailsArray, setOrderDetailsArray] = useState([]);
  console.log("PROPS FROM ORDER_DETAILS====>", props);

  useEffect(() => {
    dispatch(getOrderDetailsRequestAction());
    props.orderDetails && setOrderDetailsArray(props.orderDetails);
    // console.log("PROPS FROM ORDER_DETAILS====>", props);
  }, []);

  var itemval: any = "";
  var itemvalstatus: any = "";

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
          console.log("values from table ::::::", value);
          itemvalstatus =
            value.length > 0 &&
            value.map((item: any) => {
              return (
                <table className="w-100">
                  <tr>
                    {/* <td className="border border-dark p-3 w-50">
                  {item.customerEmail}
                </td> */}
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
      name: "email",
      label: "Customer Email",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          console.log("values from table ::::::", value);
          itemvalstatus =
            value.length > 0 &&
            value.map((item: any) => {
              return (
                <table className="w-100">
                  <tr>
                    {/* <td className="border border-dark p-3 w-50">
                  {item.customerEmail}
                </td> */}
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
      name: "amoulets",
      label: "Amoulet Name",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          // console.log("values from table ::::::", value);
          itemval =
            value.length > 0 &&
            value.map((item: any) => {
              console.log("item:::::", item.customerEmail);
              return (
                <table className="w-100">
                  <tr>
                    {/* <td className="border border-dark p-3 w-50">
                      {item.customerEmail}
                    </td> */}
                    <td className="w-100 justify-content-between d-flex my-2">
                      <div className="d-flex justify-content-between w-50">
                        <span className="d-inline-block">{item.jewelName}</span>
                        {/* <span className="d-inline-block text-left">
                          {item.customerEmail}
                        </span> */}
                      </div>
                      <Link
                        to={null}
                        className="pl-5 d-inline-block w-50 text-right"
                      >
                        {/* Edit */}
                        <i className="d-inline-block fas fa-edit fa-1x text-warning"></i>
                      </Link>
                    </td>
                  </tr>
                </table>
                // <span className="d-block">
                //   {item.customerEmail}
                //   {item.jewelName}
                // </span>
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

  return (
    <section className="userlist p-0">
      <div>
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"User List"}
            data={orderDetailsArray}
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
  };
};

export default connect(mapStateToProps)(withRouter(OrderDetails));
