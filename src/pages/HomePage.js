import React from "react";
import './HomePage.scss';
import CourseInfomation from '../components/Home/courseInfomation/CourseInfomation'
import CourseDetails from "../components/courseDetails/CourseDetails";
import NavBar from "../components/navBar/NavBar";
import Avatar from "../components/Home/Avatar";
import NoticeBoard from "../components/noticeBoard/NoticeBoard";
import Footer from "../components/footer/Footer";
import TextScroll from "../components/textScroll/TextScroll";
import ResearchActivities from "../components/Home/researchActivities/ResearchActivities";
import InstituteInformation from "../components/Home/institute-information/InstituteInformation";

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <Avatar/>
            <TextScroll/>
            <InstituteInformation/>
            <CourseInfomation/>
            <CourseDetails/>
            <NoticeBoard/>
            <ResearchActivities/>
            <Footer/>
        </div>
    )
}

export default HomePage