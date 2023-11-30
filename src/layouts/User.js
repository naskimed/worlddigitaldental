import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import HeaderStatsEmpty from "components/Headers/HeaderStatsEmpty.js";

// views

import Dashboard from "views/user/Dashboard.js";
import Maps from "views/user/Maps.js";
import Commandes from "views/user/Commandes.js";
import VosCommandes from "views/user/VosCommandes.js";
import Messages from "views/user/Messages.js";
import Guide_chirurgical from "views/user/GuideChirurgical.js";
import Aligneurs from "views/user/Aligneurs";
import Goutieres from "views/user/Goutieres";
import ModelesDentaires from "views/user/ModelesDentaires";
import GC_PCI from "views/user/GC_PCI";  
import GC_PC from "views/user/GC_PC";
import GC_P from "views/user/GC_P";
import OrderConfirmation from "views/user/OrderConfirmation";
import PaymentMethods from "views/user/PaymentMethod";
import Confirmed from "views/user/Confirmed";
import ToBeConfirmed from "views/user/To_be_confirmed";
import OrderRejectionPage from "views/user/OrderRejection";
import RejectionP from "views/user/RejectionReason";
import OrderPaymentPage from "views/user/MoneyAmount";

export default function User() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 h-screen">
        <AdminNavbar />
        {/* Header */}
        <HeaderStatsEmpty/>
        
        <div className="flex flex-col ">
        <div className="px-4 md:px-10 mx-auto w-full -m-24" style={{ backgroundColor: "#f0f0f0" }}>   
        
          <Switch>
            <Route path="/user/dashboard" exact component={Dashboard} />
            <Route path="/user/messages" exact component={Messages} />
            <Route path="/user/confirmation" exact component={OrderConfirmation} />
            <Route path="/user/nouvelle_commande" exact component={Commandes} />
            <Route path="/user/nouvelle_commande/guide_chirurgical" exact component={Guide_chirurgical} />
            <Route path="/user/payment" exact component={PaymentMethods} />
            <Route path="/user/confirmed" exact component={Confirmed} />
            <Route path="/user/to_confirm" exact component={ToBeConfirmed} />
            <Route path="/user/confirmation/rejection" exact component={OrderRejectionPage} />
            <Route path="/user/rejected" exact component={RejectionP} />
            <Route path="/user/confirmation/amount" exact component={OrderPaymentPage} />

            <Route path="/user/nouvelle_commande/guide_chirurgical" exact component={Guide_chirurgical} />
            <Route path="/user/nouvelle_commande/guide_chirurgical/guide_chirurgical_pci" exact component={GC_PCI} />
            <Route path="/user/nouvelle_commande/guide_chirurgical/guide_chirurgical_pc" exact component={GC_PC} />
            <Route path="/user/nouvelle_commande/guide_chirurgical/guide_chirurgical_p" exact component={GC_P} />

            <Route path="/user/nouvelle_commande/aligneurs" exact component={Aligneurs} />
            <Route path="/user/nouvelle_commande/goutieres" exact component={Goutieres} />
            <Route path="/user/nouvelle_commande/modeles_dentaires" exact component={ModelesDentaires} />
            <Route path="/user/commandes" exact component={VosCommandes} />
            <Route path="/user/nouvelle_commande/first" exact component={Maps} />
            <Redirect from="/user" to="/user/dashboard" />
          </Switch>
          </div>
        </div>
      </div>
    </>
  );
}
