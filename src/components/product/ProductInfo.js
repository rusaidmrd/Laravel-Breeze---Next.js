import { HiOutlineStar, HiOutlineHeart } from "react-icons/hi";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare,
} from "react-icons/fa";

const ProductInfo = () => {
    return (
        <>
            <div className="bg-white rounded-lg p-7 relative">
                {/* Product name */}
                <div>
                    <h3 className="text-2xl font-semibold">
                        iPhone 13 Pro Max
                    </h3>
                </div>

                {/* display review */}
                <div className="flex items-center mt-2 space-x-2">
                    <div className="text-lg text-yellow-500 flex space-x-1">
                        <HiOutlineStar />
                        <HiOutlineStar />
                        <HiOutlineStar />
                        <HiOutlineStar />
                        <HiOutlineStar />
                    </div>
                    <span>No reviews</span>
                </div>

                {/* Product price  */}
                <div className="mt-6">
                    <h3 className="text-3xl font-bold">5400 QAR</h3>
                </div>

                {/* Product short description */}
                <div className="mt-3">
                    <p>
                        A dramatically more powerful camera system. A display so
                        responsive, every interaction feels new again. The
                        world’s fastest smartphone chip. Exceptional durability.
                        And a huge leap in battery life.
                    </p>
                </div>

                {/* Product color section */}
                <div className="rounded mt-5 border-t border-gray-200 py-7">
                    <span className="font-semibold">Choose your color</span>
                    <div className="grid grid-cols-5 gap-1 gap-y-3 mt-3">
                        <label className="cursor-pointer bg-white shadow-product flex flex-col justify-center items-center w-24 h-24 rounded-md space-y-1 border border-primary-color">
                            <div className="bg-[url('/images/MM2H3_SW_COLOR.jpeg')] bg-cover bg-center bg-no-repeat w-8 h-8"></div>
                            <span className="text-xs mt-1">Sierra Blue</span>
                        </label>
                        <label className="cursor-pointer bg-white shadow-product flex flex-col justify-center items-center w-24 h-24 rounded-md space-y-1">
                            <div className="bg-[url('/images/MM2J3_SW_COLOR.jpeg')] bg-cover bg-center bg-no-repeat w-8 h-8"></div>
                            <span className="text-xs mt-1">Silver</span>
                        </label>
                        <label className="cursor-pointer bg-white shadow-product flex flex-col justify-center items-center w-24 h-24 rounded-md space-y-1">
                            <div className="bg-[url('/images/MN653_SW_COLOR.jpeg')] bg-cover bg-center bg-no-repeat w-8 h-8"></div>
                            <span className="text-xs mt-1">Gold</span>
                        </label>
                        <label className="cursor-pointer bg-white shadow-product flex flex-col justify-center items-center w-24 h-24 rounded-md space-y-1">
                            <div className="bg-[url('/images/MN663_SW_COLOR.jpeg')] bg-cover bg-center bg-no-repeat w-8 h-8"></div>
                            <span className="text-xs mt-1">Graphite</span>
                        </label>
                    </div>
                </div>

                {/* Product size section */}
                <div className="rounded mt-5 border-t border-gray-200 py-7">
                    <span className="font-semibold">Choose your capacity</span>
                    <div className="grid grid-cols-5 gap-1 gap-y-3 mt-3">
                        <label className="cursor-pointer bg-white shadow-product flex flex-col justify-center items-center w-24 h-14 rounded-md space-y-1 border border-primary-color">
                            <span className="mt-1">128GB</span>
                        </label>
                        <label className="cursor-pointer bg-white shadow-product flex flex-col justify-center items-center w-24 h-14 rounded-md space-y-1">
                            <span className="mt-1">256GB</span>
                        </label>
                        <label className="cursor-pointer bg-white shadow-product flex flex-col justify-center items-center w-24 h-14 rounded-md space-y-1">
                            <span className="mt-1">512GB</span>
                        </label>
                        <label className="cursor-pointer bg-white shadow-product flex flex-col justify-center items-center w-24 h-14 rounded-md space-y-1">
                            <span className="mt-1">1TB</span>
                        </label>
                    </div>
                </div>

                {/* Add to cart sectiion */}
                <div className="flex items-center justify-between mt-10">
                    <div className="flex items-center w-2/3 space-x-3">
                        <select
                            name=""
                            id=""
                            className="text-sm border-gray-200 w-40 py-3 rounded-md shadow-sm focus:outline-none focus:border-primary-color focus:ring-1"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <button className="px-6 py-3 bg-primary-color text-white rounded-md">
                            Add To Cart
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-6 left-7">
                    <button className="px-4 py-3 bg-transparent rounded-md border border-primary-color text-primary-color flex items-center">
                        <HiOutlineHeart className="mr-2 text-xl" />
                        To Wishlist
                    </button>
                </div>

                <div className="absolute bottom-6 right-7">
                    <div className="flex items-center space-x-3">
                        <span className="font-semibold">Share</span>
                        <div className="flex items-center space-x-1">
                            <FaFacebookSquare className="text-primary-color text-2xl" />
                            <FaInstagramSquare className="text-primary-color text-2xl" />
                            <FaLinkedin className="text-primary-color text-2xl" />
                            <FaTwitterSquare className="text-primary-color text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductInfo;
