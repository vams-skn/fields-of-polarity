const infoButton = document.getElementById('info-button');
const helpButton = document.getElementById('help-button');
const infoPopup = document.getElementById('info-popup');
const closePopup = document.getElementById('close-popup');

infoButton.addEventListener('click', () => {
    infoPopup.style.display = 'block';
});

helpButton.addEventListener('click', () => {
    infoPopup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    infoPopup.style.display = 'none';
});

const referencesBot = document.getElementById('info-content');

function teamInfo() {
    referencesBot.innerHTML = `<p>Dr Dave Morgan took a few of his mentees to assist him in the project. They were: </p>
    <ul>
        <li>Samuel Goodman</li>
        <li>Tina Fischer</li>
        <li>Brian Stuart</li>
        <li>Sunny Pham</li>
    </ul>`;
}

function bagInfo() {
    referencesBot.innerHTML = `<p>Dr Morgan later said he knew there was <em>"a lot in it"</em> due to its weight, but he hadn't opened the bag yet.</p>`;
}

function projectInfo() {
    referencesBot.innerHTML = `<p>'Project' refers to Project Polaris, a research project that studied Solaria's unstable energy fields and how they could be used to make portals, lead by Dr Morgan.</p>`;
}

function solariaInfo() {
    referencesBot.innerHTML = `<p>Project Polaris was conducted on the now-abandoned Planet Solaria</p>
    <p>Solaria had abnormal energy fields - its Electromagnetic, Gravitational, and Temporal fields were unique - Dr Morgan believed this energy could be used to create portals. </p>`;
}

function homeInfo() {
    referencesBot.innerHTML = `<p>Dr Morgan said he "wasn't in a rush to return home" because "he did not remember 'home' and where it was".</p>`;
}

function journalInfo() {
    referencesBot.innerHTML = `<p>The journal contains illegible notes, rushed sketches, and Dr Morgan's thoughts from when he was stuck at the main lab on Solaria in a delirious state for about 30 hours.</p> <p>It is now kept for display at the National Space Museum, New York.</p>`;
}

function impInfo() {
    referencesBot.innerHTML = `<p>In a later interview, Dr Morgan had said he regrets this statement.</p>
    <p>The world of science believes his research to be a foundation for the study of interdimensional travel and portal stability.</p>`;
}

function anomaliesInfo() {
    referencesBot.innerHTML = `<p>While the institute suggested Dr Morgan conduct his reasearch on Earth or from the Moon Station, he insisted on working at Solaria.</p>`;
}

function itemInfo() {
    referencesBot.innerHTML = `<p>In Dr Morgan's words, the items were "crucial" and "got the team back home".</p> <p>They are now on display at the National Space Museum, New York.</p>`;
}

function askSolve() {
    referencesBot.innerHTML = `<p><strong>Click the above button to solve a simulation of the problem Dr Morgan faced while fixing the lab.</strong></p>`;
}

function labInfo() {
    referencesBot.innerHTML = `<p>The research centre built on Solaria consisted of multiple labs.</p> <p>The main lab - <strong>The Portal Development Lab</strong> was surrounded by the other smaller labs, like The Magnetic Systems Lab, The Gravitational Lab, and The Temporal Studies Lab.</p>`;
}

function fieldsInfo() {
    referencesBot.innerHTML =  `<p>Intertwining of fields' energies is common. But Solaria's fields caused instability in the other.</p> <p>Many researchers now believe that if created under perfect conditions, portals to alternate universes could open in Solaria.</p>`;
}

function stopInfo() {
    referencesBot.innerHTML = `<p>When asked about this, Dr Morgan only replied with: <br>"You wouldn't stop too. If you had got a glimpse of your kids and what 'home' was after you forgot about them, you wouldn't stop too".</p>`;
}

function visibleInfo() {
    referencesBot.innerHTML = `<p>While the records constantly use the word 'portal', it is <u>not accurate.</u></p> <p>Only Team Polaris could see Earth. Earth could <strong>not</strong> see them. It seems there was polarity at play here too — one side visible, the other invisible.`;
}

function tearingInfo() {
    referencesBot.innerHTML = `<p>Until this moment, stations on Earth were unable to spot Solaria due to the field fluctuations.<br>But this energy spike was high enough to give us a clue.</p> <p>The only problem: <strong>Solaria's reading pointed to  <span onclick="sunnyvaleInfo()" class="references">Sunnyvale, California.</strong></p>`;
}

function sunnyvaleInfo() {
    referencesBot.innerHTML = `<p>Sunnyvale,<br> Santa Clara County, California is where <span class="highlighted" style="text-decoration: none;">Dr Dave Morgan lived with his two kids, Mark and Mia.</span></p>`;
}

function helpInfo() {
    referencesBot.innerHTML = `<p>The problem simulated the exact dilemmas Dr Morgan faced while fixing the lab.</p> <p>In a later interview, he said, "...if the kids hadn't sneaked in that bag into my luggage, I couldn't have fixed the lab."</p>`;
}