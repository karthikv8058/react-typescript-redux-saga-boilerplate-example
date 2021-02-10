import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { amouletListRequestAction } from "../../action";
import MUIDataTable from "mui-datatables";
import getMuiTheme from "../../dataTableStyle";

import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import "../../assets/scss/style.scss";
import PopModalTableRowView from "../../../../Components/Modal/PopModalTableRowView";

const Amouletlist = (props: any) => {
  const dispatch = useDispatch();

  const [isCreateAmoulet, setIsCreateAmoulet] = useState(false);
  const [show, setShow] = useState(false);
  const [rowData, setRowData] = useState([]);

  const handleCreateAmoulet = (e: any) => {
    e.preventDefault();
    setIsCreateAmoulet(!isCreateAmoulet);
  };

  let params: object = {
    accessToken: props.accessToken,
    tokenType: props.tokenType,
    refresh_token: props.refreshToken,
  };

  useEffect(() => {
    dispatch(amouletListRequestAction(params));
  }, []);

  const data = props.amouletList;
  const handleRowData = (props: any, data: any) => {
    console.log('PROPS FROM MUI=====>',props);
    setRowData(props);
    var tempRowData = [];
  };

  let colOptions: any = {
    display: false,
  };

  const columns = [
    {
      name: "name",
      label: "Amoulet Name",
    },
    {
      name: "description",
      label: "Description",
    },
    {
      name: "giverCode",
      label: "Passphrase1",
    },
    {
      name: "receiverCode",
      label: "Passphrase2",
    },
    {
      name: "serialNumber",
      label: "RFID (Serial Number)",
    },
    {
      name: "nfcCode",
      label: "NFC Code",
    },
    {
      name: "isOnline",
      label: "Mode of sale",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return <span>{value == true ? "Online" : "Offline"}</span>;
        },
      },
    },
    {
      name: "note",
      label: "Note",
      options: colOptions,
    },
    {
      name: "id",
      label: "Actions",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <div className="d-flex justify-content-center">
              <Link
                className="d-inline-block"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  setShow(true);
                }}
                // to={`/user/${tableMeta.rowData[6]}`}
                to={`#`}
              >
                <i className="d-inline-block fas fa-eye fa-1x text-success"></i>
              </Link>
              {/* <Link
                className="d-inline-block ml-3"
                style={{ textDecoration: "none" }}
                // to={`/user/${tableMeta.rowData[6]}`}
                to={`#`}
              >
                <i className="d-inline-block fas fa-edit fa-1x text-warning"></i>
              </Link> */}
            </div>
          );
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
    setTableProps: () => ({
      className: "table table-bordered border border-success",
    }),
    onRowClick: (rowData: any, rowMeta: any) => handleRowData(rowData, rowMeta),
  };

  const handleOnHide = () => {
    setShow(false);
  };

  return (
    <section className="amoulet p-0">
      <PopModalTableRowView
        rowData={rowData}
        show={show}
        handleOnHide={handleOnHide}
      />
      <div>
        <div>{/* <h3>{props.title}</h3> */}</div>
        <div className="d-flex mb-3">
          <Link
            className="btn btn-primary rounded-sm"
            to="/admin/create-amoulet"
          >
            Create Amoulet
          </Link>
        </div>

        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Amoulet List"}
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
    accessToken: state.loginReducer.accessToken,
    tokenType: state.loginReducer.tokenType,
    refreshToken: state.loginReducer.refreshToken,
    amouletList: state.adminReducer.amouletList,
    profileImages: state.adminReducer.profileImages,
  };
};

export default connect(mapStateToProps)(withRouter(Amouletlist));
