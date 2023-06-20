import {memo} from 'react'
import '../../Assets/CSS/AboutUs.css';
import CarouselSwiper from '../LittleComponent/CarouselSwiper';

function AboutUs() {
    return (
        
        <div>
            <div className="about-us">
                {/* Thông tin về Đề Tài */}
                <div className="container__info">
                    <h1 className="container__title">
                        MindMend nơi lan tỏa những câu chuyện.
                    </h1>
                    <p className="container__description">
                    Tại MindMend, chúng tôi tin rằng tâm lý là một lĩnh vực quan trọng và có ảnh hưởng sâu sắc đến cuộc sống của chúng ta. Chúng tôi đã tạo ra một nền tảng đặc biệt để chia sẻ thông tin và câu chuyện về tâm lý, nhằm giúp mọi người tìm hiểu và thấy được sức mạnh của tâm trí.

                    </p>
                    <p className="container__description">
                    Chúng tôi đã xây dựng trang này với mong muốn lan tỏa những câu chuyện và thông tin hữu ích, nhằm giúp mọi người khám phá và hiểu rõ hơn về chính bản thân mình, cũng như về người khác xung quanh.
                    </p>
                    {/* <p className="container__description">
                    </p> */}
                </div>
                {/* Caroursel*/}

                {/*  */}
            </div>
            <div className="cards__container">
                <CarouselSwiper />
            </div>
        </div>
    );
}

export default memo(AboutUs);
