import React from 'react'
import "./AboutUsCards.css"
import 'aos/dist/aos.css'

function AboutUsCards() {
  return (
    <section className='about-us-container'>
      <div className='row d-flex justify-content-center'>
        <div data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000" className=' col-11 col-md-3 col-lg-3 mx-0 mb-4' shadow>
          <div class="card text-center " >
            <div class="card-header">
              Easy Arrangments
            </div>
            <div class="card-body">
              {/* <h5 class="card-title">Card title</h5> */}
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="300" data-aos-duration="1000" className='col-11 col-md-3 col-lg-3 mx-0 mb-4' shadow>
          <div class="card text-center" >
          <div class="card-header">
              Equipment Suggestions
            </div>
            <div class="card-body">
              {/* <h5 class="card-title">Card title</h5> */}
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-delay="600" data-aos-duration="1000" className='col-11 col-md-3 col-lg-3 mx-0 mb-4' shadow>
          <div class="card text-center" >
          <div class="card-header">
              Cool Spots
            </div>
            <div class="card-body">
              {/* <h5 class="card-title">Card title</h5> */}
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

      </div>

    </section>


  )
}
export default AboutUsCards