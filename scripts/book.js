
function showSum(book, sum) {
    document.getElementById('summaries').style.display = "block";

    const sums = document.getElementsByClassName("sums");
    for (let i = 0; i < sums.length; i++) {
        sums[i].style.display = "none";
    }
    document.getElementById(sum).style.display = "block";

    const books = document.getElementsByClassName("series");
    for (let i = 0; i < books.length; i++) {
        books[i].style.width = "10%";
        books[i].style.opacity = 0.70;


    }
    document.getElementById(book).style.opacity = "1.0";
    //window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
    
}

window.onload = function loadPage() {
    var hamburger = document.getElementById('hamburger');
    hamburger.style.display = 'none';
    var back = document.getElementById('backArrow');
    back.style.display = 'block';

    const urlparams = new URLSearchParams(window.location.search);
    const book = urlparams.get('book');
    // Fantasy
    if (book === "Spellslingers") {
        spellslingers();
    } else if (book === "Spellbound") {
        spellbound();
    } else if (book === "Midnight") {
        midnight();
    } else if (book === "Bladesmith") {
        bladesmith();
    } else if (book === "MagnusChase") {
        magnusChase();
    } else if (book === "HarryPotter") {
        harryPotter();
    }
    // Romance
    else if (book === "HopeThisDoesntFindYou") {
        hopeThisDoesntFindYou();
    }else if (book === "ShowForTwo") {
        showForTwo();
    } else if (book === "CountingDownWithYou") {
        countingDownWithYou();
    } else if (book === "ThisTimeItsReal") {
        thisTimeItsReal();
    } else if (book === "NameDrop") {
        nameDrop();
    } else if (book === "Twilight") {
        twilight();
    } else if (book === "UpsideOfFalling") {
        upsideOfFalling();
    } else if (book === "MyMechanicalRomance") {
        myMechanicalRomance();
    } else if (book === "TheSelection") {
        theSelection();
    } else if (book === "YouveReachedSam") {
        youveReachedSam();
    }
    // Sci-Fi
    else if (book === "HungerGames") {
        hungergames();
    } else if (book === "Skyward") {
        skyward();
    } else if (book === "IfYouCouldSeeTheSun") {
        ifYouCouldSeeTheSun();
    } else if (book === "ShadowChildren") {
        shadowChildren();
    }
    // Realistic Fiction
    else if (book === "Hatchet") {
        hatchet();
    } else if (book === "Restart") {
        restart();
    } else if (book === "DorkDiaries") {
        dorkDiaries();
    }
    // ELSE
    else {
        alert("Can't find book.");
    }
}

// FANTASY 
function spellslingers() {
    document.title = "Subseries 1: Warden of the West, Book 1: Outcast";
    document.getElementById('pic').src = "../images/novels/Spellslingers.jpg";
    document.getElementById('series').textContent = "Spellslingers Academy of Magic Series by Annabel Chase";
    document.getElementById('book').textContent = "Subseries 1: Warden of the West, Book 1: Outcast";
    document.getElementById('summary').textContent = "Summary: I live by one simple rule: no magic. Not too hard in the human world, plus it keeps me hidden from my evil sorcerer father. Safe. When I’m forced into using magic to save an innocent family, the jig is up. Or so I believe. Instead, I’m whisked off to an academy of magic in a place I never knew existed. The problem is—my power is completely raw, which means I don’t know my butt from a broomstick. At first it's all wands, witches, and a new wardrobe...until I get caught in a restricted area with a dead body. Now it's going to take more than magic to clear my name. Thanks to new friends and a magically delicious vampire called Gray, I don't have to fly solo anymore. I'm out of my depth and out of options. Can I catch a killer before it's too late, or am I doomed to live a life on the run?";
    document.getElementById('reviews').innerHTML = "My Review: <br> I give this book 4.5 stars. It is a mix of magic, suspense, fantasy, and romance that is fun to read and keeps the reader engaged. Annabel Chase brought the fantasy world to life in this series. This series, Spellslingers Academy of Magic, has 4 subseries written from the 4 main character's perspectives. The subseries in order are Warden of the West (Bryn's View), Sentry of the South (Dani's View), Enforcer of the East (Cerys's View), and Keeper of the North (Mia's View). While this book contains some innappropriate language and is recommended for ages 13 and up, this series is funny, interesting, and amazing for readers who like to live in the book rather than read it! Easily one of my favorite series! <br><br>Other's Reviews:<br><q>This was a sweet book. No strong language - unless you class minatour sh!t as cursing, and no sexual content. The mystery of the missing item and the killers identity was, gor the most part, a simple whodunnit, but when you add in supernatural creatures and magic, well, it spices things up a bit. Loved the friendships that formed in this story and the potential romance, plus the dread Bryn feels about her father identity coming to light just adds to the possibilities in future books.</q>";
    
    document.getElementById('books').innerHTML = `<img class='series' id='book2' onclick='showSum(\"book2\", \"sum2\")' src = 'https://m.media-amazon.com/images/I/51cqf++R81L._SY346_.jpg'> 
                                                <img class='series' id='book3' onclick='showSum(\"book3\", \"sum3\")' src = 'https://m.media-amazon.com/images/I/51LDV0J7m5L._SY346_.jpg'> 
                                                <img class='series' id='book4' onclick='showSum(\"book4\", \"sum4\")' src = 'https://m.media-amazon.com/images/I/51ARM0h8BsL._SY346_.jpg'> 
                                                <img class='series' id='book5' onclick='showSum(\"book5\", \"sum5\")' src = 'https://m.media-amazon.com/images/I/510icn2CW1L._SY346_.jpg'> 
                                                <img class='series' id='book6' onclick='showSum(\"book6\", \"sum6\")' src = 'https://m.media-amazon.com/images/I/51iqxhqU3wL._SY346_.jpg'> 
                                                <img class='series' id='book7' onclick='showSum(\"book7\", \"sum7\")' src = 'https://m.media-amazon.com/images/I/51DnmXmDYIL._SY346_.jpg'> 
                                                <img class='series' id='book8' onclick='showSum(\"book8\", \"sum8\")' src = 'https://m.media-amazon.com/images/I/51Kly58RzzL.jpg'> 
                                                <img class='series' id='book9' onclick='showSum(\"book9\", \"sum9\")' src = 'https://m.media-amazon.com/images/I/51bFblUPzIL._SY346_.jpg'> 
                                                <img class='series' id='book10' onclick='showSum(\"book10\", \"sum10\")' src = 'https://m.media-amazon.com/images/I/51ZFIFLORzL._SY346_.jpg'>`;
    
    document.getElementById('summaries').innerHTML = `<p class='sums' id='sum2'>The ace in a pack of lies. I'm doing my best to settle into life at the academy, and keep my secret under wraps. After all, I'm training for a future as a warden for the Agency of Magical Forces. Can't have a mass-murdering evil father as part of my pedigree. I still can't tell a rune from a rock, but life is good. Until I discover a dead body in the river. Before I know it, I'm thrust into an investigation to find the killer, which means using magic outside of my comfort zone. The more magic I use, the more I worry about succumbing to the dark side like my father. With the help of my new friends and the sexy vampire, Gray, I just might manage to live through it...if I'm lucky.</p>
                                                    <p class='sums' id='sum3'>Where there's a wand, there's a way. My secret is out, yet I'm still welcome at the academy, training for a future as a warden for the Agency of Magical Forces. For the first time in my life, I feel like I belong. Until one of my roommates goes missing, and it's all my fault. I lead the charge to find her, testing the limits of my magical abilities in the process, and resisting the allure of the sexy vampire, Gray. The clock is ticking as we race to one of the most dangerous underworlds in an effort to rescue my roommate before it's too late. Can I use my powerful magic to save her without losing myself...or my life?</p>
                                                    <p class='sums' id='sum4'>My family's past threatens my future... It's my second year training to become a Sentry of the South at Spellslingers Academy of Magic and I'm still fighting a reputation I don't deserve. It was my grandmother's addiction to magic that tarnished our family name--a grandmother I still love and adore. When she asks a favor of me, I can't refuse her dying wish...and it sets off a chain of events I never expected. With the help of a charming and sexy druid, I set out to locate a missing professor, but what we discover is far worse than we ever imagined. A fight to restore my family's honor has become a fight for my life and the lives of everyone I hold dear. Will we be able to find the professor in time and preserve life in the quadrant as we know it?</p>
                                                    <p class='sums' id='sum5'>No good deed goes unpunished… For years, my family was in possession of the top half of an ancient sword. Now this dangerous artifact has been stolen and it’s up to me to recover it. With the help of my friends, I must follow the trail of clues to find both halves of the sword before they can be reforged. When my investigation leads me to an Elvis-impersonating vampire, a magic carpet lizard, and a homicidal banshee with no regard for the Fountains of Bellagio, I know I’m in for a rough ride. My magic is the only thing that stands between absolute power and preservation. Can I prevent history from recurring or are we doomed to repeat it?</p>
                                                    <p class='sums' id='sum6'>This year will either make me or break me… My professors worry that I'm sliding down a slippery slope, but I know I'm still on the path of redemption. I've worked too hard for too long, and I have no intention of letting down my family. When Bryn disappears during a routine field trip, though, I must put my need to succeed on hold. After all, what good is being the best if I can't use my powers to help those closest to me? The more facts I uncover, the more I realize that her disappearance is part of a much larger scheme--one that threatens our very existence. Can I stop a diabolical plan in motion or will I suffer the same fate as those I'm striving to save?</p>
                                                    <p class='sums' id='sum7'>Some secrets are best left buried… I'm a Third Year now at Spellslingers Academy of Magic and my professors worry that I'm not meeting my full potential--that I'm holding back--so I know I've got to prove myself. I'll do anything to keep my place as an Enforcer of the East. It's important that I go as far away as possible, not that I can ever admit the reason why. When I stumble upon a dozen bodies during a weekend field trip, though, the world comes to a screeching halt. Thanks to bad timing, I end up stuck in the company of a frustrating yet sexy werewolf called Callan, a member of the League of Local Paranormals. Together, we need to endure each other's company and bring a murderer to justice. Can I stop a mass murderer before he strikes again or will my past be my unraveling?</p>
                                                    <p class='sums' id='sum8'>A ticking clock… A visit to ancient caverns with my Spellslingers classmates yields a find that leads to danger, both in and out of the paranormal realm. When I'm accused of a crime I didn't commit, a king grants me one week to prove my innocence or face the sword. With Callan by my side, the werewolf and I make our way through strange lands to gather the evidence we need and, in the process, uncover a plot that threatens thousands of lives, including our own. Can I stop a war before it begins or am I destined to suffer the same fate as those I failed to save?</p>
                                                    <p class='sums' id='sum9'>Sometimes what you can't see is more dangerous than what you can… Lucky me. It's finally my fourth year at Spellslingers Academy of Magic and I've been so good at lurking in my roommates' shadows that I've been tapped to participate in a special training assignment with the Agency of Magical Forces. When vampires start dropping dead from an unknown cause, it's time to flex my magical muscles and help crack the case. With a sexy and mysterious supernatural by my side, we must figure out who's behind the murders and stop the plague upon the vampires' houses before it spreads beyond our control. Can I lead the charge to prevent an epidemic from destroying civilization as we know it or am I destined to remain as invisible as the air I command?</p>
                                                    <p class='sums' id='sum10'>All good things must come to an end… My final year at Spellslingers Academy of Magic is almost over and, as sad as I am to leave my friends, I'm looking forward to my future as a Keeper of the North--assuming I make it to graduation. When agents and I make a gruesome discovery inside a tree, all bets are off as we investigate the dark magic at work. The more threads I pull, the more the mystery unravels to reveal a plan I never saw coming. The horrifying scheme threatens not only the lives of my loved ones, but our entire existence. Can I stop the next apocalypse or will my final days at the academy simply be my final days?</p>`;

}

