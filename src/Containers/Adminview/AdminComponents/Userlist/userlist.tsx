import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import getMuiTheme from "../../dataTableStyle";
import {
  MuiThemeProvider,
} from "@material-ui/core/styles";

import { userListRequestAction, genConfigRequestAction } from "../../action";

import "../../assets/scss/style.scss";

const Userlist = (props: any) => {
  const dataFromApi = props.userList;

  let dataArr: any = [];
  let tempJson1 = {};
  let tempJson = {};

  // const dataFromApi = dataFromApi.slice(0, 10);
  console.log('dataFromApi :', dataFromApi);

  dataFromApi.length > 0 &&
    dataFromApi.map((item: any) => {
      var useremail = item.userEmail;
      tempJson = { useremail: item.userEmail };

      item.jewelDetails.length > 0
        ? item.jewelDetails.map((value: any) => {
          let receiverEmail = '';
          if (useremail != value.giverEmail) {
            receiverEmail = value.giverEmail;
          } else {
            receiverEmail = value.receiverEmail;
          }

          tempJson1 = {
            giverCode: value.giverCode,
            nfcCode: value.nfcCode,
            receiverCode: value.receiverCode,
            receiverEmail: receiverEmail,
            serialNumber: value.serialNumber,
          };

          let finalObj = {
            ...tempJson,
            ...tempJson1,
          };

          dataArr.push(finalObj);
        })
        : dataArr.push(tempJson);
    });

  let temp = "";
  let count = 0;
  let tempID: any = null;

  const dispatch = useDispatch();
  const [unlinkAmoulet, setUnlinkAmoulet] = useState(false);
  const [isSearchElementHide, setIsSearchElementHide] = useState(true);

  const handleUnlinkAmoulet = (e: any) => {
    e.preventDefault();
    count++;

    if (tempID != e.target.id && tempID != null) {
      count++;
    }

    if (count % 2 == 1) {
      e.target.previousElementSibling.style.textDecoration = "line-through";
      e.target.innerText = "Restore Amoulet Connection";
    } else {
      e.target.previousElementSibling.style.textDecoration = "none";
      e.target.innerText = "Unlink Amoulet";
    }
    tempID = e.target.id;
  };

  const columns = [
    {
      name: "useremail",
      label: "User's Email (Account ID)",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          if (temp != value) {
            temp = value;
            return <div>{value}</div>;
          } else {
            return <div className={isSearchElementHide ? 'bg-td-custom null px-3' : 'bg-td-custom px-3'}>{
              isSearchElementHide ? '' : value
            }</div>;
          }
        },
      },
    },
    {
      name: "serialNumber",
      label: "RFID (Serial Number)",
    },
    {
      name: "nfcCode",
      label: "Amoulet ID (NFC ID)",
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          if (value != undefined) {
            return (
              <div className="amouletID">
                <span className="">{value}</span>
                <Link
                  to=""
                  id={"amou" + value}
                  className="d-block mt-1"
                  onClick={(e) => {
                    handleUnlinkAmoulet(e);
                  }}
                >
                  Unlink Amoulet
                </Link>
              </div>
            );
          }
        },
      },
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
      name: "receiverEmail",
      label: "Another email linked to the Amoulet",
    },
  ];

  let params: object = {
    accessToken: props.accessToken,
    tokenType: props.tokenType,
    refresh_token: props.refreshToken,
  };

  useEffect(() => {
    dispatch(userListRequestAction(params));
    dispatch(genConfigRequestAction(params));
  }, []);

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
    setRowProps: (row: any, dataIndex: any, rowIndex: any) => {
      if (temp == row[0]) {
        row[0] = "";
        return {
          style: {
            borderBottom: "1px solid grey",
            borderTop: "3px solid white",
          },
        };
      }
      temp = row[0];
    },
    onTableChange: (action: string, tableState: any) => {
      if (action === 'search') {
        tableState.displayData && tableState.displayData.length > 0 && tableState.displayData.map((items: any) => {
          if (items.data[0].props.className === 'bg-td-custom null px-3') {
            setIsSearchElementHide(false);
          }
        })
      }
      if (action === 'onSearchClose') {
        setIsSearchElementHide(true);
      }
      else if (tableState.searchText === null) {
        setIsSearchElementHide(true);
      }
    }
  };

  return (
    <section className="userlist p-0">
      <div>{/* <h3>{props.title}</h3> */}</div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"User List"}
          data={dataArr}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </section>
  );
};

const mapStateToProps: any = (state: any) => {
  return {
    loginReducer: state.loginReducer,
    accessToken: state.loginReducer.accessToken,
    expiresIn: state.loginReducer.expiresIn,
    refreshToken: state.loginReducer.refreshToken,
    tokenType: state.loginReducer.tokenType,
    loginStatus: state.loginReducer.loginStatus,
    userList: state.adminReducer.userList,
    profileImages: state.adminReducer.profileImages,
  };
};

export default connect(mapStateToProps)(withRouter(Userlist));
