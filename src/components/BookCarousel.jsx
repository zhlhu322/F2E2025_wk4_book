// src/components/BookCarousel.jsx
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const BookCarousel = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/books.json') // 使用絕對路徑 /books.json
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!books.length) {
    return <div className="text-center text-lg">No books available</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex">
      <div className='bookcarousel-container'>
        <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10"></div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
        >
          {books.map((book) => (
            <SwiperSlide key={book.id}>
              <div className="p-4 text-center">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-80 object-cover carousel-img"
                />
                <p className="mt-2 text-lg instrument-serif-regular text-center">{book.title}</p>
              </div>
            </SwiperSlide>
          ))}


        </Swiper>
        <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10"></div>
      </div>

    </div>
  );
};

export default BookCarousel;