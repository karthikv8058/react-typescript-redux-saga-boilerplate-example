import React, {useEffect, useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import {  withRouter,useHistory  } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import inArray from '../../../../Service';
import Swal from 'sweetalert2';
import {
  amouletCreateRequestAction,
  amouletGiverCodeRequestAction,
  amouletReceiverCodeRequestAction,
  amouletValidateRequestAction
} from './action';

import * as Yup from 'yup';

const UserListView = (props:any) => {    
    
    let id = 0;

    if(props.location.state!=undefined){
      id = props.location.state.id 
    }
    
    console.log('id :',id);
    

    const dispatch = useDispatch();
    const history = useHistory();

    let accessParams:object = {
      accessToken: props.accessToken,
      tokenType: props.tokenType,
      refresh_token:props.refreshToken,
    }

    useEffect(() => {
     
    },[]);

    //handle givercode
    const handleGiverCode = (e:any) => {
      e.preventDefault();
      dispatch(amouletGiverCodeRequestAction(accessParams));
    }

    //handle receiver code
    const handleReceiverCode = (e:any) => {
      e.preventDefault();
      dispatch(amouletReceiverCodeRequestAction(accessParams));
    }

    // Function to handle NFC and Serial number validation
    const handleNfcCodeSerialNumberValidation = (e:any, type:string) => {

      e.preventDefault();
      let typeArr = ["nfcCode", "serialNumber"];
      if (!inArray(type, typeArr) || (e.target.value.length === 0)) {
        return false;
      }
      
      var params:object = {};
      if (type === 'nfcCode') {
        params = {
          value: e.target.value,
          type: type
        }
      } else {
        params = {
          value: e.target.value,
          type: type
        }
      }
      let finalParams:object = {
        params,
        accessParams
      }

      dispatch(amouletValidateRequestAction(finalParams));

    }

    return (
      <section className="create-amoulet p-0">
        <div>
            <h3>{props.title}</h3>
        </div>
        <div>
            <h2>User list view</h2>
        </div>
      </section>
    )
}

const mapStateToProps: any = (state: any) => {
  return {
    accessToken: state.loginReducer.accessToken,
    tokenType: state.loginReducer.tokenType,
    giverCode: state.amouletReducer.giverCode,
    receiverCode: state.amouletReducer.receiverCode,
    validateCode: state.amouletReducer.validateCode,
    isGiverCode: state.amouletReducer.isGiverCode,
    isReceiverCode: state.amouletReducer.isReceiverCode,
    giverCodeUUID: state.amouletReducer.giverCodeUUID,
    receiverCodeUUID: state.amouletReducer.receiverCodeUUID,
  };
};

export default connect(
  mapStateToProps)(withRouter(UserListView));

