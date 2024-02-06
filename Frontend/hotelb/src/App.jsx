import { Routes, Route, Link, Router } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cms from "./pages/Cms";
import { Fav } from "./pages/Fav";
import NavBar from "./Component/NavBar";
import { CmsBookings } from "./Component/cms/CmsBookings";
import { CmsRooms } from "./Component/cms/CmsRooms";
import { CmsSetting } from "./Component/cms/CmsSetting";
import { CmsOverview } from "./Component/cms/CmsOverview";
import { CmsNotification } from "./Component/cms/CmsNotification";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cms" element={<CmsOverview />} />
        <Route path="/cms/overview" element={<CmsOverview />} />
        <Route path="/cms/rooms" element={<CmsRooms />} />
        <Route path="/cms/booking" element={<CmsBookings />} />
        <Route path="/cms/setting" element={<CmsSetting />} />
        <Route path="/cms/notification" element={<CmsNotification />} />
      </Routes>
    </div>
  );
}

export default App;
