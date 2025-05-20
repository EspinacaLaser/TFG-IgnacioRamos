import AdminHeader from "../components/ui/header/AdminHeader";
import Footer from "../components/ui/footer/Footer";

const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <AdminHeader />
    <main className="flex-1">{children}</main>
    <Footer />
  </>
);

export default AdminLayout;