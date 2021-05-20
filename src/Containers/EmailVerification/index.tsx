import React, { FunctionComponent, useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import {
  tokenVerificationRequestAction,
  enableUserRequestAction,
} from "./action";

import Styles from "./Style/style.module.scss";
import Strings from "../../assets/strings";

const EmailVerification = (props: any) => {
  console.log("PROPPS:::", props);

  const dispatch = useDispatch();

  // dGdqaENDQWxmMTU4K1JCYUhlSlMrMVA1d2RqQlF0dThuVmg5eG1KbTJGRT06Oj4XJJzlkN99pOMmz%2B49y2U%3D
  // let token ="NGZmZUhldzFlcndwMWJXNVA4Um9MZlNkUFNRSTJ1dmhxbHhOMkx1ZUZJcz06OiqyMdgGmrUAVEH19r4mTFQ%3D";

  let token = props.match.params.token;
  let params = {
    token: token,
  };
  useEffect(() => {
    dispatch(tokenVerificationRequestAction(params));
  }, []);

  useEffect(() => {
    props.isTokenError === false && dispatch(enableUserRequestAction(params));
  }, [props.isTokenError]);

  return (
    <div className={`d-flex justify-content-center ${Styles.bg}`}>
      <div className="align-self-center">
        {props.isTokenError === true && (
          <label className="alert alert-danger text-center">
            {Strings.en.token.notFound}
          </label>
        )}
        {props.isTokenError === false && props.isEnableUserError === false && (
          <label className="alert alert-success text-center">
            {Strings.en.verified.mail}
          </label>
        )}
        {props.data?.message === "token_expired" && (
          <label className="alert alert-danger text-center">
            {Strings.en.token.expired}
          </label>
        )}
      </div>
    </div>
  );
};

const mapStateToProps: any = (state: any) => {
  return {
    isTokenError: state.mailVerificationReducer.isTokenError,
    isEnableUserError: state.mailVerificationReducer.isEnableUserError,
    data: state.mailVerificationReducer.data,
  };
};

export default connect(mapStateToProps)(withRouter(EmailVerification));
