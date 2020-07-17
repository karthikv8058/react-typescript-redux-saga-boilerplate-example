import React, { FunctionComponent,useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {itemStates} from './types';
import { addItems,fetchStatesAction } from './action';
import Button from '../../Components/Button';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const Newitems = (props:any) =>{

  console.log('Props from Newitems :',props)
  const [stateProps, setstateProps] = useState(props);  
  
  const dispatch = useDispatch();

  const onAddItem = (item:string) => {
    dispatch(addItems(item));
  }

  const { match } = props;
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener('popstate', function (event){
         window.history.pushState(null, document.title,  window.location.href);
      });

  
  
    return(
        <div className="w-100">
          <div className="jumbotron w-50 border border-primary rounded-0 mx-auto">
              <Button addItem={onAddItem}/>
              <ul>
                  {
                    props.items.length>0&&props.items.map((item:any)=>{
                      return <li key={item} className="text-dark">{item}</li>
                    })}
              </ul>
          </div>

          <div className="d-block jumbotron w-100 border border-50 rounded-0 bg-light mx-auto">
              {
                  props.isloading?'Loading...':props.itemsArr.length>0 && props.itemsArr.slice(0,15).map((values:any,index:any)=>{
                    return <p className="text-dark" key={index}> # {values.name} </p>
                  })
              }
              {
                console.log('loading:',props.isloading)
                
              }
          </div>

      </div>
        
    );
}


const mapStateToProps: any = (state: any) => {
  return {
      items: state.itemReducer.items,
      itemsArr: state.itemReducer.itemsArr,
      isloading: state.itemReducer.isloading,
  };
};

export default connect(
  mapStateToProps)(withRouter(Newitems));



