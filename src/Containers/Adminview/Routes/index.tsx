import React from 'react';
import Dashbord from '../AdminComponents/Dashboard/dashboard';
import Amouletlist from '../AdminComponents/Amoulet/amouletlist';
import Userlist from '../AdminComponents/Userlist/userlist';
import CreateAmoulet from '../AdminComponents/Amoulet/createAmoulet';
import UserListView from '../AdminComponents/Userlist/userListView';
import Stories from '../AdminComponents/Stories/storyList';
import AddDescriptions from '../AdminComponents/Descriptions/addDescriptions';
import ViewDescriptions from '../AdminComponents/Descriptions/ViewDescriptions';


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
    },
    {
        path: "/admin/amouletlist",
        sidebar: () => <Amouletlist/>,
      },
      {
        path: "/admin/create-amoulet",
        sidebar: () => <CreateAmoulet/>,
      },
      {
        path: "/admin/userListView",
        sidebar: () => <UserListView title="User list View"/>,
      },
      {
        path: "/admin/stories",
        sidebar: () => <Stories/>,
      },
      {
        path: "/admin/adddescriptions",
        sidebar: () => <AddDescriptions title="Add Section"/>,
      },
      {
        path: "/admin/viewdescriptions",
        sidebar: () => <ViewDescriptions title="View Descriptions"/>,
      },
  ];