import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import {  withRouter } from 'react-router-dom';

const CreateAmolet = (props:any) => {

    console.log("props from amoulet",props);
    

    const dispatch = useDispatch();

    let params:object = {
      accessToken: props.accessToken,
      tokenType: props.tokenType
    }

    useEffect(() => {
      
    },[]);

    return (
      <section className="create-amoulet p-0">
        <div>
            <h3>{props.title}</h3>
        </div>
        
        <div>
            <form className="w-75 mx-auto">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">SKU</label>
                <div className="col-sm-8">
                  <input type="text"  className="form-control rounded-sm"/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Description</label>
                <div className="col-sm-8">
                  <input type="text"  className="form-control rounded-sm"/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">NFC Code </label>
                <div className="col-sm-8">
                  <input type="text"  className="form-control rounded-sm"/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label"> Giver Code </label>
                <div className="col-sm-8">
                  <button className="btn btn-secondary rounded-sm">Assign Giver Code</button>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label"> Receiver Code </label>
                <div className="col-sm-8">
                  <button className="btn btn-secondary rounded-sm">Assign Receiver Code</button>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Product Serial Number </label>
                <div className="col-sm-8">
                  <input type="text"  className="form-control rounded-sm"/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label"></label>
                <div className="col-sm-8">
                <button className="btn btn-success rounded-sm">Create Amoulet</button>
                </div>
              </div>

            </form>
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

