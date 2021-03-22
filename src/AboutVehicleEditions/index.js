import React, { Component } from 'react'
import './style.css'

class AboutVehicleEditions extends Component {
  render () {
    return (
      <div className='about-main-container module'>
        <div className='about-title-div'>
          <h1 className='about-ve-main-title'>About</h1>
        </div>

        <div className='about-ve-container-bottom'>
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
                <a className='poetics-link' target='_blank' rel='noopener noreferrer' href='https://uglyducklingpresse.org/publications/a-poetics-of-the-press/'>here</a>
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

export default AboutVehicleEditions
