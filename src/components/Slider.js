import { BiChevronLeftSquare, BiChevronRightSquare } from "react-icons/bi";
import { useState } from "react";

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleArrow = (direction) => {
        if (direction === "left") {
            setIndex(index !== 0 ? index - 1 : 2);
        }
        if (direction === "right") {
            setIndex(index !== 2 ? index + 1 : 0);
        }
    };

    return (
        <div className="mt-6">
            <div className="container mx-auto flex justify-between space-x-7">
                <div className="w-3/4">
                    <div className="w-full h-110 rounded overflow-hidden relative">
                        <div className="absolute top-1/2 transform -translate-y-1/2 left-6 z-10">
                            <BiChevronLeftSquare
                                className={`w-10 h-10 cursor-pointer text-white ${
                                    index === 0 ? "hidden" : ""
                                }`}
                                onClick={() => handleArrow("left")}
                            />
                        </div>
                        <div
                            className="h-full w-full-3 flex transition duration-500"
                            style={{
                                transform: `translateX(${-33.33333 * index}%)`,
                            }}
                        >
                            <div className="h-full relative bg-blue-500 w-full"></div>
                            <div className="h-full relative bg-green-500 w-full"></div>
                            <div className="h-full relative bg-orange-500 w-full"></div>
                        </div>
                        <div className="absolute top-1/2 transform -translate-y-1/2 z-10 right-6">
                            <BiChevronRightSquare
                                className={`w-10 h-10 cursor-pointer text-white ${
                                    index === 2 ? "hidden" : ""
                                }`}
                                onClick={() => handleArrow("right")}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-1/4 flex flex-col justify-between">
                    <div className="w-full rounded h-48 bg-green-300">
                        top banner
                    </div>
                    <div className="w-full rounded h-48 bg-red-300">
                        bottom banner
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