function spellbound() {
    document.title = "Book 1: Curse the Day";
    document.getElementById('pic').src = "../images/novels/Spellbound.jpg";
    document.getElementById('series').textContent = "The Spellbound Paranormal Cozy Mysteries Series by Annabel Chase";
    document.getElementById('book').textContent = "Book 1: Curse the Day";

    document.getElementById('summary').textContent = `Summary: Welcome to Spellbound, where paranormal is the new normal. 
                                                    The only magic Emma Hart believes in is caffeine and the power of the dryer to lose one sock per load. 
                                                    A public interest lawyer buried under a mound of student debt, Emma’s whole life has been one turn of bad luck after another. 
                                                    Her streak seems to continue when she gets lost on the way to see a client in the remote Pocono Mountains. 
                                                    A chance encounter with a suicidal angel lands her in Spellbound, a town where supernaturals have been cursed to remain for centuries--probably not the best time for Emma to discover that she's actually a witch. 
                                                    Between the recent murder of the town’s public defender, a goblin accused of theft, remedial witch classes, and the attention of one smoking hot vampire, Emma struggles to navigate this unfamiliar terrain without losing her mind...or her life.`;

    document.getElementById('reviews').innerHTML = `My Review:<br>
                                                    I give this book 4 stars. 
                                                    It is a mix of magic, suspense, fantasy, and romance that is fun to read and keeps the reader engaged. 
                                                    Annabel Chase uses this series as a guide to paranormal creatures.
                                                    Compared to Annabel Chase's Spellslingers, this book isn't as intriguing, but it has much humor and fun characters. 
                                                    This book would be preferred for people 13 and up. 
                                                    This book is great if you are in the mood for laughing and to lighten up!
                                                    <br><br>
                                                    Other's Reviews:<br>
                                                    "I enjoyed this book. It was amusing and the characters were fun. Several times I had to stop reading because I was giggling. Not an angsty book, even with a murder to solve, which I liked. I was in the mood for something fluffy and enjoyable."<br>
                                                    "There were certainly some enjoyable elements to this tale, but at the end of the day it is a cozy mystery. There’s no inappropriate language, or indeed any real romance. All of the characters are essentially nice or nicely horrible, including the protagonist who is also very well intentioned if sometimes not quite the epitome of nice. "`;
    
    document.getElementById('books').innerHTML = `<img class='series' id='book2' onclick='showSum(\"book2\", \"sum2\")' src = "https://m.media-amazon.com/images/I/51O0zQZjLPL._SY346_.jpg">
                                                <img class='series' id='book3' onclick='showSum(\"book3\", \"sum3\")' src = "https://m.media-amazon.com/images/I/51ktvw-NXVL._SY346_.jpg">
                                                <img class='series' id='book4' onclick='showSum(\"book4\", \"sum4\")' src = "https://m.media-amazon.com/images/I/51zLTclW5LL._SY346_.jpg">
                                                <img class='series' id='book5' onclick='showSum(\"book5\", \"sum5\")' src = "https://m.media-amazon.com/images/I/51Wzugk1y1L._SY346_.jpg">
                                                <img class='series' id='book6' onclick='showSum(\"book6\", \"sum6\")' src = "https://m.media-amazon.com/images/I/51FsdcmpT4L._SY346_.jpg">
                                                <img class='series' id='book7' onclick='showSum(\"book7\", \"sum7\")' src = "https://m.media-amazon.com/images/I/513aKi+h8CL._SY346_.jpg">
                                                <img class='series' id='book8' onclick='showSum(\"book8\", \"sum8\")' src = "https://m.media-amazon.com/images/I/51Q9tAU9wDL.jpg">
                                                <img class='series' id='book9' onclick='showSum(\"book9\", \"sum9\")' src = "https://m.media-amazon.com/images/I/51npZKGPT8L.jpg">
                                                <img class='series' id='book10' onclick='showSum(\"book10\", \"sum10\")' src = "https://m.media-amazon.com/images/I/51eq7H+-aoL._SY346_.jpg">`;

    document.getElementById('summaries').innerHTML=`<p class='sums' id='sum2'>Emma Hart hasn’t had a moment’s peace since her arrival in Spellbound. Her fear of heights hits an all-time high when she’s tasked with mastering a broomstick. It doesn’t help that Lady Weatherby seems determined to make basic witch training feel more like the magical ninja warrior championships. When a werewolf is found dead and Daniel is named as the prime suspect, Emma takes the initiative to prove that the angel’s halo is firmly intact, once again stepping on the hooves of the cranky centaur, Sheriff Hugo. The heat is on as Emma struggles to get a grip on her broomstick and identify the killer before it’s too late.</p>
                                                    <p class='sums' id='sum3'>When a sleeping dwarf is found entombed in a glass coffin and remedial witch Sophie is blamed, Emma Hart must defend her friend while trying to get to the bottom of the enchantment. The investigation lands Emma smack dab in the middle of Spellbound’s dating scene, where plenty of the town’s residents are eager to make her acquaintance. Emma knows it's time to kick her witchy skills up a notch if she expects to survive Thursday night speed dating and keep sweet Sophie from a life in paranormal prison.</p>
                                                    <p class='sums' id='sum4'>New witch Emma Hart is at her wit’s end and, this time, it’s not the result of her vampire ghost roommate, her snarky owl, or her feelings for a certain fallen angel. Key members of Spellbound society are acting like children and it’s wreaking havoc on the town’s regulation-happy infrastructure. When Emma is turned invisible during the investigation, she realizes that the spell was no accident and that someone is out to silence her—permanently.</p>
                                                    <p class='sums' id='sum5'>Struggling to make sense of recent changes in her life, witch-in-training Emma Hart decides to pursue therapy as well as a budding friendship with Markos, the town's most eligible minotaur and a talented architect. When the building inspector turns up dead in Markos's latest design, Emma quickly finds herself in the midst of a murder investigation. To top it off, she's defending a young werelion whose possession of a deadly substance has everyone wondering whether his intentions were equally deadly. Despite these distractions, Emma can't stop thinking about fallen angel Daniel and his heartbreaking decision. But if Emma doesn't manage to clear her head of all these distractions soon, she might just become the killer's next victim.</p>
                                                    <p class='sums' id='sum6'>Witch-in-training Emma Hart is preparing for one of the worst days of her life...the marriage of fallen angel Daniel Starr to the spoiled fairy, Elsa Knightsbridge. Fortunately for Emma, distractions are easy to come by in Spellbound when a troll is found dead near a bridge and an overzealous werewolf is arrested for indecent exposure. Will these incidents be enough to keep Emma from falling apart? Or will one of these situations be her undoing?</p>
                                                    <p class='sums' id='sum7'>Changes are afoot for Emma Hart now that her secret is out and her love life has taken a dramatic turn. With a mayoral election looming and a murderer on the loose, will life suddenly be a bed of roses for the plucky heroine or will she get pricked by the thorns?</p>
                                                    <p class='sums' id='sum8'>A new discovery by the remedial witches offers the chance to obtain a key ingredient for a spell that <i>may</i> bring an end to the curse on the long-suffering town. Naturally, Emma is the first to volunteer for the task--oblivious to the potential danger she faces. In the meantime, she stumbles upon a dead body in the Spellbound Care Home during a visit to Agnes and hopes--just this once--that someone has died due to natural causes. With the odds stacked against her, Emma faces the challenges ahead as though the lives of everyone she loves depends on it, because this time--they just might.</p>
                                                    <p class='sums' id='sum9'>Emma Hart has a lot on her paranormal plate--a wedding to plan, a trespasser to defend, and a longstanding curse to break. When a pixie dies under mysterious circumstances, her endless list of Things To Do grows even longer. Will she manage to uncover the truth behind the pixie's death before she becomes the next victim?</p>
                                                    <p class='sums' id='sum10'>The big day is quickly approaching for Emma Hart. The best laid plans go awry, however, when a potion causes her to lose important memories. Without Emma's crucial memories, the coven worries that their hard work to undo the curse on Spellbound will remain at a standstill. It's all wands on deck as Emma's friends rally to get to the bottom of the mystery potion. Will Emma recover her memories in time to walk down the aisle and save Spellbound?</p>
`;

}

function midnight() {
    document.title = "Subseries 1: The Tower, Book 1: Wild Knight";
    document.getElementById('pic').src = "../images/novels/Midnight.jpg";
    document.getElementById('series').textContent = "The Midnight Empire Series by Annabel Chase";
    document.getElementById('book').textContent = "Subseries 1: The Tower, Book 1: Wild Knight";

    document.getElementById('summary').textContent = `Summary: In a world of darkness where royal vampires are in charge, I spend my days working as a knight in the city formerly known as London. 
                                                    Instead of a lance and a horse, I rely on my trusty axe, Babe, and ride the occasional dragon. 
                                                    Every day new threats emerge that require a dash of magic and a dollop of attitude. 
                                                    Good thing I have both. 
                                                    Naturally danger comes with the territory. 
                                                    What no one knows is just how dangerous it is for me. 
                                                    If our vampire overlords discover what I am, they’ll execute me on the spot—no questions asked—which is why I avoid them at all costs. 
                                                    Until now. 
                                                    If only this one didn’t have a lethal reputation, a princely pedigree, and a quest that leads to more questions than answers. 
                                                    The heat between us doesn’t help matters. 
                                                    Unfortunately I can’t refuse a royal command, so I’m stuck until the job is complete. 
                                                    And even if the job doesn’t kill me, the truth just might.`;

    document.getElementById('reviews').innerHTML = `My Review: <br> I give this book 4 stars. 
                                                    This book had a very fast pace that could get hard to understand if you don't take time to think about what's happening, but it was filled with action and suspense as well as nicely spread out humor with the interactions between London and Callan (even though Callan is far from my ideal type...).
                                                    The book had some strong language and inappropriate content, so I would recommend it to maybe 16-17 and above. 
                                                    Despite that, this book was very enjoyable and intriguing.
                                                    Also, this Midnight Empire Series has 3 subseries in it which include \"The Tower,\" \"The Restoration,\" and \"New Dawn.\" 
                                                    The 2nd subseries was okay but included a lot more inappropriate content, so I did not continue that series, and the 3rd one had the same plus it wasn't that interesting so I didn't continue that either. 
                                                    \"The Tower\" was the only one I decided to finish, but it was an amazing and intriguing series.
                                                    <br><br>
                                                    Other's Reviews:<br>
                                                    "This story was fun. The characters are fun and quirky. The world is interesting and well done, though I had trouble picturing no daylight. And the plot was paced well with some interesting turns. Not too complex but not too simple. The author’s strengths are in creating relatable female characters. The men are a bit one dimensional but that’s ok. Lots of fun. Some flirting but this is not a romance. It’s a fun story about a knightly quest."<br>
                                                    "A great urban fantasy. A fun mystery. Kick-butt heroine and characters. Possible romance, but at this time; action, adventure, and kicking butt."<br>
                                                    "I really liked this, though it felt like I was running to catch up to the plot a few times - or at least what leads up to the plot. The author does pause to explain this quite a bit, moments that actually flowed well with the narrative, but it still almost missed a full foundational setting. That said, this is an intriguing urban fantasy that moves at an incredible pace."`;
    
    document.getElementById('books').innerHTML = `<img class='series' id='book2' onclick='showSum(\"book2\", \"sum2\")' src = "https://m.media-amazon.com/images/I/51HrsKKkbtL.jpg">
                                                <img class='series' id='book3' onclick='showSum(\"book3\", \"sum3\")' src = "https://m.media-amazon.com/images/I/51ZaXk4L+bL._SY346_.jpg">
                                                <img class='series' id='book4' onclick='showSum(\"book4\", \"sum4\")' src = "https://m.media-amazon.com/images/I/41UfWHjOUPL._SY346_.jpg">
                                                <img class='series' id='book5' onclick='showSum(\"book5\", \"sum5\")' src = "https://m.media-amazon.com/images/I/41NquiBkiLL._SY300_.jpg">
                                                <img class='series' id='book6' onclick='showSum(\"book6\", \"sum6\")' src = "https://m.media-amazon.com/images/I/41W4vi3syuL._SY300_.jpg">
                                                <img class='series' id='book7' onclick='showSum(\"book7\", \"sum7\")' src = "https://m.media-amazon.com/images/I/41M6H9u+wOL._SY300_.jpg">
                                                <img class='series' id='book8' onclick='showSum(\"book8\", \"sum8\")' src = "https://m.media-amazon.com/images/I/41NboCChNHL._SY300_.jpg">
                                                <img class='series' id='book9' onclick='showSum(\"book9\", \"sum9\")' src = "https://m.media-amazon.com/images/I/41qtilR9hdL._SY300_.jpg">
                                                <img class='series' id='book10' onclick='showSum(\"book10\", \"sum10\")' src = "https://m.media-amazon.com/images/I/41jWh85FxuL._SY300_.jpg">`;

    document.getElementById('summaries').innerHTML = `<p class='sums' id='sum2'>I survived a job for royal vampires with my life and identity intact. That means I can return to my normal life as a knight, right? Wrong. When a group of werewolves goes berserk in our local pub, there’s a new threat in the city and the local pack hires me to find out what it is. Unfortunately that decision draws the attention of a certain vampire prince who likes to keep tabs on the most powerful pack in the city. Just when I thought I was free of the Demon of House Duncan, we’re embarking on a road trip together to investigate. And what we discover changes everything—as well as each other.</p>
                                                    <p class='sums' id='sum3'>From the time I joined the Knights of Boudica, I’ve pretended to be just like all the others. A magic specialty or two. Skilled with a blade. An innate sense of justice. But normal is overrated, right? Now that I know there are more ancient and powerful stones out there, I won’t rest until I find them. If that means using more of my magic and risking exposure, then it’s a chance I have to take. My research leads me to a place I never imagined. A place where history is stored. And secrets are revealed. Unfortunately my discoveries put a target on my back. I can’t make a move without a vampire breathing down my neck. Of course, there’s one vampire whose closeness I don’t really mind—if only he wasn’t a dark prince with a deadly past and a monstrous family. If only he wouldn’t kill me on the spot if he finds out what I truly am. With the race on to claim the remaining stones, I have to put my personal feelings aside and do the job I was born to do. These stones could change the world for the better—or they could be the end of us all.</p>
                                                    <p class='sums' id='sum4'>I’ve spent a lifetime hiding my identity just to survive. I’ve concealed my true nature from our vampire overlords, including the one who’s captured my heart, and I’ve kept my friends at arm’s length to protect us both. And now I stand to lose them all because of it. With the final ancient stone up for grabs, I face my toughest challenge yet—seek help from friends and enemies alike, or go it alone like I always have. A battle looms for control of the stones—a battle that might finally force me to embrace the full extent of my magic. Magic so powerful that it just might kill me. But if it comes down to a choice between my survival or the realm’s, I know which one I’ll choose. The fate of the world depends on it.</p>
                                                    
                                                    <p class='sums' id='sum5'>New York is my prison. Once a sought-after assassin, a single error in judgment landed me in servitude to House August, the most powerful vampire family in North America. Now I use my special brand of magic as a member of their security team, fighting monsters in the city and keeping the royal family’s many enemies at bay. When the queen summons me for an assignment and offers my freedom in return, I want to jump at the chance—until she tells me what the assignment is. Like a valiant knight, I am to escort her son from the family’s stronghold in Florida back to New York, which would be difficult enough without my messy romantic history with the rogue prince. I accept the job because my freedom means more than my wounded pride. Darkness and monsters stand between us and our destination. Thankfully I’ve never been afraid of either one. I soon discover there’s more at stake than the return of the prodigal son. Even if we survive our enemies, I’m not sure I’ll survive the journey with the vampire who broke my heart.</p>
                                                    <p class='sums' id='sum6'>I thought my newfound freedom would allow me to shake off the stink of New York City and start a new life somewhere else, a place where nobody knows me as Death Bringer or Britt the Bloody. A place where I’m not associated with ridiculous prophecies. Looks like fate has other plans. When the city is attacked, I find myself on the wrong side of the border. The only option is to take up arms alongside my vampire overlords and fight my way out. It doesn’t help that Alaric is by my side, reminding me of exactly what I’d be leaving behind. My instinct is to fight for myself—for survival—but at some point I realize I just might be fighting for a hell of a lot more.</p>
                                                    <p class='sums' id='sum7'>I didn’t ask to be part of a prophecy and I certainly didn’t ask to be held captive by zealots. They may call me a savior, but they treat me like a sacrifice they’re waiting to make to the gods. Not much of a sacrifice given what they think of me. My only saving grace is that I don’t have to face the dangers alone. This time I have an ally in the form of a knight from Britannia City—London Hayes. Unfortunately, nobody knows where we are or what the group intends to do with us, which means we’re on our own. Meanwhile, there are larger forces at work that threaten to tilt our vampire-ruled world on its axis and it’s up to us to stop them—if we can escape our captors in time.</p>
                                                    
                                                    <p class='sums' id='sum8'>I’m just your friendly neighborhood Robin Hood. Ever since my coven was destroyed, I spend my days in The Wild stealing from the rich and giving to the poor, along with my merry band of werewolves and a grumpy wizard. The people protect my identity in exchange for my good deeds. If Lord Doran and his vampire rangers ever discover who I am and what I’m capable of, my body parts would end up as a crispy kebab. When humans start dropping dead from a horrible disease, they turn to me for help, but they’re not the only ones. Lord Doran wants me to report my findings and I’m unnerved by my response to our first up-close-and-personal meeting. I stamp out the indecent thoughts because anything short of repulsion is unacceptable. Besides, there’s another interested party and this one doesn’t have a target on my back. During my investigation, a new player emerges but I’m the one getting the blame. Somebody’s out for blood—and this time it isn’t a vampire. As the pressure increases, so does the body count—and if I don’t play my cards right, there won’t be any winners.</p>
                                                    <p class='sums' id='sum9'>The Wild has always had its share of threats. For most of us, that threat involves a dental deformity, a hankering for juicy veins, and a superiority complex. But that all changes when one of the villages is brutally attacked. Once again I find myself tackling the region’s problems, along with my merry band of werewolves and powerful new allies. Throw a rogue zombie in the mix and we’ve got ourselves a party—except we’d like nothing more than to roll up the welcome mat. With vampires literally out for blood and a price on my head, I should be laying low, but the dire situation forces me to engage with Lord Doran, and I’m not sure either one of us is ready for that reunion. Even so, I have to set aside the past for the sake of the future. The fate of The Wild depends on it.</p>
                                                    <p class='sums' id='sum10'>Taken from The Wild and thrust into a deadly situation in a strange realm, I have no choice but to accept my role in the prophecy. As new friends and new threats gather, I prepare to say goodbye to loved ones—and, quite possibly, the world as we know it.</p>`;

}

