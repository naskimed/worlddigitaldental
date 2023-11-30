import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminSidebar from "components/Sidebar/AdminSidebar.js";
import HeaderStatsEmpty from "components/Headers/HeaderStatsEmpty.js";

// views
import AcceptUsers from "views/admin/AcceptUserRequest";
import AcceptOrder from "views/admin/AcceptOrders";
import ConfirmWaitingOrder from "views/admin/ConfirmOrders";
import PdfUploadPage from "views/admin/AttachezPDF";
import PdfConfirmed from "views/admin/PDFconfirmed";
import OrderFirstConfirmation from "views/admin/OrderConfirmed";
import AccountConfirmed from "views/admin/AccountConfirmed";
import ShowDetails from "views/admin/ShowDetails";

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
            <Route path="/admin/users_requests" exact component={AcceptUsers} />
            <Route path="/admin/commandes" exact component={AcceptOrder} />
            <Route path="/admin/commandes_en_attente" exact component={ConfirmWaitingOrder} />
            <Route path="/admin/commandes_en_attente/pdf" exact component={PdfUploadPage} />
            <Route path="/admin/pdf_envoyee" exaact component={PdfConfirmed} /> 
            <Route path="/admin/order_first_confirmation" exact component={OrderFirstConfirmation} />
            <Route path="/admin/accept_user" exact component={AccountConfirmed} />
            <Route path="/admin/commandes/commande" exaact component={ShowDetails} />

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
