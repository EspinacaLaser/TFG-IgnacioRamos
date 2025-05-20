import RecepcionistaHeader from "../components/ui/header/RecepcionistaHeader";
import Footer from "../components/ui/footer/Footer";

const RecepcionistaLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <RecepcionistaHeader />
    <main className="flex-1">{children}</main>
    <Footer />
  </>
);

export default RecepcionistaLayout;