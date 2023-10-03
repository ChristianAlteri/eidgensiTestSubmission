

import Container from "./Components/Container";
import ProductCard from "./Components/Products/ProductCard";
import getProducts from "./actions/getProducts";




const Home = async () => {
   

  const products = await getProducts();

  if (products.length === 0) {
    return <div> Something went wrong...</div>;
  }


  return (

      <Container>
        <div
       className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
              "
        
        >
          {/* {products.map((product) => (
            <ProductCard key={product.id} title={title} />
          ))} */}
          HELLO
        </div>
      </Container>

  );
}


export default Home;