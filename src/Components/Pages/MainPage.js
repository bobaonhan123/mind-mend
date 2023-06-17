import {memo, useState} from 'react'
import { Link } from 'react-router-dom';

import '../../Assets/CSS/MainPage.css';
import NewsData from '../../Data/NewsData';
import NewsComponent from '../LittleComponent/NewsComponent';
function MainPage() {

  const [IntroPaneOpacity,setIntroPaneOpacity] = useState({opacity:(window.innerHeight-window.scrollY)/window.innerHeight-(window.scrollY>10?0.2:0)});
  window.addEventListener("scroll",()=>{
    setIntroPaneOpacity({opacity:(window.innerHeight-window.scrollY)/window.innerHeight- (window.scrollY>10?0.2:0)});
  });
  
  const DataArr = NewsData();
  return (
    <div className="main-page">
          <div className='intro-img'></div>
          <div className='intro-page'>
            <div className='intro-contentpane' style={IntroPaneOpacity}>
              <h1>096 306 1414</h1>
              <p><a href='https://duongdaynongngaymai.vn/' style={{'text-decoration':'none','color':'inherit'}} target='blank'>“Đường dây nóng ngày mai”</a> Đường dây nóng hỗ trợ miễn phí người đang trong khủng hoảng tâm lý</p>
            </div>
          </div>

      <div className='prevention-page'>
        <div className='prevention-content-pane'>
          <div>
            <h1>Trầm cảm là gì ?
            </h1>
            <p>Trầm cảm là một nỗi đau tinh thần đáng sợ, khiến con người rơi vào trạng thái suy đồi và mất hứng thú với cuộc sống. Nó là một căn bệnh tâm lý ảnh hưởng đến rất nhiều người trên khắp thế giới, không phân biệt tuổi tác hay giới tính.</p>
          </div>
          <Link to='/what-is-depression'>Tìm hiểu thêm</Link>
        </div>
        <div className='image'></div>
      </div>
      <div className='news-page'>
        <h1 className='title'>Blog</h1>
        <div className='news-pane'>
        {DataArr.map((data) => {
            return (<NewsComponent key={data.id} data={data} />);
          })}
        </div>
        <Link className='more' to='/News'>Xem thêm</Link>
      </div>
      <div className='contact-page'>
        <div className='contact-content-pane'>
          <div>
            <h1>Chúng tớ là ai</h1>
            <p>Chúng tớ nhóm sinh viên đến từ VKU. Phát triển dự án MindMend với mục tiêu góp phần hỗ trợ người có ảnh hưởng về tâm lý và nâng cao nhận thức của mọi người về trầm cảm nói riêng và tâm lý nói chung.</p>

          </div>
          <Link to='/about-us'>Chi tiết</Link>
        </div>
        <div className='image'></div>
      </div>
    </div>





  );
}

export default memo(MainPage);
