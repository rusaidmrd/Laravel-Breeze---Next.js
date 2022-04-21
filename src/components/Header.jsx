import HeaderMidldle from "./Header/HeaderMidldle";
import Navbar from "./Header/Navbar";
import Topbar from "./Header/Topbar";

const Header = () => {
    return (
        <div>
            <Topbar />
            <HeaderMidldle />
            <Navbar />
        </div>
    );
};

export default Header;
