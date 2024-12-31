const logEntries = {
    1: `
        <div class="box-title-bar title" >Day One
            <div class="right">x</div>
            <div class="right">-</div>
        </div>
    
        <div class="inner" id="add-content">
            <p>
                <strong class="time">10:39 am</strong>
                <br>
                I'm confused...
                <br>
                <span onclick="teamInfo()" class="references">They</span> say they are my team. That I am their leader.
                <br>
                Why do I not remember?
            </p>

            <p>
                <strong class="time">11:10 am</strong>
                <br>
                Brian says I should go back to sleep. But I've slept for 3 days. Probably more. They only managed to pull me out of the debris after 27 hours.
                <br>
                Tina gave me a bag - says it's my stuff. There's <span onclick="bagInfo()" class="references">a lot in it.</span> A keychain that says 'Mark & Mia'.
                <br>
                I don't remember what it's for. I don't remember anything.
            </p>

            <p>
                <strong class="time">1:45 pm</strong>
                <br>
                We had lunch together. They told me about the accident. And the <span onclick="projectInfo()" class="references">project</span>.
                <br>
                The team is stuck in <span onclick="solariaInfo()" class="references">Solaria</span> because of me. I caused the accident.
                <br>
                Solaria's magnetic field has gone haywire - we can't communicate with Earth.
            </p>
            
            <p>
                <strong class="time">4:00 pm</strong>
                <br>
                I checked out the lab. It's a mess. The team have been trying to fix things. 
                <br>
                I wrote in a <span onclick="journalInfo()" class="references">journal</span> while I was stuck in the lab. It may be the key to the portal. But it's illegible. I must've been in a hurry.
                <br>
                They want to go <span onclick="homeInfo()" class="references">home.</span> I think a portal is our best chance.
            </p>
            
            <p>
                <strong class="time">6:18 pm</strong>
                <br>
                I've run calculations. I can fix the lab. The journal may have some clues. A portal can get everyone back home. But they're against it.
                <br>
                <span onclick="impInfo()" class="references">This research is not important to them. It is to me.</span>
            </p>
            
            <p>
                <strong class="time">11:11 pm</strong>
                <br>
                Mark and Mia...Samuel says they're my kids. How can I not remember them?
                <br>
                He says I should forget about the portal and work on getting home to them. But he could be lying - trying to stop me from continuing this research.
            </p>

        </div>
        <button id="nextDayBtn" onclick="nextDay()">Next day</button>
        `,
    2: `
        <div id="log"><div class="box-title-bar title" >Day Two
                <div class="right">x</div>
                <div class="right">-</div>
        </div>
    
        <div class="inner" id="add-content">
            <p>
                <strong class="time">9:25 am</strong>
                <br>
                I woke up feeling...empty. There's something I'm missing. I cannot figure out what.
                <br>
                Sunny asked if I could make sense of the journal. I told her I was working on it.
                <br>
                Samuel told me over breakfast that I was the one who convinced the team to stay on Solaria despite the <span onclick="anomaliesInfo()" class="references">anomalies.</span> He seemed angry. Or hurt. I didn't know how to respond.
            </p>

            <p>
                <strong class="time">12:15 pm</strong>
                <br>
                I opened the bag this morning. It's strange - everything seemed familiar - <span onclick="itemInfo()" class="references">a mirror, blue and red glasses, and more.</span>
                <br>
                Brian and Samuel have been arguing since breakfast. Samuel thinks I should focus on leaving. Brian thinks I should fix the lab and keep working on the portal.
            </p>

            <p>
                <strong class="time">2:15 pm</strong>
                <br>
                The magnetic interference is getting worse. I've confirmed with Sunny - she says it wasn't this bad before the accident.
                <br>
                I think I know what's causing it. I need to fix the lab.
                <br>
                Mia and Mark. I should remember them, but I don't. Why don't I?
            </p>
            
            <p>
                <strong class="time">7:00 pm</strong>
                <br>
                I spent hours going through the calculations I'd started before the accident. Something isn't adding up.
                <br>
                The data is incomplete but the systems have recorded an energy spike just before I tried to activate the portal.
            </p>
            
            <p>
                <strong class="time">9:43 pm</strong>
                <br>
                It seems I didn't just record my thoughts in the journal. There are notes too:
                <br>
                <i>"Energy fields flux in duality. Opened a portal, unstable"</i>
            </p>

        </div>
        <button id="nextDayBtn" onclick="nextDay()">Next day</button>
        `,
    3: `
        <div id="log"><div class="box-title-bar title" >Day Three
                <div class="right">x</div>
                <div class="right">-</div>
        </div>
    
        <div class="inner" id="add-content">
            <p>
                <strong class="time">8:05 am</strong>
                <br>
                The portal opened. I didn't remember it opening.
                <br>
                Did it trap us here? Did <strong>I</strong> trap us here? Did the portal mess up Solaria's fields?
            </p>

            <p>
                <strong class="time">11:00 am</strong>
                <br>
                <span class="highlighted" onclick="askSolve()">Time to fix the lab. I <strong>need</strong> this to work.</span>
                <br>
            </p>

            <div id="puzzleDiv" class="modal">
                <div class="modal-content">
                <span class="close">&times;</span>
                <h3>Fix the circuit by <div class="tooltip">neutralizing negative nodes.<span class="tooltiptext">Drag positive nodes over <br> to the negative nodes.</span></div></h3>

                <div class="game-container">
                    <div class="nodes">
                        <div class="node positive" draggable="true" data-type="positive" id="positive1" style="">+</div>
                        <div class="node negative" data-type="negative" id="negative1">-</div>
                        <div class="node positive" draggable="true" data-type="positive" id="positive2">+</div>
                    </div>
                    <div class="nodes">
                        <div class="node negative" data-type="negative" id="negative1">-</div>
                        <div class="node negative" data-type="negative" id="negative1">-</div>
                        <div class="node positive" draggable="true" data-type="positive" id="positive1">+</div>
                    </div>
                    <div class="nodes">
                        <div class="node negative" data-type="negative" id="negative1">-</div>
                        <div class="node positive" draggable="true" data-type="positive" id="positive1">+</div>
                        <div class="node negative" data-type="negative" id="negative1">-</div>
                    </div>
                    <div class="nodes">
                        <div class="node positive" draggable="true" data-type="positive" id="positive1">+</div>
                        <div class="node positive" draggable="true" data-type="positive" id="positive1">+</div>
                        <div class="node negative" data-type="negative" id="negative1">-</div>
                    </div>
                </div>
                <div id="message"></div>
                </div>
            </div>

            <p>
                <strong class="time">3:45 pm</strong>
                <br>
                The Electronics Lab is fixed. The machines should've started working by now.
                <br>
                The compasses are going crazy - running in circles. And there's a strange light pulsating throughout the room. I can't see what's causing it.
            </p>
            
            <p>
                <strong class="time">6:20 pm</strong>
                <br>
                Brian sat with me and helped decode a few pages of the journal. We've hardly found anything useful but we're getting closer.
                <br>
                Tina and Samuel are constantly trying to make contact with Earth but it's not working. They're starting to get worried.
            </p>

        </div>
        <button id="nextDayBtn" onclick="nextDay()">Next day</button>
        `,
    4: `<div id="log"><div class="box-title-bar title">Day Four
                <div class="right">x</div>
                <div class="right">-</div>
            </div>

            <div class="inner" id="add-content">
                <p>
                    <strong class="time">7:30 am</strong>
                    <br>
                    I made a make-shift bed in the <span onclick="labInfo()" class="references">lab.</span> Woke up to strange sounds.
                    <br>
                    The magnetic interference has intensified - it's affecting the lab's electronics.
                    <br>
                    Sunny warned me to not work today, but I can't stop. There's too much to fix.
                </p>

                <p>
                    <strong class="time">10:15 am</strong>
                    <br>
                    How did I not realize this earlier? The poles have reversed.
                    <br>
                    My compass - no - <strong>none</strong> of the magnetic devices are working.
                    <br>
                    <span class="highlighted" onclick="askSolve()">The lab's magnetic controller needs recalibration. Time for another fix.</span>
                    <br>
                </p>

                <div id="puzzleDiv2" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <h3>Pick the <div class="tooltip">correct consecutive directions<span class="tooltiptext">Note that the poles have reversed. What would this mean for directions?</span></div> and help <br> <span style="color: red;">Dr Morgan</span> reach the <span style="color: green;">Temporal Studies Lab.</span></h3>
                        <div class="game-container">
                            <img src="../assets/directions.png">
                            <div id="scrollable" class="moves">
                                <select id="move1">
                                    <option selected disabled>Move 1</option>
                                    <option value="N">North</option>
                                    <option value="E">East</option>
                                    <option value="W">West</option>
                                    <option value="S">South</option>
                                </select>
                                <select id="move2">
                                    <option selected disabled>Move 2</option>
                                    <option value="N">North</option>
                                    <option value="E">East</option>
                                    <option value="W">West</option>
                                    <option value="S">South</option>
                                </select>
                                <select id="move3">
                                    <option selected disabled>Move 3</option>
                                    <option value="N">North</option>
                                    <option value="E">East</option>
                                    <option value="W">West</option>
                                    <option value="S">South</option>
                                </select>
                                <select id="move4">
                                    <option selected disabled>Move 4</option>
                                    <option value="N">North</option>
                                    <option value="E">East</option>
                                    <option value="W">West</option>
                                    <option value="S">South</option>
                                </select>
                                <select id="move5">
                                    <option selected disabled>Move 5</option>
                                    <option value="N">North</option>
                                    <option value="E">East</option>
                                    <option value="W">West</option>
                                    <option value="S">South</option>
                                </select>
                                <select id="move6">
                                    <option selected disabled>Move 6</option>
                                    <option value="N">North</option>
                                    <option value="E">East</option>
                                    <option value="W">West</option>
                                    <option value="S">South</option>
                                </select>
                                <select id="move7">
                                    <option selected disabled>Move 7</option>
                                    <option value="N">North</option>
                                    <option value="E">East</option>
                                    <option value="W">West</option>
                                    <option value="S">South</option>
                                </select>
                                <button id="checkBtn" onclick="checkDirections()">Check</button>
                            </div>
                            <p id="directionResult"></p>
                        </div>
                    </div>
                </div>

                <p>
                    <strong class="time">1:00 pm</strong>
                    <br>
                    Part of the flux has been balanced, but the interference isn't gone. The <span onclick="fieldsInfo()" class="references">magnetic and temporal fields</span> are more intertwined than I thought.
                    <br>
                    I found another journal entry: 
                    <br>
                    <i>"Dual forces, opposite but linked. Manipulating one will disturb the other."</i>
                </p>

                <p>
                    <strong class="time">4:22 pm</strong>
                    <br>
                    There was a sudden energy spike. Bigger than before.
                    <br>
                    Solaria's fields are warping — I saw objects in the lab flicker, almost as if time skipped a beat.
                    <br>
                    Mia and Mark... I can almost hear their voices. Am I losing my mind?
                </p>

                <p>
                    <strong class="time">8:45 pm</strong>
                    <br>
                    Every time the energy spikes, I remember more.
                    <br>
                    More about my home.
                    <br>
                    The keychain is still in my pocket. “Mark & Mia.” I've been holding it tighter than ever.
                </p>
            </div>
            <button id="nextDayBtn" onclick="nextDay()">Next day</button>
        </div>
        `,
    5:  `<div id="log"><div class="box-title-bar title">Day Five
                <div class="right">x</div>
                <div class="right">-</div>
            </div>

            <div class="inner" id="add-content">
                <p>
                    <strong class="time">6:45 am</strong>
                    <br>
                    I couldn't sleep. The energy fluctuations are worse than ever, and the temporal distortions... they're happening every hour now.
                    <br>
                    Sunny warned me that time anomalies could become irreversible. But I can't <span onclick="stopInfo()" class="references">stop.</span>
                </p>

                <p>
                    <strong class="time">10:20 am</strong>
                    <br>
                    The lab flickered again. I swear I saw them — two figures. 
                    <br>
                    The portal.
                    <br>
                    I think it's still here. <strong>Flickering.</strong> Not fully closed. 
                </p>

                <p>
                    <strong class="time">3:00 pm</strong>
                    <br>
                    One of my notes from the journal mentions something about this.
                    <br>
                    <i>"Portal flickers when fields unsync."</i>
                    <br>
                    Could syncing the fields be the key? Can I trust the sleepless, scared, and delirious version of myself?
                </p>

                <p>
                    <strong class="time">5:20 pm</strong>
                    <br>
                    <span class="highlighted" onclick="askSolve()">I need to sort out all my notes now.</span>
                </p>

                 <div id="itemGameModal" class="modal">
                    <div class="modal-content">
                        <span id="closeBtn" class="close">&times;</span>
                        <h3>Choose the Correct Items:</h3>
                        <p>
                            Match the items in Dr Morgan's bag to solve the problems below.
                        </p>
                        
                        <div id="problems">
                            <div class="problem">
                                <strong><span class="highlighted">Problem 1:</span></strong> Dr Morgan notices that a few pages of his journal have writings that are flipped. Solaria's spatial orientation briefly inverted during the accident, causing anything written during that time to appear flipped.<br><br>
                                <label for="item1">Choose an item that can help in reading these pages:</label>
                                <select id="item1">
                                    <option value="" selected disabled>Select an item</option>
                                    <option value="no">Polarising Glasses</option>
                                    <option value="remover">Nail Polish Remover</option>
                                    <option value="mirror">Mirror</option>
                                    <option value="glasses">Blue and Red Lens Glasses</option>
                                    <option value="no">Multi-colored Pens</option>
                                </select>
                            </div>

                            <br>

                            <div class="problem">
                                <strong><span class="highlighted">Problem 2:</span></strong> One of the screens in the Gravitational Lab is very bright, and Tina is unable to look at and use the system. It feels like looking at the sea during a sunny day.<br><br>
                                <label for="item2">What can help in minimizing the brightness of the screen:</label>
                                <select id="item2">
                                    <option value="" selected disabled>Select an item</option>
                                    <option value="no">Pocket Book</option>
                                    <option value="polarising">Polarising Glasses</option>
                                    <option value="glasses">Blue and Red Lens Glasses</option>
                                    <option value="no">Washi Tape</option>
                                    <option value="mirror">Mirror</option>
                                </select>
                            </div>

                            <br>

                            <div class="problem">
                                <strong><span class="highlighted">Problem 3:</span></strong> While fixing up the lab, Samuel notices that some of the equipment has been blocked by styrofoam after the accident. The bigger pieces were easy to remove; but some of the smaller pieces have lodged between buttons and levers of the system.<br><br>
                                <label for="item3">What can Samuel use to <div class="tooltip">remove<span class="tooltiptext">Note that 'Like dissolves Like'. Polar compounds dissolve polar compounds.</span></div> the smaller pieces of styrofoam:</label>
                                <select id="item3">
                                    <option value="" selected disabled>Select an item</option>
                                    <option value="mirror">Mirror</option>
                                    <option value="no">Washi Tape</option>
                                    <option value="glasses">Blue and Red Lens Glasses</option>
                                    <option value="remover">Nail Polish Remover</option>
                                    <option value="no">Glitter Glue</option>
                                </select>
                            </div>

                            <br>
                            
                            <div class="problem">
                                <strong><span class="highlighted">Problem 4:</span></strong> Due to the fields of Solaria interweaving, a screen in the Temporal Studies Lab now shows overlapping red and blue colored text at the same time.<br><br>
                                <label for="item4">Choose an item that can help Dr Morgan read the text:</label>
                                <select id="item4">
                                    <option value="" selected disabled>Select an item</option>
                                    <option value="mirror">Mirror</option>
                                    <option value="glasses">Blue and Red Lens Glasses</option>
                                    <option value="remover">Nail Polish Remover</option>
                                    <option value="no">Glitter Glue</option>
                                    <option value="no">Multi-colored Pens</option>
                                </select>
                            </div>
                        </div>

                        <br>
                        <button id="checkBtn" onclick="checkItems()">Check Answers</button>
                        <p id="resultMessage"></p>
                    </div>
                </div>

                <p>
                    <strong class="time">8:15 pm</strong>
                    <br>
                    The bag was a great <span onclick="helpInfo()" class="references">help.</span> It was from Mia and Mark. I want to see them
                    <br>
                    Something changed after the cleaning. The portal's flickering increased. Brian and Sunny finally admitted they saw it too.
                    <br>
                    But we can not see it for more than a few seconds. Still unstable.
                </p>
            </div>
            <button id="nextDayBtn" onclick="nextDay()">Next day</button>
        </div>
        `,
    6:  `<div id="log">
            <div class="box-title-bar title">Day Six
                <div class="right">x</div>
                <div class="right">-</div>
            </div>

            <div class="inner" id="add-content">
                <p>
                    <strong class="time">7:05 am</strong>
                    <br>
                    The portal's energy signature is growing. It's not just flickering anymore — it's visible.
                    <br>
                    <span onclick="visibleInfo()" class="references">Faint but Steady.</span>
                    <br>
                    Tina and Samuel want me to destroy it. They don't understand what this means.
                </p>

                <p>
                    <strong class="time">12:40 pm</strong>
                    <br>
                    The calculations... they're almost complete. The lab is almost fixed.
                    <br>
                    <span class="highlighted" style="text-decoration: none;">I see the pattern now — the magnetic and temporal fields are intertwined. Opposite yet dependent.</span>
                    <br>
                    I must realign the polarity. This is the only way to stabilize everything.
                </p>

                <p>
                    <strong class="time">5:25 pm</strong>
                    <br>
                    I found another journal entry. This one is cryptic:
                    <br>
                    <i>"To mend the fields, sacrifice must be made."</i>
                    <br>
                    I don't understand. What sacrifice? 
                </p>


                <p>
                    <strong class="time">6:03 pm</strong>
                    <br>
                    What has happened here? The main lab is locked by a mental stability test but none of my answers are being accepted.
                    <br>
                    <span class="highlighted" onclick="askSolve()">Maybe I've to do it opposite way here too...?</span>
                </p>
                
                <div id="quiz-modal" class="modal">
                    <div class="modal-content">
                        <span id="closeBtn" class="close">&times;</span>
                        <h3><div class="tooltip">Mental Stability Test:<span class="tooltiptext"><p>Note that Dr Morgan says that 'the right answers aren't being accepted'.</p></span></div></h3>
                        <div id="quiz-container">
                            <div id="question-container">
                                <p id="question"></p>
                                <div class="answers">
                                    <button class="answer-btn" onclick="checkAnswer(0)">Option A</button>
                                    <button class="answer-btn" onclick="checkAnswer(1)">Option B</button>
                                </div>
                            </div>
                            <p style="text-align: center; font-size: 20px;" id="feedback"></p>
                        </div>
                        <button id="next-question-btn" onclick="nextQuestion()" style="display:none;">Next Question</button>
                    </div>
                </div>

                <p>
                    <strong class="time">9:30 pm</strong>
                    <br>
                    Mia and Mark. That's it isn't it?
                    <br>
                    <span class="highlighted" style="text-decoration: none;">Their memories was my sacrifice.</span>
                    <br>
                    I can't lose them again.
                </p>
            </div>
            <button id="nextDayBtn" onclick="nextDay()">Next day</button>
        </div>
        `,
    7:  `<div id="log"><div class="box-title-bar title">Day Seven
                <div class="right">x</div>
                <div class="right">-</div>
            </div>

            <div class="inner" id="add-content">
                <p>
                    <strong class="time">6:00 am</strong>
                    <br>
                    This is it. Today, I finish the work. Today, we go home.
                    <br>
                    The portal is so close to stability. The fields are near collapse, but I think we can get through.
                    <br>
                    I've done the calculations. <span class="highlighted" style="text-decoration: none;">I <strong>know</strong> we can get through safely.
                </p>

                <p>
                    <strong class="time">11:55 am</strong>
                    <br>
                    Tina begged me to stop. She says we can fix the ship and leave but we don't have food to last us any longer than 2 days.
                    <br>
                    A ship can not be fixed in 2 days. The portal can be fixed <strong>today.</strong>
                </p>

                <p>
                    <strong class="time">4:00 pm</strong>
                    <br>
                    The lab trembled.
                    <br>
                    It feels like Solaria itself is <span onclick="tearingInfo()" class="references">tearing apart.</span>
                    <br>
                    The portal's energy is overwhelming, but I can't stop now.
                </p>

                <p>
                    <strong class="time">8:47 pm</strong>
                    <br>
                    The decision is mine: stabilize it fully or shut it down.
                    <br>
                    It seems there's a note for this moment too:
                    <br>
                    <i>"Polarity is choice. Two forces, forever pulling at each other."</i>
                </p>

                <p>
                    <button id="gameEndBtn" onclick="finalChoice()">Make the Final Choice</button>
                </p>
            </div>
        </div>
        `
};