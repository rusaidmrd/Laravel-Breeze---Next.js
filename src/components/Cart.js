import Image from "next/image";
import { AiFillCloseSquare } from "react-icons/ai";

const Cart = () => {
    return (
        <div>
            <div className=" bg-white py-3 w-full">
                <div className="flex container mx-auto">
                    <div>
                        <h4 className="font-semibold text-lg">My Cart</h4>
                    </div>
                </div>
            </div>

            <div className="bg-gray-color py-12">
                <div className="container mx-auto bg-white">
                    <div className="rounded-md shadow-theme">
                        <div className="bg-white py-4.5 px-5 border-b border-gray-color">
                            <div className="flex flex-wrap">
                                <div className="flex-zero-auto lg:w-w-8.333 md:w-w-8.333 sm:w-full"></div>
                                <div className="flex-zero-auto lg:w-1/3 md:w-1/4 sm:w-full">
                                    <p>Product name</p>
                                </div>
                                <div className="flex-zero-auto lg:w-2/12 md:w-2/12 sm:full">
                                    <p>Quantity</p>
                                </div>
                                <div className="flex-zero-auto lg:w-2/12 md:w-2/12 sm:full">
                                    <p>Subtotal</p>
                                </div>
                                <div className="flex-zero-auto lg:w-2/12 md:w-2/12 sm:full">
                                    <p>Discount</p>
                                </div>
                                <div className="flex-zero-auto lg:w-w-8.333 md:w-w-8.333 sm:w-full">
                                    <p>Remove</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 py-6 border-b border-gray-color">
                            <div className="flex flex-wrap items-center">
                                <div className="flex-zero-auto lg:w-w-8.333 md:w-w-8.333 sm:w-full">
                                    <div className="relative pr-2">
                                        <Image
                                            src="/images/iPhone-13-pro-max.jpeg"
                                            alt="product image"
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                </div>
                                <div className="flex-zero-auto lg:w-1/3 md:w-1/4 sm:w-full">
                                    <h5 className="text-lg">
                                        Apple iPhone X 256 GB Space Gray
                                    </h5>
                                    <h4 className="text-sm font-semibold">
                                        4500 QAR
                                    </h4>
                                    <p className="block mt-1.5">
                                        <span className="block text-xs">
                                            <em>Memory:</em> 256GB
                                        </span>
                                        <span className="block text-xs">
                                            <em>Color:</em> Space Gray
                                        </span>
                                    </p>
                                </div>
                                <div className="flex-zero-auto lg:w-2/12 md:w-2/12 sm:full">
                                    <div>
                                        <select
                                            name=""
                                            id=""
                                            className="text-sm border-gray-200 w-28 py-2 rounded-md shadow-sm focus:outline-none focus:border-primary-color focus:ring-1"
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex-zero-auto lg:w-2/12 md:w-2/12 sm:full">
                                    <p>4500 QAR</p>
                                </div>
                                <div className="flex-zero-auto lg:w-2/12 md:w-2/12 sm:full">
                                    <p>200 QAR</p>
                                </div>
                                <div className="flex-zero-auto lg:w-w-8.333 md:w-w-8.333 sm:w-full">
                                    <button className="outline-none">
                                        <AiFillCloseSquare className="text-2xl text-secondary-color" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto flex justify-between mt-8">
                    <div>
                        <div className="bg-white p-10 rounded-md shadow-theme inline-block">
                            <form action="">
                                <input
                                    type="text"
                                    placeholder="Enter Your Coupon"
                                    className="py-3 px-5 rounded inline-block w-80 border border-gray-200"
                                />
                                <div className="inline-block">
                                    <button className="border-none outline-none ml-2 py-3 px-5 relative bg-primary-color rounded text-white">
                                        Apply Coupon
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="bg-white p-10 rounded-md shadow-theme w-1/3">
                        <ul>
                            <li className="mb-3 text-sm">
                                Cart Subtotal
                                <span className="inline-block float-right">
                                    $2560.00
                                </span>
                            </li>
                            <li className="mb-3 text-sm">
                                Delivery
                                <span className="inline-block float-right">
                                    Free
                                </span>
                            </li>
                            <li className="mb-3 text-sm">
                                You Save
                                <span className="inline-block float-right">
                                    $29.00
                                </span>
                            </li>
                            <li className="mb-3 text-sm">
                                You Pay
                                <span className="inline-block float-right">
                                    $2531.00
                                </span>
                            </li>
                        </ul>
                        <div className="mt-8 space-y-2">
                            <button className="border-none outline-none py-3 text-center bg-secondary-color text-white rounded w-full">
                                Checkout
                            </button>
                            <button className="border-none outline-none py-3 text-center bg-primary-color text-white rounded w-full">
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
