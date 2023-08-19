
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './TravelMode.css'

import data from '../../assets/data/travelModes.json'

function TravelMode() {

  return (
    <>
      <div className="travelmodeback">
        <div className="travelModes">
          <h1 className="travelText">Select your travel <br />Mode</h1>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="travelSwiper"
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index} className="travelSlide">
                  <div className="travelCard">
                    <h1 className="travelSlideName">{item.name}</h1>
                    <p className="travelSlideDescription">{item.description}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <button className="travelButton">Select</button>
        </div>
      </div>
    </>
  )
}

export default TravelMode;