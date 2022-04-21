import Header from "./Header";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

const Layout = ({ children }) => {
    return (
        <div className="text-gray-600">
            <Header />
            {children}
            <Newsletter />
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
