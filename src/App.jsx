import './App.css'

function App() {

  return (
    <div>
      <nav>
        <div className='brand_logo'><a href="https://www.nike.com/in/"><img src="/images/brand_logo.png" alt="brand_logo" /></a></div>
        
        <ul>
          <li><a href="#">MENU</a></li>
          <li><a href="#">LOCATION</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">CONTENT</a></li>
        </ul>

        <button id='login-btn'>Login</button>
      </nav>
      <div className="content">
        <div>
          <p className='big-text'>YOUR FEET DESERVE THE BEST</p>
          <p className='small-text'>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </p>

          <div className="btns">
            <button id='shop-now' className='red-btn'>Shop Now</button>
            <button id='category'>Category</button>
            <p className='external'>Also Available On  
            </p>
            <a href="https://www.flipkart.com/"><img src="/images/flipkart.png" alt="flipkart" id='flipkart'/></a>
            <a href="https://www.amazon.in/"><img src="/images/amazon.png" alt="amazon" id='amazon'/></a>
          </div>

          
        </div>
        <img src="/images/shoe_image.png" alt="product-image" id='product-image'/>

      </div>
    </div>
  )
}

export default App
