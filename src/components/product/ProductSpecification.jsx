import { useState } from "react";

const ProductSpecification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="bg-white rounded-lg p-7 relative w-full">
            <div className="container">
                <div className="flex">
                    <button
                        className={
                            toggleState === 1
                                ? "active-tabs rounded-l"
                                : "tabs rounded-l"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        Description
                    </button>
                    <button
                        className={toggleState === 2 ? "active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Specification
                    </button>
                    <button
                        className={toggleState === 3 ? "active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Video
                    </button>
                    <button
                        className={
                            toggleState === 4
                                ? "active-tabs rounded-r"
                                : "tabs rounded-r"
                        }
                        onClick={() => toggleTab(4)}
                    >
                        Reviews (0)
                    </button>
                </div>

                <div className="flex-grow">
                    <div
                        className={
                            toggleState === 1
                                ? "active-tab-content"
                                : "tab-content"
                        }
                    >
                        <h2>Content 1</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Obcaecati praesentium incidunt quia aspernatur
                            quasi quidem facilis quo nihil vel voluptatum?
                        </p>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "active-tab-content"
                                : "tab-content"
                        }
                    >
                        <h2>Content 2</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sapiente voluptatum qui adipisci.
                        </p>
                    </div>

                    <div
                        className={
                            toggleState === 3
                                ? "active-tab-content"
                                : "tab-content"
                        }
                    >
                        <h2>Content 3</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eos sed nostrum rerum laudantium totam unde
                            adipisci incidunt modi alias! Accusamus in quia odit
                            aspernatur provident et ad vel distinctio recusandae
                            totam quidem repudiandae omnis veritatis nostrum
                            laboriosam architecto optio rem, dignissimos
                            voluptatum beatae aperiam voluptatem atque. Beatae
                            rerum dolores sunt.
                        </p>
                    </div>
                    <div
                        className={
                            toggleState === 4
                                ? "active-tab-content"
                                : "tab-content"
                        }
                    >
                        <h2>Content 4</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eos sed nostrum rerum laudantium totam unde
                            adipisci incidunt modi alias! Accusamus in quia odit
                            aspernatur provident et ad vel distinctio recusandae
                            totam quidem repudiandae omnis veritatis nostrum
                            laboriosam architecto optio rem, dignissimos
                            voluptatum beatae aperiam voluptatem atque. Beatae
                            rerum dolores sunt.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSpecification;
