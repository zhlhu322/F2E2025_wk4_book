import { useParams, Link } from 'react-router-dom';
import booksData from '../json/books.json';
import { useState } from 'react';
import Footer from '../components/footer';
import CartIcon from '../components/CartIcon';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

function Product() {
    const { id } = useParams();
    const book = booksData.find((b) => b.ID === Number(id));
    const dispatch = useDispatch();
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: book.ID,
            title: book.title,
            price: book.price,
            quantity: selectedQuantity,
            cover: book.cover
        }));
        alert(`已加入購物車: ${book.title} x ${selectedQuantity}`);
    };

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className='product-page'>
            <header className="header relative">
                <div className='productpage-header-container w-[800px] mx-auto flex justify-between items-center'>
                    <Link to="/" className="link">
                        <text className="instrument-serif-regular header-text">Home</text>
                    </Link>
                    <hr className="header-line" />
                    <CartIcon position="center" />
                </div>
                
            </header>

            <div className='product-container'>
                <img src={book.cover} alt={book.title} className='product-img' />
                <div>
                    <h1 className="instrument-serif-regular product-title">{book.title}</h1>
                    <p className="instrument-serif-regular product-info">{book.author}</p>
                    <p className="instrument-serif-regular product-info">${book.price * selectedQuantity}</p>

                    {/* 數量選擇區 */}
                    <div className="quantity-selector">
                        <label htmlFor="quantity" className="instrument-serif-regular quantity-label">Quantity:</label>
                        <select
                            id="quantity"
                            className="border border-gray-700 p-1 text-lg instrument-serif-regular"
                            value={selectedQuantity}
                            onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                        >
                            {[...Array(book.stock)].map((_, index) => (
                                <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* 加入購物車按鈕 */}
                    <button
                        onClick={handleAddToCart}
                        className="add-to-cart-btn instrument-serif-regular"
                    >
                        Add to cart
                    </button>
                </div>

            </div>

            <div className="product-description">
                <header className="header">
                    <h2 className="instrument-serif-regular header-text" >Summary</h2>
                    <p className="instrument-serif-regular summary">{book.summary}</p>
                </header>

            </div>

            <div className='footer instrument-serif-regular'>
                <Footer />
            </div>

        </div>
    );
}

export default Product;