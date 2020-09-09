import React, {useEffect, useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import {  withRouter,useHistory  } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import inArray from '../../../../Service';
import Swal from 'sweetalert2';
import {
  
} from './action';

import * as Yup from 'yup';

const addDescriptions = (props:any) => {    


    let accessParams:object = {
      accessToken: props.accessToken,
      tokenType: props.tokenType,
      refresh_token:props.refreshToken,
    }


    return (
      <section className="add-descriptions p-0">
        <div>
            <h3>{props.title}</h3>
        </div>
        <div>
        <Formik
            initialValues={{ 
            name: '',
            description:'',
          }}
            validationSchema={Yup.object({
                name: Yup.string()
                  .required('Required'),
                description: Yup.string()
                  .required('Required'),
              })}

              onSubmit={(values, { setSubmitting }) => {

                setTimeout(() => {

                  console.log('values :',values);
                  setSubmitting(false);

                }, 1000);                
        }}
        
        >
          {
            ({values,handleSubmit,handleReset}) => {
              return (
              <form onSubmit={handleSubmit} className="w-75 mx-auto" >
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
                  <Field name="description" as="textarea" className="form-control rounded-sm"/>
                  <span className="text-danger" ><ErrorMessage name="description" /></span>
                </div>
              </div>
              
              <div className="form-group row">
                <label className="col-sm-4 col-form-label"></label>
                <div className="col-sm-8">
                <button type="submit" className="btn btn-success rounded-sm">Add Items</button>
                <button onClick={handleReset} className="btn btn-warning rounded-sm ml-1">Reset</button>
                </div>
              </div>
            </form>
              )
            }
          }
        </Formik>
        </div>
      </section>
    )
}

const mapStateToProps: any = (state: any) => {
  return {
    accessToken: state.loginReducer.accessToken,
  };
};

export default connect(
  mapStateToProps)(withRouter(addDescriptions));

