import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    withRouter,
  } from "react-router-dom";



const Sidebar = (prosp:any) => {

    let { topicId } = useParams();

    return (
        <div>
            {topicId}
        </div>
    )
}

export default Sidebar;
