import React from 'react'
import styles from './Footer.module.css'
import logo from '../../assets/images/amazon.png'
export default function Footer() {
  return (
    <footer>
      <div className={styles.top_footer}>
<a href='#' className='text-white text-decoration-none'>Back To Top</a>
      </div>
      <div className={styles.middle_footer}>
<div className="container py-5">
<div className="row d-flex justify-content-center">
  <div className="col-md-3 col-sm-6">
<h6>Get to know Us</h6>
<a href='#' className='my-0 text-white text-decoration-none d-block'>About Us</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Careers</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Press Releases</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Amazon Science</a>
  </div>
  <div className="col-md-3 col-sm-6">
<h6>Connect with Us</h6>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Facebook</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Twitter</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Instagram</a>
  </div>
  <div className="col-md-3 col-sm-6">
<h6>Make Money with Us</h6>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Sell on Amazon</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Sell under Amazon</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Accelerator</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Protect and Build Your Brand</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Amazon Global Selling</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Supply to Amazon</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Become an Affiliate</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Fulfilment by Amazon</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Advertise Your Products</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Amazon Pay on Merchants</a>
  </div>
  <div className="col-md-3 col-sm-6">
<h6>Let Us Help You</h6>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Your Account</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Returns Center</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Recalls and Products Safety Alerts</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>100% Purchase Protection</a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Amazon App Download </a>
<a href='#' className='my-0 text-white text-decoration-none d-block'>Help</a>
  </div>
</div>
</div>
<hr />
      </div>
      <div className={styles.middle_footer}>
<div className="container">
<div className="row d-flex justify-content-center py-3">
<div className="logo_container w-25">
<img src={logo} className='w-100' alt="Amazon logo" />
</div>
</div>
</div>
      </div>
      <div className={styles.bottom_footer}>
        <div className="container">
<div className="row g-3 pt-5">
  <div className="col-md-3 col-sm-6">
    <h6>AbeBooks</h6>
    <p>Books, art & collectibles</p>
  </div>
  <div className="col-md-3 col-sm-6">
    <h6>Amazon web Services</h6>
    <p>Scalable Cloud Computing Services</p>
  </div>
  <div className="col-md-3 col-sm-6">
    <h6>Audible</h6>
    <p>Download Audio Books</p>
  </div>
  <div className="col-md-3 col-sm-6">
    <h6>IMDb</h6>
    <p>Movies, TV & Celebrities</p>
  </div>
  <div className="col-md-3 col-sm-6">
    <h6>Shop bop</h6>
    <p>Designer Fashion Brands</p>
  </div>
  <div className="col-md-3 col-sm-6">
    <h6>Amazon Business</h6>
    <p>Everything For Your Business</p>
  </div>
  <div className="col-md-3 col-sm-6">
    <h6>Prime Now</h6>
    <p>2-Hour Delivery on Everyday Items</p>
  </div>
  <div className="col-md-3 col-sm-6">
    <h6>Amazon Prime Music</h6>
    <p>100 million sings, ad-free Over 15 million podcast episodes</p>
  </div>
</div>
        </div>
      </div>
    </footer>
  )
}
