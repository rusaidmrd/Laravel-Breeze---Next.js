import Image from "next/image";

const DisplayProducts = (props) => {
    return (
        <div className="mt-6 bg-gray-100 py-14">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <h2 className="relative text-3xl text-primary-color font-bold pb-5 before:absolute before:left-0 before:bottom-0 before:bg-primary-color before:h-1 before:w-16 before:rounded">
                        {props.title}
                    </h2>
                    <button className="py-2 px-6 border border-primary-color text-primary-color outline-none rounded-md">
                        View All
                    </button>
                </div>
                <div className="mt-10 grid grid-cols-4 gap-6">
                    <div>
                        <div className="bg-white rounded-xl p-5 shadow-product transform hover:scale-105 hover:shadow-product-scale transition-all duration-300">
                            <a href="#">
                                {/* Image wrapper */}
                                <div className="w-full min-h-250 pt-2 pb-0 my-0 mx-auto">
                                    <div className="w-auto block h-60 my-0 mx-auto relative">
                                        <Image
                                            src="/images/MacBook Air M1 Chip 13.3 inch 8GB : 256GB.png"
                                            layout="fill"
                                            objectFit="contain"
                                            alt="iPhone-13-pro-max.jpeg"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Content info wrapper */}
                                <div className="relative h-34">
                                    {/* color info wrapper */}
                                    <div>
                                        <div className="w-100 flex justify-center space-x-1">
                                            <div>
                                                {" "}
                                                <Image
                                                    src="/images/MM2H3_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MM2J3_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN653_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN663_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN673_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name wrapper */}
                                    <div className="mt-4">
                                        <h3 className="font-semibold text-lg leading-normal">
                                            MacBook Air M1 Chip 13.3 inch 8GB /
                                            256GB
                                        </h3>
                                    </div>

                                    {/* Price wrapper */}
                                    <div className="mt-4">
                                        <h3 className="">5400QR</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white rounded-xl p-5 shadow-product transform hover:scale-105 hover:shadow-product-scale transition-all duration-300">
                            <a href="#">
                                {/* Image wrapper */}
                                <div className="w-full min-h-250 pt-2 pb-0 my-0 mx-auto">
                                    <div className="w-auto block h-60 my-0 mx-auto relative">
                                        <Image
                                            src="/images/iPhone-13-pro-max.jpeg"
                                            layout="fill"
                                            objectFit="contain"
                                            alt="iPhone-13-pro-max.jpeg"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Content info wrapper */}
                                <div className="relative h-34">
                                    {/* color info wrapper */}
                                    <div>
                                        <div className="w-100 flex justify-center space-x-1">
                                            <div>
                                                {" "}
                                                <Image
                                                    src="/images/MM2H3_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MM2J3_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN653_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN663_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN673_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name wrapper */}
                                    <div className="mt-4">
                                        <h3 className="font-semibold text-lg leading-normal">
                                            iPhone 13 Pro Max
                                        </h3>
                                    </div>

                                    {/* Price wrapper */}
                                    <div className="mt-4">
                                        <h3 className="">5400QR</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white rounded-xl p-5 shadow-product transform hover:scale-105 hover:shadow-product-scale transition-all duration-300">
                            <a href="#">
                                {/* Image wrapper */}
                                <div className="w-full min-h-250 pt-2 pb-0 my-0 mx-auto">
                                    <div className="w-auto block h-60 my-0 mx-auto relative">
                                        <Image
                                            src="/images/MacBook Air M1 Chip 13.3 inch 8GB : 256GB.png"
                                            layout="fill"
                                            objectFit="contain"
                                            alt="iPhone-13-pro-max.jpeg"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Content info wrapper */}
                                <div className="relative h-34">
                                    {/* color info wrapper */}
                                    <div>
                                        <div className="w-100 flex justify-center space-x-1">
                                            <div>
                                                {" "}
                                                <Image
                                                    src="/images/MM2H3_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MM2J3_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN653_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN663_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN673_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name wrapper */}
                                    <div className="mt-4">
                                        <h3 className="font-semibold text-lg leading-normal">
                                            MacBook Air M1 Chip 13.3 inch 8GB /
                                            256GB
                                        </h3>
                                    </div>

                                    {/* Price wrapper */}
                                    <div className="mt-4">
                                        <h3 className="">5400QR</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white rounded-xl p-5 shadow-product transform hover:scale-105 hover:shadow-product-scale transition-all duration-300">
                            <a href="#">
                                {/* Image wrapper */}
                                <div className="w-full min-h-250 pt-2 pb-0 my-0 mx-auto">
                                    <div className="w-auto block h-60 my-0 mx-auto relative">
                                        <Image
                                            src="/images/iPhone-13-pro-max.jpeg"
                                            layout="fill"
                                            objectFit="contain"
                                            alt="iPhone-13-pro-max.jpeg"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Content info wrapper */}
                                <div className="relative h-34">
                                    {/* color info wrapper */}
                                    <div>
                                        <div className="w-100 flex justify-center space-x-1">
                                            <div>
                                                {" "}
                                                <Image
                                                    src="/images/MM2H3_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MM2J3_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN653_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN663_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN673_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name wrapper */}
                                    <div className="mt-4">
                                        <h3 className="font-semibold text-lg leading-normal">
                                            iPhone 13 Pro Max
                                        </h3>
                                    </div>

                                    {/* Price wrapper */}
                                    <div className="mt-4">
                                        <h3 className="">5400QR</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white rounded-xl p-5 shadow-product transform hover:scale-105 hover:shadow-product-scale transition-all duration-300">
                            <a href="#">
                                {/* Image wrapper */}
                                <div className="w-full min-h-250 pt-2 pb-0 my-0 mx-auto">
                                    <div className="w-auto block h-60 my-0 mx-auto relative">
                                        <Image
                                            src="/images/MacBook Air M1 Chip 13.3 inch 8GB : 256GB.png"
                                            layout="fill"
                                            objectFit="contain"
                                            alt="iPhone-13-pro-max.jpeg"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Content info wrapper */}
                                <div className="relative h-34">
                                    {/* color info wrapper */}
                                    <div>
                                        <div className="w-100 flex justify-center space-x-1">
                                            <div>
                                                {" "}
                                                <Image
                                                    src="/images/MM2H3_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MM2J3_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN653_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN663_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN673_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name wrapper */}
                                    <div className="mt-4">
                                        <h3 className="font-semibold text-lg leading-normal">
                                            MacBook Air M1 Chip 13.3 inch 8GB /
                                            256GB
                                        </h3>
                                    </div>

                                    {/* Price wrapper */}
                                    <div className="mt-4">
                                        <h3 className="">5400QR</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white rounded-xl p-5 shadow-product transform hover:scale-105 hover:shadow-product-scale transition-all duration-300">
                            <a href="#">
                                {/* Image wrapper */}
                                <div className="w-full min-h-250 pt-2 pb-0 my-0 mx-auto">
                                    <div className="w-auto block h-60 my-0 mx-auto relative">
                                        <Image
                                            src="/images/iPhone-13-pro-max.jpeg"
                                            layout="fill"
                                            objectFit="contain"
                                            alt="iPhone-13-pro-max.jpeg"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Content info wrapper */}
                                <div className="relative h-34">
                                    {/* color info wrapper */}
                                    <div>
                                        <div className="w-100 flex justify-center space-x-1">
                                            <div>
                                                {" "}
                                                <Image
                                                    src="/images/MM2H3_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MM2J3_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN653_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN663_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                            <div>
                                                <Image
                                                    src="/images/MN673_SW_COLOR.jpeg"
                                                    width="15px"
                                                    height="15px"
                                                    alt="color"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name wrapper */}
                                    <div className="mt-4">
                                        <h3 className="font-semibold text-lg leading-normal">
                                            iPhone 13 Pro Max
                                        </h3>
                                    </div>

                                    {/* Price wrapper */}
                                    <div className="mt-4">
                                        <h3 className="">5400QR</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayProducts;