function bladesmith() {
    document.title = "Book 1: Blade of Secrets";
    document.getElementById('pic').src = "../images/novels/Bladesmith.jpg";
    document.getElementById('series').textContent = "The Bladesmith Duology by Tricia Levenseller";
    document.getElementById('book').textContent = "Book 1: Blade of Secrets";

    document.getElementById('summary').textContent = `Summary:
                                                    Eighteen-year-old Ziva prefers metal to people. 
                                                    She spends her days tucked away in her forge, safe from society and the anxiety it causes her, using her magical gift to craft unique weapons imbued with power. 
                                                    Then Ziva receives a commission from a powerful warlord, and the result is a sword capable of stealing its victims secrets. 
                                                    A sword that can cut far deeper than the length of its blade. 
                                                    A sword with the strength to topple kingdoms. 
                                                    When Ziva learns of the warlord’s intentions to use the weapon to enslave all the world under her rule, she takes her sister and flees. 
                                                    Joined by a distractingly handsome mercenary and a young scholar with extensive knowledge of the world’s known magics, Ziva and her sister set out on a quest to keep the sword safe until they can find a worthy wielder or a way to destroy it entirely.`;

    document.getElementById('reviews').innerHTML = `My Review: <br>
                                                    I give this book 4 stars. 
                                                    This book is filled with action, magic, and suspense. 
                                                    It is very intriguing with twists and turns throughout the book. 
                                                    While there is some inappropriate language, this book is still great and fun to read. 
                                                    I would recommend it to ages 13 and up.
                                                    <br><br>
                                                    Other's Reviews:<br>
                                                    "This was such a pleasant surprise! I picked it up on a whim because I was kind of in the mood for a fantasy and had packed most of my other books for my move, so I decided to try it out. An hour or so later I was already a third or so into the book. This is a super easy, suck you in, fast paced fantasy read. You follow Ziva who is a blacksmith and also suffers from social anxiety. She is most comfortable with her sister Temra. The two end up having to go on the run together because Ziva created a weapon of mass destruction that they have to keep out of the wrong hands. They have a mercenary join them for protection and a magic scholar as well. The pacing of this book is exactly what I want from fantasy reads. There was no point where I felt bored or like things were dragging. The anxiety representation was spectacular. I related so much to Ziva's anxiety struggles, although mine isn't specific to social situations. The relationship between her and her sister was the cherry on top for me. I wasn't expecting it to be a main focus because it's kind of glazed over in the synopsis, but I loved it. The romance is a slow burn sort of enemies to lovers deal and it was a lot of fun to read. The characters contrast so much but worked really well together. Overall this was great! I wasn't expecting to hate it or anything, but I just hadn't expected to love it as much as I did. It was fun, action packed, intriguing, and heart warming, all at once!"`;
    
    document.getElementById('books').innerHTML = `<img class='series' id='book2' onclick='showSum(\"book2\", \"sum2\")' src = "https://m.media-amazon.com/images/I/51bH4xzat2L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg">`;

    document.getElementById('summaries').innerHTML = `<p id="sum2">Eighteen-year-old Ziva may have defeated a deadly warlord, but the price was almost too much. Ziva is forced into a breakneck race to a nearby city with the handsome mercenary, Kellyn, and the young scholar, Petrik, to find a powerful magical healer who can save her sister’s life.

                When the events that follow lead to Ziva and Kellyn’s capture by an ambitious prince, Ziva is forced into the very situation she’s been dreading: magicking dangerous weapons meant for world domination.
                
                The forge has always been Ziva’s safe space, a place to avoid society and the anxiety it causes her, but now it is her prison, and she’s not sure just how much of herself she’ll have to sacrifice to save Kellyn and take center stage in the very war she’s been trying to stop.</p>`;

}

function magnusChase() {
    document.title = "Book 1: The Sword of Summer";
    document.getElementById('pic').src = "../images/novels/MagnusChase.jpg";
    document.getElementById('series').textContent = "Magnus Chase and the Gods of Asgard by Rick Riordan";
    document.getElementById('book').textContent = "Book 1: The Sword of Summer";

    document.getElementById('summary').textContent = `Summary:
                                                    Magnus Chase has seen his share of trouble. Ever since that terrible night two years ago when his mother told him to run, he has lived alone on the streets of Boston, surviving by his wits, staying one step ahead of the police and truant officers.
                                                    One day, Magnus learns that someone else is trying to track him down—his uncle Randolph, a man his mother had always warned him about. 
                                                    When Magnus tries to outmaneuver his uncle, he falls right into his clutches. 
                                                    Randolph starts rambling about Norse history and Magnus’s birthright: a weapon that has been lost for thousands years.
                                                    The more Randolph talks, the more puzzle pieces fall into place. 
                                                    Stories about the gods of Asgard, wolves, and Doomsday bubble up from Magnus’s memory. 
                                                    But he doesn’t have time to consider it all before a fire giant attacks the city, forcing him to choose between his own safety and the lives of hundreds of innocents. . .  .
                                                    Sometimes, the only way to start a new life is to die.`;

    document.getElementById('reviews').innerHTML = `My Review: <br>
            I give this book 3.5 stars. It is a mix of magic, thriller, action, and fantasy that is fun to read and keeps the reader engaged.
            This book is from the main character, Magnus's, perspective and it would be great for readers 10 years old and above.
            It is a book about Norse mythology with an unusual account of the deities' personalities.
            It's a funny book and I gave it only 3.5 stars out of 5 because it was not as good as my favorite books, but other than that, it is amazing and I would definitely recommend it to others.
            <br><br>
            Other's Reviews:<br>
            "Another incredible series by Rick Riordan. His writing teaches in a more accessible way than any textbook or teacher possibly could. The characters are diverse, hilarious, and easy to become attached to. It expands the Percy Jackson universe to even greater lengths, all while introducing a whole generation to a mythology most people know next to nothing about. An incredible read for any age."<br>
            <br>"Magnus Chase and the Gods of Asgard is a really enjoyable experience. The characters writing was flawless, it had numerous twists and turns, heck, the final fight between Loki and Magnus was also incredibly creative. My only regret is that it could have used more books in the series. For me its 5/5."<br>`;
    
    document.getElementById('books').innerHTML = `<img class='series' id='book2' onclick='showSum(\"book2\", \"sum2\")' src = "https://m.media-amazon.com/images/I/51755TDimWL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg">
                                                <img class='series' id='book3' onclick='showSum(\"book3\", \"sum3\")' src = "https://m.media-amazon.com/images/I/51exopPyYUL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg">
                                                <img class='series' id='book4' onclick='showSum(\"book4\", \"sum4\")' src = "https://m.media-amazon.com/images/I/51WBPQLcFaL._SY346_.jpg">`;

    document.getElementById('summaries').innerHTML = `<p class='sums' id='sum2'>Thor's Hammer is missing again. The Thunder God has a disturbing habit of misplacing his weapon- the mightiest force in the Nine Worlds- but this time the hammer isn't just lost. It has fallen into enemy hands. If Magnus Chase and his friends can't retrieve the hammer quickly, the mortal worlds will be defenseless against the onslaught of the Giants. Ragnarök will begin. The nine worlds will burn. Unfortunately, the only person who can broker a deal for the hammer's return is the gods' worst enemy- Loki, and the price he wants is very high.</p>
                                                    <p class='sums' id='sum3'>Magnus Chase, a once-homeless teen, is a resident of the Hotel Valhalla and one of Odin's chosen warriors. As the son of Frey, the god of summer, fertility, and health, Magnus isn't naturally inclined to fight. But he has strong and steadfast friends, including Hearthstone the elf, Blitzen the dwarf, and Samirah the Valkyrie, and together they have achieved brave deeds, such as defeating Fenris Wolf and battling powerful giants for Thor's hammer, Mjolnir. Now Magnus and his crew must sail to the farthest borders of Jotunheim and Niflheim in pursuit of Asgard's greatest threat. Will they succeed in their perilous journey, or is are the forces of Ragnarök going to win?</p>
                                                    <p class='sums' id='sum4'>HOW WELL DO YOU KNOW THE NINE NORSE REALMS? Do you get all these “heims“ mixed up? Well, this collection of rollicking short stories- each set in a different world and told by a different character from the Magnus Chase and the Gods of Asgard series- will help straighten you out. And even if it doesn’t, you’ll enjoy reading about how Alex saves Amir’s pants, Samirah plucks a giant’s harp, Mallory teaches a dragon how to throw down insults, and much more. Just watch out for Thor, who is running through the thing and raising quite a stink.</p>`;

}

