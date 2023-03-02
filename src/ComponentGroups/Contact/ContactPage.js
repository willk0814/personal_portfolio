import React from 'react'
import '../PageStyling/PageStyles.css'

export default function ContactPage() {
  return (
    <div name='contact' className='pageContainer'>
        <h1 className='titleText'>Contact Me</h1>
        <form className='contactForm'>
          <p>Submit the form below or shoot me an email - wkoenig0814@gmail.com</p>
          <input type='text' placeholder='name' name='name'/> 
          <br/>
          <input type='email' placeholder='email' name='email'/>
          <br/>
          <textarea name="message" id="" cols="30" rows="10" placeholder='message' />
          <button className='submitMessageButton'>Submit</button>
        </form>
    </div>
  )
}
