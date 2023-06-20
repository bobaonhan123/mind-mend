import '../Assets/CSS/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitSquare, faFacebookSquare, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Project Informartion */}
                <div className="project__info">
                    <h3>MindMend</h3>
                    <p>
                        MindMend các sinh viên VKU với mục tiêu hỗ trợ người có vấn đề về tâm lý
                        và nâng cao nhận thức về trầm cảm.
                    </p>
                    <div className="social">
                        <FontAwesomeIcon icon={faGitSquare} />
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <FontAwesomeIcon icon={faYoutubeSquare} />
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </div>
                </div>
                {/* Related Information */}
                <div className="related__info">
                    <h3>Thông tin liên quan</h3>
                    <ul>
                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Chính sách cookies</a>
                        </li>
                        <li>
                            <a href="#support">Hỗ trợ</a>
                        </li>
                    </ul>
                </div>
                <div className="related__info">
                    <h3 className='heading'>Thông tin</h3>
                    <ul>
                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Chính sách cookies</a>
                        </li>
                        <li>
                            <a href="#support">Hỗ trợ</a>
                        </li>
                    </ul>
                </div>
                {/* Feedback Form */}
                <div className="feedback__section">
                    <h3 className='heading'>Phản hồi</h3>
                    <div>
                        <input type="text" placeholder="Ý kiến phản hồi" />
                        <button>Gửi</button>
                    </div>
                </div>
            </div>

            <p className="footer__copyright">
                Copyright © 2023 - Vietnam-Korea University of Information and Communication Technology - The University
                of Danang
            </p>
        </footer>
    );
}

export default Footer;