function harryPotter() {
    document.title = "Book 1: The Sorcerer's Stone";
    document.getElementById('pic').src = "../images/novels/HarryPotter.jpg";
    document.getElementById('series').textContent = "Harry Potter Series by Joanne K. Rowling";
    document.getElementById('book').textContent = "Book 1: The Sorcerer's Stone";

    document.getElementById('summary').textContent = `Summary:
                                                    Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.
                                                    Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. 
                                                    Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. 
                                                    Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. 
                                                    An incredible adventure is about to begin!`;

    document.getElementById('reviews').innerHTML = `My Review: <br>
                                                    I give this book 3.5 stars. If I hadn't read the other series before this as well as a couple in the romance section, I would've given this a 5! Meant as a compliment btw...I've always loved this series as a kid since I felt as if I was a Ravenclaw joining in on the fun! The adventures and drama in this series was too good to be true, and J.K. Rowling's writing is a masterpiece. I recommend this to readers of all ages.
                                                    <br><br>
                                                    Other's Reviews:<br>
                                                    "I think the reason I waited so long to read this series is because I just couldn't imagine myself enjoying reading about an eleven-year-old boy and his adventures at a school of wizardry. I thought it would be too juvenile for my taste. I was wrong, of course.
                                                    I can honestly say that I loved every minute of this. It's a spectacular little romp with funny, courageous, and endearing characters that you can't help but love.
                                                    It has talking chess pieces, singing hats, a giant three-headed dog named Fluffy, a hilarious giant with a dragon fetish, a master wizard that's just a little bit crazy, mail carrier owls, goblins running a bank, unicorns, centaurs(!), trolls . . . and probably much more that I'm forgetting.
                                                    And then there's the lead characters: Hermione, the young scholar who starts out prim and up-tight but soon becomes a true friend; Ron, the boy who has little money but who has an abundance of family and loyalty to his friends to make up for it; and then there's Harry, the boy who starts out sleeping in a closet and ends up being a hero. Harry is kind to those that deserve it, fearless when it counts the most, and wonderfully intelligent. What's not to love?<br>
                                                    
                                                    In regards to the ending: I feel silly saying this about a middle grade novel, but I didn't suspect Quirrell a bit! If there were hints that he was the true culprit and not Snape, I obviously missed them.<br><br>
                                                    
                                                    FAVORITE QUOTE: "But from that moment on, Hermione Granger became their friend. There are some things you can't share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them."<br><br>
                                                    
                                                    Now, if you'll excuse me, I'm off to start Harry Potter and the Chamber of Secrets."<br>`;
    
    document.getElementById('books').innerHTML = `<img class='series' id='book2' onclick='showSum(\"book2\", \"sum2\")' src = "https://m.media-amazon.com/images/I/51auVPOrgTL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg">
                                                <img class='series' id='book3' onclick='showSum(\"book3\", \"sum3\")' src = "https://m.media-amazon.com/images/I/51-rbiAIiRL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg">
                                                <img class='series' id='book4' onclick='showSum(\"book4\", \"sum4\")' src = "https://m.media-amazon.com/images/I/51gy+g8Z+1L._SY344_BO1,204,203,200_.jpg">
                                                <img class='series' id='book5' onclick='showSum(\"book5\", \"sum5\")' src = "https://m.media-amazon.com/images/I/519h6jk4ByL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg">
                                                <img class='series' id='book6' onclick='showSum(\"book6\", \"sum6\")' src = "https://m.media-amazon.com/images/I/51uO1pQc5oL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg">
                                                <img class='series' id='book7' onclick='showSum(\"book7\", \"sum7\")' src = "https://m.media-amazon.com/images/I/51E7NvVLO9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg">
                                                <img class='series' id='book8' onclick='showSum(\"book8\", \"sum8\")' src = "https://m.media-amazon.com/images/I/51Dq7QpdXuL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg">`;

    document.getElementById('summaries').innerHTML = `<p class='sums' id="sum2">There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year.' Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.</p>
                                                    
                                                    <p class='sums' id="sum3">Welcome to the Knight Bus, emergency transport for the stranded witch or wizard. Just stick out your wand hand, step on board and we can take you anywhere you want to go.'

                                                        When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss...</p>
                                                    
                                                    <p class='sums' id="sum4">'There will be three tasks, spaced throughout the school year, and they will test the champions in many different ways ... their magical prowess - their daring - their powers of deduction - and, of course, their ability to cope with danger.'

                                                        The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!</p>
                                                    
                                                    <p class='sums' id="sum5">'You are sharing the Dark Lord's thoughts and emotions. The Headmaster thinks it inadvisable for this to continue. He wishes me to teach you how to close your mind to the Dark Lord.'

                                                        Dark times have come to Hogwarts. After the Dementors' attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lord's return, but Harry is not alone: a secret order gathers at Grimmauld Place to fight against the Dark forces. Harry must allow Professor Snape to teach him how to protect himself from Voldemort's savage assaults on his mind. But they are growing stronger by the day and Harry is running out of time ...</p>
                                                    
                                                    <p class='sums' id="sum6">There it was, hanging in the sky above the school: the blazing green skull with a serpent tongue, the mark Death Eaters left behind whenever they had entered a building... wherever they had murdered...

                                                        When Dumbledore arrives at Privet Drive one summer night to collect Harry Potter, his wand hand is blackened and shrivelled, but he does not reveal why. Secrets and suspicion are spreading through the wizarding world, and Hogwarts itself is not safe. Harry is convinced that Malfoy bears the Dark Mark: there is a Death Eater amongst them. Harry will need powerful magic and true friends as he explores Voldemort's darkest secrets, and Dumbledore prepares him to face his destiny...
                                                        </p>
                                                    
                                                    <p class='sums' id="sum7">'Give me Harry Potter,' said Voldemort's voice, 'and none shall be harmed. Give me Harry Potter, and I shall leave the school untouched. Give me Harry Potter, and you will be rewarded.'

                                                        As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy...</p>
                                                    
                                                    <p class='sums' id="sum8">Based on an original new story by J.K. Rowling, John Tiffany, and Jack Thorne, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. It was always difficult being Harry Potter and it isn't much easier now that he is an overworked employee of the Ministry of Magic, a husband and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.</p>`;

}


// ROMANCE 

/* WRITE A REVIEW FOR THIS ONE!! */   
function hopeThisDoesntFindYou() {
    document.title = "I Hope This Doesn't Find You by Ann Liang";
    document.getElementById('pic').src = "../images/novels/HopeThisDoesntFindYou.jpg";
    document.getElementById('book').textContent = "I Hope This Doesn't Find You by Ann Liang";

    document.getElementById('summary').textContent = `Summary: Snarky and romantic, I Hope This Doesn't Find You is Never Have I Ever meets To All the Boys if Lara Jean wrote hate emails instead of love letters.

                                                    Sadie Wen is perfect on paper: school captain, valedictorian, and a "pleasure to have in class." It’s not easy, but she has a trick to keep her model-student smile plastered on her face at all times: she channels all her frustrations into her email drafts. She'd never send them of course -- she'd rather die than hurt anyone's feelings -- but it's a relief to let loose on her power-hungry English teacher or a freeloading classmate taking credit for Sadie's work.

                                                    All her most vehemently worded emails are directed at her infuriating cocaptain, Julius Gong, whose arrogance and competitive streak have irked Sadie since they were kids. "You're attention starved and self-obsessed and unbearably vain . . . I really hope your comb breaks and you run out of whatever expensive hair products you've been using to make your hair appear deceptively soft..."

                                                    Sadie doesn't have to hold back in her emails, because nobody will ever read them... that is, until they're accidentally sent out.

                                                    Overnight, Sadie’s carefully crafted, conflict-free life is turned upside down. It's her worst nightmare -- now everyone at school knows what she really thinks of them, and they're not afraid to tell her what they really think of her either. But amidst the chaos, there's one person growing to appreciate the "real" Sadie -- Julius, the only boy she's sworn to hate...`;

    document.getElementById('reviews').innerHTML = `My Review: <br>

                                                    <br><br>
                                                    Other's Reviews: <br>
                                                    "this book is for the people-pleasers. for the ones who find themselves seeking validation from the people around them all the time. for those who constantly try to change themselves to fit the mold, because they think then they’ll finally, finally be appreciated ⸺ and that never happens. for the mirrorball and this is me trying girlies. you’ll all find something in sadie wen that you see in yourself. the constant striving for perfection, the yearning for a steady home, the never taking help from anyone because “i can do this by myself!! i don’t need help!!” but really it’s just your own need to protect yourself from opening up speaking. your need to shield yourself from any amount of vulnerability.

                                                    i used to imagine what it would be like to be someone who had somebody else. i would imagine tenderness. the concept of infinite. of endless patience. imagine them chasing after me even when i run. cradling my sorrows in the palm of their hands. imagine them caring, trying to understand. and now there’s you.


                                                    it’s basically marketed as to all the boys i’ve loved before meets hate emails instead of love letters and it!! is!! so!! addictive!! i couldn’t put this down for even a moment. i’ve said this once and i’ll say it again ⸺ ann liang’s books are a source of comfort to me. her words are a balm to my soul. they make me giggle and fall for the characters so hard while also seeing different sides of them. was it similar to her other books? yes, in certain ways. but each of the characters have their own uniqueness to them that makes them stand out to me and i just love it. academic rivals to lovers always hits different for me, especially if they were actually rivals who loathed the sight of each other. and i loved how the thin line between love and hate was shown here. sadie’s gradual acceptance and liking of julius was done so naturally i could feel the development and i loved it.

                                                    sadie wen. my need for academic validation was seen in her character and i. just. love. her. the way she constantly drove herself to the brink of madness because she had to best everyone and come on top in everything ⸺ my idol. she was unyieldingly and unflinchingly stubborn which was why i loved her. she made her decisions impulsively because of her need to be perfect at all times, to “fix” everything wrong in her life, but who can’t relate with that. we all need some degree of control in our lives and we all have our inner sadie wen leading those impulses. i loved her growth and her seeing how unhealthy it was to depend on other people’s feelings for her to be happy. it was super realistic that she got upset when someone got mad around/at her cause that’s how i’d feel as well.

                                                    julius gong. so cold on the outside, so warm inside. so full of hate and love at the same time. filled with so much passion and brimming with adoration for sadie. i loved how he blushed so prettily only for sadie when he got flustered by her 🥹 SO CUTE. he was absolutely swoon-worthy and such a perfect gentleman sometimes i couldn’t do anything but smile helplessly at his antics. the way he shared his coat with her when she got drenched. the way he got her a goddamn medal to make her happy. the many times he cheered her up and riled her up with his witty comments. i love him 💖💗🩷💘💞💝💓

                                                    you distract me when my brain is being cruel. you sharpen my edges when the world tries to wear them down.


                                                    sadiejulius. oh my god the tension. y’all are not ready. it sizzled in the pages. the banter between them?? i grinned uncountable times. my eyes could not be torn from this book like i legit binged it cause it had me obsessed. they were so i can see you, disaster and new year’s day coded. AND THE WAY THEY WERE OBSESSED WITH EACH OTHER. like they couldn’t tear their eyes off each other 🥺 young love at its finest. the way they slowly opened up after seeing a different side to each other? enchanting. i was screaming crying throwing up at several scenes. THE SPORTS FESTIVAL?? HELLO? THE CONFESSION AT THE END HAD ME CLUTCHING MY HEART. the way julius teased sadie about her praise kink i was cryingggg. the way they were so made for each other too, because of how both of them were brought up. they have all my love. these two are so dear to me. 😭🤍

                                                    i’m not so familiar with vices—i like to think i have none, but if anything were to count, you would be my only one. it must be an addiction, or an obsession. i have never known anybody as completely as i know you, and yet i still want to sit next to you, draw close to you, closer. i want you to tell me every story, want to listen to you speak until the night sinks in the sky and the stars fade out. i want you to hold me like a grudge, keep me like a promise, haunt me like a ghost. you’re so beautiful it enrages me.


                                                    the ending??? has my whole and entire heart omg her writing a letter to him again 🤭 it had me smiling and laughing so hard like fuck i love these two dorks. sadie finally fully opened up to julius and became vulnerable around him i’m tearing up i’m so proud of my baby 🥹💗

                                                    my only complaints: i wanted more depth to julius and for his character to be explored more. it was so relatable for everyone to have sky-high expectations of him but him not knowing where he fit in. i honestly just wanted to give him a big hug and say c’mere ❤️‍🩹 the effort felt pretty surface-level probably because ann wanted to keep this book light-hearted and cute more than emotional. i almost felt like julius was made just for sadie’s love ⸺ with not much depth to him as a character. which is fine because sometimes i need romances like that, but i needed to point that out. some side characters also felt one-dimensional because of how short this was and it felt rather predictable.

                                                    regardless, this was the perfect fluffy read for christmas eve and i’m so happy i got the chance to read it. 🤭 it had me giggling and kicking my feet up at midnight and staying up ‘til late to finish it. i can’t wait for y’all to read this and fangirl over sadiejulius too <3"`;
    

}

