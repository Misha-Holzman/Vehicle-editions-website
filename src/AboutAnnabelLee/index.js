import React, { Component } from 'react'
import './style.css'

class AboutAnnabelLee extends Component {
  render () {
    return (
      <div className='about-main-container module'>
        <div className='about-title-div'>
          <h1 className='about-main-title'>About</h1>
        </div>
        <div className='about-container-top'>
          <div className='homepage-about-container'>
            <div className='about-img-container'>
              <img className='about-profile-img' src='https://i.imgur.com/zQXeLhy.png' alt='' />
            </div>
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
          </div>
        </div>
        <div className='about-line-container'>
          <img className='about-line-divider' src='https://i.imgur.com/AZpE0YA.png' alt='' />
        </div>
        <div className='poetics-container'>
          <p className='poetics-header'>
            A POETICS OF THE PRESS:
          </p>
          <p className='poetics-subheader'>
            Interviews with Poets, Printers, {`&`} Publishers
          </p>
          <img className='poetics-header-img' src='https://i.imgur.com/hFUcqM3.jpg' alt='' />
          <p className='poetics-body-1'>
          Where do books come from? How do visual artists and poets collaborate in book form?
          What does typography, design, and distribution have to do with making meaning?
          I had the opportunity to ask these questions, and more, with some of the greatest poets
          and publishers of the 20th century.
          </p>
          <div className='poetics-book-and-text-container'>
            <img className='poetics-book-img' src='https://i.imgur.com/5tSPEAl.jpg' alt='' />
            <div className='poetics-book-inner-container'>
              <p className='poetics-body-2'>
              A Poetics of the Press: Interviews with Poets, Printers, {`&`} Publishers is now available at a generous
              pre-order discount from Ugly Duckling Presse. Contributors include: Keith & Rosmarie Waldrop, Tom Raworth,
              Lyn Hejinian, Alan Loney, Mary Laird, Jonathan Greene, Alastair Johnston, Johanna Drucker, Phil Gallo,
              Steve Clay, Charles Alexander, Annabel Lee, Inge Bruggeman, Matvei Yankelevich, Anna Moschovakis, Aaron Cohick,
              and Scott Pierce.
              </p>
              <div className='poetics-link-div'>
                <p className='poetics-link-text'>Order a copy</p>
                <a className='poetics-link' target='_blank' href='https://uglyducklingpresse.org/publications/a-poetics-of-the-press/'>here</a>
              </div>

              <p className='poetics-body-3'>
              The publication of Donald Allen’s The New American Poetry in 1960, as well as the Vancouver and Berkeley
              poetry conferences, sparked a poetic renaissance. It was an era rich in exploration and innovation that
              articulated a new relationship between form and content. Simultaneously, American artists began working
              with the book as a creative medium that rivaled the European tradition of the early twentieth century.
              This book is the first collection of interviews with some of the pioneers working at the intersection of
              the artists book and experimental writing that continues to this day.
              </p>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default AboutAnnabelLee
