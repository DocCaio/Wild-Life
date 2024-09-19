import { products } from '../data/products.json'
import ProductCart from '../components/ProductCart'
const Home = () => {
  return (
    <div>
        <h1 className='text-3xl my-5'>List Products</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {products.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
        </div>
    </div>
  )
}

export default Home