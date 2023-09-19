

import React from "react";
import './CourseDetails.scss'
const CourseDetails = () => {
    return (
        <div className="mb-2">
            <h1 className="mt-5">Number of Students</h1>
      <div className='text-margin'><hr /></div>
            <div className="course-details-container">
                <div className="course-details">
                    <h1>190</h1>
                    <p>Courses</p>
                </div>
                <div className="course-details">
                    <h1>3000</h1>
                    <p>Student</p>
                </div>
                <div className="talented-details">
                    <h1>230</h1>
                    <p>Talented Students</p>
                </div>

            </div>
        </div>)
}
export default CourseDetails