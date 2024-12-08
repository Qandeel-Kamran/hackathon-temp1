import BreadcrumbCart from "@/components/cart-page/BreadcrumbCart";
import ProductCard from "@/components/common/ProductCard";
import ProductListSec from "@/components/common/ProductListSec";
import ReviewCard from "@/components/common/ReviewCard";
import ProductDetails from "@/components/product-page/Tabs/ProductDetails";
import ProductDetailsContent from "@/components/product-page/Tabs/ProductDetailsContent";
import ProductCardpg from "@/components/cart-page/ProductCard";
import ReviewsContent from "@/components/product-page/Tabs/ReviewsContent";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Tabs from "@/components/product-page/Tabs";


export default function cart(){
    return(
        <>
        <BreadcrumbProduct title={""}/>
        
       

            <ProductCardpg data={{
                id: 0,
                name: "",
                srcUrl: "",
                price: 0,
                attributes: [],
                discount: {
                    amount: 0,
                    percentage: 0
                },
                quantity: 0
            }}/>


      
        <ProductCard data={{
                id: 0,
                title: "",
                srcUrl: "",
                gallery: undefined,
                price: 0,
                discount: {
                    amount: 0,
                    percentage: 0
                },
                rating: 0
            }}/>
            <ProductListSec title={""} data={[]}/>
             <Tabs/>

          
            
           
            
            <ReviewCard data={{
                id: 0,
                user: "",
                content: "",
                rating: 0,
                date: ""
            }}/>
            <ReviewsContent/>
            
           
            
        </>
    )
}