import './App.css';
import React from 'react';
import web1 from './images/image2.jpg'

function Home() {
  return (
<div>


<section id='header' className='d-flex align-items-center'>

<div class='container-fluid nav_bg'>
<div class='row'>
<div class='col-10 mx-auto'>
<div className='row'>
<div class='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
<h1>Empowering Minds, <strong class='brand-name'>One Click at a time</strong></h1>
<h2 class='my-3'>
Explore,Learn,Succeed.
</h2>
<div class='mt-3'>
<a className="btn-get-started" href="/services" role="button">Get Started</a>
</div>
<div class='mt-3 '>
<a className="btn-get-started" href="/ChatbaseIntegration" role="button">Our Bot</a>
</div>
</div>

<div className='col-lg-6 order-1 order-lg-2 header-img'>
<img src={web1} className='img-fluid animated' alt='home img' />
</div>
</div>
</div>
</div>
</div>
</section>

</div>
   
   

  )
}

export default Home;
