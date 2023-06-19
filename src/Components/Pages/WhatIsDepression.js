
import '../../Assets/CSS/WhatIsDepression.css';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const WhatIsDepression = () => {
  const swiper = useRef(null);
const [activeIndex, setActiveIndex] = useState(0);
const [classNow,setClassNow] = useState('intro-img');

const handleSlideChange = (swiper) => {
  setActiveIndex(swiper.realIndex);  
};

useEffect(()=>{
  var classArr =['intro-img','intro-img intro-img2','intro-img intro-img3'];
  setClassNow(classArr[activeIndex]);
},[activeIndex]);
  return (
    <div className='what-is-depression'>
      <div className={classNow}></div>
      <div className='intro-page'>

        <Swiper
          ref={swiper}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 10000 }}
          direction='horizontal'
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <div className='intro-contentpane'>
              <h1>TRẦM CẢM?</h1>
              <p>Trầm cảm là gì? Nhiều người hay nhầm tưởng với nỗi buồn. Chúng tớ muốn giải thích bằng một trang riêng chứ không chỉ là một bài viết trong trang "chia sẻ".</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='intro-contentpane'>
              <h1>TRẦM CẢM VÀ NỖI BUỒN</h1>
              <p>Nỗi buồn là cảm xúc tự nhiên, trầm cảm là rối loạn tâm lý. Khuyên một người trầm cảm quên đi nỗi buồn của mình không có tác dụng. Trầm cảm không chỉ là một cảm xúc bình thường mà có thể vượt qua được.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='intro-contentpane'>
              <h1>TRẦM CẢM LÀ</h1>
              <p>Trầm cảm là đám mây mù che phủ đi tầm nhìn của cậu, khiến bầu trời xanh qua đôi mắt cậu trở thành màu u ám, cậu cố gắng vùng vẫy nhưng không thể xua đi.</p>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  )
}

export default WhatIsDepression
