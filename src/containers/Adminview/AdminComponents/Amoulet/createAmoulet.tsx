import React, {useEffect, useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import {  withRouter,useHistory  } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import inArray from '../../../../Service';
import {
  amouletCreateRequestAction,
  amouletGiverCodeRequestAction,
  amouletReceiverCodeRequestAction,
  amouletValidateRequestAction
} from './action';

import * as Yup from 'yup';

const CreateAmoulet = (props:any) => {    
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    let accessParams:object = {
      accessToken: props.accessToken,
      tokenType: props.tokenType,
      refresh_token:props.refreshToken,
    }

    useEffect(() => {
    },[]);

    const handleSubmit = (e:any) => {
      e.preventDefault();
    }

    const handleGiverCode = (e:any) => {
      e.preventDefault();
      dispatch(amouletGiverCodeRequestAction(accessParams));
    }

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
        <Formik
            initialValues={{ 
            sku: '',
            name: '',
            description:'',
            nfcCode:'',
            serialNumber:'',
            receiverCode: props.receiverCode ? props.receiverCode.uuid : '',
            giverCode: props.giverCode ? props.giverCode.uuid : ''
          }}
            validationSchema={Yup.object({

                sku: Yup.string()
                  .required('Required'),
                name: Yup.string()
                  .required('Required'),
                description: Yup.string()
                  .required('Required'),
                nfcCode: Yup.string()
                  .required('Required'),
                serialNumber: Yup.string()
                  .required('Required'),
                receiverCode: Yup.string()
                  .required('Required'),
                giverCode: Yup.string()
                  .required('Required'),
                
              })}
              onSubmit={(values, { setSubmitting }) => {

                setTimeout(() => {

                  let amouletParams:object = {
                    ...values,
                    tag:'tag1',
                    color:'#fff',
                  }

                  let finalParams:object = {
                    amouletParams,
                    accessParams
                  }

                  console.log('finalParams :',finalParams);
                  dispatch(amouletCreateRequestAction(finalParams));
                }, 1000);                
        }}>
          
            <Form className="w-75 mx-auto" >
              <div className="form-group row">
                <label htmlFor="sku" className="col-sm-4 col-form-label">SKU</label>
                <div className="col-sm-8">
                  <Field name="sku" type="text" className="form-control rounded-sm"/>
                  <span className="text-danger" ><ErrorMessage name="sku"/></span>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="name" className="col-sm-4 col-form-label">Name</label>
                <div className="col-sm-8">
                  <Field name="name" type="text" className="form-control rounded-sm"/>
                  <span className="text-danger" ><ErrorMessage name="name"/></span>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="description" className="col-sm-4 col-form-label">Description</label>
                <div className="col-sm-8">
                  <Field name="description" type="text" className="form-control rounded-sm"/>
                  <span className="text-danger" ><ErrorMessage name="description" /></span>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="nfcCode" className="col-sm-4 col-form-label">NFC Code</label>
                <div className="col-sm-8">
                  <Field name="nfcCode" onBlur={
                    (e:any) => { 
                      handleNfcCodeSerialNumberValidation(e, 'nfcCode')
                    }
                  } 
                  type="text" className={props.validateCode=='nfcCode'?'form-control rounded-sm border border-success':'form-control rounded-sm'} />
                  <span className="text-danger" ><ErrorMessage name="nfcCode" /></span>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label"> Giver Code </label>
                <div className="col-sm-8">
                  <button disabled={props.giverCode.uuid?true:false} onClick={handleGiverCode} className="btn btn-secondary rounded-sm">Assign Giver Code
                  {
                    props.isGiverCode?<div style={{width:'20px',height:'20px'}} className="spinner-border text-dark ml-2" role="status">
                      <span className="sr-only"></span>
                    </div>:''
                  }
                  </button>
                  {
                    props.giverCode.uuid?<i className="fas fa-check ml-2 text-success"></i>:''
                  }
                  <Field name="giverCode" type="hidden" className="form-control rounded-sm"/>
                  {
                    !props.giverCode.uuid&&<span className="text-danger ml-2" ><ErrorMessage name="giverCode" /></span>
                  }
                  
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label"> Receiver Code </label>
                <div className="col-sm-8">
                  <button disabled={props.receiverCode.uuid?true:false} onClick={handleReceiverCode} className="btn btn-secondary rounded-sm">Assign Receiver Code
                  {
                    props.isReceiverCode?<div style={{width:'20px',height:'20px'}} className="spinner-border text-dark ml-2" role="status">
                      <span className="sr-only"></span>
                    </div>:''
                  }
                  </button>
                  {
                    props.receiverCode.uuid?<i className="fas fa-check ml-2 text-success"></i>:''
                  }
                  <Field name="receiverCode" type="hidden" className="form-control rounded-sm"/>
                  {
                    !props.receiverCode.uuid&&<span className="text-danger ml-2" ><ErrorMessage name="receiverCode" /></span>
                  }
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="serialNumber" className="col-sm-4 col-form-label">Product Serial Number</label>
                <div className="col-sm-8">
                  <Field name="serialNumber" type="text" onBlur={
                    (e:any) => { 
                      handleNfcCodeSerialNumberValidation(e, 'serialNumber')
                    }
                  } className={props.validateCode=='serialNumber'?'form-control rounded-sm border border-success':'form-control rounded-sm'} />
                  <span className="text-danger" ><ErrorMessage name="serialNumber"/></span>
                </div>
              </div>
        
              <div className="form-group row">
                <label className="col-sm-4 col-form-label"></label>
                <div className="col-sm-8">
                <button type="submit" className="btn btn-success rounded-sm">Create Amoulet</button>
                </div>
              </div>

            </Form>
            </Formik>
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
  };
};

export default connect(
  mapStateToProps)(withRouter(CreateAmoulet));