function showForTwo() {
    document.title = "A Show for Two Novel by Tashie Bhuiyan";
    document.getElementById('pic').src = "../images/novels/ShowForTwo.jpg";
    document.getElementById('series').textContent = "";
    document.getElementById('book').textContent = "A Show for Two Novel by Tashie Bhuiyan";

    document.getElementById('summary').textContent = `Summary:
                                                    All Mina Rahman wants is to finally win the Golden Ivy student film competition, get into her dream school, and leave New York City behind for good.
                                                    When indie film star Emmitt Ramos enrolls in her high school under a secret identity to research his next role, he agrees to star in her short film for the competition…if she acts as his NYC tour guide.
                                                    As Mina ventures across the five boroughs with Emmitt, the city she grew up in starts to look more like home than it ever has before. 
                                                    Suddenly, Mina’s dreams—which once seemed impenetrable—begin to crumble, and she’s forced to ask herself: 
                                                    Is winning worth losing everything?`;

    document.getElementById('reviews').innerHTML = `My Review: <br>
                                                    I give this book 4.5 stars. This romantic book is touching, interesting, and has surprises around the corner. Though this book is not inappropriate, it has a lot of strong language, so this book would be best for 13 and up.
                                                    This book is very intriguing and the cute relationship between the characters is too amazing to ignore! Would read again! <br>
                                                    Fun Fact: This book was inspired by Tom Holland when he came to Tashie's high school to learn about American high schools for the Spiderman movies!! How cool is that?!!!
                                                    <br><br>
                                                    Other's Reviews:<br>
                                                    "i loved this story so much, i love mina rahman so much, and the romance that blossoms between her & emmitt was very sweet. there's something so genuinely enamoring with the way that tashie bhuyian writes her ya romances and i will read every single one of them for as long as she continues to write, i know that for certain."<br>
                                                    "I enjoyed every second of reading this. The plot is really fun and entertaining but also mentioning serious themes such as depression and toxic family relations. I absolutely loved the characters and found myself relating to Mina in many occasions.
                                                    ALSO THEIR RELATIONSHIP IS SUPERIOR AND HAD ME SMILING LIKE AN IDIOT!"<br>`;
    
    document.getElementById('summary').style.fontSize = "18px";
    document.getElementById('reviews').style.fontSize = "18px";
}

function countingDownWithYou() {
    document.title = "Counting Down with You Novel by Tashie Bhuiyan";
    document.getElementById('pic').src = "../images/novels/CountingDownWithYou.jpg";
    document.getElementById('series').textContent = "";
    document.getElementById('book').textContent = "Counting Down with You Novel by Tashie Bhuiyan";

    document.getElementById('summary').textContent = `Summary: How do you make one month last a lifetime?
                                                    Karina Ahmed has a plan. 
                                                    Keep her head down, get through high school without a fuss, and follow her parents’ rules—even if it means sacrificing her dreams. 
                                                    When her parents go abroad to Bangladesh for four weeks, Karina expects some peace and quiet. 
                                                    Instead, one simple lie unravels everything.
                                                    Karina is my girlfriend.
                                                    Tutoring the school’s resident bad boy was already crossing a line. 
                                                    Pretending to date him? 
                                                    Out of the question. 
                                                    But Ace Clyde does everything right—he brings her coffee in the mornings, impresses her friends without trying, and even promises to buy her a dozen books (a week) if she goes along with his fake-dating facade. 
                                                    Though Karina agrees, she can’t help but start counting down the days until her parents come back.
                                                    T-minus twenty-eight days until everything returns to normal—but what if Karina no longer wants it to?`;

    document.getElementById('reviews').innerHTML = `My Review: <br> I give this book 4.5 stars. 
                                                    This romantic book is touching, interesting, and has surprises around the corner. 
                                                    This book is the sweetest ever and very heartwarming! 
                                                    Has some language, but great for people 12 and up.
                                                    Keeps reader intrigued and is impossible to stop reading. 
                                                    Overall, the book is a feel-good one and very inspiring!
                                                    <br><br>
                                                    Other's Reviews:<br>
                                                    "Counting Down with You was such a warm joy to read, and it left me with something luminous bubbling bright within my chest. It’s a charming and aching story with a quietly furious heart, a story that would have given me a mirror as a teenager, and now at twenty-two, pried something open in me that had been shut for a very long time."<br>
                                                    "A grader, smart, responsible, quirky, adorable South Asian girl and badass, handsome, sweet tooth, rebellious white boy unite for tutoring sessions and fake dating scheme, friends to lovers theme, problematic families who reject to communicate or empathize their own children, verbal and psychological abuse, anxiety disorder!

                                                    Did you like the formula I mentioned? If your answer is yes, you’re accepted to the full, heartfelt, sweet-swoon-soft, enjoyed ride!
                                                    
                                                    I love realistic young adult books plus sweet romance with so much likable characters! This book checks all of the boxes of my true weakness and addiction of young at hearts premise!"<br>
                                                    
                                                    "I read Counting Down with You way, way back in ye olde days of 2019 and then again as it nears publication, and *clenches fist* it's still so goddamn good. This is a story about a teen girl finding strength and rising to her fullest self. A soft, beautiful romance with a love interest who sees her and supports her but doesn't save her—because Karina can save herself. A cast of supporting characters with absolutely chaotic energy and the cutest grandmother that I would absolutely lay my life down for. I know there's a Dadu Fan Club out there and we need pins. The Internet might say I'm biased because I think Miss Tashie deserves the world, but Counting Down with You is also one of those special books that is going to shine a light on so many teens and make them feel appreciated as they never have before. You need it in your life."<br>`;
    

}

function thisTimeItsReal() {
    document.title = "This Time It's Real Novel by Ann Liang";
    document.getElementById('pic').src = "../images/novels/ThisTimeItsReal.jpg";
    document.getElementById('book').textContent = "This Time It's Real Novel by Ann Liang";

    document.getElementById('summary').textContent = `Summary: When seventeen-year-old Eliza Lin’s essay about meeting the love of her life unexpectedly goes viral, her entire life changes overnight. 
                                                    Now she has the approval of her classmates at her new international school in Beijing, a career-launching internship opportunity at her favorite magazine…and a massive secret to keep.
                                                    Eliza made her essay up. 
                                                    She’s never been in a relationship before, let alone in love. 
                                                    All good writing is lying, right?
                                                    Desperate to hide the truth, Eliza strikes a deal with the famous actor in her class, the charming but aloof Caz Song. 
                                                    She’ll help him write his college applications if he poses as her boyfriend. 
                                                    Caz is a dream boyfriend -- he passes handwritten notes to her in class, makes her little sister laugh, and takes her out on motorcycle rides to the best snack stalls around the city.
                                                    But when her relationship with Caz starts feeling a little too convincing, all of Eliza’s carefully laid plans are threatened. 
                                                    Can she still follow her dreams if it means breaking her own heart?`;

    document.getElementById('reviews').innerHTML = `My Review: <br>
                                                    I give this book 4.5 stars. This romantic book is touching, interesting, and has surprises around the corner. Includes a bit of strong langugue, but good for 12 and up. This book is very intriguing and the cute relationship between the characters is too amazing to ignore! I have and would read again!
                                                    The fun and playful interaction between the characters with the teasing is adorable but there are also some soft and meaningful moments that are inspiring! You will immediately fall in love with the characters!!
                                                    <br><br>
                                                    Other's Reviews:<br>
                                                    "This was so freaking adorable!! My heart is literally fluttering and beating out of my chest! This book feels like a warm hug on a sunny day!! Literally so comforting, cute and fluffy!

                                                    Elize and Caz are literally the cutest!! I think most people know that I’m a SUCKER for the fake dating trope and these two delivered the most adorable and beautiful fake dating story ever!! Like the tension and chemistry between these two was absolutely unmatched and I loved every second of them being together!! Also the forced proximity??? So so soooooo good!!
                                                    
                                                    Also the moments between these two were so freaking CUTE!!
                                                    Her taking care of him when he’s sick and it being the first time where he’s vulnerable with another person. Him confessing his love to her in an angsty and angry way WHILE it’s raining?!?! I was blushing, giggling, kicking my feet while having a storm of butterflies in my stomach!! It was just so freaking adorable oml…
                                                    
                                                    Also the vibes of this book were freaking immaculate!! It was just so cozy and gave off late spring, early summer feels and I really enjoyed it! And I love the representation of Chinese culture in this book and seeing the story take place there!! Absolutely amazing!"<br>`;
    
}

