import Image from "next/image";
import ProductGallery from "react-image-gallery";

const images = [
    {
        original: "/images/iphone-1.png",
        thumbnail: "/images/iphone-1.png",
    },
    {
        original: "/images/iphone-2.png",
        thumbnail: "/images/iphone-2.png",
    },
    {
        original: "/images/iphone-3.png",
        thumbnail: "/images/iphone-3.png",
    },
    {
        original: "/images/iphone-4.png",
        thumbnail: "/images/iphone-4.png",
    },
];

const ProductSlider = () => {
    return (
        <div className="bg-white rounded-lg pb-7">
            <ProductGallery
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                showNav={false}
            />
        </div>
    );
};

export default ProductSlider;
