// src/components/BookCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Link } from 'react-router-dom';
import booksData from '../json/books.json';

const BookCarousel = () => {
  const books = booksData;

  if (!books.length) {
    return <div className="text-center text-lg">No books available</div>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className='bookcarousel-container relative py-10'>
        <div className="custom-nav-buttons">
          <div className="custom-prev-button"></div>
          <div className="custom-next-button"></div>
        </div>
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={60}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            prevEl: '.custom-prev-button',
            nextEl: '.custom-next-button',
          }}
          className="swiper-container"
        >
          {books.map((book) => (
            <SwiperSlide key={book.ID}>
              <Link to={`/book/${book.ID}`} className="link">
                <div className="p-4 text-center">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="carousel-img mx-auto"
                  />
                  <p className="mt-2 text-lg instrument-serif-regular text-center">{book.title}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCarousel;