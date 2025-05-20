import AdminHeader from "../components/ui/header/AdminHeader";
import Footer from "../components/ui/footer/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => (
  <>
    <AdminHeader />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default AdminLayout;