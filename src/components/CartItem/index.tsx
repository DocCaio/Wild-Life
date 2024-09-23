import { useState, useEffect } from 'react';
import { products } from '../../data/products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../../stores/cart';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    slug: string;
}

interface CartItemProps {
    data: {
        productId: number;
        quantity: number;
    };
}

const CartItem: React.FC<CartItemProps> = (props) => {
    const { productId, quantity } = props.data;
    const [detail, setDetail] = useState<Product | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const findDetail = products.find(product => product.id === productId) || null;
        setDetail(findDetail);
    }, [productId]);

    const handleMinusQuantity = () => {
        if (quantity > 1) {
            dispatch(changeQuantity({
                productId: productId.toString(), // Convert to string
                quantity: quantity - 1
            }));
        }
    };

    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            productId: productId.toString(), // Convert to string
            quantity: quantity + 1
        }));
    };

    if (!detail) {
        return null; // Handle loading state here if needed
    }

    return (
        <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
            <img src={detail.image} alt={detail.name} className='w-12' />
            <h3>{detail.name}</h3>
            <p>${(detail.price * quantity).toFixed(2)}</p>
            <div className='w-20 flex justify-between gap-2'>
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
                <span>{quantity}</span>
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
            </div>
        </div>
    );
}

export default CartItem;
