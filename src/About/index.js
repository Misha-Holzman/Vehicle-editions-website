import React, { Component } from 'react'
import './style.css'

class About extends Component {
  render () {
    return (
      <div className='about-main-container module'>
        <div className='about-title-div'>
          <h1 className='about-main-title'>About</h1>
        </div>
        <div className='about-container-top'>
          <div className='homepage-about-container'>
            <div className='about-text-container'>
              <h2 className='about-text-titles'>Annabel Lee</h2>
              <p className='about-about-text'>
                Publisher, editor, writer, educator, musician, mom, Annabel Lee is an innovative professional
                with extensive experience in publishing, medical editing and print production. An active member of
                a community of writers and publishers, she sits on the Board of Directors of The Poetry Project at
                St. Mark’s Church and was formerly Secretary/Treasurer on the Board of Center for Book Arts, New York.
                <br /> <br /> A global thinker and excellent communicator with a broad-based knowledge, she is detail oriented with
                fine language skills, which contribute to her expertise as a grammarian and her ability to spot
                language flaws. She is also proficient in initiating projects, bringing endeavors to satisfactory
                conclusions, handling design and production, negotiating, managing staff, maintaining progress and
                quality control. She has traveled extensively, done French and German language translations and studied
                Italian, Spanish and Russian. She has exhibited as a collage artist and watercolorist and has taught
                workshops in book and paper crafts. <br /> <br /> In music, she is living a legacy, having learned a repertoire of
                songs from her aunt, Hally Wood, who recorded on Elektra and other labels. Her aunt learned those
                songs in many cases first hand while doing field recordings with the Lomax family for the Library of
                Congress. Annabel Lee brings these songs to a wider audience by performing them, often with other
                musicians. <br /> <br />At Sarah Lawrence and SUNY, she majored in writing and literature. She received a Master’s
                in Education from Montclair State University. Her grounding in the language arts contributed to her
                successes in the publishing industry and as a published writer. Her poetry and prose have been published
                in over 50 publications, including print and online magazines and in books.
              </p>
            </div>
            <div className='about-img-container'>
              <img className='about-profile-img' src='https://i.imgur.com/zQXeLhy.png' alt='' />
            </div>
          </div>
        </div>

        <div className='about-line-container'>
          <img className='about-line-divider' src='https://i.imgur.com/AZpE0YA.png' alt='' />
        </div>

        <div className='about-container-bottom'>
          <div className='homepage-about-container-bottom'>
            <div className='about-car-img-div'>
              <img src='https://i.imgur.com/SVpQfdl.png' className='car-photo-about' alt='' />
            </div>
            <div className='about-text-container'>
              <h2 className='about-text-titles'>Vehicle Editions</h2>
              <p className='about-about-text'>
              Vehicle Editions was founded in 1976 by Annabel Levitt. Annabel Lee (she married the Lee in 1988)
              brings diverse experience to her role as publisher. A printer (letterpress and offset), hand bookbinder,
              teacher of book crafts, bookkeeper, phototypesetter, monotype typesetter, hand typesetter and writer,
              Annabel has worked for many other publishers (including responsibilities as Managing Editor and as
              Production Manager) and she has worked extensively with art book publishers on behalf of European
              printers. The publisher thus has had full involvement with the artistic, technical, literary and
              business aspects of the company. <br /> <br />The authors of Vehicle Editions include Jayne Anne Phillips,
              Ted Berrigan, Christopher Knowles and Roberta Allen. Authors, artists, craftspeople and the publisher
              have worked in close association, collaborating on format, production and editorial decisions, to ensure
              that the format of each book reflects its contents. <br /> <br />The attempt has always been made that the book’s
              exterior be an expression of its interior. For this reason, Vehicle Editions do not often resemble
              each other. Editions range from 100 to 5,000 copies depending on production methods and intent. Vehicle
              Editions has employed commercial printers and binders for some titles, and for others all work was
              done by hand at the kitchen table.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
