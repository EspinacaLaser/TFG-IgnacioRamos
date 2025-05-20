import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";

const ClienteLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </>
);

export default ClienteLayout;