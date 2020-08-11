import React, {useEffect,useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {amouletListRequestAction} from '../../action';
import MUIDataTable from "mui-datatables";
import getMuiTheme from '../../dataTableStyle';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import '../../assets/scss/style.scss';

const Amouletlist = (props:any) => {

    console.log('Props from amoulet list:',props);

    const dispatch = useDispatch();
    
    const [isCreateAmoulet, setIsCreateAmoulet] = useState(false);

    const handleCreateAmoulet = (e:any) => {
      e.preventDefault();
      setIsCreateAmoulet(!isCreateAmoulet);
    }

    let params:object = {
      accessToken:props.accessToken,
      tokenType:props.tokenType,
      refresh_token:props.refreshToken,
    }

    useEffect(() => {
      dispatch(amouletListRequestAction(params));
    },[]);

    const data = props.amouletList;

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
        label: "Giver Code",
       },
       {
        name: "receiverCode",
        label: "Receiver Code",
       },
       {
        name: "serialNumber",
        label: "SerialNumber",
       },
       {
        name: "nfcCode",
        label: "NFC Code",
       },
       {
        name: "id",
        label: "Actions",
          options: {
            customBodyRender: (value:any, tableMeta:any) => {
              return (
                <div className="d-flex">
                  <Link
                   className="d-inline-block" style={{ textDecoration: "none" }}
                  to={`/user/${tableMeta.rowData[6]}`}
                >
                  <i className="d-inline-block fas fa-eye fa-1x text-success"></i>
                </Link>
                <Link
                   className="d-inline-block ml-3" style={{ textDecoration: "none" }}
                  to={`/user/${tableMeta.rowData[6]}`}
                >
                  <i className="d-inline-block fas fa-edit fa-1x text-warning"></i>
                </Link>
                </div>
              );
            }
        }
      }];

      let options:any = {
        selectableRows:'none',
        fixedHeader:true,
        filter: false,
        search: true,
        print: false,
        download: false,
        viewColumns: false,
        setTableProps: () => ({className: "table table-bordered border border-success"}),
    }

    return (
      <section className="amoulet p-0">
          <div>
              <div>
                  {/* <h3>{props.title}</h3> */}
              </div>
              <div className="d-flex mb-3">
                  <Link className="btn btn-primary rounded-sm" to="/admin/create-amoulet">Create Amoulet</Link>
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
    )
}

const mapStateToProps: any = (state: any) => {
  return {
    accessToken: state.loginReducer.accessToken,
    tokenType: state.loginReducer.tokenType,
    refreshToken:state.loginReducer.refreshToken,
    amouletList: state.adminReducer.amouletList,
    profileImages: state.adminReducer.profileImages,
  };
};

export default connect(
  mapStateToProps)(withRouter(Amouletlist));

