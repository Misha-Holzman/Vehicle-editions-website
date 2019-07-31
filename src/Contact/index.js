import React, { Component } from 'react'
import ContactForm from '../ContactForm'
import './style.css'

class Contact extends Component {
  render () {
    return (
      <div className='contact-main-container'>
        <p className='contact-title'>Contact me</p>
        <div className='social-container'>
          <ul className='social-icons'>
            <li className='li-social'>
              <a href='https://www.linkedin.com/in/annabel-lee-71197316/' target='_blank' rel='noopener noreferrer' className='a-social'>
                <i className='fa fa-linkedin' />
              </a>
            </li>
            <li className='li-social'>
              <a href='https://www.instagram.com/basketbeelee/' target='_blank' rel='noopener noreferrer' className='a-social'>
                <i className='fa fa-instagram' />
              </a>
            </li>
          </ul>
        </div>
        <p className='contact-description'>
        Send me an email about any inquiries. I’m always happy to chat!
        </p>
        <div className='contact-form-container'>
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default Contact
