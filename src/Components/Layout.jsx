import Topbar from "./Topbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <main className="flex-grow pt-16">{children}</main> 
      <Footer />
    </div>
  );
};

export default Layout;
