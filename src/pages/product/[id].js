import DisplayProducts from '../../components/DisplayProducts'
import ProductInfo from '../../components/product/ProductInfo'
import ProductSlider from '../../components/product/ProductSlider'
import ProductSpecification from '../../components/product/ProductSpecification'

const Product = () => {
    return (
        <div className="mt-6 bg-gray-color">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-x-3 py-10">
                    <ProductSlider />
                    <ProductInfo />
                </div>
                <ProductSpecification />
                <DisplayProducts title="Related Products" />
            </div>
        </div>
    )
}

export default Product
