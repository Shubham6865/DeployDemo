import React from 'react'
import vg from "../assets/2.webp"
import{AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (
    <>
    
    
    <div className='home' id='home'>
      <main>
        <h1>TechyStar</h1>
        <p>Solution for all you tech problems</p>
      </main>
      Home
    </div>
    <div className="home2">

      <img src={vg} alt="Graphics" />
      <div>
        <p>
          We are your one and only solution to the tech problems you face every day. We are  leading tech company whose aim is to increase the problem solving ability in children.
        </p>
      </div>
    </div>
    <div className="home3" id='about'>
      <div>
        <h1>Who we are ?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur natus officiis vero suscipit impedit facilis adipisci soluta optio vel excepturi laboriosam, ab ipsum accusamus corporis error rerum earum possimus itaque debitis quisquam? Perspiciatis, asperiores sed? Eos facere perspiciatis quam repudiandae eaque rem nostrum itaque vero amet, a, corporis cupiditate reiciendis.</p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>

      <h1>Brands</h1>
      <article>
        <div style={{animationDelay:"0.3s"}}>
          <AiFillGoogleCircle/>
          <p>Google</p>
        </div>
        <div style={{animationDelay:"0.5s"}}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
        </div>
        <div style={{animationDelay:"0.7s"}}>
          <AiFillYoutube/>
          <p>You-Tube</p>
        </div>
        <div style={{animationDelay:"0.9s"}}>
          <AiFillInstagram/>
          <p>Instagram</p>
        </div>
      </article>
      </div>
    </div>
    </>
  )
}

export default Home
