import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminSidebar from "components/Sidebar/AdminSidebar.js";
import HeaderStatsEmpty from "components/Headers/HeaderStatsEmpty.js";

// views
import AcceptUsers from "views/admin/AcceptUserRequest";
import AcceptOrder from "views/admin/AcceptOrders";


export default function Admin() {
  return (
    <>
      <AdminSidebar />
      <div className="relative md:ml-64 bg-blueGray-100 h-screen">
        <AdminNavbar />
        {/* Header */}
        <HeaderStatsEmpty/>
        
        <div className="flex flex-col ">
        <div className="px-4 md:px-10 mx-auto w-full -m-24" style={{ backgroundColor: "#f0f0f0" }}>   
        
          <Switch>
            {/* <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/messages" exact component={Messages} />
            <Route path="/admin/nouvelle_commande" exact component={Commandes} />

            <Route path="/admin/nouvelle_commande/guide_chirurgical" exact component={Guide_chirurgical} />
            <Route path="/admin/nouvelle_commande/guide_chirurgical/guide_chirurgical_pci" exact component={GC_PCI} />
            <Route path="/admin/nouvelle_commande/guide_chirurgical/guide_chirurgical_pc" exact component={GC_PC} />
            <Route path="/admin/nouvelle_commande/guide_chirurgical/guide_chirurgical_p" exact component={GC_P} />

            <Route path="/admin/nouvelle_commande/aligneurs" exact component={Aligneurs} />
            <Route path="/admin/nouvelle_commande/goutieres" exact component={Goutieres} />
            <Route path="/admin/nouvelle_commande/modeles_dentaires" exact component={ModelesDentaires} />
            <Route path="/admin/commandes" exact component={VosCommandes} />
            <Route path="/admin/nouvelle_commande/first" exact component={Maps} />
            <Redirect from="/admin" to="/admin/dashboard" /> */}
            <Route path="/admin/users_requests" exact component={AcceptUsers} />
            <Route path="/admin/commandes" exact component={AcceptOrder} />

            <Redirect from="/admin" to="/admin/users_requests" />
          </Switch>
          <br></br>
          <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
