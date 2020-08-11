import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter,Link } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
import getMuiTheme from '../../dataTableStyle';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import {
  userListRequestAction,
  genConfigRequestAction
} from '../../action';

import '../../assets/scss/style.scss';
import Avatar from '../assets/img/img_avatar.png';

const Userlist = (props:any) => {

  
  
  const dataFromApi = props.userList;

  let dataArr:any = [];
  let tempJson1={};
  let tempJson={};

  dataFromApi.length > 0 && dataFromApi.map((item:any)=>{

    tempJson = {useremail : item.giverEmail};

    item.jewelDetails.length > 0 ? item.jewelDetails.map((value:any)=>{
      tempJson1 = {
        giverCode:value.giverCode,
        nfcCode:value.nfcCode,
        receiverCode:value.receiverCode,
        receiverEmail:value.receiverEmail,
        serialNumber:value.serialNumber,
      }

      let finalObj = {
        ...tempJson,
        ...tempJson1
      };

      dataArr.push(finalObj);

    }) : dataArr.push(tempJson);
    
    
    
    
  });
  
  console.log('Temp Json Array:',dataArr);
  
  let temp ='';
  
  const dispatch = useDispatch();

  const columns = [
    {
     name: "useremail",
     label: "User's Email (Account ID)",
      options: {
         customBodyRender: (value:any, tableMeta:any) => {
          //console.log('tableMeta',tableMeta);
          if(temp!=value){
            temp = value;
            // console.log('Temp :',temp);
            return (
                <div>
                  {value}
                </div>
            ); 
          }else {
            return (
              <div className="bg-td-custom null">
                
              </div>
            ); 
          }
        },
      }
    },
    {
      name: "serialNumber",
      label: "Serial Number RFID",
     },
     {
      name: "nfcCode",
      label: "Amoulet ID NFC ID",
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


  let params:object = {
    accessToken:props.accessToken,
    tokenType:props.tokenType,
    refresh_token:props.refreshToken,
  }
  

  useEffect(()=>{
    dispatch(userListRequestAction(params));
    dispatch(genConfigRequestAction(params));
  },[]);


  let options:any = {
    selectableRows:'none',
    fixedHeader:true,
    filter: false,
    search: true,
    print: false,
    download: false,
    viewColumns: false,
    setTableProps: () => ({className: "table table-bordered border border-success"}),
    setRowProps: (row:any, dataIndex:any, rowIndex:any) => {
      console.log('row:',row);
      if(temp==row[0]){
        
        console.log('temp:',temp);
        row[0]='';
        return {
          style: { borderBottom: '1px solid grey',borderTop:'3px solid white' },

        };
      }
      temp=row[0];
    },
}
   

    return (
        <section className="userlist p-0">
                  <div>
                      {/* <h3>{props.title}</h3> */}
                  </div>
                  <MuiThemeProvider theme={getMuiTheme()}>
                    <MUIDataTable
                      title={"User List"}
                      data={dataArr}
                      columns={columns}
                      options={options}
                    />
                  </MuiThemeProvider>
                  
             </section>
    )
}

const mapStateToProps: any = (state: any) => {
  return {
    loginReducer:state.loginReducer,
    accessToken:state.loginReducer.accessToken,
    expiresIn:state.loginReducer.expiresIn,
    refreshToken:state.loginReducer.refreshToken,
    tokenType:state.loginReducer.tokenType,
    loginStatus:state.loginReducer.loginStatus,
    userList:state.adminReducer.userList,
    profileImages:state.adminReducer.profileImages,
  };
};

export default connect(
  mapStateToProps)(withRouter(Userlist));

