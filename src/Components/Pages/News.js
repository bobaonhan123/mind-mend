import { memo } from 'react'

import '../../Assets/CSS/News.css'

import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay /*, EffectCoverflow */ } from 'swiper';
SwiperCore.use([Navigation, Pagination, Autoplay]);


const News = (props) => {
  const imageList = [
    { img: './PublicAssets/Img/NewsPage/1.jpg' },
    { img: './PublicAssets/Img/NewsPage/2.jpg' },
    { img: './PublicAssets/Img/NewsPage/3.jpg' },
    { img: './PublicAssets/Img/NewsPage/1.jpg' }
    
    
  ]
  return (
    <div className="News">
      
      {/* Swiper Image */}

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        className="carousel__container"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        autoplay={{ delay: 2500 }} // Tự động chuyển slide sau 3 giây
        loop
        style={{ width: '100%', height: '100%' }}
      >
        {imageList.map((image) => (
          <SwiperSlide className='swiper__slide'>
            <div className="news__header">
              <h2>Welcome to MindMend - Evolution of Conscious</h2>
            </div>
            <img src={image.img} alt="news" />
          </SwiperSlide>
        ))}

      </Swiper> 

      {/* Blog Layout */}     

 
      <div className="news__blogs">
        <div className="left__column">

          <div className="news__card">
            <h2 className="card__heading">The Heading</h2>
            <h5 className="card__description">Title description</h5>
            <div className="card__img">Image</div>
            <p className="card__text">Some Text</p>
          </div>


          <div className="news__card">
            <h2 className="card__heading">The Heading</h2>
            <h5 className="card__description">Title description</h5>
            <div className="card__img">Image</div>
            <p className="card__text">Some Text</p>
          </div>


        </div>
        <div className="right__column">
          <div className="news__card">
            <h2 className="card__heading">About me</h2>
            <div className="card__img">
            </div>
            <p className="card__text">Some text about me in culpa qui officia deserunt mollit anim.</p>
      
          </div>

          <div className="news__card">
            <h3 className="card__section">Popular Post</h3>
            <div className="card__img">Image</div>
            <div className="card__img">Image</div>
            <div className="card__img">Image</div>
          </div>


          <div className="news__card">
            <h3 className="card__section">Follow Me</h3>
            <p className="card__text">Some Text</p>
          </div>
        </div>
      </div>


    </div>

  )
}


export default memo(News)
