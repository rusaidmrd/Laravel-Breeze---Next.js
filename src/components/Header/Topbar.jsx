import Link from "next/link";
import ChevronDown from "../icons/ChevronDown";
import Phone from "../icons/Phone";

const Topbar = () => {
    return (
        <div className="bg-primary-dark py-3 text-sm text-gray-100">
            <div className="container mx-auto flex items-center justify-between">
                {/* top bar menu */}
                <div className="space-x-4">
                    <span>
                        <Link href="#" scroll={false}>
                            <a>About us</a>
                        </Link>
                    </span>
                    <span>
                        <Link href="#" scroll={false}>
                            <a>Contact us</a>
                        </Link>
                    </span>
                </div>

                {/* top bar left section */}
                <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                        <span>
                            <Phone classes="h-4 w-4" />
                        </span>
                        <Link href="#" scroll={false}>
                            <a>+974 706545234</a>
                        </Link>
                    </div>
                    <button className="flex items-center space-x-1">
                        <span>Choose language</span>
                        <ChevronDown classes="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
