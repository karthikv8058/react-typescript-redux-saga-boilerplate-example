import React from 'react';

export default function Loader(props:any) {
    return (

            <div className="loader-waiting d-flex justify-content-center">
                  <div className={`spinner-border ${props.color} align-self-center`} role="status">
                  </div>
              </div>

    )
}
