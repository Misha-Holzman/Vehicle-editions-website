import React, { Component } from 'react'
import './style.css'

class OutOfPrintTitles extends Component {
  render () {
    return (
      <div className='outOfPrintTitles-component'>
        <div className='no-print-header'>
          <h1 className='unavailable-titles-header-text'>Out of Print Titles</h1>
          <img src='https://i.imgur.com/1KMe3ta.png' className='unavailable-titles-car-photo' alt='' />
        </div>
        <div className='clients-info-container'>
          <div className='clients-info-main-container'>
            <div className='clients-div clients-div'>
              <h1 className='titles-name' id='no-link'>Airmail Postcards <span className='titles-author-span'>by Franco Beltrametti</span></h1>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal1' id='button-modal'>
                <h1 className='titles-name'>Continental 34s<span className='titles-author-span' id='titles-author-span-id'>by Annabel Levitt</span></h1>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal1' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Continental 34s</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div className='continental34s-main-container'>
                      <h3 className='continental34s-title-text'>Continental 34s</h3>
                      <p className='continental34s-author-text'>by Annabel Levitt</p>
                      <p className='continental34s-text'>• ISBN</p>
                      <p className='continental34s-text'>• 6 3/4 x 5 3/4</p>
                      <p className='continental34s-text'>• 39 leaves</p>
                      <p className='continental34s-text'>• Printed by the author at Center for Book Arts, New York, NY</p>
                      <p className='continental34s-text'>• logo by Miles Lally</p>
                      <p className='continental34s-text'>• cover design by Deborah S. Freedman</p>
                      <p className='continental34s-text'>• Published in an edition of 430 copies for Vehicle Editions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal2' id='button-modal'>
                <h1 className='titles-name'>Hot and Cold<span className='titles-author-span' id='titles-author-span-id' >by Richard Hell</span></h1>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal2' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Hot and Cold</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div className='hot-and-cold-main-container'>
                      <h3 className='hot-and-cold-title-text'>Hot and Cold</h3>
                      <p className='hot-and-cold-author-text'>by Richard Hell</p>
                      <p className='hot-and-cold-text'>• Preview edition published for the author’s exhibition at Rupert Goldsworthy Gallery, New York, NY October 1998</p>
                      <p className='hot-and-cold-text'>• Limited edition of 240 copies</p>
                      <p className='hot-and-cold-text'>• Handbound softcovers and hardcovers</p>
                      <p className='hot-and-cold-text'>• Printed digitally at Planet Color, Great Barrington, Massachusetts</p>
                      <p className='hot-and-cold-text'>• Richard Hell was born and grew up in Lexington, KY. He dropped out of high school and came to New York to be a poet at the end of the 60s. He co-founded, played in, sang in and wrote for several influential music groups including Television before forming the Voidoids in the mid-70’s, and was a crucial originator of “punk.” He’s best known for his album Blank Generation (1977) and his novel Go Now (1966). He lives in New York.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal3' id='button-modal'>
                <h1 className='titles-name'>Just Let Me Do It<span className='titles-author-span' id='titles-author-span-id' >by Michael Lally</span></h1>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal3' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Just Let Me Do It</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div className='just-let-me-do-it-main-container'>
                      <h3 className='just-let-me-do-it-title-text'>Just Let Me Do It</h3>
                      <p className='just-let-me-do-it-author-text'>by Michael Lally</p>
                      <p className='just-let-me-do-it-text'>$3.50</p>
                      <p className='just-let-me-do-it-text'>• ISBN 0-931428-04-1</p>
                      <p className='just-let-me-do-it-text'>• 5 1/4 x 7 3/4</p>
                      <p className='just-let-me-do-it-text'>• Printed in Canada by Coopérative d’Imprimerie Véhicule – Montréal in an edition of 1000 copies of which 26 are hardcovers, signed and numbered. Cover and typesetting by the publisher.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal4' id='button-modal'>
                <h1 className='titles-name'>Light and Shadow<span className='titles-author-span' id='titles-author-span-id' >by Simon Schuchat</span></h1>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal4' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Light and Shadow</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div className='light-and-shadow-main-container'>
                      <h3 className='light-and-shadow-title-text'>Light and Shadow</h3>
                      <p className='light-and-shadow-author-text'>by Simon Schuchat</p>
                      <p className='light-and-shadow-text'>• 6 x 4 inches</p>
                      <p className='light-and-shadow-text'>• 56 pages</p>
                      <p className='light-and-shadow-text'>• 500 copies softcover</p>
                      <p className='light-and-shadow-text'>• 26 signed and numbered hardcovers</p>
                      <p className='light-and-shadow-text'>• Printed offset at Open Studio Workshop</p>
                      <p className='light-and-shadow-text'>• Typeface: Patina</p>
                      <p className='light-and-shadow-text'>• Simon Schuchat is also the author of Svelte (Genesis Grasp, 1971) and Blue Skies (Some of Us Press, 1973) and At Baoshan (Coffehouse Press, 1987). Schuchat served in the Foreign Service for over 25 years and is an East Asia expert.</p>
                      <a href='https://www.amazon.com/Light-Shadow-Simon-Schuchat/dp/B000UDBT0C' target='_blank' rel='noopener noreferrer' className='cta'>
                        <span className='buy-now-text'>Buy Now</span>
                        <svg width='13px' height='11px' viewBox='0 0 13 10' className='svg-buy-now'>
                          <path d='M1,5 L11,5' />
                          <polyline points='8 1 12 5 8 9' />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal5' id='button-modal'>
                <h1 className='titles-name'>Quilts<span className='titles-author-span' id='titles-author-span-id' > by Barbara Guest</span></h1>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal5' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Quilts</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div className='light-and-shadow-main-container'>
                      <h3 className='light-and-shadow-title-text'>Quilts</h3>
                      <p className='light-and-shadow-author-text'>by Barbara Guest</p>
                      <p className='light-and-shadow-text'>• 5 3/4 x 8 1/4</p>
                      <p className='light-and-shadow-text'>• 14 pages</p>
                      <p className='light-and-shadow-text'>• This first edition is 100 copies. 50 copies are signed and numbered, each of these has a different cover, and each page of each of these copies is an original typeset specimen (via computer memory of composer). Each cover of the entire edition is an original Xerox color photocopy, designed and produced by Deborah S. Freedman at Jamie Canvas, New York. Composition done at the publisher on an IBM 82 Composer at Nachtmaschine Verlag, Basel. Binding done by hand at the publisher at Ecart, Geneva.</p>
                      <img src='https://i.imgur.com/r5CuSqx.jpg' className='quilts-image' alt='' />
                      {/* <a href='MoreOnQuilts'>Remembrance of Barbara Guest</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <h1 className='titles-name'>Score<span className='titles-author-span' id='titles-author-span-id'>by Lazy Madge, Annabel Lee, Douglas Dunn</span></h1>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal6' id='button-modal'>
                <h1 className='titles-name'>The Traveling Woman<span className='titles-author-span' id='titles-author-span-id' >by Roberta Allen</span></h1>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal6' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>The Traveling Woman</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div className='light-and-shadow-main-container'>
                      <h3 className='light-and-shadow-title-text'>The Traveling Woman</h3>
                      <p className='light-and-shadow-author-text'>by Roberta Allen</p>
                      <p className='light-and-shadow-author-text'>illustrations by Roberta Allen</p>
                      <p className='light-and-shadow-text'>ISBN 0-931428-14-9</p>
                      <p className='light-and-shadow-text'>7 x 5 inches</p>
                      <p className='light-and-shadow-text'>128 Pages</p>
                      <p className='light-and-shadow-text'>$12</p>
                      <p className='light-and-shadow-text'>
                        Printed offset in an edition of 1,500 by Drukkerij Tulp BV, Zwolle, Holland. Paper is wood-free half-matt machine coated art stock. Typeface is Journal Roman. The edition is all softcover and books are smyth sewn.
                      </p>
                      <p className='light-and-shadow-text'>
                        Known for her conceptual art of the seventies, Roberta Allen showed with the John Weber Gallery in New York City for nine years. Her work has been widely exhibited since 1967 in galleries and museums across the U.S., Europe, Canada, Australia and New Zealand. Writing fiction is a recent development, but already her stores have appeared in anthologies such as Wild History and magazines such as Bomb and Between C and D which are at the cutting edge of new art and literation
                      </p>
                      <img src='https://i.imgur.com/kjR5UP1.jpg' className='traveling-woman-image' alt='' />
                      {/* <a href='MoreOnQuilts'>Remembrance of Barbara Guest</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <h1 className='titles-name-typings'>Typings<span className='titles-author-span' id='titles-author-span-id' >by Christoper Knowles</span></h1>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal7' id='button-modal'>
                <h1 className='titles-name'>When I Was Alive<span className='titles-author-span' id='titles-author-span-id' >by Alice Notley</span></h1>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal7' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>When I Was Alive</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div className='light-and-shadow-main-container'>
                      <h3 className='light-and-shadow-title-text'>When I Was Alive</h3>
                      <p className='light-and-shadow-author-text'>by Alice Notley</p>
                      <p className='light-and-shadow-text'>
                        Alice Notley is “always imaginative in exploring her thought paths, always generous with sympathies,
                        always writing without regard to prominence.” Allen Ginsberg, Horizon “Alice Notley is in a class of
                        her own and whatever influences she had, she has assimilated them admirably. She is a phenomena.”
                        – Andrei Codrescu
                      </p>
                      <p className='light-and-shadow-text'>
                        “Miss Notley is easily the most authentic and effective poet in many years to emerge from the Lower East Side
                        division of what is loosely called ‘the New York School,’ that continuing academy-without-walls of the gritty
                        and the urbane… Small twists with big effects, writerly tricks that tickle and stab, are Miss Notley’s forte,
                        correlatives of a sensibility that shuttles riskily between fantasy and reality, literary dandyism and a daily
                        life of family, friends and money worries.”
                      </p>
                      <img src='https://i.imgur.com/CqxZbcs.jpg' className='quilts-image' alt='' />
                      {/* <a href='MoreOnQuilts'>Remembrance of Barbara Guest</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div second-half-of-out-of-print'>
              <button type='button' data-toggle='modal' data-target='#Modal8' id='button-modal-2'>
                <h1 className='titles-name'>Smithsonian Depositions and Subject to a Film<span className='titles-author-span' id='titles-author-span-id' >by Clark Coolidge</span></h1>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal8' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Smithsonian Depositions and Subject to a Film</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div className='light-and-shadow-main-container'>
                      <h3 className='light-and-shadow-title-text'>Smithsonian Depositions & Subject to a Film</h3>
                      <p className='light-and-shadow-author-text'>by Clark Coolidge</p>
                      <p className='light-and-shadow-author-text'>6 x 6 inches</p>
                      <p className='light-and-shadow-text'>88 pages</p>
                      <p className='light-and-shadow-text'>500 softcovers</p>
                      <p className='light-and-shadow-text'>Text set on an IBM Model C Executive</p>
                      <p className='light-and-shadow-text'>Reproduced on a Royfax 115 photocopier</p>
                      <p className='light-and-shadow-text'>Text paper 20 lb. Strathmore Writing blue</p>
                      <p className='light-and-shadow-text'>Text consists of two essays, one on Robert Smithson, the other on the making of the movie Jaws.</p>
                      <br />
                      <p className='light-and-shadow-text'><strong>Reviews</strong></p>
                      <p className='light-and-shadow-text'>
                        “Smithsonian Depositions & Subject to a Film are two lengthy tracts, glosses, accumulations… He is one doing
                        something totally provocative & odd to all ears who would be listening right now.”
                        – Anne Waldman
                      </p>
                      <img src='https://i.imgur.com/jNpU5RC.jpg' className='quilts-image' alt='' />
                      <img src='https://i.imgur.com/tvxG7S2.jpg' className='quilts-image' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal9' id='button-modal-2'>                
                <h1 className='titles-name'>The Day Before Yesterday<span className='titles-author-span' id='titles-author-span-id'>by Leon de Winter // cover by Josje Pollmann</span></h1>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal9' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>The Day Before Yesterday</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div className='light-and-shadow-main-container'>
                      <h3 className='light-and-shadow-title-text'>The Day Before Yesterday</h3>
                      <p className='light-and-shadow-author-text'>by Leon de Winter</p>
                      <p className='light-and-shadow-author-text'>ISBN 0-931428-15-7</p>
                      <p className='light-and-shadow-text'>7 1/4 x 5</p>
                      <p className='light-and-shadow-text'>86 pages</p>
                      <p className='light-and-shadow-text'>
                        Printed in an edition of 1,200 copies by Krips Repro, Meppel, Holland. Text is set in Baskerville by Kris Pion, Ghent, Belgium. Translated from the Dutch by Scott Rollins, with support from the Foundation for Translation of Dutch Literature. Letter from a Dogcatcher, The Lawyer, The Death of a Pedlar, The Description of a House, and The Waiting Line are taken from the selection of short stories Over de leegte in de wereld, originally published by Uitgeverij In de Knipshceer, Haarlem. On the Story of Friedrich Ganzdorff appeared in Avenue magazine.
                      </p>
                      <p className='light-and-shadow-text'>
                        Leon de Winter is one of the Netherlands’ youngest writers and of his contemporaries of the only one who can boast of an oeuvre: four novels and a collection of short stories. Born in 1954 of Jewish parents in the Catholic town of ‘s Hertogenbosch (famed for its earlier son, Hieronymus Bosch) De Winter went to Amsterdam in 1974 to study at the Dutch Film Academy. He dropped out after a few years and set up his own film company a long with two friends. To date they have produced a number of television documentaries and three feature films, the latest, Frontiers (starring Angela Winkler), marks his international breakthrough. De Winter wrote the stories in this volume when he was 19 and 20.
                      </p>
                      <br />
                      <p className='light-and-shadow-text'><strong>Reviews</strong></p>
                      <p className='light-and-shadow-text'>
                      “ … reminiscent of Malamud or Issac B. Singer. The atmosphere and characters evoke a powerful tension… Unforgettable.”
                        – Het Laastse, Brussels
                      </p>
                      <p className='light-and-shadow-text'>
                        “Leon de Winter shows a talent that is already strong and that promises to be formidable in the future.”
                        – Vrij Nederland, Amsterdam                        </p>
                      <img src='https://i.imgur.com/oRi1PNV.jpg' className='quilts-image' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal10' id='button-modal-2'>
                <h1 className='titles-name'>Counting<span className='titles-author-span' id='titles-author-span-id'>by Jayne Anne Phillips // cover by Rae Berolzheimer</span></h1>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal10' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Counting</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div className='light-and-shadow-main-container'>
                      <h3 className='light-and-shadow-title-text'>Counting</h3>
                      <p className='light-and-shadow-author-text'>by Jayne Anne Phillips</p>
                      <p className='light-and-shadow-author-text'>cover by Rae Berolzheimer</p>
                      <p className='light-and-shadow-text'>6 1/2 x 5 1/2 inches</p>
                      <p className='light-and-shadow-text'>56 Pages</p>
                      <p className='light-and-shadow-text'>$6</p>
                      <p className='light-and-shadow-text'>Available for purchase from movingvehicle@gmail.com</p>
                      <p className='light-and-shadow-text'>
                        Printed offset in an edition of 2,500 by Thomsen-Shore, Michigan. This second edition
                        also dsitributed Uitgeverij in de Knipscheer, Holland throughout Europe. Text is Palatino. Text paper is acid-free long life
                        book paper. Perfectbound softcovers.
                      </p>
                      <br />
                      <p className='light-and-shadow-text'><strong>Reviews</strong></p>
                      <p className='light-and-shadow-text'>
                        “It is an impressive series of prose-poems, wonderfully graphic…a notable job a young writer like Jayne Anne Phillips 
                        who is a talented, promising, and helped along by a publisher of taste.”
                        – Doris Grumbach
                      </p>
                      <p className='light-and-shadow-text'>Winner of the 1978 St. Lawrence Award for Fiction.</p>
                      <img src='https://i.imgur.com/0ZwKVQc.jpg' className='quilts-image' alt='' />
                      <img src='https://i.imgur.com/7doMsFc.jpg' className='quilts-image' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal11' id='button-modal-2'>              
                <h1 className='titles-name'>Fast Lanes<span className='titles-author-span' id='titles-author-span-id'>by Jayne Anne Phillips // drawings by Yvonne Jacquette</span></h1>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal11' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Fast Lanes</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div className='light-and-shadow-main-container'>
                      <h3 className='light-and-shadow-title-text'>Fast Lanes</h3>
                      <p className='light-and-shadow-author-text'>by Jayne Anne Phillips</p>
                      <p className='light-and-shadow-author-text'>drawings by Yvonne Jacquette</p>
                      <p className='light-and-shadow-text'>8 1/4 x 6 3/4 inches</p>
                      <p className='light-and-shadow-text'>56 Pages</p>
                      <p className='light-and-shadow-text'>$18 trade softcover</p>
                      <p className='light-and-shadow-text'>$35 signed softcover</p>
                      <p className='light-and-shadow-text'>$175 signed, lettered, handbound hardcover</p>
                      <p className='light-and-shadow-text'>Available for purchase from movingvehicle@gmail.com</p>
                      <p className='light-and-shadow-text'>(co-published with Brooke Alexander Gallery)</p>
                      <p className='light-and-shadow-text'>
                        Printed offset in a special brown tint by The Meriden Grauvre Company.
                        This unique edition is limited to 2,000 copies. Papers are Mohawk Vellum Text and UV Ultra II.
                        Text set in Palatino. Softcovers are smyth sewn and hardcovers are hand sewn.
                      </p>
                      <br />
                      <p className='light-and-shadow-text'><strong>Reviews</strong></p>
                      <p className='light-and-shadow-text'>
                        “…FAST LANES is a beautiful object, with charcoal drawings by Yvonne Jacquette of the inside of the car and–beneath
                        transparent vellum paper–the passing landscape in light, fast strokes.”
                        – David Edelstein, Esquire
                      </p>
                      <p className='light-and-shadow-text'>
                        “The story is first-rate Phillips, tough, unsparing, desperate, bitterly true…we see America in the harsh and brilliant
                        light of its essential emptiness. Jayne Anne Phillips is a solid mainstream American writer in the grand traditions
                        from Dreiser to Welty. She sees and she tells, and makes up weep for it.”
                        – Andrei Codrescu, The Baltimore Sun
                      </p>
                      <img src='https://i.imgur.com/yADFT4G.jpg' className='quilts-image' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal12' id='button-modal-2'>              
                <h1 className='titles-name'>Give Me Tomorrow<span className='titles-author-span' id='titles-author-span-id'>by Carter Ratcliff // illustrations by Alex Katz</span></h1>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal12' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Give Me Tomorrow</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div className='light-and-shadow-main-container'>
                      <h3 className='light-and-shadow-title-text'>Give Me Tomorrow</h3>
                      <p className='light-and-shadow-author-text'>by Carter Ratcliff</p>
                      <p className='light-and-shadow-author-text'>illustrations by Alex Katz</p>
                      <p className='light-and-shadow-text'>13 1/2 x 9 3/4 inches</p>
                      <p className='light-and-shadow-text'>48 Pages</p>
                      <p className='light-and-shadow-text'>$24</p>
                      <p className='light-and-shadow-text'>
                        Printed in Holland in a limited edition of 1,000 copies. Typeface is Cornivus. The portraits were printed duotone.
                        It is a softcover edition, however books are sewn and bound into sturdy covers with a dustjacket.
                      </p>
                      <p className='light-and-shadow-text'>
                        Carter Ratcliff is a poet but is perhaps better known for his books on Andy Warhol, John Singer Sargent,
                        Robert Longo, Red Grooms, and other writings on Comtemporary artists.
                      </p>
                      <p className='light-and-shadow-text'>Little needs to be said about Alex Katz, America’s foremost portrait painter.</p>
                      <br />
                      <p className='light-and-shadow-text'><strong>Reviews</strong></p>
                      <p className='light-and-shadow-text'>
                        “Katz was inspired to this high-art rogue’s gallery by Ratcliff’s poetry, which has developed from the often
                        abstract and cunningly sublime work of the early 70’s to the more immediately comprehensible jazzy, Hollywood,
                        detective-story ridiculousness – and brilliance – of these later poems… Katz’s portraits make for friendly but
                        shady characters, unknown to the viewer, or maybe hastily recognized. They eerily, lovingly inhabit the poems
                        as gangsters, or victims, or the man on the street, or the poet who came in from the cold, or none of these –
                        just peculiar presence active in the poetic environment. We long for more such collaborations in these rather
                        air-headed days of punk and junk: private harmonies between artist and poet, gone public in a big way.”
                        – Gerrit Henry
                      </p>
                      <p className='light-and-shadow-text'>
                        “Damon Runyon is held up in an alley by two of the best artists in town!”
                        – Red Grooms
                      </p>
                      <img src='https://i.imgur.com/8Qzp4nG.jpg' className='quilts-image' alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-div'>
              <button type='button' data-toggle='modal' data-target='#Modal13' id='button-modal-2'>              
                <h1 className='titles-name'>Train Ride<span className='titles-author-span' id='titles-author-span-id'>by Ted Berrigan // cover by Joe Brainard</span></h1>
              </button>
            </div>
            <div class='modal fade bd-example-modal-lg' id='Modal13' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>Harcourt, Brace, Jovanovich Children’s Trade Division</h5>
                    <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div className='light-and-shadow-main-container'>
                      <h3 className='light-and-shadow-title-text'>Train Rides</h3>
                      <p className='light-and-shadow-author-text'>by Ted Berrigan</p>
                      <p className='light-and-shadow-author-text'>cover by Joe Brainard</p>
                      <p className='light-and-shadow-text'>ISBN 0-031428-21-1</p>
                      <p className='light-and-shadow-text'>7 x 5 inches</p>
                      <p className='light-and-shadow-text'>48 pages</p>
                      <p className='light-and-shadow-text'>$10</p>]
                      <p className='light-and-shadow-text'>
                        Printed letterpress in an editions of 1,500 copies. Typeface is monotype (hot lead) Gill Sans.
                        Text paper is Caress. Perfectbound. Covers are printed letterpress on Strathmore Fairfield Bristol Velhum.
                      </p>
                      <p className='light-and-shadow-text'>
                        Ted Berrigan (1934-83) was and remains a legend. His poetry was collected in So Going Around Cities,
                        published by Blue Wind, which includes just about everything except Train Ride, making this book the essential companion volume to it.
                      </p>
                      <br />
                      <p className='light-and-shadow-text'><strong>Reviews</strong></p>
                      <p className='light-and-shadow-text'>
                        “Train Ride, subtitled ‘February 18th, 1971: for Joe (Brainard),’ is a long poem in the tradition of Herodotus,
                        Goethe, Laurence Sterne, Agatha Christie, & Blaise Cendrars — a poem of the travails & pleasures of travel, truly
                        of the late 20th century in that its verbal events are more internal than external: “Out the Window / is /
                        Out to Lunch!!“— one of the results of the development of industrial capitalism initiated by steam engine and
                        rail-way… Thus we have a great deal of hypothetical & remembered fucking, money, friendship — ‘amistad’— and,
                        indeed throughout, witty & precise meditation on the act of writing itself. The persona that emerges is the
                        ‘poet in the state of surprise’ (Apollinaire), a saintly yet human figure, addressing us with wonderful Peruvian
                        frankness: “I’d be a terrific Senator / because I’d love it”… The ‘Our Friends’ section is a marvelous catalog of
                        prominence… One could go on cataloging the delights of the ride: one would be wiser to simply urge all who can
                        run & read to take it, with Ted Berrigan, a Great Companion.”
                        – Anselm Hollo
                      </p>
                      <img src='https://i.imgur.com/hXoWiSw.jpg' className='quilts-image' alt='' />
                      <img src='https://i.imgur.com/SSzisBT.jpg' className='quilts-image' alt='' />
                    </div>
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

export default OutOfPrintTitles
