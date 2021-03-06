/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  /*{
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin",
  },*/
  {
    path: "/tables",
    name: "Customers",
    icon: " tim-icons icon-single-02 ",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Deposits",
    icon: "tim-icons icon-bank",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "WITHDRAWALS",
    icon: "tim-icons icon-credit-card ",
    component: UserProfile,
    layout: "/admin",
  },
 /* {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  }, */
  {
    path: "/dashboard",
    name: "ANALYTICS",
    icon: "tim-icons icon-chart-bar-32",
    component: Typography,
    layout: "/admin",
  },
  /*{
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl",
  },*/
];
export default routes;
