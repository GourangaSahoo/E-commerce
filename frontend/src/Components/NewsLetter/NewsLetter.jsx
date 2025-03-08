import React from 'react'
import './NewsLetter.css'
 const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Subscribe to our newsletter</h1>
        <p>Get the latest updates and offers delivered right to your inbox.</p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
export default NewsLetter;