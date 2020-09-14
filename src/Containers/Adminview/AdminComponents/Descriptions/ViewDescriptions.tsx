import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";

import {
  listDescriptionsRequestAction,
  addDescriptionRequestAction,
} from "./action";
import Card from "../../../../Components/CardDescription";

import * as Yup from "yup";

const ViewDescriptions = (props: any) => {
  const dispatch = useDispatch();

  let accessParams: object = {
    accessToken: props.accessToken,
    tokenType: props.tokenType,
  };

  useEffect(() => {
    dispatch(listDescriptionsRequestAction(accessParams));
  }, [props.isUpdate]);

  console.log("isupdate :", props.isUpdate);

  let CardItems =
    props.descriptionList.length &&
    props.descriptionList.map((item: any, index: any) => {
      return (
        <Card
          isUpdate={props.isUpdate}
          accessParams={accessParams}
          key={index}
          addDescriptionRequestAction={addDescriptionRequestAction}
          uuid={item.uuid}
          title={item.name}
          description={item.description}
        />
      );
    });

  // props.isUpdate
  //   ? dispatch(listDescriptionsRequestAction(accessParams))
  //   : console.log("not");

  return (
    <section className="add-descriptions p-0">
      <div>
        <h3>{props.title}</h3>
      </div>
      <div>
        <div className="row">{CardItems}</div>
      </div>
    </section>
  );
};

const mapStateToProps: any = (state: any) => {
  return {
    accessToken: state.loginReducer.accessToken,
    tokenType: state.loginReducer.tokenType,
    descriptionList: state.descriptionReducer.descriptionList,
    isUpdate: state.descriptionReducer.isUpdate,
  };
};

export default connect(mapStateToProps)(withRouter(ViewDescriptions));
