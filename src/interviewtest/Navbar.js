import React from 'react';
import './Navbar.css';

export default function Navbar() {

  const links = [
    {text: 'home', link: '/home'},
    {text: 'education', link: '/education'},
    {text: 'community', link: '/community'},
    {text: 'offer', link: '/offer'}
  ];

  return (
    <nav className='navbar p-0 bg-white d-none d-md-block'>
     <div className="container-lg container-fluid">
      <div className="nlogo navbar-brand">
        <img src="../../images/logo/logo.png" alt="" />
      </div>
      <div className="navbar-links">
        <div className="d-flex align-items-center p-4 p-lg-0 ms-auto">
          {links.map((linkName, index)=>{
            const {text, link} = linkName;
            return (
              <a href={link} className={text === 'home' ? 'nav-link active' : 'nav-link'}>{text}</a>
            )
          })}
        </div>
        <div className='d-flex align-items-center float-right menu-right align-items-center m-0'>
          <div className="dropdown">
            <img src="../../images/bell.png" alt="bell" width="20" height="" />
            <div className="dropdownMenu">
              <div className="notification-card">
                <div className="card-header">
                  <h4>Notifications</h4>
                  <p>You have<span class="text-primary"> 4 Notifications</span> today</p>
                </div>
                <div className="card-body">
                  <div className="notification-list">
                  <h4 class="mt-0">Today</h4>
                  <div className="border-bottom-n">
                  <div className="d-flex position-relative">
                    <div>
                      <img src="../../images/avatar5.png" class="img-rounded" alt="" width="35" height="35" />
                    </div>
                    <div className="ml-1 mx-2">
                        <h6 class="mb-0"><strong class="text-primary">Surasak Jaikum</strong> Liked your [topic blog]</h6>
                      <span class="time">2 mins ago</span>
                    </div>
                    <div class="status"> </div>
                  </div>
                  </div>
                  <div className="border-bottom-n" style={{paddingLeft: '55px'}}>
                  <div className="d-flex position-relative">
                    <div className="ml-1 mx-2">
                        <h6 class="mb-0"><strong class="text-primary">Aum Korakit</strong> Mentioned you in a comment</h6>
                      <span class="time">2 hrs ago</span>
                    </div>
                    <div class="status"> </div>
                  </div>
                  </div>
                  <h4 class="mt-0">This Week</h4>
                  <div className="border-bottom-n" style={{paddingLeft: '55px'}}>
                  <div className="d-flex position-relative">
                    <div className="ml-1 mx-2">
                        <h6 class="mb-0"><strong class="text-primary">Aum Korakit</strong> Mentioned you in a comment</h6>
                      <span class="time">2 hrs ago</span>
                    </div>
                    <div class="status"> </div>
                  </div>
                  </div>
                  <div className="border-bottom-n">
                    <div className="d-flex position-relative">
                      <div>
                        <img src="../../images/medx.png" class="rounded" alt="" width="35" height="35" />
                      </div>
                      <div className="ml-1 mx-2">
                        <h6 class="mb-0 fw-600">You have [event or activity name] that you need to join soon.</h6>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="dropdown " style={{marginLeft: '1rem'}}>
              <div className="d-flex align-items-center">
                <img src="../../images/avatar.png" class="nav-avtar mx-1" alt="user-icon" width="" height="" />
                Kritiya
                <img src="../../images/angle-down.png" class="arrow-down mx-1" alt="arrow" width="9"height="" />
              </div>
            </div>
        </div>
      </div>
     </div>
    </nav>
  )
}
