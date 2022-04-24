import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-gray-color">
            <div className="container mx-auto py-3">
                <nav className="flex items-center space-x-2 uppercase text-gray-800 text-sm">
                    <Link href="#" scroll={false}>
                        <a className="hover:bg-primary-color hover:text-white rounded py-2 px-5 transition-all">
                            Home
                        </a>
                    </Link>
                    <Link href="#" scroll={false}>
                        <a className="hover:bg-primary-color hover:text-white rounded py-2 px-5 transition-all">
                            Iphone
                        </a>
                    </Link>
                    <Link href="#" scroll={false}>
                        <a className="hover:bg-primary-color hover:text-white rounded py-2 px-5 transition-all">
                            IPad
                        </a>
                    </Link>
                    <Link href="#" scroll={false}>
                        <a className="hover:bg-primary-color hover:text-white rounded py-2 px-5 transition-all">
                            Airpods
                        </a>
                    </Link>
                    <Link href="#" scroll={false}>
                        <a className="hover:bg-primary-color hover:text-white rounded py-2 px-5 transition-all">
                            Watch
                        </a>
                    </Link>
                    <Link href="#" scroll={false}>
                        <a className="hover:bg-primary-color hover:text-white rounded py-2 px-5 transition-all">
                            Mac
                        </a>
                    </Link>
                    <Link href="#" scroll={false}>
                        <a className="hover:bg-primary-color hover:text-white rounded py-2 px-5 transition-all">
                            Accessories
                        </a>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
