import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MUIDataTable from "mui-datatables";

import {
    storyListRequestAction
} from './action';

const Storylist = (props:any) => {

  console.log('props :',props.storyList);
  
  const data = props.storyList;

  console.log('data',data);
  
  const dispatch = useDispatch();

  const columns = [
    {
      name: "story",
      label: "Story",
     },
    {
     name: "createdBy",
     label: "Created By",
    },
    {
      name: "type",
      label: "Type",
     }
    ];


  let params:object = {
    accessToken:props.accessToken,
    tokenType:props.tokenType,
    refresh_token:props.refreshToken,
  }
  

  useEffect(()=>{
    dispatch(storyListRequestAction(params));
  },[]);

   

    return (
        <section className="userlist p-0">
                  <MUIDataTable
                    title={"Story List"}
                    data={data}
                    columns={columns}
                  />
                  
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
      storyList:state.storyReducer.storyList,
    };
  };

export default connect(
  mapStateToProps)(withRouter(Storylist));

