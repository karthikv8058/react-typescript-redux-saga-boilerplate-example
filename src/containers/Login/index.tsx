import React, { FunctionComponent } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {itemStates} from './types';
import { addItems } from './action';
import Button from '../../Components/Button';

type loginProps = {
    props: any,
}

const Login : FunctionComponent<loginProps> = (props:loginProps) => {
  const items = useSelector<itemStates,itemStates['items']>((state)=>state.items);
  const itemsArr = useSelector<itemStates,itemStates['itemsArr']>((state)=>state.itemsArr);
  const isloading = useSelector<itemStates,itemStates['isloading']>((state)=>state.isloading);
  
  const dispatch = useDispatch();
  const onAddItem = (item:string) => {
    dispatch(addItems(item));
  }
    return(
        <div className="w-100">
          <div className="jumbotron w-50 border border-primary rounded-0 mx-auto">
              <Button addItem={onAddItem}/>
              <ul>
                  {
                    items.length>0&&items.map((item)=>{
                      return <li key={item}>{item}</li>
                    })}
              </ul>
          </div>

          <div className="d-block jumbotron w-100 border border-50 rounded-0 bg-light mx-auto">
              {
                  isloading?'Calling API...':
                  itemsArr.length>0 && itemsArr.slice(0,15).map((values:any)=>{
                    return <p> # {values.name} </p>
                  })
              }
          </div>
      </div>
    );
}
export default Login;


