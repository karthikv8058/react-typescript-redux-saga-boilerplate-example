import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";

const Card = (props: any) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [isEditTitleDisabled, setIsEditTitleDisabled] = useState(true);
  const [updateBtnDisabled, setUpdateBtnDisabled] = useState(true);
  const [isEditDescriptionDisabled, setIsEditDescriptionDisabled] = useState(
    true
  );

  const handleOnchangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleOnBlurTitle = (e: any) => {
    setIsEditTitleDisabled(true);
  };

  const handleOnBlurDescription = (e: any) => {
    setIsEditDescriptionDisabled(true);
  };

  const handleOnchangeDescription = (e: any) => {
    setDescription(e.target.value);
  };

  const handleOnEditButton = () => {
    setIsEditTitleDisabled(false);
    setIsEditDescriptionDisabled(false);
    setUpdateBtnDisabled(false);
  };

  let accessParams = props.accessParams;

  const handleOnUpdateButton = async (e: any, title: any, description: any) => {
    setIsEditTitleDisabled(true);
    setIsEditDescriptionDisabled(true);

    let uuid = e.target.getAttribute("data-uuid");

    let descriptionParams = {
      descriptions: [{ id: uuid, name: title, description: description }],
    };

    let params = {
      accessParams,
      descriptionParams,
    };
    console.log("params :", params);
    dispatch(props.addDescriptionRequestAction(params));

    setTimeout(() => {
      setUpdateBtnDisabled(true);
    }, 1500);
  };

  return (
    <div className="col-xl-12 col-md-12 mb-4">
      <div
        className={`card border-left-${
          props.color ? props.color : "success"
        } shadow h-100 py-2`}
      >
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="h4  font-weight-bold text-primary text-uppercase mb-1">
                <input
                  onBlur={(e) => {
                    handleOnBlurTitle(e);
                  }}
                  onChange={(e) => {
                    handleOnchangeTitle(e);
                  }}
                  type="text"
                  value={title}
                  className={`form-control font-weight-bold ${
                    isEditTitleDisabled ? "border-0" : "border-1"
                  } bg-transparent`}
                  disabled={isEditTitleDisabled}
                />
              </div>
              <div className="text-xs mb-0 font-weight-bold text-gray-800">
                <textarea
                  value={description}
                  onBlur={(e) => {
                    handleOnBlurDescription(e);
                  }}
                  onChange={(e) => {
                    handleOnchangeDescription(e);
                  }}
                  className={`form-control small ${
                    isEditDescriptionDisabled ? "border-0" : "border-1"
                  } bg-transparent`}
                  name=""
                  id=""
                  disabled={isEditDescriptionDisabled}
                ></textarea>
              </div>
              <button
                disabled={updateBtnDisabled}
                data-uuid={props.uuid}
                onClick={(e) => {
                  handleOnUpdateButton(e, title, description);
                }}
                className="btn btn-primary btn-sm mt-2"
              >
                Update
              </button>
              <button
                onClick={handleOnEditButton}
                className="btn btn-warning btn-sm mt-2 ml-2"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
