import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import {
  amouletCreateRequestAction,
} from './action';

import * as Yup from 'yup';

const CreateAmolet = (props:any) => {    

    const dispatch = useDispatch();

    const accessParams:object = {
      accessToken: props.accessToken,
      tokenType: props.tokenType
    }

    useEffect(() => {
      
    },[]);

    const handleSubmit = (e:any) => {
      e.preventDefault();
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
            receiverCode:'7dc24327-cdab-11ea-9fce-00155d01d82b',
            giverCode:'81ec7b8a-cdab-11ea-9fce-00155d01d82b'
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
                setSubmitting(false);
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
                  <Field name="nfcCode" type="text" className="form-control rounded-sm"/>
                  <span className="text-danger" ><ErrorMessage name="nfcCode" /></span>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label"> Giver Code </label>
                <div className="col-sm-8">
                  <button className="btn btn-secondary rounded-sm">Assign Giver Code</button>
                  <Field name="giverCode" type="hidden" className="form-control rounded-sm"/>
                  <span className="text-danger ml-2" ><ErrorMessage name="giverCode" /></span>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label"> Receiver Code </label>
                <div className="col-sm-8">
                  <button className="btn btn-secondary rounded-sm">Assign Receiver Code</button>
                  <Field name="receiverCode" type="hidden" className="form-control rounded-sm"/>
                  <span className="text-danger ml-2" ><ErrorMessage name="receiverCode" /></span>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="serialNumber" className="col-sm-4 col-form-label">Product Serial Number</label>
                <div className="col-sm-8">
                  <Field name="serialNumber" type="text" className="form-control rounded-sm"/>
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
    amouletList: state.adminReducer.amouletList,
    profileImages: state.adminReducer.profileImages,
  };
};

export default connect(
  mapStateToProps)(withRouter(CreateAmolet));

