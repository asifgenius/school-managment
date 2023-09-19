import { Link } from 'react-router-dom';
import './ResearchActivities.scss'
import { Button } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Arts from "../../../images/Arts.jpg";
import faculty from "../../../images/Arts.jpg";
import business from "../../../images/business.jpg"
import education from "../../../images/education.jpg"
const InstituteData = [
    {
        "id": 1,
        "name": "Institute of Bangladesh Studies",
        "image": "education.jpg"
    },
    {
        "id": 2,
        "name": "Institute of Business Administration",
        "image": "business.jpg"
    },
    {
        "id": 3,
        "name": "Institute of Education and Research",
        "image": "education.jpg"
    },
    {
        "id": 4,
        "name": "Institute of Biological Sciences",
        "image": "Arts.jpg"
    },



    {
        "id": 5,
        "name": "Institute of Environmental Science",
        "image": "Arts.jpg"
    },
    {
        "id": 6,
        "name": "Institute of English and Other Languages",
        "image": "business.jpg"
    },
    {
        "id": 7,
        "name": "Faculty of Arts",
        "image": "Arts.jpg"
    },
    {
        "id": 8,
        "name": "Faculty of Law",
        "image": "education.jpg"
    },
    {
        "id": 9,
        "name": "Faculty of Science",
        "image": "Arts.jpg"
    },
    {
        "id": 10,
        "name": "Faculty of Business Studies",
        "image": "business.jpg"
    },
    {
        "id": 11,
        "name": "Faculty of Agriculture",
        "image": "business.jpg"
    },
    {
        "id": 12,
        "name": "Faculty of Biological Sciences",
        "image": "Arts.jpg"
    },
    {
        "id": 13,
        "name": "Faculty of Engineering",
        "image": "education.jpg"
    },
    {
        "id": 14,
        "name": "Faculty of Fine Arts",
        "image": "Arts.jpg"
    },
    {
        "id": 15,
        "name": "Faculty of Geosciences",
        "image": "business.jpg"
    },
    {
        "id": 16,
        "name": "Faculty of Veterinary & Animal Sciences",
        "image": "business.jpg"
    }
]
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    }
}
const ResearchActivities = () => {
    return (
        <div className='research-activities-container'>
            <h1>Faculty of Institute</h1>
            <div className='text-margin'><hr /></div>
            {/* <img src={require("../../../images/Arts.jpg")} /> */}

            {/* <Carousel className='react-multi-carousel-list ' infinite={true} autoPlay={true} responsive={responsive}>
                <div className='research-activities'>
                    <div className='research-activities-card ms-3'>
                        <p className='research-activities-card-text'>7 May, 2021</p>
                        <p>Indigenous Vaccine for Covid19 in Bangladesh</p>
                        <button className='research-activities-button'>+ Read More</button>
                    </div>
                </div>
                <div className='research-activities'>
                    <div className='research-activities-card ms-3'>
                        <p className='research-activities-card-text'>21 June, 2022</p>
                        <p>Work on Artificial Intelligence for </p>
                        <button className='research-activities-button'>+ Read More</button>
                    </div>
                </div>
                <div className='research-activities'>
                    <div className='research-activities-card ms-3'>
                        <p className='research-activities-card-text'>23 May, 2023</p>
                        <p>Indigenous Vaccine for Covid19 in Bangladesh</p>
                        <button className='research-activities-button'>+ Read More</button>
                    </div>
                </div>
                <div className='research-activities'>
                    <div className='research-activities-card ms-3'>
                        <p className='research-activities-card-text'>21 june, 2023</p>
                        <p>Indigenous Vaccine for Covid19 in Bangladesh</p>
                        <button className='research-activities-button'>+ Read More</button>
                    </div>
                </div>
            </Carousel> */}





            <Carousel className='react-multi-carousel-list mb-5' infinite={true} autoPlay={true} autoPlaySpeed={1000} responsive={responsive}>
                {InstituteData.map(data => (

                    <div className='research-activities'>
                        <div className='research-activities-card ms-3'>
                            <img src={require(`../../../images/${data.image}`)} />
                            <Link> <p className='mt-2'>{data.name}</p></Link>
                        </div>
                    </div>

                ))}
            </Carousel>
        </div >
    )
}
export default ResearchActivities; 