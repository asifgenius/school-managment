

import React from "react";
import './CourseInfomation.scss'
const CourseInfomation = () => {
  return (
    <div>
      <h1 className="mt-5">Latest News</h1>
      <div className='text-margin'><hr /></div>
      <div className="card-flip">
        <div class="flip-card ">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>Academy</p>
            </div>
            <div class="flip-card-back">
              <div><p>Classes</p></div>
              <div><p>Goles</p></div>
              <div><p>Free Education</p></div>
            </div>
          </div>
        </div>

        <div class="flip-card ms-3">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>Course</p>
            </div>
            <div class="flip-card-back">

              <div><p>It & Software</p></div>
              <div><p>React</p></div>
              <div><p>Python</p></div>


            </div>
          </div>
        </div>


        <div class="flip-card ms-3">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p>Vacations</p>

            </div>
            <div class="flip-card-back">
              <div><p>Spring</p></div>
              <div><p>Summer</p></div>


            </div>
          </div>
        </div>
      </div>
    </div>);
}



export default CourseInfomation;