function nameDrop() {
    document.title = "The Name Drop by Susan Lee";
    document.getElementById('pic').src = "../images/novels/NameDrop.jpg";
    document.getElementById('book').textContent = "The Name Drop by Susan Lee";

    document.getElementById('summary').textContent = `Summary: When Elijah Ri arrives in New York City for an internship at his father’s massive tech company, Haneul Corporation, he expects the royal treatment that comes with being the future CEO—even if that’s the last thing he wants. But instead, he finds himself shuffled into a group of overworked, unpaid interns, all sharing a shoebox apartment for the summer.
                                                    When Jessica Lee arrives in New York City, she’s eager to make the most of her internship at Haneul Corporation, even if she’s at the bottom of the corporate ladder. But she’s shocked to be introduced as the new executive-in-training intern with a gorgeous brownstone all to herself.
                                                    It doesn’t take long for Elijah and Jessica to discover the source of the mistake: they share the same Korean name. But they decide to stay switched—so Elijah can have a relaxing summer away from his controlling dad while Jessica can make the connections she desperately needs for college recommendations.
                                                    As Elijah and Jessica work together to keep up the charade, a spark develops between them. Can they avoid discovery—and total disaster—with their feelings and futures on the line?`;

    document.getElementById('reviews').innerHTML = `My Review: <br>
                                                    I give this book 4 stars! I really enjoyed reading about Jessica's perserverance in the sexist company that she works for and how Elijah supported her all the way. 
                                                    I also loved the way both interacted with each other. While most books talk about how outgoing the guy is, Elijah is the sweet, quiet type, who's only outgoing when they're together.
                                                    Adorable, but there were some parts that made me want to skip through because of the slow pacing or lack of drama/action. 
                                                    Some parts toward the end are a little inappropriate because of the suggestive wording, so I would recommend this to 14 year olds and older.
                                                    <br><br>
                                                    Other's Reviews: <br>
                                                    "\❝𝑰𝒇 𝒂𝒏𝒚𝒐𝒏𝒆 𝒍𝒐𝒐𝒌𝒔 𝒂𝒕 𝒚𝒐𝒖 𝒘𝒆𝒊𝒓𝒅, 𝒍𝒐𝒐𝒌 𝒂𝒕 𝒕𝒉𝒆𝒎 𝒃𝒂𝒄𝒌 𝒆𝒗𝒆𝒏 𝒘𝒆𝒊𝒓𝒅𝒆𝒓.\❞<br>

                                                    I have waited so long for this book and my expectations were so high. But what happens often when the expectations are high? Yup, you guessed right! We get disappointed. . I was sooo excited for this one and hoped it would cure my reading slump which it did actually (I think lol) but I kinda got disappointed too. I find the idea of this book very intriguing. I mean a book about the son of a CEO and a poor girl. And the switching names and everything. It sounds interesting, doesn't it? And just look at this beautiful cover 😍. Unfortunately, it didn't deliver it. The story was cute but it dragged a little too which was very tiring to read.<br>


                                                    \❝𝑨𝒏𝒅, 𝑬𝒍𝒊𝒋𝒂𝒉, 𝒋𝒖𝒔𝒕 𝒌𝒏𝒐𝒘 𝒕𝒉𝒂𝒕 𝒏𝒐 𝒎𝒂𝒕𝒕𝒆𝒓 𝒘𝒉𝒂𝒕 𝒚𝒐𝒖 𝒔𝒂𝒚, 𝑰 𝒓𝒆𝒂𝒍𝒍𝒚 𝒉𝒐𝒑𝒆 𝒘𝒆’𝒍𝒍 𝒃𝒆 𝒂𝒃𝒍𝒆 𝒕𝒐 𝒔𝒕𝒂𝒚 𝒇𝒓𝒊𝒆𝒏𝒅𝒔 𝒂𝒇𝒕𝒆𝒓 𝒕𝒉𝒆 𝒔𝒖𝒎𝒎𝒆𝒓. 𝑰𝒕’𝒔 𝒏𝒐𝒕 𝒍𝒊𝒌𝒆 𝒂𝒏𝒚𝒐𝒏𝒆 𝒆𝒍𝒔𝒆 𝒘𝒐𝒖𝒍𝒅 𝒖𝒏𝒅𝒆𝒓𝒔𝒕𝒂𝒏𝒅 𝒂𝒍𝒍 𝒐𝒇 𝒕𝒉𝒊𝒔. 𝑨𝒏𝒅 𝒕𝒉𝒐𝒖𝒈𝒉 𝒕𝒉𝒂𝒕’𝒔 𝒐𝒖𝒓 𝒃𝒖𝒓𝒅𝒆𝒏, 𝑰 𝒌𝒊𝒏𝒅𝒂 𝒂𝒍𝒔𝒐 𝒍𝒊𝒌𝒆 𝒕𝒉𝒂𝒕 𝒊𝒕’𝒔 𝒐𝒖𝒓 𝒔𝒆𝒄𝒓𝒆𝒕 𝒕𝒐o.\❞<br>


                                                    The romance was cute but I wanted more romance. There weren't so many ElijahJessica moments. I wanted more from them 😭. I wanted their kdrama moments which I didn't get much. 😔

                                                    And omg what I really found surprising was that there was a really unexpected drama at the end of the book. I was speechless and I was kinda annoyed too lol.<br>


                                                    \❝𝑫𝒐𝒏’𝒕 𝒂𝒑𝒐𝒍𝒐𝒈𝒊𝒛𝒆 𝒇𝒐𝒓 𝒃𝒆𝒊𝒏𝒈 𝒐𝒃𝒔𝒆𝒓𝒗𝒂𝒏𝒕, 𝒇𝒐𝒓 𝒉𝒂𝒗𝒊𝒏𝒈 𝒂 𝒏𝒂𝒕𝒖𝒓𝒂𝒍 𝒌𝒏𝒂𝒄𝒌 𝒇𝒐𝒓 𝒓𝒆𝒂𝒅𝒊𝒏𝒈 𝒑𝒆𝒐𝒑𝒍𝒆. 𝑫𝒐𝒏’𝒕 𝒂𝒔𝒌 𝒇𝒐𝒓 𝒇𝒐𝒓𝒈𝒊𝒗𝒆𝒏𝒆𝒔𝒔 𝒃𝒂𝒔𝒆𝒅 𝒐𝒏 𝒔𝒐𝒎𝒆𝒐𝒏𝒆 𝒆𝒍𝒔𝒆’𝒔 𝒓𝒆𝒂𝒄𝒕𝒊𝒐𝒏 𝒕𝒐 𝒚𝒐𝒖𝒓 𝒌𝒏𝒐𝒘𝒍𝒆𝒅𝒈𝒆,\” 𝒔𝒉𝒆 𝒔𝒂𝒚𝒔. \“𝑩𝒆 𝒗𝒆𝒓𝒚 𝒔𝒕𝒊𝒏𝒈𝒚 𝒘𝒊𝒕𝒉 𝒚𝒐𝒖𝒓 𝒂𝒑𝒐𝒍𝒐𝒈𝒊𝒆𝒔. 𝑾𝒆 𝒘𝒐𝒎𝒆𝒏 𝒕𝒐𝒐 𝒐𝒇𝒕𝒆𝒏 𝒔𝒂𝒚 ‘𝑰’𝒎 𝒔𝒐𝒓𝒓𝒚’ 𝒇𝒐𝒓 𝒕𝒉𝒊𝒏𝒈𝒔 𝒕𝒉𝒂𝒕 𝒂𝒓𝒆 𝒆𝒏𝒕𝒊𝒓𝒆𝒍𝒚 𝒏𝒐𝒕 𝒐𝒖𝒓 𝒇𝒂𝒖𝒍𝒕. 𝑰𝒕’𝒔 𝒐𝒖𝒓 𝒈𝒐-𝒕𝒐.\❞<br>


                                                    ╰┈➤ Jessica is a very shy girl who doesn't swear a lot and is very smart. She's from a poor family. She works a lot and wants to show her skills. She's such an adorable character. At the end of the book she annoyed me a little but somehow I could understand her.<br>

                                                    ╰┈➤ Elijah is a very cute guy. No honestly when I saw the cover I thought he would be some arrogant rich bad boy but it turned out that he was a cutie. He wasn't what I expected. I liked the way he cared about Jessica and protected her.<br>


                                                    ╰┈➤Read it if you like:<br>
                                                    &emsp; : ̗̀➛ Poor girl x rich boy<br>
                                                    &emsp; : ̗̀➛ Strangers to friends to lovers<br>
                                                    &emsp; : ̗̀➛ Kdrama vibes<br>
                                                    &emsp; : ̗̀➛ BTS reference<br>


                                                    Overall, it was cute but not something special. If you want to read it please don't have high expectations."<br>`;
    

                                                
}

function twilight() {
    document.title = "Twilight by Stephenie Meyer";
    document.getElementById('pic').src = "../images/novels/Twilight.jpg";
    document.getElementById('series').textContent = "Twilight Saga Series by Stephenie Meyer";
    document.getElementById('book').textContent = "Twilight by Stephenie Meyer";

    document.getElementById('summary').textContent = `Isabella Swan's move to Forks, a small, perpetually rainy town in Washington, could have been the most boring move she ever made. But once she meets the mysterious and alluring Edward Cullen, Isabella's life takes a thrilling and terrifying turn.
                                                    Up until now, Edward has managed to keep his vampire identity a secret in the small community he lives in, but now nobody is safe, especially Isabella, the person Edward holds most dear. The lovers find themselves balanced precariously on the point of a knife -- between desire and danger.
                                                    Deeply romantic and extraordinarily suspenseful, Twilight captures the struggle between defying our instincts and satisfying our desires. This is a love story with bite.`;

    document.getElementById('reviews').innerHTML = `My Review: <br> 
                                                    Write here...
                                                    <br><br>
                                                    Other's Reviews: <br> Oh my. This book, to me, is like chocolate: a delicious, sinful, addictive indulgence which you convince yourself has beneficial qualities (zinc, calcium, keeps me quiet at that time of the month...) in order to justify your addiction.

                                                    By "beneficial qualities", I mean that it's reading, and since when is reading bad? :) Let me say quite clearly that I'm a sucker for romance, especially the intense, passionate, tragic kind. I don't read romance novels*, though, because to me they are lacklustre - Meyer's book has the extra edge I need, though, a great way of keeping doom hanging over the main characters' heads: she's human, he's a vampire.

                                                    Sound corny? Yeah, I know, and the only reason Meyer gets away with it as well as she does is because Twilight doesn't try to be anything it's not, and it has such conviction. Only Meyer could get away with giving her narrator the name Isabella Swan. She says in her little bio at the back that she wanted to write believable characters: an interesting choice, then, to write about vampires, but I believed in them, and without such a willing suspension of disbelief, the story would have been a farce. True, a lot of people haven't been able to suspend their disbelief with this book, but that doesn't affect my reading experience :)

                                                    Seventeen year old Bella's parents are divorced. She lives with her mum in Phoenix, Arizona, and spends time with her dad Charlie in Forks, Washington State, where it rains almost constantly. She hates Forks, but when her mum remarries a baseball player, Phil, and starts travelling with him, Bella decides to move to Forks.

                                                    On her first day at school she notices the isolated group of five beautiful, graceful siblings. Rosalie, Alice, Emmet, Edward and Jasper. One in particular catches her eye: Edward Cullen, with his rust-brown hair and topaz eyes. She is more than a little surprised and shocked when he seems to have developed an acute, profound hatred of her. Her fascination deepens, especially when, after a brief disappearance, he saves her life. She soon figures out what Edward is, and the knowledge doesn't frighten her. The shaky friendship between them develops into something much stronger, and Edward reveals his overpowering reaction to her smell that nearly made him kill her on the spot - hence the look on his face that so shocked her, and the restraint he put on himself during an hour of Biology.

                                                    Let's not forget he's incredibly handsome: even though Bella describes almost every glance he makes and every twitch of his lips, not once did I get bored and roll my eyes. My fascination grew alongside hers, until I too fell in love with Edward - in a totally girly, daydreamy way. Yes, I admit it. I don't know if that makes this a girly kind of book - these days those boundaries don't seem to matter so much, and the vampire family is pretty darn cool, what with Edward's extra ability to read minds, Alice's premonitions, Jasper's ability to affect people's emotions, their speed, their invincibility... Bella is at one point compared to Lois Lane, because Edward and his kin really are like Superman.

                                                    One of the things I love about YA books: the clarity with which they are written. Granted there is some repetition in Twilight, but to me it's necessary repetition. There's nothing superfluous in Twilight, nothing that shouldn't be there, and the flow, the pacing, is great. It's a fat book, but I read it in two days. I read it with breakfast, on my walk to the subway, on the subway, up the escalator, through the ticket gates, to work, in my lunch break ... you get the picture. I couldn't get enough of it, and it left me with that same craving for more that Harry Potter did (I remember scrounging around for loose change as soon as I finished one of them and dashing off into the city to get my next fix. It helped that four were already out when I started). There's plenty of negative stuff you could say about this book - the writing, the characters, the obsession - but again, I couldn't care less :)

                                                    Another thing I loved was all the vampire myths Meyer scrapped. These vampires aren't burnt to ash by sunlight: their marble skin glitters as the sunlight is broken into miniscule shards, like diamonds - hence why they are living in Forks, where the sun hardly ever shines. They are not hurt by crucifixes or stakes through the heart. They do not sleep at all, nor do they eat human food. They drive fast cars really really fast. And they can fall in love. Awwww.

                                                    Seriously though, this was one of most fun, most enjoyable, most romantic books I've read in a long time, and I'm so happy there are two more out with a fourth on the way. They are, somewhat predictably, making Twilight into a movie - still in the early development stage - but it's rather fun to go to the author's website and see her own preferences for actors to play Edward etc. Can't say I'm familiar with most of them, but her top choice (now sadly too old), is indeed a perfect match. Who knows who they'll really cast, but as with the book, the characters have to be right or the whole story will be just silly and sappy.

                                                    Since reading this the first time back in 2007, I've started reading some romance novels. Yes I've been corrupted. Or rather, I've always loved romance stories but had trouble admitting it. Now, I just don't care :)`;
    
    
    document.getElementById('books').innerHTML = `<img class='series' id='book2' onclick='showSum(\"book2\", \"sum2\")' src = "https://m.media-amazon.com/images/I/41T4C3KCcrL._SY445_SX342_PQ10_.jpg">
                                                <img class='series' id='book3' onclick='showSum(\"book3\", \"sum3\")' src = "https://m.media-amazon.com/images/I/71BFqWC4nFL._SY522_.jpg">
                                                <img class='series' id='book4' onclick='showSum(\"book4\", \"sum4\")' src = "https://m.media-amazon.com/images/I/71vbRiLnoqL._AC_UF1000,1000_QL80_.jpg">
                                                <img class='series' id='book5' onclick='showSum(\"book5\", \"sum5\")' src = "https://m.media-amazon.com/images/I/71N3sQn7-uL._AC_UF1000,1000_QL80_.jpg">
                                                <img class='series' id='book6' onclick='showSum(\"book6\", \"sum6\")' src = "https://m.media-amazon.com/images/I/71FDu4RsOwL._UF1000,1000_QL80_.jpg">
                                                <img class='series' id='book7' onclick='showSum(\"book7\", \"sum7\")' src = "https://m.media-amazon.com/images/I/81DPHNK3IIL._SY522_.jpg">`;

    document.getElementById('summaries').innerHTML = `<p class='sums' id='sum2'>There are two sides to every story . . .

                                                    You know Bella and Edward, now get to know Beau and Edythe.

                                                    When Beaufort Swan moves to the gloomy town of Forks and meets the mysterious, alluring Edythe Cullen, his life takes a thrilling and terrifying turn. With her porcelain skin, golden eyes, mesmerizing voice, and supernatural gifts, Edythe is both irresistible and enigmatic.

                                                    What Beau doesn't realize is the closer he gets to her, the more he is putting himself and those around him at risk. And, it might be too late to turn back . . .<p>
                                                    <p class='sums' id='sum3'>For Bella Swan, there is one thing more important than life itself: Edward Cullen. But being in love with a vampire is even more dangerous than Bella could ever have imagined. Edward has already rescued Bella from the clutches of one evil vampire, but now, as their daring relationship threatens all that is near and dear to them, they realize their troubles may be just beginning. Bella and Edward face a devastating separation, the mysterious appearance of dangerous wolves roaming the forest in Forks, a terrifying threat of revenge from a female vampire and a deliciously sinister encounter with Italy's reigning royal family of vampires, the Volturi. Passionate, riveting, and full of surprising twists and turns, this vampire love saga is well on its way to literary immortality.<p>
                                                    <p class='sums' id='sum4'>As the love triangle heats up in the third book, Bella must choose between her friendship with Jacob and her romance with Edward -- and her decision could change the fate of vampires and werewolves forever.
                                                                                As Seattle is ravaged by a string of mysterious killings and a malicious vampire continues her quest for revenge, Bella once again finds herself surrounded by danger. In the midst of it all, she is forced to choose between her love for Edward and her friendship with Jacob -- knowing that her decision has the potential to ignite the ageless struggle between vampire and werewolf.
                                                                                With her graduation quickly approaching, Bella has one more decision to make: life or death. But which is which?<p>
                                                    <p class='sums' id='sum5'>Newly turned vampire Bree Tanner lives in terror -- and must find her way out of untold danger -- in this pulse-pounding novella, a companion to Eclipse.
                                                                            Bree Tanner, a self-described "vampire nerd" first introduced in Eclipse, lives in terror in a coven of newborn vampires. She is a member of Victoria's vampire army, and as that army closes in on Bella Swan and the Cullens, she finds her first friend and discovers a truth about daylight.
                                                                            While fans may know how it ends, they don't yet have the full story: Bree's tale of danger, mystery, and romance is one for the books.<p>
                                                    <p class='sums' id='sum6'>In the explosive finale to the epic romantic saga, Bella has one final choice to make. Should she stay mortal and strengthen her connection to the werewolves, or leave it all behind to become a vampire?
                                                                            When you loved the one who was killing you, it left you no options. How could you run, how could you fight, when doing so would hurt that beloved one? If your life was all you had to give, how could you not give it? If it was someone you truly loved?
                                                                            To be irrevocably in love with a vampire is both fantasy and nightmare woven into a dangerously heightened reality for Bella Swan. Pulled in one direction by her intense passion for Edward Cullen, and in another by her profound connection to werewolf Jacob Black, a tumultuous year of temptation, loss, and strife have led her to the ultimate turning point. Her imminent choice to either join the dark but seductive world of immortals or to pursue a fully human life has become the thread from which the fates of two tribes hangs.
                                                                            This astonishing, breathlessly anticipated conclusion to the Twilight Saga illuminates the secrets and mysteries of this spellbinding romantic epic.<p>
                                                    <p class='sums' id='sum7'>#1 New York Times bestselling author Stephenie Meyer makes a triumphant return to the world of Twilight with this highly anticipated companion: the iconic love story of Bella and Edward, told from the vampire's point of view.   When Edward Cullen and Bella Swan met in Twilight, an iconic love story was born. But until now, fans have heard only Bella's side of the story. At last, readers can experience Edward's version in the long-awaited companion novel, Midnight Sun.   This unforgettable tale as told through Edward's eyes takes on a new and decidedly dark twist. Meeting Bella is both the most unnerving and intriguing event he has experienced in all his years as a vampire. As we learn more fascinating details about Edward's past and the complexity of his inner thoughts, we understand why this is the defining struggle of his life. How can he justify following his heart if it means leading Bella into danger?   In Midnight Sun, Stephenie Meyer transports us back to a world that has captivated millions of readers and brings us an epic novel about the profound pleasures and devastating consequences of immortal love.<p>
                                                   `;
}

