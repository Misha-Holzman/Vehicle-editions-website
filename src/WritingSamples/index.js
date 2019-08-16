import React, { Component } from 'react'
import './style.css'

class WritingSamples extends Component {
  render () {
    return (
      <div className='writing-samples-main-container'>
        <div className='writing-samples-title-div'>
          <h1 className='writing-samples-main-title'>Writing Samples</h1>
          <img src='https://i.imgur.com/q2NiKoA.jpg' className='writing-samples-car-photo' alt='' />
        </div>
        <div className='writing-samples-main-div'>
          <div className='writing-info-container'>
            <div className='writing-info-main-container'>
              <div className='writing-div'>
                <button type='button' data-toggle='modal' data-target='#Modal100' id='button-modal'>
                  <p className='clients-name'>Art Review on artcritical.com</p>
                </button>
              </div>
              <div class='modal fade bd-example-modal-lg' id='Modal100' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                  <div class='modal-content'>
                    <div class='modal-header'>
                      <h5 class='modal-title' id='exampleModalLabel'>WebMD/Medscape – Medical Editor</h5>
                      <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div class='modal-body'>
                      <div className='donna-dennis-passage-div'>
                        <h3 className='dennis-passage-title dennis-text'>Passage: Donna Dennis at Lesley Heller</h3>
                        <p className='dennis-passage-author dennis-text'>by Annabel Lee</p>
                        <p className='dennis-passage-name-of-show dennis-text'>Donna Dennis: Ship and Dock/Nights and Days or The Gazer at Lesley Heller Gallery</p>
                        <p className='dennis-passage-gallery dennis-text'>Lesley Heller Gallery</p>
                        <p className='dennis-passage-date dennis-text'>May 31 to June 30, 2018</p>
                        <p className='dennis-passage-address dennis-text'>54 Orchard Street, New York City </p>
                        <p className='dennis-passage-article dennis-text'>Read the article at <a href='http://www.artcritical.com/2018/06/18/annabel-lee-on-donna-dennis/' target='_blank' rel='noopener noreferrer' className='dennis-passage-gallery-link'>ArtCritical.com</a></p>
                        <img src='https://i.imgur.com/ir9dzy3.jpg' className='dennis-img-main' alt='' />
                        <p className='dennis-text dennis-article-writing'>
                          Have you ever wanted to walk inside a painting, sit down and experience the work from the inside? Ship and Dock/Nights
                          and Days or The Gazer is like a painting: you have to keep looking at what is before you so you know not only what you’re
                          seeing but what you’re feeling as well. This mixed media assemblage, the primary work in this exhibition, takes up an
                          entire room and carries psychological power.
                        </p>
                        <p className='dennis-text dennis-article-writing'>
                          Entering a darkened space through a floor-to-ceiling black curtain, you encounter a structure beyond which, in one direction,
                          is a slowly, gradually changing sky beginning at the horizon line. The whole installation is miniaturized yet human-scale,
                          like a great big, exploded-open Joseph Cornell box.
                        </p>
                        <p className='dennis-text dennis-article-writing'>
                          A bench is placed conveniently against a dark wall pierced with scattered holes that allow tiny and tinier lights to shine through.
                          Sit down with the starry wall behind you and gaze at, and through, the structure. It’s mesmerizing and invites you to linger and
                          contemplate the passage of time. The structure and the walls on either side and behind are dark with a greater depth than any empty
                          black because this color is, in fact, a dark marine blue.
                        </p>
                        <p className='dennis-text dennis-article-writing'>
                          The structure is a dock with two sheds. One weather beaten shed, nearer the viewer, to the left on the dock, is clad in corrugated
                          metal with authentic signs of aging: dings and scrapes. Its door has a weathered, cross-hatched safety-glass window through which
                          a lit bulb exudes orangey-yellowish light with a brighter center, like the glow from a gas lamp, only the filament identifies this
                          lamp as an industrial-type, if delicate electrical bulb. On entering the space with its many parts, darkness and this light, this
                          lamp suggests a Bec Auer gas lamp of the type familiar from Marcel Duchamp’s Etant Donnés. We look through something to see a view
                          beyond, a light on the other side of the solid structure. Only there is no figure here except oneself and a haunting feeling of
                          loneliness. Like Duchamp, Donna Dennis has controlled the conditions under which the viewer experiences the work. One must be part
                          of the work to see it.
                        </p>
                        <img src='https://i.imgur.com/qJlAAtH.jpg' className='dennis-img-secondary' alt='' />
                        <p className='dennis-text dennis-article-writing'>The piece changes, even though nothing moves but light. This is not a static sculpture. There is a subtle though constant state
                          of change, augmented by the gentle sounds of water lapping up on a shore, swirls and eddies, droplets of water, tidal sounds.
                          Waves pull back, rigging that is not tied fast quietly clatters, breezes funnel through the dock and over water. There’s an eerie
                          cosmic whoosh that complements the surrounding darkness.
                        </p>
                        <p className='dennis-text dennis-article-writing'>
                          The other shed, further from the viewer and to the far right at the end of a walkway, stands on an elevated structure with a dark
                          side facing the viewer and a light side facing left. This light side lends a surreal quality to the scene. The gravity and sharp
                          contrasts of light and dark on the sides of this form suggest the melancholy of Giorgio de Chirico’s abandoned cityscapes and
                          the relationships he creates between buildings in space.
                        </p>
                        <p className='dennis-text dennis-article-writing'>
                          The dock is set on what look like concrete pylons whose square footings suggest water underneath. The viewer may be walking
                          on that water. The crossbeams, the gangplank and stairways ck create many geometric shapes, like erector sets or metal shelving:
                          crisscrossing patterns and a variety of exes and rectangular framing. Drooping cables or fuel pipes connect into stanchions that
                          resemble plumbing fixtures, rounded at the top, as if they have shut-off valves or switches for the flow of liquids or current
                          running inside the sheathing. Or they are hawsers, protected from the elements inside metal tubing where those strong cables
                          penetrate the deck.
                        </p>
                        <img src='https://i.imgur.com/CB98CBS.jpg' className='dennis-img-secondary' alt='' />
                        <p className='dennis-text dennis-article-writing'>
                          This is a durational work because beyond the dock the projection of sky above the horizon changes gradually from day to night to day,
                          from painterly sky blues to dark night with brushstroked stars as a ship changes from white against the night sky to black against
                          the daytime skies in the distance. Thus the elements of engineering and technology that exist here in a three-dimensional space,
                          also includes the fourth dimension of time. And, though that horizon changes, it’s always night for the viewer with the stars
                          shining behind us..
                        </p>
                        <p className='dennis-text dennis-article-writing'>
                          This scene may represent a vast lake in northern Minnesota where typically fish houses and small cabin structures can be seen
                          from the shore. The scale of the work suggests that this may represent one of the Great Lakes because the ship, an ore ship
                          carrying coal, is so small, s
                        </p>
                        <p className='dennis-text dennis-article-writing'>
                          The viewer is struck by the precision Donna Dennis employed in creating the overall construction, the sound and the lighting.
                          This reflects the attention brought to bear on the locations where the artist made her beautiful gouache drawings that hang in
                          a separate room, and the elaborate preparations to accomplish her installation, first constructed in the studio, then disassembled
                          and recreated at Lesley Heller.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='writing-div'>
                <button type='button' data-toggle='modal' data-target='#Modal101' id='button-modal'>
                  <p className='clients-name'>Article on Teaching in a Charter School</p>
                </button>
              </div>
              <div class='modal fade bd-example-modal-lg' id='Modal101' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                  <div class='modal-content'>
                    <div class='modal-header'>
                      <h5 class='modal-title' id='exampleModalLabel'>Article on Teaching in a Charter School</h5>
                      <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div class='modal-body'>
                      <h3 className='dennis-passage-title dennis-text'>Teaching Practices and Procedures at a New York City Charter School:</h3>
                      <p className='dennis-passage-author dennis-text' style={{ fontSize: '22px', fontStyle: 'italic' }}>An Inside View</p>
                      <p className='dennis-passage-name-of-show dennis-text'>by Annabel Lee</p>
                      <p className='dennis-passage-article dennis-text'><a href='http://www.artcritical.com/2018/06/18/annabel-lee-on-donna-dennis/' target='_blank' rel='noopener noreferrer' className='dennis-passage-gallery-link'>Confessions of a Teacher in a “No Excuses” Charter School on Diane Ravitch’s blog</a></p>
                      <br />
                      <p className='dennis-text dennis-article-writing'>
                        Third grade is a great year. Children are introduced to multiplication, vocabulary grows by leaps and bounds, independent reading skills offer a comforting and educational view into new worlds. This past August, after completing my Master’s in Education the previous January, I was excited to be hired to teach third grade in a charter school in New York City that has high expectations for its students and for its teachers. I did not meet the expectations of the school and the school did not meet mine—so I resigned. Although this is one school and one teacher’s view, my experiences there may help others take a hard look at the education of children.
                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        Third grade children need to come away from the classroom with a love of learning, a curiosity about wide-ranging subjects, the desire to write, an interest in reading, the skills to make reading effective and the ability to do basic computation: addition, subtraction and the times tables. At the same time an effective educational approach will build strong character traits, the ability to focus on a task and complete it independently, the desire to share with others and interact in kind and compassionate ways, with a positive attitude toward achievement and the common good. Some say third grade reading scores are the basis for designers of prisons to predict the size of `future inmate populations. In any educational environment the first principles to instill in the classroom are respect for self, respect for others and respect for the environment. In this school a “behavior management system” is in place that does not support these goals. Children will not succeed in getting into college and in the job market because they respond to authority by being silent and walking in public like robots.
                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        When I pursued my Master’s degree I was exposed to many theories of child psychology, child development and educational theories. Nothing I learned prepared me for the challenges at this charter school. The school is a not-for-profit corporation serving an economically disadvantaged community in New York City. As with other charter schools, a substantial part of its support and revenue come from the New York City Department of Education. The approach of the school is largely set by the principal: High achievement goals largely fueled by a tone of competitiveness and unique methods of control. Like other charter schools, the teachers are not members of the teachers’ union and discussion of this subject is discouraged. Through most of the day every day my class was observed by the principal, various members of the administration and other teachers.
                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        In August I was hired as one of three third grade teachers. I was the newest to the profession. One of the other two third grade teachers was also in her first year of teaching: She had been an associate teacher in this school the previous year. Thus the third grade teacher with seven years’ experience was the lead teacher for the grade. We had two associate teachers: one taught only science, one taught only social studies. As I understood it the associate teachers were there to assist us, however this was later called into question.

                      </p>

                      <p className='dennis-text dennis-article-writing'>
                        Setting up the Classroom
                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        On the first day of school, I was told which classroom would be mine and, thrilled, went up to the third floor to see it. The pine floors shone, newly refinished, the walls had fresh paint, a wide whiteboard covered the front wall, and tall old-school windows brought in lots of light with an unobstructed view of sky. I was told to cover the windows with paper so the children would not be “distracted” by the view. I decorated two corkboards and the windows with crepe paper borders—I was told to take the crepe paper down. The lead third grade teacher and the principal offered advice that was often conflicting and sometimes too late. The lead third grade teacher told me that I should put up “anchor charts,” which she had not yet done. She said the school would furnish little in the way of supplies for the classroom. There was no list of what the school would provide, nor a list of what the parents were expected to supply. She said she had purchased most of her own supplies. The first evening I bought “anchor charts,” posters that addressed third grade core curriculum, and other supplies. Two weeks later the principal told me I should have made the anchor charts myself. I was told that I should not display student work on the freshly painted back wall, so I bought cardboard presentation panels. I bought binders I had been told I needed. I bought push pins, glue sticks, a number line, an alphabet line, plastic bins, baskets to hold homework sheets, name labels, pocket charts, a classroom thermometer, dry-erase boards, sentence strips, dry-erase markers, pencils, erasers and more.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        The principal told me that the lead third grade teacher was my go-to person for any questions I might have. “Any time you have a question, just ask me,” the lead teacher said on several occasions. Every day I asked the lead teacher to come into my classroom to help me prepare the room. She did not have time. She was occupied with preparing her own room.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        I attended eight days of professional development, classes for teachers, before the students came to school. On the sixth of those professional development days, after I had set up my classroom, the principal told me that the classroom was a disaster. A teacher, who was now an intervention specialist and had used my classroom the previous year, was assigned to come in and help me. The arrangement of the desks was not acceptable. I hadn’t left a large open area in the front of the classroom where students could sit on the floor cross-legged in front of the whiteboard and receive direct instruction from me — a teaching policy that had never been mentioned. This physical relationship, standing so close to children looking down at them sitting cross-legged on the floor, was the first hint I got of the authoritarian atmosphere of the school.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        When it came to equipping my empty room, I had ideas from classrooms in many schools I’d taught in, done observations in, and visited over the course of several decades. One of my models was the first-grade classroom of an experienced (over 30 years) teacher at a private school in downtown Manhattan where I’d taught a class for second graders on weekends. This teacher, like the lead third grade teacher where I was teaching and many others I’d met, had dozens of her own books in the classroom. For the first couple of weeks I was given no books by the school, and then I was given about fifteen titles of reading books, mostly non-fiction, in quantities ranging from 3 to 15 of each title: none in a sufficient quantity to give every student in the room. Besides what I’d purchased, I brought things I owned that I thought were needed: paper trays, a collection of stones (some labeled with their names and where they can be found, some semi-precious stones), three mature plants, a stool, colored pencils, tape in a dispenser, a stapler, paper clips, about six cartons of books, a couple of extra bookcases, and much more. I own many children’s books and this was a limited selection. I had the idea that a “print rich environment,” encouraged in many schools, meant that the classroom should be full of colorful, entertaining books for children.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        When the principal came in the room and saw those books she was horrified. “Some of these books are from the 19th century,” she said, shocked. Indeed, this period is the “golden age of children’s literature.” There were books from the L. Frank Baum series including The Wizard of Oz and Queen Zixi of Ix, there were Alice in Wonderland, The Wind in the Willows, Pinocchio, Grimm’s fairy tales, Hans Christian Andersen’s fairy tales, John Ruskin’s King of the Golden River, George MacDonald’s The Princess and the Goblin, and more. There were books from the 20th century including a stack of Ludwig Bemelmans’ Madeline books, Curious George books, Dr. Seuss books, P.D. Eastman books, Beatrix Potter books, William Steig books, and more. There were books from the 21st century and craft books for making origami, paper pop-ups and more. There were books about identifying trees, guides to birds and rocks and wildflowers, books about telling time, math puzzle books. And, since I have studied French, German, Russian, Spanish and Italian, there were illustrated children’s books in all of those languages. There were a few illustrated books in other languages as well. The principal asked me to take all my books home. I discussed this with her and with various members of the administration. The director of curriculum took a look at selected books in my collection that were “recent” and in “perfect” condition. She chose about 40 books to stay in the classroom (about half a carton out of the six cartons I’d brought): books on art and the Curious George and Dr. Seuss books. The children took interest in these books and borrowed them for silent reading.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        Classroom Rules
                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        The first couple of weeks the students were there would be devoted to instilling classroom rules. So, to prepare, I made lesson plans that incorporated Aesop’s Fables to bring up issues of behavior and values and generate conversations about the classroom culture. It turned out that the priorities were discipline and schedule, the highest values silence and obedience instead of moral and ethical rules, as portrayed in Aesop’s fables. Slow learning, learning at an individual pace, adapting to student needs were insignificant concerns.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        The behavior management system used by the school is called Whole Brain Teaching, created by Chris Biffle in 1999. The techniques seem to be focused on memorization and repetition. The teacher is supposed to be entertaining and use a lot of energy. The teachers I observed, both in person and in online videos, seemed like square dance callers, auctioneers, carneys in the circus or entertainers on a stage. The fast-talking, call-and-response approach and exaggerated, attention-getting gestures seemed inappropriate. I had difficulty modeling this method of discipline because I was horrified by it, shocked that it was considered the norm and contrary to the principles I had learned studying to be a teacher. There are videotaped examples of this method in action with students ranging in age from kindergarten to college. In every video the teacher makes rehearsed gestures and barks out scripted phrases and the students bark back set responses in the same tones using the same gestures.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        Making children sit still and listen, avoiding dangerous situations, creating a sense of order and civility was presumably the goal. In this case behavior management is a mild term for describing a system of regimentation for the sake of control. It is authoritarian and haunting. Students are expected to walk in the hallway like robots: silent, hands straight by their sides, a puff of air in their cheeks referred to as “the bubble” so that they cannot talk, in two straight lines

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        The first day the children came to school I enlisted one of the two associate teachers to assist me in the morning so that the students and I could experience a proper modeling of the words and gestures used in Whole Brain Teaching. By lunchtime I was told that my morning had been a “flop.” According to the principal, I had “relinquished my authority” by inviting the associate teacher to assist me. The associate teacher and I had collaborated, both standing at the front of the class, both engaged with the class. I participated in the demonstration of these methods, I just hadn’t done it alone. I had made a point of getting this participation of the associate teacher cleared with the lead third grade teacher. The principal asked me to leave my classroom to observe the lead third grade teacher teaching a lesson that day. Later that day I was asked to observe the other third grade teacher teaching.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        The principal had me observe other teachers during the following days and then attend a “corrective action” meeting at the end of the week. Probationary close scrutiny was scheduled to end two weeks later. In this “corrective action” meeting, I was reprimanded again for having relinquished authority of my classroom to one of the two associate teachers available to the three third grade teachers. I was asked when, during a lesson, I employed the rules for listening. I was asked whether I had any rules for listening.

                      </p>
                      <p className='dennis-text dennis-article-writing'>The piece changes, even though nothing moves but light. This is not a static sculpture. There is a subtle though constant state
                        I regularly applied the rules I had been told to apply. These rules were posted in the room. I had been instructed to follow this behavior management system with fidelity and I tried to. These Whole Brain Teaching rules, which were posted in every room in the school, were:

                      </p>
                      <ul>
                        <li className='dennis-text dennis-article-writing'>Follow directions quickly (the accompanying gesture is putting hands together in front of you and making a swimming movement like a fish moving forward)</li>
                        <li className='dennis-text dennis-article-writing'>Raise your hand for permission to speak (the accompanying gesture is, of course, raising the hand high)</li>
                        <li className='dennis-text dennis-article-writing'>Raise your hand for permission to leave your seat (the accompanying gesture is raising the hand high, with a scurrying gesture with pointer finger and middle finger added)</li>
                        <li className='dennis-text dennis-article-writing'>Make smart choices (the accompanying gesture is tapping the pointer finger to the head)</li>
                        <li className='dennis-text dennis-article-writing'>Keep your dear teacher happy (and the accompanying gesture is to frame the face with the thumb and pointer fingers of both hands and smile broadly).</li>
                      </ul>
                      <p className='dennis-text dennis-article-writing'>
                        Students had to practice the rules daily. First they had to name the rule, such as “Rule Number One,” then say the rule, such as “Follow directions quickly” and use the appropriate gestures. These rules were reviewed frequently every day and whenever a student broke one of them—most frequently when a student was enthusiastic about speaking out in class. When a student spoke out of turn, the teacher was supposed to say, “Okay class, what’s rule number two?” Then the class spoke the rule in unison, making the gesture. If all students did not participate or some did not make the gesture, the whole class had to repeat the rule again. All the rules were reviewed at the beginning of class and on average about 20 times during the course of the day. As a result, most of the lessons consisted of repeating the rules and doing the Whole Brain Teaching gestures.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        In addition to these four basic rules, there were procedures to be written, posted, implemented, practiced, and monitored. These included:

                      </p>
                      <ul>
                        <li className='dennis-text dennis-article-writing'>Lining up</li>
                        <li className='dennis-text dennis-article-writing'>Getting the attention of the teacher</li>
                        <li className='dennis-text dennis-article-writing'>Walking into the classroom</li>
                        <li className='dennis-text dennis-article-writing'>Morning activities when entering the classroom</li>
                        <li className='dennis-text dennis-article-writing'>Passing in papers and homework</li>
                        <li className='dennis-text dennis-article-writing'>Sharpening pencils</li>
                        <li className='dennis-text dennis-article-writing'>Getting into groups</li>
                        <li className='dennis-text dennis-article-writing'>Walking to lunch</li>
                        <li className='dennis-text dennis-article-writing'>Exiting the classroom</li>
                        <li className='dennis-text dennis-article-writing'>Throwing away papers</li>
                        <li className='dennis-text dennis-article-writing'>Putting a heading on a paper</li>
                        <li className='dennis-text dennis-article-writing'>When leaving for special subjects like art and music</li>
                      </ul>
                      <p className='dennis-text dennis-article-writing'>
                        Students had to be reminded of the procedures every time they were to follow that procedure, for example leaving the room orderly with chairs pushed in and things put away. Procedures had to be practiced repeatedly until performed perfectly. And individual students could earn points for performing a procedure perfectly, for example getting into line exactly when and how they were told to do so.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        Teachers had to check the clock frequently. The principal asked me to set my phone alarm at 5 and 10 minute intervals so that the children would always be on schedule with lessons and changing rooms. Periods were 40 minutes long including the 5 minutes it took to walk from the classroom to other rooms in the school for specials. I was told that if the class was more than five minutes late to a special subject, the class should be turned around and go back to the regular classroom and miss the special. Also, if my class was not behaving perfectly in the hallway—silent, hands by their sides, shirts tucked in, “holding the bubble” (cheeks puffed up so they were unable to speak)—I was to turn the children around and have them repeat that part of the walk through the hallway until they got it right. Students were not supposed to be called students or children, they were to be referred to as scholars. “Walk like a scholar” was a phrase used in the hallway. All this discipline in the hallway made it almost impossible to get from one classroom to the next on time.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        Another part of this behavior management system is the scoreboard. It’s a script followed repeatedly all day. The teacher puts a two-column chart on the board first thing in the morning. A smiley face and a frownie face are at the top of each column. One script for getting the attention of the class is when the teacher calls out, “Class, class,” and the students respond, “Yes, yes” with the same intonation. If the students quiet down and turn their attention to the teacher, the teacher makes a tally mark in the smiley column. Then the students must respond with an enthusiastic, “Oh yes” with an accompanying gesture of lightly clapping the hands and the hands make wide circles in opposite directions. If, on the other hand, they remain noisy despite calling back, “Yes, yes,” or they don’t make the accompanying gesture, there’s a tally mark put in the frownie column. The children are then supposed to respond with a groan of disappointment using the right intonation and gestures. The teacher is never supposed to allow more than three tallies to be ahead in either column, and never more than about 20 smileys and frownies over the course of a day. These restrictions made it an inaccurate way of recording student behavior. The scoreboard is not kept to account for student behavior. It is instead a visible tally showing that the teacher was paying attention to behavior. The teacher also keeps a separate, private tally sheet recording how often this scoreboard is used as a behavior management tool and how often other tools are used. For example, there’s the “hands and eyes” tool where the teacher says “hands and eyes” while gesturing with folded hands stretched in front of her. Students are expected to fold their hands on their desks, turn their eyes toward the teacher and respond, “Hands and eyes,” in unison. When this tool is used a mark is made on the teacher’s private tally sheet.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      Another tool was a “behavior thermometer.”
                      </p>
                      <ul>
                        <li className='dennis-text dennis-article-writing'>Green, the bottom of the thermometer, represents a good day. A typical comment to the class would be, “I need to make sure that if you go home on green, you deserve it”</li>
                        <li className='dennis-text dennis-article-writing'>Yellow represents some misbehavior and disruptions in the classroom and two or three warnings</li>
                        <li className='dennis-text dennis-article-writing'>Orange represents a student who continues to misbehave and this student would have to miss out on privileges</li>
                        <li className='dennis-text dennis-article-writing'>Red represents a student whose parents would be contacted and the child would have to write a reflective essay about why they were in the red zone</li>
                        <li className='dennis-text dennis-article-writing'>Blue, the highest level on the thermometer, represents worse consequences: possible suspension, a meeting with the dean of students, other penalties</li>
                      </ul>
                      <p className='dennis-text dennis-article-writing'>
                        These color determinations were recorded twice a day in a “thrive log.” This was sent home with homework assignments every day. So if a child was green and on good behavior all morning and then was on yellow behavior and not so well behaved in the afternoon, these were both noted on the “thrive log.” Parents who read the “thrive logs,” which were sent home every day, complained when their children received a poor behavior color.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        Table points are another reward system. Clusters of four or five desks together were considered tables. Tables are given special privileges for good behavior, for example being allowed to drink water from the fountain in the hallway. One example of good behavior was when the floor underneath students’ desks was absolutely clean, with no fallen scraps of paper or dropped pencils, and those tables should get extra points. The associate teacher led the students in naming tables. She made a score sheet that was posted on the wall and tables competed for points. The children chose competitive names: Popular Kids, Money Tree, Rich Kids, for example. Why couldn’t the children celebrate each other’s triumphs, meet whole-group goals, and function as a supportive community instead of competing?

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        The noise level in every classroom was also regulated with a system. The sound levels were classified as “ladybug” (totally silent), “buzzing bee” (the sound of quiet talking among students) and “roaring” which was never supposed to happen and only referred to when students were making too much noise.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        When any children in the classroom were tired or unruly or distracted, the entire class suffered. The rules had to be repeated, the lesson interrupted to enforce the behavior code, the poorly behaving students had to be singled out and marked on the behavior thermometer, points were given to the teacher on the scoreboard. As we know there are many types of learners: visual, auditory, kinesthetic. There are children with learning disabilities, ranging from stresses they bring to school from difficult situations at home to visual problems to challenges in their cognitive or physical abilities. And, of course, there are differing personalities, some are outgoing, some are withdrawn, there are many personality types. In a classroom where every child is expected to mimic rote phrases and repeat formulas, individuality and differences among students are not respected. Choice, the ability to make decisions, and free will are negated by this approach. Following procedures and being obedient took priority over the mastery of skills, the children’s responsibility for their education and my responsibility for my class. Using these techniques to control student behavior encouraged students to be subservient, obedient, unfeeling and, in a way, invisible. Students did not feel engaged in learning.
                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        When any children in the classroom were tired or unruly or distracted, the entire class suffered. The rules had to be repeated, the lesson interrupted to enforce the behavior code, the poorly behaving students had to be singled out and marked on the behavior thermometer, points were given to the teacher on the scoreboard. As we know there are many types of learners: visual, auditory, kinesthetic. There are children with learning disabilities, ranging from stresses they bring to school from difficult situations at home to visual problems to challenges in their cognitive or physical abilities. And, of course, there are differing personalities, some are outgoing, some are withdrawn, there are many personality types. In a classroom where every child is expected to mimic rote phrases and repeat formulas, individuality and differences among students are not respected. Choice, the ability to make decisions, and free will are negated by this approach. Following procedures and being obedient took priority over the mastery of skills, the children’s responsibility for their education and my responsibility for my class. Using these techniques to control student behavior encouraged students to be subservient, obedient, unfeeling and, in a way, invisible. Students did not feel engaged in learning.
                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        Students were expected to stand up and “mirror” instructions using a Whole Brain Teaching technique at the beginning of lessons. They used “mirror talk” – repeating verbatim what the teacher just said. After “mirroring” some snippet of knowledge, for example “9 x 3 = 27” or “adverbs modify verbs,” they had to return to the carpet and have a mini-lesson related to that fact, using “Turn and Talk,” when students repeat the information to another student sitting near them, and “Teach/Okay,” when students repeat in unison verbatim what the teacher just said using the same tone of voice and gestures. Every word, every gesture is supposed to be done exactly so, no variations. In a class using Whole Brain Teaching, every few minutes you hear the teacher say, “Class, class” and the class responding, “Yes, yes” then the teacher says, “Hands and eyes,” and the class responds, “Hands and eyes,” silently putting their folded hands on their desks and looking at the teacher, tracking the teacher with their eyes wherever the teacher moves around the room. If any student is not sitting properly, silent, hands folded, the teacher says, “I need you to sit like a scholar.” Then the teacher says, “Mirror, mirror words,” and the teacher runs her hand across her mouth like zipping it shut. When the teacher says, for example, “How do we use math,” and pauses, the students repeat, “How do we use math,” and the teacher then says, “Every day,” and the students repeat, “Every day.” Then the teacher claps three times and says, “Teach,” and the students clap three times and say, “Okay.” This directive to “teach,” preceded by a formulaic pattern of clapping that the students mimic, followed by the students saying the word “okay” is a basic Whole Brain Teaching technique. Students then repeat what the teacher said using the “buzzing bee” level of talking which is allowed in the classroom for this activity. Each student addresses a partner using the same words, the same intonation. There is no intelligence involved on the part of the students, no critical thinking skills engaged, no independent thinking, no creativity. In this example, what follows is the students taking turns saying, “How do we use math every day?” first one student in a pair, then the second one in the pair, the students facing each other for this part of the lesson. Then the teacher says, “Hands and eyes,” and the students are quiet again, facing the front of the room, with hands folded.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        As suggested by the principal, I participated in a “livestream” real-time online seminar with Chris Biffle, the originator of Whole Brain Teaching. He taught a new variation on the “Class, class,” “Yes, yes” tool. The teacher says, “Class boom” and on the sound boom the hands are folded. The class responds by saying, “Yes boom” and on the sound “boom” the students fold their hands. Biffle suggested other variations such as, “Class chicka boom,” “Yes chicka boom” and “Class bah bah boom,” with “Yes bah bah boom” as the response. Biffle suggested “Class bitty boom” and “Class boomtastic boom” as well. In this live seminar Biffle suggested teachers use two-sentence microlessons such as, “Nine times three boom” and the students respond “27 boom.”

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        The administration of this particular charter school strongly encouraged every teacher to use these methods and, in my case, I was observed and criticized so frequently that I had no choice but to incorporate Whole Brain Teaching in my day-to-day lessons. There were observers in my classroom most of the day every day.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        As you can tell I wrote copious notes about what went on. The principal once said, “You write a lot of notes. Then what do you do with them? Do you read them?” Indeed I did read my notes every night, and reviewed the earlier ones, trying to grasp what was going wrong.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        I was at the school for 13 hours a day generally, and I was criticized for being at the school too late in the evening. Some of my daily tasks, at home and while still in the school building, were to enter grades in the computer system, create charts, email parents, write new lesson plans, review previously prepared lesson plans for the next day, prepare model writing assignments so that the students could do exactly what I had done, prepare materials and more.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        In any school, the principal can make teaching satisfying or unbearable. The support that was lacking is a balance between criticizing what the principal was unhappy with and complimenting what she wanted to see more of. The compliments were missing. I was criticized for just about everything I did, and for what I didn’t do. Encouragement is important. The criticisms and discouragement made it impossible to think of trying out new morning routines, offering differing rewards to students, securing greater educational resources, trying new approaches, even simply following the lesson plan.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      At the end of a day before a holiday I had my most moving experience with the children. At dismissal time I said to the children, “I’m going to miss you all over the long weekend.” One of the more rambunctious girls raised her hand and said, “That makes me feel loved.” I was very touched and asked the class if that was true for anyone else. All the children in the class raised their hands. It was one moment when I knew I must be doing something right.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      A few lessons and how unacceptable they were:

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      The topic of “personal narrative” was in the third grade lesson plan for the first month of school. To prepare the students for writing, we read a story that was a personal narrative. We talked the author’s interests and where the story took place. We talked about what a personal narrative is. The students did some writing in class. One student asked if she could continue working on hers at home that night. I said, “Of course.” Several other students were interested in this as well. Next day eight children were enthusiastic about sharing the writing they’d done with the rest of the class. I chose only three to use the time available wisely. The lead third grade teacher, who was one of those observing my class that day, challenged one of those students, after she’d proudly read her piece, with questions including, “What makes you think that’s a personal narrative?” and “Why did you choose to write about your favorite things?”

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        This lesson was again criticized at a meeting. I said we’d discussed the characters and setting in the story we’d been reading as a model of a personal narrative. I was interrupted in this description of the lesson to be told that “characters” and “setting” are subjects covered in reading classes and not in writing classes. The lead third grade teacher said that my error in teaching this class this way hurt her feelings because she cares so much about literacy.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      Another lesson I proposed was that students would introduce themselves to each other and to me by creating oral histories in our classroom. For this lesson the genre of biography would be introduced through the National Book Award-winning book about Claudette Colvin who, at age 15 and years before Rosa Parks, refused to give up her seat on the bus and was the first person arrested for bravely challenging the discriminatory laws about segregated seating on buses in Montgomery, Alabama. I felt that this lesson would engage the children in a positive way: get them asking questions and doing responsive writing, starting with day one. The lead third grade teacher told me that this was not okay, because if the students interviewed each other it would be a writing assignment and, according to her, the students weren’t “ready” to do a writing assignment.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      The process of repeating rules and managing behavior got in the way of lessons. In a math lesson we worked on place value, a concept introduced in second grade. I felt that students needed to participate one by one in answering questions aloud. Thereby I could determine which students could apply the concepts and which students were still struggling with comprehension. The demands of the Whole Brain Teaching framework and the daily schedule meant that this kind of class discussion was not possible.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      On another day, in response to a story we were reading, a student brought up the term “bullying.” Here was a teachable moment. Here was a key subject brought up by a student. No discussion was possible because of the schedule and I was asked not to bring up the subject on the next day because it was not part of the lesson plan. Students did not have the opportunity to come up with questions and have them answered. There is no space for student curiosity in a classroom regulated like this. Their questions and their thoughts don’t matter: Only the curriculum and the rules matter. There are no open-ended questions.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      In every class there was a poem posted on the wall. For my room I chose the William Carlos Williams poem “This is just to say.” One morning we read it. I talked about the author. He was from Paterson, New Jersey. He was a doctor and in those days the whole family went to the same doctor. He loved to write poems and he wrote stories too. He wrote about his life. I asked them to think about what was going on when he wrote that poem. The students were engaged with the lesson and, after I’d read it once, every student in the class wanted the opportunity to read it aloud. Several did so, very well, and after each reading we discussed a different aspect of the poem. We did a close reading. What was it about? Students came up with lots of ideas. The plums were being saved for breakfast, possibly. Was the poem about eating breakfast? The word “breakfast” was in the poem. We had to think about whether the author was telling us what time of day it was. We talked about the sounds of the words. We looked at the word “icebox,” discussed what it meant and came up with more words that are a combination of two words. One student suggested “pancake.” This lesson was criticized by a member of the administration who observed the class. She said the poem was inappropriate for third graders. She said the students obviously didn’t understand the poem, which surprised me because the classroom conversation had been so rich. She said that discussing alliteration and imagery was too advanced for these students.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      I felt silenced: I could offer no wisdom, no teaching techniques, no ideas for the classroom. My sense of self-worth was challenged. I had no autonomy in creating either the content or the style of my teaching.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      The criticisms took many forms. In a note to me, the principal criticized the fact that a student’s “chair dragged and made excessive noise. You accepted less than perfect.” In another instance I was told to use math tools that were not available in the teachers’ storeroom, although the other third grade teachers had found some. I was advised that if I did not find them I should make them. On another day the principal told me to ignore the lesson plan developed in collaboration with the lead third grade teacher. It was a reading class. I had already taught five days of lessons from the Pearson reading book and each one built on the last, according to the way the textbook and the teacher’s guide were designed. The principal asked me to read through the first pages of the textbook where there were cartoons and short punch lines about the subject areas (cause and effect, compare and contrast, and so on) to be covered during the entire year. This review would certainly take more than one class. The other two third grade teachers hadn’t reviewed these pages of the textbook. Now our class would be days behind the other third grade classes.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      I was told that the lower performing students should not be part of the whole class discussion of the stories in the reading textbook and they should be listening to the stories from CDs individually using earphones. They would miss out on the points other students brought up about the stories and they would be essentially penalized for their lower skills by being separated from the other students in the class.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      Many of the teaching programs used by the school are online, although the classroom had only two computers, one of which never worked, and the computer lab is shared by the entire school. The school had a goal of making technology available to more of the students more of the time. When I was there access was extremely limited.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      Differing Approaches to Education
                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      My positive feelings about the school were destroyed by a process of relentless bullying. The principal interfered with my diligence in preparing daily for the job and replaced it with the insecure sense that I was always doing the wrong thing. One of the rude comments the principal made during the first week students were in school was that she is not an employment agency, she is there for the kids.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      The principal told me one day that I was “spiraling downward.” Children in my classroom were not out of their seats, wandering the room or the hallways, children did not have dangerous objects nor were they threatening one another. My classroom was a lively environment where children interacted with each other, where conversations were free flowing, where books were read, where math was being learned and reviewed. I enjoyed the hum of activity with the occasional reprimand to a child whose noise level or activity was beginning to disrupt other students. I preferred that to a classroom where students were obediently sitting at their desks, hands folded, repeating set phrases by rote and watching me intently the whole day long. I didn’t seek obedience, I sought student engagement. I spoke to the children as equals—to demonstrate my respect for them as people. This attitude is opposite to the kind of control I was supposed to exert in the classroom.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      One of the acceptable ways to test student knowledge used by the other teachers was to give them “Jeopardy” type quizzes. “Jeopardy” would be fine if it weren’t so competitive. I was not interested in having the students compete with each other. My favorite games were different. For example, we had the game “sounds the same, spelled different.” First one person came up with a word and I’d ask the class how to spell it, what it meant and to use it in a sentence. Then I’d ask them to come up with a match and they’d come up with a homonym (like “sale” and “sail) or a rhyming (like “cat” and “fat”) or alliterative word (like “skill” and “full”). These were whole class activities. Everyone was a winner. My aim in creating activities was for the students to collaborate on solutions to problems.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      Character education is one of the stated aims of this charter school. However the focus on competitiveness seems to favor the sort of character development that supports a dog-eat-dog approach. The focus of the teacher’s attention is watching whether students are conforming to behavior routines, rather than areas of child development and individual children’s needs. Creativity and leadership are not acceptable character traits in a system like this and the spirits of the children are suppressed with the behavior expectations.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      My last day there, when I handed my letter of resignation to the principal, she said my class that morning was better than she’d seen before. This could not have been true. My class was very agitated that morning because of an altercation between one of the students and an associate teacher. No one wanted to settle down and most students were talking about the confrontation that had happened earlier.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                      My view of education is diametrically opposed to what goes on in this charter school. I am a strong supporter of the opinions and strategy advocated by the New York Coalition of Radical Educators (NYCORE). The teaching practices I encountered at this school did not reflect the principles of that organization and I recommend that the documents provided by used as guidance for any reforms in education in the City of New York. In the charter school I worked in it was not okay for me to be a proponent of any philosophy of education. The goal seems to be to create a culture of obedience and authority. Individual moral responsibility is replaced with loyalty to the school’s methods. This helps loosen the moral inhibitions against misbehavior, violence and unchecked competitiveness. Behavior I saw in the playground during recess certainly backs up this premise. Students are encouraged to be more competitive rather than to collaborate. Children are not given the opportunity to take responsibility for their own education by exploring sources on their own. In my view student-led learning will always be more successful than teacher-led lessons. This job unfortunately made me feel like I don’t ever want to do what I love doing—teaching elementary school children.

                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        <em>Annabel Lee</em>
                      </p>
                      <p className='dennis-text dennis-article-writing'>
                        <em>March 14, 2014</em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='writing-div'>
                <button type='button' data-toggle='modal' data-target='#Modal102' id='button-modal'>
                  <p className='clients-name'>Sample Biographies of Brokers for Brown Harris Stevens</p>
                </button>
              </div>
              <div class='modal fade bd-example-modal-lg' id='Modal102' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                  <div class='modal-content'>
                    <div class='modal-header'>
                      <h5 class='modal-title' id='exampleModalLabel'>Sample Biographies of Brokers for Brown Harris Stevens</h5>
                      <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div class='modal-body'>
                      <div className='brown-harris-pages'>
                        <img src='https://i.imgur.com/asKV8Xn.jpg' alt='' className='brown-harris-img' />
                        <img src='https://i.imgur.com/BSttQQ4.jpg' alt='' className='brown-harris-img' />
                        <img src='https://i.imgur.com/KGwn8bq.jpg' alt='' className='brown-harris-img' />
                        <img src='https://i.imgur.com/8NfEEYF.jpg' alt='' className='brown-harris-img' />
                        <img src='https://i.imgur.com/e13XqWy.jpg' alt='' className='brown-harris-img' />
                        <img src='https://i.imgur.com/JzjqH9W.jpg' alt='' className='brown-harris-img' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='writing-div'>
                <button type='button' data-toggle='modal' data-target='#Modal103' id='button-modal'>
                  <p className='clients-name'>Sample Franklin Library Reader's Guide</p>
                </button>
              </div>
              <div class='modal fade bd-example-modal-lg' id='Modal103' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                  <div class='modal-content'>
                    <div class='modal-header'>
                      <h5 class='modal-title' id='exampleModalLabel'>Sample Franklin Library Reader's Guide</h5>
                      <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div class='modal-body'>
                      <div className='humbolts-gift-passage'>
                        <img src='https://i.imgur.com/cIYcxwh.jpg' alt='' className='humbolts-gift-img' />
                        <img src='https://i.imgur.com/Dh9DT0V.jpg' alt='' className='humbolts-gift-img' />
                        <img src='https://i.imgur.com/ZO74a8y.jpg' alt='' className='humbolts-gift-img' />
                        <img src='https://i.imgur.com/ZHHVgLe.jpg' alt='' className='humbolts-gift-img' />
                        <img src='https://i.imgur.com/CfHkv9k.jpg' alt='' className='humbolts-gift-img' />
                        <img src='https://i.imgur.com/KuhEEYp.jpg' alt='' className='humbolts-gift-img' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='writing-div'>
                <button type='button' data-toggle='modal' data-target='#Modal104' id='button-modal'>
                  <p className='clients-name'>About Hudson: Text for proposed Hudson River Radio site</p>
                </button>
              </div>
              <div class='modal fade bd-example-modal-lg' id='Modal104' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                  <div class='modal-content'>
                    <div class='modal-header'>
                      <h5 class='modal-title' id='exampleModalLabel'>About Hudson: Text for proposed Hudson River Radio site</h5>
                      <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div class='modal-body'>
                      <img src='https://i.imgur.com/YeFvf53.jpg' alt='' className='about-hudson-img' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='writing-div'>
                <button type='button' data-toggle='modal' data-target='#Modal105' id='button-modal'>
                  <p className='clients-name'>Two articles for The Chatham Press</p>
                </button>
              </div>
              <div class='modal fade bd-example-modal-lg' id='Modal105' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div class='modal-dialog modal-lg modal-dialog-centered' role='document'>
                  <div class='modal-content'>
                    <div class='modal-header'>
                      <h5 class='modal-title' id='exampleModalLabel'>Two articles for The Chatham Press</h5>
                      <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div class='modal-body'>
                      <div className='natural-collection-passage'>
                        <img src='https://i.imgur.com/F6hS1e2.png' alt='' className='natural-collection-img' />
                      </div>
                      <div className='chatham-press-passage'>
                        <img src='https://i.imgur.com/3Ungzk2.jpg' alt='' className='chatham-press-img' />
                      </div>
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

export default WritingSamples
