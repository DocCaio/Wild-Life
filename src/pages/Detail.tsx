import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

// Defina a interface para o tipo de produto
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  slug: string;
}

const Detail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // O estado agora é do tipo Product ou undefined
  const [detail, setDetail] = useState<Product | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find(product => product.slug === slug);
    if (findDetail) {
      setDetail(findDetail);
    } else {
      window.location.href = '/';
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity - 1 < 1 ? 1 : prevQuantity - 1));
  };

  const handlePlusQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    if (detail) {
      dispatch(
        addToCart({
          productId: detail.id,
          quantity: quantity,
        })
      );
    }
  };

  // Verifique se `detail` existe antes de renderizar
  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-3xl text-center">PRODUCT DETAIL</h2>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <img src={detail.image} alt={detail.name} className="w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
          <p className="font-bold text-3xl">${detail.price}</p>
          <div className="flex gap-5">
            <div className="flex gap-2 justify-center items-center">
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>
            <button
              className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <p>{detail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