function upsideOfFalling() {
    document.title = "The Upside of Falling Novel by Alex Light";
    document.getElementById('pic').src = "../images/novels/Upside.jpg";
    document.getElementById('book').textContent = "The Upside of Falling Novel by Alex Light";

    document.getElementById('summary').textContent = `Summary:
            It's been years since seventeen-year-old Becca Hart believed in true love. 
            But when her former best friend teases her for not having a boyfriend, Becca impulsively pretends she's been secretly seeing someone.

            Brett Wells has it all. Being captain of the football team and one of the most popular guys in school, he should have no problem finding someone to date, but he's always been more focused on his future than who to bring to prom. 
            When he overhears Becca's lie, Brett decides to step in and be her mystery guy. 
            It's the perfect solution: he gets people off his back for not dating and she can keep up the ruse.

            Acting like the perfect couple isn't easy though, especially when you barely know the other person. 
            But with Becca still picking up the pieces from when her world was blown apart years ago and Brett just barely holding his together now, they begin to realize they have more in common than they ever could have imagined. 
            When the line between real and pretend begins to blur, they are forced to answer the question: is this fake romance the realest thing in either of their lives?`;

    document.getElementById('reviews').innerHTML = `My Review: <br> I give this book 4 stars. While there are some slow and dragging parts in the background, the romantic interaction between the characters is never boring and keeps you intrigued throughout the book!
            This book is not completely focused on the romance alone, but has an unbelieveable mystery in Brett's family which they try to work through and pick up the pieces of what's left of his life. 
            There isn't any strong language, but there is a bit of inappropriate content nearing the end of the book and very little in the middle, which is only appropriate for 15 and up.
            <br><br>
            Other's Reviews:<br>
            "I loved it sm omg
            It‘s a fake dating in Highschool young adult books so theres literally no spice at all but the romance and all the quotes were just 10/10 ALSO SHE‘S A BOOKIE okay???? she‘s literally obsessed with books and the way she talks abt the fictional life and all the fictional characters while LITERALLY BEING ONE is just immaculate.
            Family Issues/ Drama and how they deal with it is heavy involved. I love Becca sm bc I honestly feel like she‘s me in every aspect"<br>
            `;

}

function myMechanicalRomance() {
    document.title = "My Mechanical Romance Novel by Alexene Farol Follmuth";
    document.getElementById('pic').src = "../images/novels/Mechanical.jpg";
    document.getElementById('book').textContent = "My Mechanical Romance Novel by Alexene Farol Follmuth";

    document.getElementById('summary').textContent = `Summary: Bel doesn't want to think about the future. College apps? You’re funny. Extracurriculars? Not a chance. Joining a robotics club filled with boys who ignore her or--even worse--constantly ask if she needs help? Please, anything but that. But when she accidentally reveals a talent for engineering in class, she has no choice. Enter Mateo Luna, the handsome captain of the club.

            Teo instantly recognizes Bel's talent. He needs her on the team. And not just because he can't stop thinking about the tiny dusting of freckles around her eyes, or how she got him hooked on Taylor Swift--it's because Bel sees him. She challenges him. But when they seriously start butting heads, Bel wonders: Is there really room for a girl like her in STEM?

            In her YA debut, Alexene Farol Follmuth, author of The Atlas Six (under the penname Olivie Blake), explores both the challenges girls of color face in STEM and the vulnerability of first love with unfailing wit and honesty. Told from dual points of view, My Mechanical Romance is not only swoonworthy--it's downright empowering.`;

    document.getElementById('reviews').innerHTML = `My Review: <br>
                                                    <br><br>
                                                    Other's Reviews: <br>
                                                    I'm sorry but i cant take a man seriously if he is named Teo Luna, i keep reading it as tuna 💀

                                                    Anyways, now that that critical piece of info is out of the way lets continue.

                                                    This book was average. It could have been SOOO much better, if only Teo and Bel were academic rivals and enemies for a longer time. That along with everythinhg else in this book it would have been EPICCC.

                                                    I though that this was going to be academic rivals and enemies to friends to lovers but it was more like i dislike you for a stupid reason to im annoyed that you are smarter then me to sorta friends to ohhh i like him to lovers. I'm not mad, just disapointed.

                                                    Tuna (yes i will be refering to him as that now) was average ( i will proably be using that a lot) hes not too special, everything a love interest could be. Hot, smart, charming, nice. As Tunas mother said 'nerds are hot' But hes noting compared to any one else i have read about. He was still sweet tho.

                                                    And Bel was just plain weird. Not average weird. Cool weird or weird weird i dont know yet. I dont really have much to say about her to be honest she wasnt too interesting.

                                                    Apart from that, i really enjoyed the representation about women in stem being dismissed because they are women and because stem is usually a degree that is dominated by men. And how some of them think that just because they are men it means that they are automatically smarter. And im happy that this book showed that with the prick Richardson.

                                                    Im so mad that this book was average, i was so hyped for it and it makes me super sad that i am 100% going to forget everything about this book in four days.

                                                    Avveragee

                                                    also two birds of a feather were cute.

                                                    toodles,
                                                    Zoe

                                                    3.5 stars
                                                    <br><br>`;

}

// SCI-FI
function hungergames() {
    document.title = "Book 1: The Hunger Games";
    document.getElementById('pic').src = "../images/novels/HungerGames.jpg";
    document.getElementById('series').textContent = "The Hunger Games Trilogy by Suzanne Collins";
    document.getElementById('book').textContent = "Book 1: The Hunger Games";
    document.getElementById('summary').textContent = `Summary: In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. 
                                                    The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. 
                                                    Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. 
                                                    But Katniss has been close to dead before-and survival, for her, is second nature. 
                                                    Without really meaning to, she becomes a contender. 
                                                    But if she is to win, she will have to start making choices that weigh survival against humanity and life against love.`;

    document.getElementById('reviews').innerHTML = `My Review: I give this book 4.5 stars. 
                                                This is a very touching and intense story that has both love and survival as the main conflicts in this dystopian society.
                                                While this book could be in the romance category, it is more thrilling and suspenseful that makes you feel like a big part of the plot.
                                                Suzanne Collins is a master of keeping the reader's attention in this novel throughout the book. 
                                                This book will always be in my top 5 favorite books and top 3 favorite series!
                                                I would recommend this book for kids 10 and up. 
                                                <br><br>Other's Reviews:<br>
                                                <q>My 'Epic Book Recipe' Checklist for The Hunger Games:<br>
                                                <strong>1.</strong> A sharp and intelligent heroine with just the right amount of emotion who gives in to absolutely nothing and no one.<br>
                                                <strong>2.</strong> A sweet and sensitive hero who loves and supports the heroine unconditionally.<br>
                                                <strong>3.</strong> An original setting with a unique and thrilling plot.<br>
                                                <strong>4.</strong> A couple of earth-shattering shocks every now and then to keep the readers' mind reeling.<br>
                                                <strong>5.</strong> Extraordinary side characters from interesting backgrounds who possess the much-needed Voice of Reason and/or Humor in every crisis.<br>
                                                <strong>6.</strong> Desperate circumstances that force me to bite my nails in anxiety.<br>
                                                <strong>7.</strong> An ending that provides the perfect premise for the sequel but also concludes the present book.<br>
                                                Like I said, EPIC.</q>`;
    
    document.getElementById('books').innerHTML = `<img class="series" id="book2" onclick='showSum(\"book2\", \"sum2\")' src = "https://m.media-amazon.com/images/I/410BikysxaL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg">
                                                    <img class="series" id="book3" onclick='showSum(\"book3\", \"sum3\")' src = "https://m.media-amazon.com/images/I/41KNsYsW0xL._SX328_BO1,204,203,200_.jpg">
                                                    <img class="series" id="book4" onclick = 'showSum(\"book4\", \"sum4\")' src = "https://m.media-amazon.com/images/I/512fBEQomNL._SX328_BO1,204,203,200_.jpg">`;
    
    document.getElementById('summaries').innerHTML = `<p class='sums' id='sum2'>Sparks are igniting. Flames are spreading. And the Capitol wants revenge. Against all odds, Katniss has won the Hunger Games. She and fellow District 12 tribute Peeta Mellark are miraculously still alive. Katniss should be relieved, happy even. After all, she has returned to her family and her longtime friend, Gale. Yet nothing is the way Katniss wishes it to be. Gale holds her at an icy distance. Peeta has turned his back on her completely. And there are whispers of a rebellion against the Capitol - a rebellion that Katniss and Peeta may have helped create. Much to her shock, Katniss has fueled an unrest she’s afraid she cannot stop. And what scares her even more is that she’s not entirely convinced she should try. As time draws near for Katniss and Peeta to visit the districts on the Capitol’s cruel Victory Tour, the stakes are higher than ever. If they can’t prove, without a shadow of a doubt, that they are lost in their love for each other, the consequences will be horrifying.</p>
                                                <p class='sums' id='sum3'>My name is Katniss Everdeen. Why am I not dead? I should be dead. Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. Gale has escaped. Katniss’ family is safe. Peeta has been captured by the Capitol. District 13 really does exist. There are rebels. There are new leaders. A revolution is unfolding. It is by design that Katniss was rescued from the arena in the cruel and haunting Quarter Quell, and it is by design that she has long been part of the revolution without knowing it. District 13 has come out of the shadows and is plotting to overthrow the Capitol. Everyone, it seems, has had a hand in the carefully laid plans - except Katniss. The success of the rebellion hinges on Katniss’ willingness to be a pawn, to accept responsibility for countless lives, and to change the course of the future of Panem. To do this, she must put aside her feelings of anger and distrust. She must become the rebels’ Mockingjay - no matter what the personal cost.</p>
                                                <p class='sums' id='sum4'>It is the morning of the reaping that will kick off the tenth annual Hunger Games. In the Capitol, eighteen-year-old Coriolanus Snow is preparing for his one shot at glory as a mentor in the Games. The once-mighty house of Snow has fallen on hard times, its fate hanging on the slender chance that Coriolanus will be able to outcharm, outwit, and outmaneuver his fellow students to mentor the winning tribute. The odds are against him. He's been given the humiliating assignment of mentoring the female tribute from District 12, the lowest of the low. Their fates are now completely intertwined -- every choice Coriolanus makes could lead to favor or failure, triumph or ruin. Inside the arena, it will be a fight to the death. Outside the arena, Coriolanus starts to feel for his doomed tribute... and must weigh his need to follow the rules against his desire to survive no matter what it takes.</p>`;

}

