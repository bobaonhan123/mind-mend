import {memo} from 'react'
import { Link } from 'react-router-dom';

import '../../Assets/CSS/MainPage.css';

function MainPage() {
  
  return (
    <div className="main-page">
          <div className='intro-img'></div>
          <div className='intro-page'>
            <div className='intro-contentpane'>
              <h1>096 306 1414</h1>
              <p>“Hãy bảo vệ rừng của chúng ta, đó là nguồn sống của tất cả chúng ta và là một phần quan trọng của hệ sinh thái trái đất.”</p>
            </div>
          </div>

      <div className='prevention-page'>
        <div className='prevention-content-pane'>
          <div>
            <h1>Chung tay bảo vệ rừng</h1>
            <p>Đóng góp cho công cuộc bảo vệ rừng của chúng ta, đó là nguồn sống của tất cả chúng ta và là một phần quan trọng của hệ sinh thái trái đất.</p>

          </div>
          <Link to='/Report'>Báo cáo</Link>
        </div>
        <div className='image'></div>
      </div>
      <div className='news-page'>
        <h1 className='title'>Tin tức</h1>
        <div className='news-pane'>
          
        </div>
        <Link className='more' to='/News'>Xem thêm</Link>
      </div>
      <div className='contact-page'>
        <div className='contact-content-pane'>
          <div>
            <h1>Chúng tôi là ai</h1>
            <p>Chúng tôi là một nhóm sinh viên đến từ VKU. Phát triển dự án FireWing với mục tiêu cung cấp thông tin và dự báo về cháy rừng sử dụng công nghệ AI.</p>

          </div>
          <Link to='/about-us'>Tìm hiểu thêm</Link>
        </div>
        <div className='image'></div>
      </div>
    </div>





  );
}

export default memo(MainPage);
