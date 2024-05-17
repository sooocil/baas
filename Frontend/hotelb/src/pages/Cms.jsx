//Content Management System (cms)
import React from "react";
import Bbutton from "../Component/back_button";
import "../css/Cms.css";
import { Helmet } from "react-helmet";
import { Computer, User, Bed } from "lucide-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CmsNav } from "../Component/cms/CmsNav";
import { CmsOverview } from "../Component/cms/CmsOverview";
import { RoomsCard } from "../Component/Home/RoomsCard";

const Cms = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <CmsNav />
    </>
  );
};

export default Cms;
