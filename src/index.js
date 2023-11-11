import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import User from "layouts/User.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Profile from "views/Profile.js";
import Index from "views/Index.js";
import ChirGuidee from "views/ChirgurieGuidee.js";
import Aligneurs from "views/Aligneurs.js";
import Contact from "views/Contact.js";
import GuideChirurgical from "views/GuideChirurgical.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/user" component={User} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/profile" exact component={Profile} />
      <Route path="/chirgurie_guidee" exact component={ChirGuidee} />
      <Route path="/aligneurs" excat component={Aligneurs} />
      <Route path="/contact" excat component={Contact} />
      <Route path="/guide_chirurgical" excat component={GuideChirurgical} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
