import Image from "next/image";
import Search from "../icons/Search";
import UserCircle from "../icons/UserCircle";
import Heart from "../icons/Heart";
import Cart from "../icons/Cart";

const HeaderMidldle = () => {
    return (
        <div className="py-5">
            <div className="container mx-auto flex items-center">
                {/* Logo wrapper */}
                <div className="w-1/4">
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        width="100px"
                        height="60px"
                    />
                </div>

                {/* Search wrapper */}
                <div className="w-1/2">
                    <div className="w-full relative flex">
                        <input
                            className="bg-gray-100 w-full px-4 rounded h-11 border-none focus:outline-none"
                            type="search"
                            placeholder="Search"
                            role="combobox"
                            aria-expanded="false"
                            aria-owns="predictive-search-results-list"
                            aria-controls="predictive-search-results-list"
                            aria-haspopup="listbox"
                            aria-autocomplete="list"
                            autoCorrect="off"
                            autoComplete="off"
                            autoCapitalize="off"
                            spellCheck="false"
                            aria-activedescendant=""
                        />
                        <button className="bg-secondary-color w-20 h-11 flex justify-center items-center absolute top-0 right-0 rounded-tr rounded-br">
                            <Search classes="h-5 w-5 text-white" />
                        </button>
                    </div>
                </div>

                {/* Cart - Wishlist - Myaccount wrapper */}
                <div className="w-1/4 flex items-center justify-end space-x-6">
                    <div className="flex items-center">
                        <button className="flex items-center space-x-1">
                            <UserCircle classes="h-6 w-6" />
                            <span>My Account</span>
                        </button>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button>
                            <Heart classes="h-7 w-7" />
                        </button>
                        <button className="relative">
                            <Cart classes="h-7 w-7" />
                            <span className="h-5 w-5 text-xs leading-5 rounded-full bg-secondary-color text-white absolute -top-2 -right-2 z-10">
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMidldle;
