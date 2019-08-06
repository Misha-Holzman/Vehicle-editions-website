import React, { Component } from 'react'
import './style.css'

class Clients extends Component {
  render () {
    return (
      <div className='clients-main-container'>
        <div className='clients-title-div'>
          <h1 className='clients-main-title'>Professional Experience</h1>
          <img src='https://i.imgur.com/q2NiKoA.jpg' className='clients-car-photo' alt='' />
        </div>
        <div className='clients-info-container'>
          <div className='clients-info-main-container'>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal99' id='button-modal'>
                <p className='clients-name'>WebMD/Medscape</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal99' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>WebMD/Medscape – Medical Editor</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Copyediting, proofreading, grammar, use of Stedman’s Medical Dictionary and AMA style across digital platforms for initial scripts, initial builds, brand and MLR feedback to scripts and builds, tagging and tracking codes, and final products</p>
                    <p>• Handled tasks using Workfront, Box, Proof HQ and other applications</p>
                    <p>• Text and ISIs for diverse indications, including oncology, hematology, pulmonary, HIV, neurology, dermatology, cardiology, diabetes and others for diverse clients, both global (Germany, Italy and others) and U.S. including Pfizer, Eli Lilly, Sanofi, Bayer, GSK, Novartis, Merck, and others</p>
                    <p>October 2016–Present, New York, NY</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal98' id='button-modal'>
                <p className='clients-name'>Grey Advertising</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal98' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Grey Advertising – Medical Editor</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Copyedting, proofreading, fact checking, grammar and AMA style for Eli Lilly products, primarily Men's Health: Cialis</p>
                    <p>December 2015–Ocrober 2016, New York NY</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal97' id='button-modal'>
                <p className='clients-name'>H4B Chelsea/Havas Health</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal97' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>H4B Chelsea/Havas Health – Senior Editor</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Copyediting, proofreading, fact checking, grammar and AMA style primarily for Astellas products and for Alcon contact lenses and ophthalmological products</p>
                    <p>Full-time on staff October 2013–November 2015</p>
                    <p>Freelance in-house November 2011–October 2013</p>
                    <p>New York, NY</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal96' id='button-modal'>
                <p className='clients-name'>McGraw-Hill</p>
              </button>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal95' id='button-modal'>
                <p className='clients-name'>Galen Press</p>
              </button>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal94' id='button-modal'>
                <p className='clients-name'>Terra Holdings/Brown Harris Stevens/Halstead</p>
              </button>
            </div>
            <br />
            <br />
            <div className='about-line-container'>
              <img className='about-line-divider' src='https://i.imgur.com/AZpE0YA.png' alt='' />
            </div>
            <br />
            <br />
            <div className='clients-title-div'>
              <h1 className='clients-main-title'>Other Clients</h1>
              <br />
              <br />
              <img src='https://i.imgur.com/q2NiKoA.jpg' className='clients-car-photo' alt='' />
            </div>
            <br />
            <br />
            <br />
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal1' id='button-modal'>
                <p className='clients-name'>Persea Books</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal1' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Persea Books</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Asleep in the Sun by Adolfo Bioy Casares</p>
                    <p>Persea, An International Review, Vol. 1, No. 1</p>
                    <p>Proofreading and typesetting</p>
                    <p>1977: Persea Books (Michael and Karen Braziller), Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal3' id='button-modal'>
                <p className='clients-name'>Timken Publishers, Inc.,</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal3' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Timken Publishers, Inc.,</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Letters from H.C. Westermann Selected and edited by Bill Barrette</p>
                    <p>Book design, typesetting, layout and mechanicals</p>
                    <p>1987-1988: Fred M. Kleeberg Associates, Inc. and office of Vehicle Editions, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal4' id='button-modal'>
                <p className='clients-name'>Books and Co. Bookstore</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal4' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Books and Co. Bookstore</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Letters to a Bookstore: 1978-1988</p>
                    <p>Book design, editorial work, layout and production management</p>
                    <p>1988: Books & Co., Madison Avenue, New York NY and office of Vehicle Editions, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal5' id='button-modal'>
                <p className='clients-name'>Balance House, Inc.</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal5' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Balance House, Inc., projects for Abrams and Dutton</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Production and editorial consulting</p>
                    <p>Assisted Marshall Lee with projects for Abrams and Dutton</p>
                    <p>Including a book on Erté</p>
                    <p>1986: Balance House, Inc., Midtown, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal6' id='button-modal'>
                <p className='clients-name'>Merce Cunningham Dance Foundation</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal6' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Merce Cunningham Dance Foundation</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Design and production of a poster-sized mailing piece</p>
                    <p>Promotion of films and videotapes about Merce Cunningham Dance Company</p>
                    <p>Utilization of a Jasper Johns Target poster, printed on the back and folded down</p>
                    <p>1979: Office of Vehicle Editions, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal7' id='button-modal'>
                <p className='clients-name'>The Franklin Mint Corporation</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal7' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>The Franklin Mint Corporation</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Reader’s Guides for The Franklin Library:</p>
                    <p>Humboldt’s Gift by Saul Bellow</p>
                    <p>Paradise Lost by John Milton</p>
                    <p>The Sun Also Rises by Ernest Hemingway</p>
                    <p>1978-1980: The Franklin Library, Midtown, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal8' id='button-modal'>
                <p className='clients-name'>Craft International Magazine</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal8' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Craft International Magazine</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Writer: Confessions of a Publisher for The State of the Book Arts Issue, Winter 1984</p>
                    <p>Editorial work on NEA-NEH Symposium on Crafts</p>
                    <p>Typesetting, composition and design for Issues 1981-1983</p>
                    <p>1981-1983: Craft International office, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal9' id='button-modal'>
                <p className='clients-name'>The World Crafts Council</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal9' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>The World Crafts Council</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal10' id='button-modal'>
                <p className='clients-name'>Skowhegan School of Painting and Sculpture, Maine</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal10' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Skowhegan School of Painting and Sculpture, Maine</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Design, mechanicals, production and shipping arrangements for 1988 season poster</p>
                    <p>Incorporated artwork by Yvonne Jacquette</p>
                    <p>1987: Office of Vehicle Editions, Little Italy, New York NY </p>
                  </div>
                </div>
              </div>
            </div>

            <img src='https://i.imgur.com/weOVkAS.jpg' className='clients-car-photo-1' alt='' />

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal11' id='button-modal'>
                <p className='clients-name'>Comproject BV</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal11' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Comproject BV</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>U.S. Sales Representative for printing and binding services offered by Dutch firms</p>
                    <p>Worked with clients in California, Washington DC, and the New York metropolitan area</p>
                    <p>Projects with Running Press, Quarto, Abbeville, Knopf</p>
                    <p>1984-1986: Comproject BV, Baarn, Holland and at Vehicle Editions office, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal12' id='button-modal'>
                <p className='clients-name'>Aperture Foundation</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal12' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel exampleModalCenterTitle' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Aperture Foundation</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Production Manager, on-press quality control for 1-color, 2-color, 4-color and 5-color projects; press okays, supervision of assistants, cost analysis, scheduling</p>
                    <p>Markings: Aerial Views of Sacred Landscapes photographs by Marilyn Bridges, 1986: production management, scheduling, on-press quality control at Arti Grafiche Amilcare Pizzi, S.p.A, Milan, Italy.</p>
                    <p>Aperture Issue 105—India: Ritual and the River, 1986: production management, on-press quality control at Arti Grafiche Amilcare Pizzi, S.p.A, Milan, Italy.</p>
                    <p>Literary Britain: Landmarks, Landscapes and Houses of the Great Writers and Poets photographs by Bill Brandt. Produced in association with the Victoria and Albert Museum, London. Production management, scheduling, on-press quality control at Westerham Press, Kent, England, UK.</p>
                    <p>The Ballad of Sexual Dependency by Nan Goldin, production management</p>
                    <p>1984-1986: Aperture, office at 23rd Street at Madison Avenue, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal13' id='button-modal'>
                <p className='clients-name'>McGraw-Hill</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal13' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>McGraw-Hill</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Copyediting and proofreading of numerous articles for the annual yearbooks</p>
                    <p>2010-2013: Office of Vehicle Editions, Jersey City NJ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal14' id='button-modal'>
                <p className='clients-name'>John Wiley and Sons</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal14' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>John Wiley and Sons</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Freelance editorial services</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal15' id='button-modal'>
                <p className='clients-name'>Facts on File</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal15' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Facts on File</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Freelance editorial services</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal16' id='button-modal'>
                <p className='clients-name'>The College Board</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal16' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>The College Board</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Freelance editorial services</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal17' id='button-modal'>
                <p className='clients-name'>Chelsea House</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal17' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Chelsea House</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Editorial assistant</p>
                    <p>1973: Chelsea House Publishing offices, Midtown, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal18' id='button-modal'>
                <p className='clients-name'>New York State Statistical Guide</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal18' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>New York State Statistical Guide</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Freelance Editorial Services</p>
                    <p>Statistical Guide (several years)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#' id='button-modal'>
                <p className='clients-name'>Cambridge University Press</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal19' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Cambridge University Press</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#' id='button-modal'>
                <p className='clients-name'>Cardozo School of Law</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal20' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Cardozo School of Law</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                </div>
              </div>
            </div>

            <img src='https://i.imgur.com/VUrQiwH.jpg' className='clients-car-photo-2' alt='' />

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#' id='button-modal'>
                <p className='clients-name'>Yeshiva University</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal21' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Yeshiva University</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal22' id='button-modal'>
                <p className='clients-name'>Harry N. Abrams</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal22' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Harry N. Abrams</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Production and editorial consulting</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal23' id='button-modal'>
                <p className='clients-name'>Dutton</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal23' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Dutton</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Production and editorial consulting</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal24' id='button-modal'>
                <p className='clients-name'>Rogner and Bernhard GmBH</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal24' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Rogner and Bernhard GmBH</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Served as Vice President and Manager of U.S. book projects for temporary New York office</p>
                    <p>1981: R&B office, Munich, Germany and Lower East Side, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal25' id='button-modal'>
                <p className='clients-name'>Z Press, Calais VT</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal25' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Z Press, Calais VT</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Library research for opera about Lola Montez</p>
                    <p>1975: Z Press office, West Village, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal26' id='button-modal'>
                <p className='clients-name'>Arti Grafiche Motta, Milan, Italy</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal26' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Arti Grafiche Motta, Milan, Italy</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>U.S. Sales Representative</p>
                    <p>Printing and Binding Services</p>
                    <p>Worked with clients in the New York metropolitan area</p>
                    <p>1988–90: Arti Grafiche Motta, Milan, Italy and at Vehicle Editions office, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal27' id='button-modal'>
                <p className='clients-name'>Comproject BV</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal27' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Comproject BV</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>U.S. Sales Representative for printing and binding services offered by Dutch firms</p>
                    <p>Worked with clients in California, Washington DC, and the New York metropolitan area</p>
                    <p>Projects with Running Press, Quarto, Abbeville, Knopf</p>
                    <p>1984-1986: Comproject BV, Baarn, Holland and at Vehicle Editions office, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal28' id='button-modal'>
                <p className='clients-name'>Galen Press</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal28' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Galen Press</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Medical writing and editing several manuscripts including:</p>
                    <p>Integrating Safety into the Practice of Drug-Eluting Stent Deployment, supplement to the American Journal of Cardiology, Volume 100 (8)</p>
                    <p>2007-2008: Galen Press, Austerlitz NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal29' id='button-modal'>
                <p className='clients-name'>Family Business Publishing Company</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal29' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Family Business Publishing Company</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Copyediting and proofreading</p>
                    <p>2000: Family Business Publishing Company, Great Barrington, MA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal30' id='button-modal'>
                <p className='clients-name'>The Stamford Review, Stamford, NY</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal30' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>The Stamford Review, Stamford, NY</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    ...
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal31' id='button-modal'>
                <p className='clients-name'>Ruth Kligman</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal31' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Ruth Kligman</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Ghost writing Gloria (unfinished novel) about the patriarchy being destroyed by women</p>
                    <p>At the home of Ruth Kligman, West 14th Street, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal32' id='button-modal'>
                <p className='clients-name'>Jean Stein</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal32' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Jean Stein</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Editorial work with Jean Stein and Walter Hopps</p>
                    <p>Research on Fleur magazine by Fleur Cowles</p>
                    <p>Plans for an artists-driven journal that never materialized</p>
                    <p>At the home of Jean Stein, Central Park West, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal33' id='button-modal'>
                <p className='clients-name'>David Rosenberg</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal33' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>David Rosenberg</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>The archive of The Ant’s Forefoot: inventory and preparation for sale to Andreas Brown at Gotham Book Mart</p>
                    <p>Blues of the Sky: Interpreted from the Ancient Hebrew Book of Psalms poetry by David Rosenberg, published by Angel Hair Books (1974): editing and proofreading</p>
                    <p>Congregation: Contemporary Writers Read the Jewish Bible, edited by David Rosenberg, published by Harcourt Brace Jovanovich, New York NY (1987): in acknowledgments mentioned for “the steady eye of…,” editorial work</p>
                    <p>Edited the Afterword to Job Speaks by David Rosenberg, published by Harper & Row, New York NY (1977)</p>
                    <p>At the office of David Rosenberg, St. Mark’s Place, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <img src='https://i.imgur.com/kdE8pCy.jpg' className='clients-car-photo-3' alt='' />

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal34' id='button-modal'>
                <p className='clients-name'>Ruth Kligman</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal34' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Ruth Kligman</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Ghost writing Gloria (unfinished novel) about the patriarchy being destroyed by women</p>
                    <p>At the home of Ruth Kligman, West 14th Street, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal35' id='button-modal'>
                <p className='clients-name'>Robyn Brentano</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal35' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Robyn Brentano</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>112 Workshop / 112 Greene Street</p>
                    <p>History, Artists & Artworks</p>
                    <p>Edited by Robyn Brentano with Mark Savitt</p>
                    <p>Paste-ups and mechanicals</p>
                    <p>1981: at the Byrd Hoffman Loft for New York University Press, Soho, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal36' id='button-modal'>
                <p className='clients-name'>Montclair State University</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal36' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Montclair State University</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Teaching assignments</p>
                    <p>Tutor: Literacy Enrichment Center</p>
                    <p>Professor: Read 099 Pre-College Reading Course: created syllabus for freshman-level literature class (Fiction and Freedom: Beloved by Toni Morrison, Their Eyes Were Watching God by Zora Neale Hurston, The Color Purple by Alice Walker, Freedom Riders film), delivered instruction, assessed student written and oral work </p>
                    <p>2010 – 2012: Montclair State University, Montclair NJ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal37' id='button-modal'>
                <p className='clients-name'>H4B Chelsea/Havas Health</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal37' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>H4B Chelsea/Havas Health</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Senior Medical Editor</p>
                    <p>2013–2015: H4B Chelsea/Havas Health, Chelsea and Murray Hill, New York NY </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal38' id='button-modal'>
                <p className='clients-name'>Terra Holdings/Brown Harris Stevens/Halstead Property</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal38' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Terra Holdings/Brown Harris Stevens/Halstead Property</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Executive Director of Marketing</p>
                    <p>•  Proposed and implemented an in-house marketing materials program for 575 brokers</p>
                    <p>•  Generated hundreds of thousands of materials including show sheets, postcards, newsletters</p>
                    <p>•  Provided writing and editorial services to Brown Harris Stevens residential sales division</p>
                    <p>•  Wrote style book for all corporate divisions</p>
                    <p>•  In charge of purchasing equipment and materials and budgeting for publications program</p>
                    <p>•  Wrote biographical profiles of real estate brokers for Brown Harris Stevens website</p>
                    <p>•  Served residential and commercial sales, mortgage, insurance and management divisions </p>
                    <p>•  Utilized desktop publishing programs incorporating digitalized images and web-based text</p>
                    <p>1999–2003: Terra Holdings/Brown Harris Stevens/Halstead Property, Upper East Side, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal39' id='button-modal'>
                <p className='clients-name'>Robert Rauschenberg</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal39' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Robert Rauschenberg</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Updating address database and rolodex cards</p>
                    <p>1985-1986: Robert Rauschenberg Foundation, Lafayette Street, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal40' id='button-modal'>
                <p className='clients-name'>Sheep Meadow Press</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal40' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Sheep Meadow Press</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Design, proofreading and typesetting</p>
                    <p>Collected Poems by F.T. Prince</p>
                    <p>The Poems of Anna Akhmatova, translated by Stanley Kunitz</p>
                    <p>1978: for Sheep Meadow Press (Stanley Moss, publisher), at Persea Books office, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal41' id='button-modal'>
                <p className='clients-name'>Sojourner Truth Printing Company</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal41' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Sojourner Truth Printing Company</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Operation of AB Dick 360 offset press; platemaking, film prep and stripping, paste-ups and mechanicals, bookkeeping, ordering paper, office management</p>
                    <p>1971-72: Sojourner Truth Printing Company, Little Five Points, Atlanta GA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal42' id='button-modal'>
                <p className='clients-name'>Anchor Books</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal42' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Anchor Books</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Proofreading, copyediting and other editorial tasks</p>
                    <p>Loka 2: A Journal from Naropa Institute edited by Rick Fields</p>
                    <p>1976: Naropa Institute, Boulder CO</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal43' id='button-modal'>
                <p className='clients-name'>The Institute for Art and Urban Resources / The Clocktower Gallery</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal43' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>The Institute for Art and Urban Resources / The Clocktower Gallery</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Design (developed original concept based on a Max Bill book), layout and mechanicals, copyediting, proofreading</p>
                    <p>this is tomorrow today: The Independent Group and British Pop Art</p>
                    <p>1987: Vehicle Editions office for Karen Marta, project editor; Brian Wallis; and Lawrence Wolfson, New York NY</p>
                    <p>Modern Dreams: The Rise and Fall and Rise of Pop</p>
                    <p>1988: Vehicle Editions office for Karen Marta, project editor; Brian Wallis; and Lawrence Wolfson, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <img src='https://i.imgur.com/zthUL5f.jpg' className='clients-car-photo-4' alt='' />

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal44' id='button-modal'>
                <p className='clients-name'>Saturday Morning</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal44' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Saturday Morning</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Typesetting, editorial work</p>
                    <p>In acknowledgments “My special thanks to Annabel for her editorial assistance”</p>
                    <p>1978: Vehicle Editions office for Simon Pettet, editor, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal45' id='button-modal'>
                <p className='clients-name'>New Work</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal45' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>New Work</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Typesetting, design, production, editorial work</p>
                    <p>1982: Craft International office for New York Experimental Glass Workshop, Hans Frode, editor, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal46' id='button-modal'>
                <p className='clients-name'>Macalester College</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal46' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Macalester College</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Chanter 83/84 journal of student writing</p>
                    <p>Typesetting, design, layout, production</p>
                    <p>1984: Vehicle Editions temporary offices, Saint Paul, MN and Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal47' id='button-modal'>
                <p className='clients-name'>Performing Artservices</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal47' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Performing Artservices</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>l’Avant Scène magazine</p>
                    <p>Wrote and edited article on dance</p>
                    <p>1980: Performing Artservices, Westbeth, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal48' id='button-modal'>
                <p className='clients-name'>Bohdan Boychuck</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal48' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Bohdan Boychuck</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Editorial work and typsetting of Displaced Persons by Bohdan Boychuck</p>
                    <p>1980: Office of Paul Pines, Lower East Side, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal49' id='button-modal'>
                <p className='clients-name'>Talbot Typographers</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal49' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Talbot Typographers</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Typesetter, galley slave</p>
                    <p>1977-1978: Office of Talbot Typographers, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal50' id='button-modal'>
                <p className='clients-name'>Trevor Winkfield</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal50' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Trevor Winkfield</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Bookbinding: Christophe Colomb by François Caradec</p>
                    <p>1979: office of Vehicle Editions, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal51' id='button-modal'>
                <p className='clients-name'>Balkan Arts Center</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal51' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Balkan Arts Center</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Assisted Ethel Raim and Martin Koenig with Winter Balkan Festival</p>
                    <p>1976: Balkan Arts Center, Upper West Side, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal52' id='button-modal'>
                <p className='clients-name'>Saint Lawrence University</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal52' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Saint Lawrence University</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Received honorarium for participation in conference </p>
                    <p>Counting by Jayne Anne Phillips (published by Vehicle Editions) received an award</p>
                    <p>1979: Saranac Lake, New York</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal53' id='button-modal'>
                <p className='clients-name'>Stonehill Publishing Company</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal53' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Stonehill Publishing Company</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Managing Editor, Production Manager</p>
                    <p>Cost analysis, manuscript solicitations and acquisitions, permissions, scheduling, copy writing, editing, prepress, systematized in-house order department</p>
                    <p>Journals and Dreams by Anne Waldman – solicited this non-poetry manuscript</p>
                    <p>Beyond the Looking Glass: Extraordinary Works of Fairy Tale and Fantasy, edited with an introduction by Jonathan Cott – rights, permissions, editing, design</p>
                    <p>Is There Life on Earth by J.G. Bennett</p>
                    <p>Psycho-Myth, Psycho-History by Ernest Jones (two volume boxed-set)</p>
                    <p>Adventures of a Red Sea Smuggler by Henry de Monfreid</p>
                    <p>The Roses Race Around Her Name, anthology of poems from fathers to daughters, edited by Jonathan Cott</p>
                    <p>Movies by Manny Farber</p>
                    <p>Cocaine Papers by Sigmund Freud, edited by Robert Byck</p>
                    <p>1973-1974: Stonehill Publishing Company office, Midtown, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <img src='https://i.imgur.com/nk2V53i.jpg' className='clients-car-photo-5' alt='' />

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal54' id='button-modal'>
                <p className='clients-name'>John Sinaiko</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal54' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>John Sinaiko</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Script writing, correspondence, permissions and grant writing for films:</p>
                    <p>The Short End of the Stick: Dowsers</p>
                    <p>Slocum screenplay treatment</p>
                    <p>Jerry and Molly and Sam by Raymond Carver</p>
                    <p>1987-1990: Office of John Sinaiko, Tribeca, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal55' id='button-modal'>
                <p className='clients-name'>Hans Kraus Fine Photographs</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal55' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Hans Kraus Fine Photographs</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Layout, design</p>
                    <p>Sun Pictures: Catalogue Three</p>
                    <p>1987: Office of Vehicle Editions, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal56' id='button-modal'>
                <p className='clients-name'>Simon & Schuster</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal56' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Simon & Schuster</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Nancy Drew books: set up shots</p>
                    <p>1986: Simon & Schuster offices, Midtown, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal57' id='button-modal'>
                <p className='clients-name'>PreMedia Global</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal57' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>PreMedia Global</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Developmental editing and writing</p>
                    <p>Critical thinking questions, discussion questions, case studies, claim categorization statements for higher education resources for Pearson</p>
                    <p>2009-2010: Office of Vehicle Editions, Hudson NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal58' id='button-modal'>
                <p className='clients-name'>Chrysalis Healing Center</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal58' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Chrysalis Healing Center</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Design and production of brochure</p>
                    <p>2008: Office of Vehicle Editions, Chatham NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal59' id='button-modal'>
                <p className='clients-name'>A</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal59' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>A</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Design and branding for clothing store on Crosby Street:</p>
                    <p>Stationery, shopping bags</p>
                    <p>2002: Office of Vehicle Editions, East Taghkanic NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal60' id='button-modal'>
                <p className='clients-name'>David Henderson</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal60' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>David Henderson</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Typesetting, editing, proofreading</p>
                    <p>Biography of Bob Marley</p>
                    <p>1984: Office of Vehicle Editions, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal61' id='button-modal'>
                <p className='clients-name'>Element Publishers</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal61' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Element Publishers</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Publishing consultant for publisher: Richard Ogust</p>
                    <p>1986: Office of Vehicle Editions, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal62' id='button-modal'>
                <p className='clients-name'>Rudy Burckhardt</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal62' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Rudy Burckhardt</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Design, typesetting, layout, production for a brochure for films</p>
                    <p>1983: Office of Vehicle Editions, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal63' id='button-modal'>
                <p className='clients-name'>Interlaken School of Art</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal63' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Interlaken School of Art</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Taught hand bookbinding and collage class for children ages 8 to 12 in Art Passport program under Nova Rockwell</p>
                    <p>1998: Interlaken School of Art, Stockbridge, Massachusetts </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal64' id='button-modal'>
                <p className='clients-name'>Festival of Books</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal64' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Festival of Books</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Panelist: Between the Covers, The Creative</p>
                    <p>2006: Spencertown Academy, Spencertown NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal65' id='button-modal'>
                <p className='clients-name'>Berkshire Reading Council</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal65' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Berkshire Reading Council</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>By invitation led a hand bookbinding and paper marbling workshop for 65 language arts teachers: all participants completed a handsewn hardcover book</p>
                    <p>1998: Berkshire conference facility, Pittsfield, Massachusetts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal66' id='button-modal'>
                <p className='clients-name'>The Iris Group</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal66' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>The Iris Group</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>TIPS course: Taught intensive ESL, accent reduction, grammar, debating, presentation and public speaking skills to two groups of Chinese high school students for International Academic Alliance classes</p>
                    <p>2011: The Iris Group classroom, Midown, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <img src='https://i.imgur.com/re2fBfS.jpg' className='clients-car-photo-6' alt='' />

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal67' id='button-modal'>
                <p className='clients-name'>Peter Robinson</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal67' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Peter Robinson</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Assisted filmmaker with script of his film Asylum about R.D. Laing</p>
                    <p>1973: Office of Peter Robinson, Upper West Side, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal2' id='button-modal'>
                <p className='clients-name'>Harcourt, Brace, Jovanovich Children’s Trade Division</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal2' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Harcourt, Brace, Jovanovich Children’s Trade Division</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>The Prince of the Dolomites by Tomie Dipaola</p>
                    <p>Nobody Stole the Pie by Sonia Levitin</p>
                    <p>Reprint of F. Scott Fitzgerald Notebooks</p>
                    <p>Virginia Woolf: Letters Volume III</p>
                    <p>Virginia Woolf: Women and Writing</p>
                    <p>Production work, layout and mechanicals</p>
                    <p>1979-1980 and 1987: Harcourt Brace Jovanovich, Midtown, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal68' id='button-modal'>
                <p className='clients-name'>People’s Printing Cooperative</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal68' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>People’s Printing Cooperative</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Layout, stripping, film prep, platemaking, office work for offset shop</p>
                    <p>Union shop, prepared brochures outlining health risks at GE Plant in Lynn, Mass.</p>
                    <p>1972: People’s Printing Cooperative, Saugus, Massachusetts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal69' id='button-modal'>
                <p className='clients-name'>Travel Consultant</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal69' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Ruth Kligman</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Certificate from Empire State Travel School and CLIA certification</p>
                    <p>1994-1998: Nejaime’s VIP Travel, Stockbridge MA; Haretage Travel, Great Barrington MA; Northeast Travel Connections, Canaan CT; Taconic Travel, Chatham NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal70' id='button-modal'>
                <p className='clients-name'>Hand Bookbinding Workshops</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal70' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Hand Bookbinding Workshops</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Studied at Center for Book Arts, New York NY</p>
                    <p>Led workshops at Community of the Arts, Cummington MA; The Free School, Boulder CO; Hampton Day School, Bridgehampton NY; for Nova Rockwell at Interlaken School of Art, Stockbridge MA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal71' id='button-modal'>
                <p className='clients-name'>Letterpress Printing</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal71' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Letterpress Printing</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>In-house printer at Center for Book Arts, New York NY</p>
                    <p>1975-1983 as needed: Center for Book Arts, Little Italy, New York NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal72' id='button-modal'>
                <p className='clients-name'>Typesetting</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal72' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Typesetting</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p>Center for Book Arts, Craft International magazine, Heresies magazine; World Crafts Council, Sheep Meadow Press, American Fabrics and Fashion magazine, Open Studio Workshop, Nachtmaschine Verlag, Odd Sorts Letter Foundry, Talbot Typographers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='clients-div last-client'>
              <button type='button' data-toggle='modal' data-target='#Modal73' id='button-modal'>
                <p className='clients-name'>Elementary School Teaching</p>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal73' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Elementary School Teaching</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <p><em>Details available on request</em></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Clients
