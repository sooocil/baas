// App.jsx

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";
import Protected from "./Component/Protected";
import Customerhome from "./pages/customer/Customerhome";
import Fav from "./pages/Fav";
import CmsOverview from "./Component/cms/CmsOverview";
import CmsRooms from "./Component/cms/CmsRooms";
import CmsBookings from "./Component/cms/CmsBookings";
import CmsGuests from "./Component/cms/CmsGuests";
import CmsNotification from "./Component/cms/CmsNotification";
import RoomDetail from "./pages/RoomDetailPage/RoomDetail";
import UpdatePage from "./Component/cms/Modals/UpdatePage";
import RoomContents from "./Component/Home/roomContens";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roomdetail/:id" element={<Protected Component={RoomDetail} />} />
      <Route path="/view" element={<Protected Component={Customerhome} />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cms/" element={<Protected Component={CmsOverview} />} />
      <Route path="/cms/overview" element={<Protected Component={CmsOverview} />} />
      <Route path="/cms/rooms" element={<CmsRooms />} />
      <Route path="/cms/booking" element={<CmsBookings />} />
      <Route path="/cms/guests" element={<CmsGuests />} />
      <Route path="/cms/notification" element={<CmsNotification />} />
      <Route path="/cms/rooms/update/:id" element={<UpdatePage />} />
      <Route path="/roomContent/:id" element={<RoomContents />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
