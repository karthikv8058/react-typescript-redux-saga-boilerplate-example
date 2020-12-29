import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import inArray from "../../../../Service";
import Swal from "sweetalert2";
import {
  amouletCreateRequestAction,
  amouletGiverCodeRequestAction,
  amouletReceiverCodeRequestAction,
  amouletValidateRequestAction,
} from "./action";

import * as Yup from "yup";

const CreateAmoulet = (props: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showNote, setShowNote] = useState(false);
  const [modeOfPurchase, setModeOfPurchase] = useState('');

  let accessParams: object = {
    accessToken: props.accessToken,
    tokenType: props.tokenType,
    refresh_token: props.refreshToken,
  };

  useEffect(() => { }, []);

  //handle givercode
  const handleGiverCode = (e: any) => {
    e.preventDefault();
    dispatch(amouletGiverCodeRequestAction(accessParams));
  };

  //handle receiver code
  const handleReceiverCode = (e: any) => {
    e.preventDefault();
    dispatch(amouletReceiverCodeRequestAction(accessParams));
  };

  // Function to handle NFC and Serial number validation
  const handleNfcCodeSerialNumberValidation = (e: any, type: string) => {
    e.preventDefault();
    let typeArr = ["nfcCode", "serialNumber"];
    if (!inArray(type, typeArr) || e.target.value.length === 0) {
      return false;
    }

    var params: object = {};
    if (type === "nfcCode") {
      params = {
        value: e.target.value,
        type: type,
      };
    } else {
      params = {
        value: e.target.value,
        type: type,
      };
    }
    let finalParams: object = {
      params,
      accessParams,
    };

    dispatch(amouletValidateRequestAction(finalParams));
  };

  const handleOnSelectChange = (e: any, setFieldValue: any) => {
    setFieldValue("isOnline", e.target.value);
    if (e.target.value == "false") {
      setModeOfPurchase("Offline");
      setShowNote(true);
      console.log('showNote=>', showNote);
    } else {
      setModeOfPurchase("Online");
      setShowNote(false);
    }
  }

  return (
    <section className="create-amoulet p-0">
      <div>
        <h3>{props.title}</h3>
      </div>
      <div>
        <Formik
          initialValues={{
            name: "",
            description: "",
            nfcCode: "",
            serialNumber: "",
            receiverCode: "",
            giverCode: "",
            isOnline: "",
            note: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            description: Yup.string().required("Required"),
            nfcCode: Yup.string().required("Required"),
            serialNumber: Yup.string().required("Required"),
            isOnline: Yup.boolean().required("Required"),
            note: Yup.string().matches(/^[a-z][a-z\s]*$/, "Accept only alphabets and space"),
          })}

          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log("values :", values);
              console.log("showNote :", showNote);

              let amouletParams: object = {
                ...values,
                tag: "tag1",
                color: "#fff",
                giverCode: props.giverCodeUUID,
                receiverCode: props.receiverCodeUUID,
                isOnline: values.isOnline == "false" ? false : true,
              };

              let finalParams: object = {
                amouletParams,
                accessParams,
              };

              if (props.giverCodeUUID == "" || props.receiverCodeUUID == "") {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Please Assign Passphrase 1 and Passphrase 2",
                });
              } else {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Amoulet has been created",
                  showConfirmButton: false,
                  timer: 1500,
                }).then((res) => {
                  console.log("res:", res);
                  dispatch(amouletCreateRequestAction(finalParams));
                  setSubmitting(false);

                  setTimeout(() => {
                    history.go(0);
                  }, 500);
                });
              }
              console.log("finalParams :", finalParams);
              setSubmitting(false);
            }, 1000);
          }}

        >
          {({
            values,
            touched,
            handleBlur,
            handleChange,
            setFieldValue,
            setFieldTouched,
            handleSubmit,
            handleReset,
          }) => {
            console.log('handleChange from form:', values);

            return (
              <form onSubmit={handleSubmit} className="w-75 mx-auto">
                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-4 col-form-label">
                    Name
                  </label>
                  <div className="col-sm-8">
                    <Field
                      name="name"
                      type="text"
                      className="form-control rounded-sm"
                    />
                    <span className="text-danger">
                      <ErrorMessage name="name" />
                    </span>
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="description"
                    className="col-sm-4 col-form-label"
                  >
                    Description
                  </label>
                  <div className="col-sm-8">
                    <Field
                      name="description"
                      type="text"
                      className="form-control rounded-sm"
                    />
                    <span className="text-danger">
                      <ErrorMessage name="description" />
                    </span>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="nfcCode" className="col-sm-4 col-form-label">
                    NFC Code
                  </label>
                  <div className="col-sm-8">
                    <Field
                      name="nfcCode"
                      onBlur={(e: any) => {
                        handleNfcCodeSerialNumberValidation(e, "nfcCode");
                      }}
                      type="text"
                      className={
                        props.validateCode == "nfcCode"
                          ? "form-control rounded-sm border border-success"
                          : "form-control rounded-sm"
                      }
                    />
                    <span className="text-danger">
                      <ErrorMessage name="nfcCode" />
                    </span>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="isOnline" className="col-sm-4 col-form-label">
                    Mode of sale
                  </label>
                  {/* (e: any) => { handleOnSelectChange(e) } */}
                  <div className="col-sm-8">
                    <select
                      value={values.isOnline}
                      onBlur={() => setFieldTouched("isOnline", true)}
                      onChange={(e) => {
                        handleOnSelectChange(e, setFieldValue);
                      }}
                      name="isOnline"
                      className="form-control rounded-sm"

                    >

                      <option value="">-select-</option>

                      <option value="true">Online</option>

                      <option value="false">Offline</option>

                    </select>
                    <span className="text-danger">
                      <ErrorMessage name="isOnline" />
                    </span>
                  </div>
                </div>
                { showNote &&
                  <div className="form-group row">
                    <label htmlFor="note" className="col-sm-4 col-form-label">
                      Note
                  </label>
                    <div className="col-sm-8">
                      <Field
                        name="note"
                        type="text"
                        className="form-control rounded-sm"
                      />
                      <span className="text-danger">
                        <ErrorMessage name="note" />
                      </span>
                    </div>
                  </div>
                }
                <div className="form-group row">
                  <label className="col-sm-4 col-form-label"> </label>
                  <div className="col-sm-8">
                    <div className="row">
                      <div className="col-auto">
                        <button
                          disabled={props.giverCode.uuid ? true : false}
                          onClick={handleGiverCode}
                          className="btn btn-secondary rounded-sm"
                        >
                          Assign Passphrase1 ( Giver Code )
                          {props.isGiverCode ? (
                            <div
                              style={{ width: "20px", height: "20px" }}
                              className="spinner-border text-dark ml-2"
                              role="status"
                            >
                              <span className="sr-only"></span>
                            </div>
                          ) : (
                              ""
                            )}
                        </button>
                        {props.giverCode.uuid ? (
                          <i className="fas fa-check ml-2 text-success"></i>
                        ) : (
                            ""
                          )}
                      </div>
                      <div className="col-auto">
                        <button
                          disabled={props.receiverCode.uuid ? true : false}
                          onClick={handleReceiverCode}
                          className="btn btn-secondary rounded-sm"
                        >
                          Assign Passphrase2 ( Receiver Code )
                          {props.isReceiverCode ? (
                            <div
                              style={{ width: "20px", height: "20px" }}
                              className="spinner-border text-dark ml-2"
                              role="status"
                            >
                              <span className="sr-only"></span>
                            </div>
                          ) : (
                              ""
                            )}
                        </button>
                        {props.receiverCode.uuid ? (
                          <i className="fas fa-check ml-2 text-success"></i>
                        ) : (
                            ""
                          )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="serialNumber"
                    className="col-sm-4 col-form-label"
                  >
                    {" "}
                    RFID ( Serial Number )
                  </label>
                  <div className="col-sm-8">
                    <Field
                      name="serialNumber"
                      type="text"
                      onBlur={(e: any) => {
                        handleNfcCodeSerialNumberValidation(e, "serialNumber");
                      }}
                      className={
                        props.validateCode == "serialNumber"
                          ? "form-control rounded-sm border border-success"
                          : "form-control rounded-sm"
                      }
                    />
                    <span className="text-danger">
                      <ErrorMessage name="serialNumber" />
                    </span>
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-sm-4 col-form-label"></label>
                  <div className="col-sm-8">
                    <button
                      type="submit"
                      className="btn btn-success rounded-sm"
                    >
                      Create Amoulet
                    </button>
                    <button
                      onClick={handleReset}
                      className="btn btn-warning rounded-sm ml-1"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

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

export default connect(mapStateToProps)(withRouter(CreateAmoulet));