function skyward() {
    document.title = "Book 1: Skyward";
    document.getElementById('pic').src = "../images/novels/Skyward.jpg";
    document.getElementById('series').textContent = "Skyward Series by Brandon Sanderson";
    document.getElementById('book').textContent = "Book 1: Skyward";

    document.getElementById('summary').textContent = `Summary: Spensa's world has been under attack for decades. 
                                                    Now pilots are the heroes of what's left of the human race, and becoming one has always been Spensa's dream. 
                                                    Since she was a little girl, she has imagined soaring skyward and proving her bravery. 
                                                    But her fate is intertwined with her father's--a pilot himself who was killed years ago when he abruptly deserted his team, leaving Spensa's chances of attending flight school at slim to none.
                                                    No one will let Spensa forget what her father did, yet fate works in mysterious ways. 
                                                    Flight school might be a long shot, but she is determined to fly. 
                                                    And an accidental discovery in a long-forgotten cavern might just provide her with a way to claim the stars.`;

    document.getElementById('reviews').innerHTML = `My Review: I give this book 4 stars. This action-filled, suspenseful, and inspiring book about a confident female heroine is a great read for readers who love sci-fi and action with romance sprinkled here and there.
                                                    The series is amazing and consists of 4 main novels (Skyward, Starsight, Cytonic, and Defiant) with 3 novellas in a series Skyward Flight in between the 2nd and 3rd books (Sunreach, ReDawn, and Evershore) and a background-info book that isn't needed to be read to understand the series (Defending Elysium), which I didn't end up reading.
                                                    <br><br>
                                                    Other's Reviews:<br>
                                                    "This is, I think, what I relished most about this book: the way the author gives his characters plenty of room to fumble and triumph. He made a list of characters that kept getting longer (then, heartbreakingly, shorter) and injected them with enough interiority to keep his readers riveted. Spensa’s journey, in particular, is wonderful to watch, and her potential narrative paths for the sequel are very intriguing. I, for one, can’t wait to see where Sanderson takes her."<br>
                                                    "So much happens, the characters are flawed but their growth is fascinating to watch. The story is complex and becomes more interesting as it progresses. Every time I thought I knew where things were going… I was wrong. And happy to be. The teenage angst, an hilarious sentient ship, the lack of romance… This is how you create a fantastic YA book! Sanderson is not afraid to make you laugh... and cry. Absolutely recommend this book. Also shoutout to Doomslug!"<br>
                                                    "I’m fluctuating between a 4 and 5 stars, so 4.5 for now but damn! I felt robbed by that ending. The scope of this world, the characters and plot is about to get even bigger AND THE EXCITEMENT I FEEL! I don’t understand how he does it. Sanderson can’t do no wrong. THIS is how you write a YA sci-fi/fantasy book. With depth and substance, whilst still knowing your target audience. Yes, the above comment is very much a dig at the mediocre YA fantasies that have been getting published. I’m still floating in space - so no ‘review’ from me just yet - but I can arrogantly say that if you didn’t connect to this book, you’re the problem. It’s you."<br>`;
    

    document.getElementById('books').innerHTML = `<img class='series' id='book2' onclick='showSum(\"book2\", \"sum2\")' src = "https://m.media-amazon.com/images/I/51lUy3F+G8L.jpg">
                                                <img class='series' id='book3' onclick='showSum(\"book3\", \"sum3\")' src = "https://m.media-amazon.com/images/I/51RudnaQCYL.jpg">
                                                <img class='series' id='book4' onclick='showSum(\"book4\", \"sum4\")' src = "https://m.media-amazon.com/images/I/51+jccJZfeL._SY346_.jpg">
                                                <img class='series' id='book5' onclick='showSum(\"book5\", \"sum5\")' src = "https://m.media-amazon.com/images/I/51nP3Rkx0sL._SY346_.jpg">
                                                <img class='series' id='book6' onclick='showSum(\"book6\", \"sum6\")' src = "https://m.media-amazon.com/images/I/51moc5DYAuS._SY346_.jpg">
                                                <img class='series' id='book7' onclick='showSum(\"book7\", \"sum7\")' src = "https://m.media-amazon.com/images/I/51NmmzEZp-L._SY346_.jpg">
                                                <img class='series' id='book8' onclick='showSum(\"book8\", \"sum8\")' src = "https://m.media-amazon.com/images/I/51kZRn3pIfL._SY346_.jpg">
                                                `;

    document.getElementById('summaries').innerHTML = `<p class="sums" id="sum2">All her life, Spensa's dreamed of becoming a pilot and proving herself a hero like her father. She made it to the sky, but the truths she learned there were crushing. The rumors of her father's cowardice are true--he deserted his Flight during battle against the Krell. Worse, though, he turned against his team and attacked them.

                Spensa is sure that there's more to the story. And she's sure that whatever happened to her father that day could happen to her. When she made it outside the protective shell of her planet, she heard the stars--and what they revealed to her was terrifying. Everything Spensa has been taught about her world is a lie.
                
                Humankind has always celebrated heros, but who defines what a hero is? Could humanity be the evil the galaxy needs to be protected from? Spensa is determined to find out, but each answer she discovers reveals a dozen new questions: about the war, about her enemies, and even, perhaps, about Spensa herself.
                
                But Spensa also discovered a few other things about herself--and she'll travel to the end of the galaxy to save humankind if she needs to.</p>
            
            <p class="sums" id="sum3">When a planet-destroying Delver suddenly appears in the sky of Detritus and vanishes just as suddenly, FM knows that the last free human society got lucky. Her Skyward Flight companion, Spensa, figured out how to draw this Delver away, but it won’t be so easy next time.
 
                The forces of the Galactic Superiority will be back—and if the Defiant Defense Force can’t figure out a way to escape the planet, humanity’s destruction is only a matter of time. Spensa’s mission to infiltrate the Superiority unveiled the secret to their hyperdrives—a cytonic slug species called the Taynix. Now FM’s flightleader, Jorgen, has found a large group of Taynix hiding in the caverns far below Detritus’s surface.
                 
                FM and Jorgen must work together with the engineer Rig to awaken the mysterious alien Alanik and unlock the powers of the Taynix, or humanity will be trapped. With Spensa’s friend Minister Cuna of the Superiority stranded at the outpost of Sunreach, they need to figure out how to rescue them—or the Superiority government will be in the sole clutches of those who want to wipe out Detritus once and for all.</p>
            
            <p class="sums" id="sum4">“Don’t trust their lies. Don’t trust their false peace.” That is the warning that Alanik of the planet ReDawn gave the human pilot Spensa after Alanik’s ship crash-landed on Detritus. While accepting an invitation to meet with her people’s enemy, the Galactic Superiority, Alanik heard Spensa’s cry for help across the vastness of space, and she used her cytonic powers to hyperjump her ship to the source of that cry. What she found there was a shock—a whole planet of free humans fighting against the Superiority. Were they the allies her people desperately needed?
 
                When she recovered from her injuries and met the friendly humans Jorgen and FM of Skyward Flight, she found that her warning to Spensa had gone unheeded by the government of Detritus, and they were considering a peace overture from the Superiority. Now having returned to ReDawn, Alanik is dismayed to learn that her own people are falling into the exact same trap.
                 
                The faction in ReDawn’s government that wants to appease the Superiority has gained the upper hand. With Alanik’s mentor, Renakin captured, she has no one to turn to but Jorgen, FM, and their friend Rig. An ancient technology may have the power to save both of their planets from disaster, but can they discover its secrets before it’s too late?</p>
            
            <p class="sums" id="sum5">With the government of Detritus in disarray because of Superiority treachery, and with Spensa still away on her mission in the Nowhere, Jorgen must work together with the alien Alanik to pick up the pieces. They intercept a strange transmission from the planet Evershore and its Kitsen inhabitants, who say they have some of Jorgen’s people and want to return them—but can the Kitsen be trusted? And can Jorgen learn to master his increasingly erratic cytonic powers before they spiral out of control and destroy all hope of forming an alliance against the Superiority?</p>
            
            <p class="sums" id="sum6">Spensa’s life as a Defiant Defense Force pilot has been far from ordinary. She proved herself one of the best starfighters in the human enclave of Detritus and she saved her people from extermination at the hands of the Krell—the enigmatic alien species that has been holding them captive for decades. What’s more, she traveled light-years from home as an undercover spy to infiltrate the Superiority, where she learned of the galaxy beyond her small, desolate planet home.
 
                Now, the Superiority—the governing galactic alliance bent on dominating all human life—has started a galaxy-wide war. And Spensa’s seen the weapons they plan to use to end it: the Delvers. Ancient, mysterious alien forces that can wipe out entire planetary systems in an instant. Spensa knows that no matter how many pilots the DDF has, there is no defeating this predator.
                 
                Except that Spensa is Cytonic. She faced down a Delver and saw something eerily familiar about it. And maybe, if she’s able to figure out what she is, she could be more than just another pilot in this unfolding war. She could save the galaxy.
                 
                The only way she can discover what she really is, though, is to leave behind all she knows and enter the Nowhere. A place from which few ever return.
                 
                To have courage means facing fear. And this mission is terrifying.</p>
            
            <p class="sums" id="sum7">Spensa made it out of the Nowhere, but what she saw in the space between the stars has changed her forever. She came face to face with the Delvers, and finally got answers to the questions she's had about her own strange Cytonic gifts. 

                The Superiority didn't stop in it's fight for galactic dominance while she was gone, though. Spensa's team, Skyward Flight, was able to hold Winzik off, and even collect allies to help with the cause, but it's only a matter of time until humanity--and the rest of the galaxy--falls. 
                
                Defeating them will require all the knowledge Spensa gathered while in the Nowhere. But being Cytonic is more complicated than she ever could have imagined. Now, Spensa must ask herself: how far is she willing to go for victory, if it means losing herself--and her friends--in the process.</p>
            
            <p class="sums" id="sum8">Centuries before Spensa looked skyward from the planet Detritus—back on Old Earth before it was lost—Jason Write faced a crucial question: was humanity ready to join galactic society?

                When faster-than-light communications were discovered by a small telephone company in 2071, alien species such as the Tenasi and Varvax overheard them and came to visit Earth. Because the Phone Company controls all communications with the aliens, their operatives like Jason operate above the law.
                
                Now, on the space platform Evensong, one of the Phone Company’s scientists has gone missing before surfacing in a hospital with amnesia, and Jason is sent to investigate. Right as he arrives, the body of a murdered Varvax ambassador is discovered, sure to cause a galactic incident. Coln Abrams of the United Intelligence Bureau seizes the opportunity to investigate Jason as he deals with the crisis. This could be the UIB’s chance to discover the Phone Company’s secrets—how does FTL communication work, and what is Jason hiding?</p>`;

}

// TODO: Add "If you could see the sun," "shadow children," "hatchet," "restart", and "dork diaries" functions




/* TEMPLATE!!!
// Whenever you want to add a new book to the website, just add this function and the details.

function bookname() {
    document.title = "";
    document.getElementById('pic').src = "";
    document.getElementById('series').textContent = "";
    document.getElementById('book').textContent = "";

    document.getElementById('summary').textContent = ``;

    document.getElementById('reviews').innerHTML = ``;
    
    document.getElementById('books').innerHTML = ``;

    document.getElementById('summaries').innerHTML = ``;

}

// IMAGE TAGS FOR BOOK SERIES (up to 9 more books)
// if more books are needed, use the same type of pattern while adding another to the showSum function
    <img class='series' id='book2' onclick='showSum(\"book2\", \"sum2\")' src = "">
    <img class='series' id='book3' onclick='showSum(\"book3\", \"sum3\")' src = "">
    <img class='series' id='book4' onclick='showSum(\"book4\", \"sum4\")' src = "">
    <img class='series' id='book5' onclick='showSum(\"book5\", \"sum5\")' src = "">
    <img class='series' id='book6' onclick='showSum(\"book6\", \"sum6\")' src = "">
    <img class='series' id='book7' onclick='showSum(\"book7\", \"sum7\")' src = "">
    <img class='series' id='book8' onclick='showSum(\"book8\", \"sum8\")' src = "">
    <img class='series' id='book9' onclick='showSum(\"book9\", \"sum9\")' src = "">
    <img class='series' id='book10' onclick='showSum(\"book10\", \"sum10\")' src = "">
*/

// SUMMARY TAGS FOR BOOK SERIES (up to 9 more books)
/*
<p class='sums' id='sum2'><p>
<p class='sums' id='sum3'><p>
<p class='sums' id='sum4'><p>
<p class='sums' id='sum5'><p>
<p class='sums' id='sum6'><p>
<p class='sums' id='sum7'><p>
<p class='sums' id='sum8'><p>
<p class='sums' id='sum9'><p>
<p class='sums' id='sum10'><p>

*/









