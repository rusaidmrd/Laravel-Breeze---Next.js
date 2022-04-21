import React from "react";

const Newsletter = () => {
    return (
        <div className="bg-secondary-color">
            <div className="container mx-auto">
                <div className="flex justify-center items-center py-14 flex-col">
                    <h1 className="font-bold text-4xl text-white">
                        Subscribe to our Newsletter
                    </h1>
                    <span className="text-gray-200 w-1/4 text-center mt-3">
                        Be the first to know all the latest Products, Discount
                        Coupon and Special Offers.
                    </span>
                    <div className="w-1/2 mt-9">
                        <div className="w-full relative flex">
                            <input
                                className="bg-gray-100 w-full px-4 rounded border-none focus:outline-none h-11"
                                type="search"
                                placeholder="Enter your email"
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
                            <button className="bg-secondary-color border border-white h-11 w-40 text-white flex justify-center items-center absolute top-0 right-0 rounded-tr rounded-br">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-gray-color w-2/3 text-center mx-auto">
                            By providing your email address, you agree to our
                            <strong> Privacy Policy</strong> and{" "}
                            <strong>Terms of Service</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
