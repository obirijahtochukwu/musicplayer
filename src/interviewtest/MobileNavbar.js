import React from 'react';
import  './MobileNavbar.css';

export default function MobileNavbar() {
  return (
    <article className='d-md-none'>

    {/*MOBILE TOP-BAR*/}
    <nav className='mobile-navbar'>
      <div className="container px-3 py-3">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 style={{color: 'white', fontWeight: '700'}}>What's New</h4>
            </div>
            <div className="d-flex align-items-center" style={{cursor: 'pointer'}}>
              <img src="../../images/768/bell.png" class="" alt="" width="" height="" className='mx-2'/>
              <img src="../../images/Ellipse 83.png" class="img-rounded mx-3" alt="" width="50" height="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
    {/*MOBILE TOP-BAR END*/}

    {/*MOBILE BOTTOM-BAR*/}
    <div className="bottom-bar py-2">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-around align-items-center">
            <div className="cursor">
              <img src="../../images/768/icon1.png" alt='' class="active" width="" height="" />
            </div>
            <div className="cursor">
              <img src="../../images/768/icon2.png" alt='' class="" width="" height="" />
            </div>
            <div className="cursor">
              <img src="../../images/768/icon3.png" alt='' class="" width="" height="" />
            </div>
            <div className="cursor">
              <img src="../../images/768/icon4.png" alt='' class="" width="" height="" />
            </div>
            <div className="cursor">
              <img src="../../images/768/icon5.png" alt='' class="" width="" height="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    </article>
  )
}
