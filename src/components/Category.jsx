import React from 'react';
import booksData from '../json/books.json';
import { Link } from 'react-router-dom';

function Category() {
    const handleImageError = (e) => {
        e.target.src = 'https://via.placeholder.com/200x300.png?text=Image+Not+Found';
    };

    if (!booksData.length) {
        return <div className="text-center text-lg">No books available</div>;
    }

    const historicalBooks = booksData.filter((book) => book.category === 'historical').slice(0, 2);
    const scienceFictionBooks = booksData.filter((book) => book.category === 'science-fiction').slice(0, 2);
    const horrorBooks = booksData.filter((book) => book.category === 'horror').slice(0, 2);

    return (
        <div className="category-container">
            <div className="category-header">
                <text className="instrument-serif-regular header-text">Category</text>
                <hr className="header-line" />
            </div>

            <div className="flex flex-row sm:flex-row justify-center w-full max-w-5xl category-content">
                {/* Horror Category */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg instrument-serif-regular mb-4 category-title">Horror</h3>
                    {horrorBooks.map((book) => (
                        <div key={book.id} className="text-center book-gap">
                            <Link to={`/book/${book.ID}`} className='link'>
                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    className="w-[150px] h-auto object-cover "
                                    onError={handleImageError}
                                />
                                <p className="mt-2 text-base instrument-serif-regular">{book.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Historical Category */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg instrument-serif-regular mb-4 category-title">Historical</h3>
                    {historicalBooks.map((book) => (
                        <div key={book.id} className="text-center book-gap">
                            <Link to={`/book/${book.ID}`} className='link'>
                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    className="w-[150px] h-auto object-cover "
                                    onError={handleImageError}
                                />
                                <p className="mt-2 text-base instrument-serif-regular">{book.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>

                

                {/* Science-Fiction Category */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg instrument-serif-regular mb-4 category-title">Science-fiction</h3>
                    {scienceFictionBooks.map((book) => (
                        <div key={book.id} className="text-center book-gap">
                            <Link to={`/book/${book.ID}`} className='link'>
                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    className="w-[150px] h-auto object-cover "
                                    onError={handleImageError}
                                />
                                <p className="mt-2 text-base instrument-serif-regular">{book.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;