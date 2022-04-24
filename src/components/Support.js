import { BsHeadset } from "react-icons/bs";
import {
    HiOutlineTruck,
    HiOutlineRefresh,
    HiOutlineCreditCard,
} from "react-icons/hi";

const Support = () => {
    return (
        <div className="mt-6 py-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-x-4">
                    <div className="bg-gray-color py-8 px-9 flex flex-col justify-center items-center rounded-md border border-transparent hover:shadow-product transition-all duration-150 hover:border hover:border-gray-300">
                        <HiOutlineTruck className="text-4xl font-normal mb-3" />
                        <p className="font-semibold">Free Shipping</p>
                        <span className="text-sm">On order over QAR 99</span>
                    </div>
                    <div className="bg-gray-color py-8 px-9 flex flex-col justify-center items-center rounded-md border border-transparent hover:shadow-product transition-all duration-150 hover:border hover:border-gray-300">
                        <BsHeadset className="text-4xl font-normal mb-3" />
                        <p className="font-semibold">24/7 Support.</p>
                        <span className="text-sm">Live Chat Or Call.</span>
                    </div>
                    <div className="bg-gray-color py-8 px-9 flex flex-col justify-center items-center rounded-md border border-transparent hover:shadow-product transition-all duration-150 hover:border hover:border-gray-300">
                        <HiOutlineCreditCard className="text-4xl font-normal mb-3" />
                        <p className="font-semibold">Online Payment.</p>
                        <span className="text-sm">
                            Secure Payment Services.
                        </span>
                    </div>
                    <div className="bg-gray-color py-8 px-9 flex flex-col justify-center items-center rounded-md border border-transparent hover:shadow-product transition-all duration-150 hover:border hover:border-gray-300">
                        <HiOutlineRefresh className="text-4xl font-normal mb-3" />
                        <p className="font-semibold">Easy Return.</p>
                        <span className="text-sm">Hassle Free Shopping.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
