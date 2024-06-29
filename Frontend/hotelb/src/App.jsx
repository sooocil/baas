import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";
import ProtectedRoute from "./Component/Home/ProtectedRoute";
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
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roomdetail/:id" element={<RoomDetail />} />
      <Route path="/view" element={<Customerhome />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cms" element={<ProtectedRoute component={CmsOverview} adminRoute />} />
      <Route path="/cms/overview" element={<ProtectedRoute component={CmsOverview} adminRoute />} />
      <Route path="/cms/rooms" element={<ProtectedRoute component={CmsRooms} adminRoute />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/cms/booking" element={<ProtectedRoute component={CmsBookings} adminRoute />} />
      <Route path="/cms/guests" element={<ProtectedRoute component={CmsGuests} adminRoute />} />
      <Route path="/cms/notification" element={<ProtectedRoute component={CmsNotification} adminRoute />} />
      <Route path="/cms/rooms/update/:id" element={<ProtectedRoute component={UpdatePage} adminRoute />} />
      <Route path="/roomContent/:id" element={<RoomContents />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
