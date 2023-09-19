import { Link } from 'react-router-dom';
import './NoticeBoard.scss'

const NoticeBoard = () => {

    return (
        <div className='notice-board-container mt-5 d-flex'>

            <div className='notice-board'>
                <ul className='notice-board-link'>
                    <div>
                        <h4>Recent and Upcoming Events</h4>
                        <div className='text-margin'><hr /></div>
                    </div>
                    <Link > <li>Caltural Program on 17, November 2023</li></Link>
                    <hr/>
                    <Link > <li>5th Clinical Psychology Program on 21, Octobor 2023</li></Link>
                </ul>
            </div>

            <div className='notice-board notice-board-text'>
                <ul className='notice-board-link'>
                    <div>
                        <h4>Notice Board</h4>
                        <div className='text-margin'><hr /></div>
                    </div>
                    <Link ><li>Admission on Class IV on Septembor 2023</li></Link>
                    <hr />
                    <Link > <li>Admission on Class V on Septembor 2023</li></Link>
                </ul>
            </div>
        </div>
    )
}
export default NoticeBoard;