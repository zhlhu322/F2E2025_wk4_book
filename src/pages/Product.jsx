import { useParams } from 'react-router-dom';
import booksData from '../json/books.json';
import { useState } from 'react';
import Footer from '../components/footer';

function Product() {
    const { id } = useParams();
    const book = booksData.find((b) => b.ID === Number(id));

    const [selectedQuantity, setSelectedQuantity] = useState(1); // 設定初始數量


    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className='product-page'>
            <header className="header">
                <text className="instrument-serif-regular header-text">Home</text>
                <hr className="header-line" />
            </header>

            <div className='product-container'>
                <img src={book.cover} alt={book.title} className='product-img' />
                <div>
                    <h1 className="instrument-serif-regular product-title">{book.title}</h1>
                    <p className="instrument-serif-regular product-info">{book.author}</p>
                    <p className="instrument-serif-regular product-info">${book.price}</p>

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