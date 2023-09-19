import { Link } from 'react-router-dom';
import './InstituteInformation.scss'
import { faBookOpen, faUserTie, faUserGraduate ,faFortAwesome, faIndustry, faSchool} from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InstituteInformation = () => {

    return (
        <div className='institute-information-container w-100 d-flex'>
            <div className='institute-information w-100 d-flex'>
                <div>
                    <FontAwesomeIcon className='institute-information-image' icon={faSchool} />
                </div>
                <div>
                    <h3>Founded</h3>
                    <p>5 july, 2023</p>
                </div>
            </div>
            <div className='institute-information w-100 ms-5 d-flex'>
                <div>
                    <FontAwesomeIcon className='institute-information-image-book' icon={faBookOpen} />
                </div>
                <div>
                    <h3>Green Cumpus</h3>
                    <p>753 Acres</p>
                </div>
            </div>
            <div className='institute-information w-100 ms-5 d-flex'>
                <div>
                    <FontAwesomeIcon className='institute-information-image' icon={faUserTie}/>
                </div>
                <div>
                    <h3>Faculty Members</h3>
                    <p>1200+</p>
                </div>
            </div>
            <div className='institute-information w-100 ms-5 d-flex'>
                <div>
                    <i aria-hidden="true" class="fas fa-user-graduate"></i>
                    <FontAwesomeIcon className='institute-information-image' icon={faUserGraduate}/> 
                </div>
                <div>
                    <h3>Students</h3>
                    <p>30000+</p>
                </div>
            </div>
            <div>

            </div>

        </div>
    )
}
export default InstituteInformation;