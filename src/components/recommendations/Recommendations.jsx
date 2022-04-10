import React from 'react'
import './recommendations.css'
import AVTR1 from '../../assets/1648087663967.jpeg'
import AVTR2 from '../../assets/1641592759683.jpeg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Grant Royseth',
    review: 'Tyler and I worked on our last project for Coding Bootcamp trough the UofM. He is hard worker with a clear vision on what needs to be accomplished. Tyler always has a good attitude. He has awesome communication skills. Tyler has great vision and is very smart when it comes down to problem solving. I am honored to recommend Tyler.'
  },
  {
    avatar: AVTR2,
    name: 'Amber Robeck',
    review: 'Tyler is great to work with, between his out of the box ideas, beautiful design skills, willingness to help on even the most mundane tasks, never-ending drive to keep on the task at hand and his exceptional communication skills he was a pleasure to have collaborated with and I look forward to working with him again on future projects.'
  },

]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Recommendations</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials