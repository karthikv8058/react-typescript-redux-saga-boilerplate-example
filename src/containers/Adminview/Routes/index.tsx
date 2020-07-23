import React from 'react';
import Dashbord from '../AdminComponents/dashboard';
import Amouletlist from '../AdminComponents/amouletlist';
import Userlist from '../AdminComponents/userlist';
import CreateAmoulet from '../AdminComponents/Amoulet/createAmoulet';


//Userlist
export const routes = [
    {
      path: "/admin",
      exact: true,
      sidebar: () => <Dashbord title="Dashboard"/>,
    //   main: () => <Dashbord/>
    },
    {
      path: "/admin/userlist",
      sidebar: () => <Userlist/>,
    //   main: () => <Userlist/>
    },
    {
        path: "/admin/amouletlist",
        sidebar: () => <Amouletlist/>,
      //   main: () => <Amouletlist/>
      },
      {
        path: "/admin/createAmoulet",
        sidebar: () => <CreateAmoulet/>,
      //   main: () => <CreateAmoulet/>
      },
  ];