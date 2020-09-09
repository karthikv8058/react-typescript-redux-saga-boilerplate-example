import React, {useEffect, useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import {  withRouter,useHistory  } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import inArray from '../../../../Service';
import Swal from 'sweetalert2';
import {
  
} from './action';

import * as Yup from 'yup';

const ViewDescriptions = (props:any) => {    


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
  mapStateToProps)(withRouter(ViewDescriptions));

