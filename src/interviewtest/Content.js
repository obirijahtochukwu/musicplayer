import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CarouselComponent from './Carousel';

export default function Content() {

  const [activicties, setActivicties] = useState([]);
  const [news, setNews] = useState([]);

  // FETCH API
  const getData = () =>{
    axios.post('http://159.65.1.66:8002/api/common/fetch-upcoming-activities',{activePage:1, limit: 10}).then((res)=>{
      const activities = res.data.activities.rows;
      setActivicties(activities);
    });
    axios.post('http://159.65.1.66:8002/api/common/fetch-news',{activePage:1, limit: 10}).then((res)=>{
      const news = res.data.news.rows;
      setNews(news);
    });
  }

  useEffect(() => {
    getData();
  }, [])
  

  return (
    <article className='mt-3'>
      <CarouselComponent/>

      {/* UPCOMING ACTIVITIES */}
      <div className="container mt-4">
        <div className="row">
          <h5><b>Upcoming Events</b></h5>
          <div className="d-flex justify-content-between align-items-center">
            <p className="text-muted text-capitalize">the things that we engage in</p>
            <p><strong style={{color: '#146DE4', cursor: 'pointer'}}>View More</strong><img src="../../images/right-arrow.png" alt="icon" width="18" height="18"class="mx-2" /></p>
          </div>
          {activicties.map((activity)=>{
            const {id, title_en, image_url, type} = activity;
            if (id < 8) {
            return (
              <article key={id} className="col-6 col-md-4 col-lg-2 mx-auto my-3">
                <div className="activity-card px-1 h-100">
                  <img src={image_url} alt="" className='w-100 mt-2'/>
                  <h6 className='mx-2'><b>{title_en}</b></h6>
                  <div className="text-muted d-flex align-items-center">
                    <img src="../../images/right-arrow.png" alt="icon" width="18" height="18"class="ml-2 mx-2" />
                    <span>16 sep 2022</span>
                  </div>
                  <div className="text-muted d-flex align-items-center mb-4">
                    <img src="../../images/right-arrow.png" alt="icon" width="18" height="18"class="mx-2" />
                    <span>{type}</span>
                  </div>
                </div>
              </article>
            )
            }
            return null;
          })}
        </div>
      </div>
      {/* END OF U[COMING ACTIVITY*/}

      {/* NEWS LIST */}
      <div className="container my-4">
        <div className="row">
          <div className="d-flex justify-content-between">
            <h5><b>News</b></h5>
            <p><strong style={{color: '#146DE4', cursor: 'pointer'}}>View More</strong><img src="../../images/right-arrow.png" alt="icon" width="18" height="18"class="mx-2" /></p>
          </div>
          {news.map((singleNews)=>{
            const {id, title_en, description_en, image_url} = singleNews;
            return(
              <article key={id} className="col-10 col-md-6 col-lg-4 col-xlg-3 mx-auto my-2 h-100">
                <div className="news-card mx-auto">
                  <div className="d-flex align-items-center">
                    <img src={image_url} alt="" className="w-100 h=100" style={{borderRadius: '25px'}}/>
                    <div>
                      <h6 className='mx-2'><b>{title_en}</b></h6>
                      <div className="text-muted mx-2">{description_en}</div>
                      <div className="text-muted d-flex align-items-center">
                        <img src="../../images/right-arrow.png" alt="icon" width="18" height="18"class="ml-2 mx-2" />
                        <span>16 sep 2022</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </article>

  )
}
