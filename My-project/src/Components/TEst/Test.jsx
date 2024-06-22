import React from 'react'
import './Test.scss'
const Test = () => {
  return (
    <div>

<section className="testimonials">
  <h2>What Our Customers Say</h2>
  <div className="testimonial">
    <img src="customer1.jpg" alt="Customer 1"/>
    <p>The burgers at Berger Hut are simply amazing! The flavors are rich, and the ingredients are always fresh. It's my go-to place whenever I'm craving a delicious meal."</p>
    <h4>John Doe</h4>
  </div>
  <div className="testimonial">
    <img src="customer2.jpg" alt="Customer 2"/>
    <p>Berger Hut never disappoints! The quality of their burgers and the friendly service make it a top-notch dining experience. I highly recommend it to all burger lovers!"</p>
    <h4>Jane Smith</h4>
  </div>
</section>


<section className="gallery">
  <h2>Gallery</h2>
  <div className="image-grid">
    <div className="image-item">
      <img src="gallery1.jpg" alt="Image 1"/>
    </div>
    <div className="image-item">
      <img src="gallery2.jpg" alt="Image 2"/>
    </div>
    <div className="image-item">
      <img src="gallery3.jpg" alt="Image 3"/>
    </div>
    <div className="image-item">
      <img src="gallery4.jpg" alt="Image 4"/>
    </div>
  </div>
</section>


      
    </div>
  )
}

export default Test
