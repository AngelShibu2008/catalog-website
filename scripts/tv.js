window.onload = function loadPage() {
    // Expands each box for the first time so that the actual clicks will result in the transtional expansion
    const headings = document.getElementsByClassName('headings');
    for (let i = 0; i < headings.length; i++) {
        var box = headings[i].id;
    }
}

function expand(name) {
    var box = document.getElementById(name + 'TV');
    expandHelper(box);
}

function showInfo(divName) {
    const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        items[i].style.boxShadow = "";
    }
    const info = document.getElementById('info');
    const div = document.getElementById(divName);
    info.style.display = "inline-block";
    div.style.boxShadow = "0px 0px 10px 5px rgb(121, 0, 0)";

    enterInfo(divName);

}

function closeInfo() {
    const info = document.getElementById('info');
    info.style.display = "none";
    const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        const div = document.getElementById(items[i].id);
        div.style.boxShadow = "";
    }
    
}

const list = [
    // K-Dramas

    { divName: 'QueenOfTears', name: 'Queen of Tears', year: 2024, rating: 'TV-14', seasons: '1 Season', episodes: '16 Episodes', genre: 'Romance', cast: 'Kim Soo-hyun, Kim Ji-won, Park Sung-hoon', crew: 'Park Ji-eun, Jang Young-woo, Kim Hee-won',
        summary: 'The queen of department stores and her small-town husband weather a marital crisis &#8212; until love miraculously begins to bloom again.',  
        image: 'https://www.jaehakim.com/wp-content/uploads/2024/02/QUEEN-OF-TEARS-kim-soo-hyun-kim-ji-won.jpeg'
    },
    { divName: 'MyDemon', name: 'My Demon', year: 2023, rating: 'TV-14', seasons: '1 Season', episodes: '16 Episodes', genre: 'Romance', cast: 'Song Kang, Kim You-jung, Lee Sang-yi', crew: 'Choi A-il, Kim Jang-han, Kwon Da-som', 
        summary: 'A pitiless demon becomes powerless after getting entangled with an icy heiress, who may hold the key to his lost abilities &#8212; and his heart.',
        image: 'https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeL-khUK_CwyMApXmxxiyAZGMAE_hCfQK_cwYQd2MMRX-UviUJL1mKQuOxND8D2kH3c_Ht5tM20rOq3j9oIRCZuxxMxUZ2y0bRqu.jpg?r=51d'
    },
    { divName: 'KingTheLand', name: 'King the Land', year: 2023, rating: 'TV-14', seasons: '1 Season', episodes: '16 Episodes', genre: 'Romance', cast: 'Lee Jun-ho, Lim Yoon-a, Go Won-hee', crew: 'Lim Hyun-ook, Chun Sung-il, Choi Rome', 
        summary: "Amid a tense inheritance fight, a charming heir clashes with his hardworking employee who's known for her irresistible smile &#8212; which he cannot stand.",
        image: '../images/tv_shows/King_The_Land.png'
    },
    { divName: 'DoctorSlump', name: 'Doctor Slump', year: 2024, rating: 'TV-14', seasons: '1 Season', episodes: '16 Episodes', genre: 'Romance', cast: 'Park Hyung-sik, Park Shin-hye, Yoon Bak', crew: 'Paek Sun-woo, Oh Hyeon-jong', 
        summary: "Once rivals in school, two brilliant doctors reunite by chance &#8212; each facing life's worst slump and unexpectedly finding solace in each other.",
        image: '../images/tv_shows/Doctor_Slump.png'
    },
    { divName: 'DoomAtYourService', name: 'Doom at Your Service', year: 2021, rating: 'TV-14', seasons: '1 Season', episodes: '16 Episodes', genre: 'Drama', cast: 'Park Bo-young, Seo In-guk, Lee Soo-hyuk', crew: 'Kwon Young-il, Yu Je-won, Im Me-ah-ri', 
        summary: "A woman with only a short time to live and a man with the supernatural power to bring the world to an end discover the true meaning of life and love.",
        image: 'https://dramaswithasideofkimchi.com/wp-content/uploads/2021/06/DWASOK14-1.png'
    },
    { divName: 'Vincenzo', name: 'Vincenzo', year: 2021, rating: 'TV-14', seasons: '1 Season', episodes: '20 Episodes', genre: 'Drama', cast: 'Song Joong-ki, Jeon Yeo-been, Ok Taec-yeon', crew: 'Kim Hee-won, Park Jae-beom', 
        summary: "During a visit to his motherland, a Korean-Italian mafia lawyer gives an unrivaled conglomerate a taste of its own medicine with a side of justice.",
        image: '../images/tv_shows/Vincenzo.png'
    },
    { divName: 'LoveNextDoor', name: 'Love Next Door', year: 2024, rating: 'TV-14', seasons: '1 Season', episodes: '16 Episodes', genre: 'Romance', cast: 'Jung Hae-in, Jung So-min, Kim Ji-eun', crew: 'Yu Je-won, Shin Ha-eun', 
        summary: "A woman attempting to reboot her life returns to Korea and becomes entangled with her childhood friend &#8212; with whom she shares a complicated history.",
        image: 'https://images.lifestyleasia.com/wp-content/uploads/sites/2/2024/08/22121011/untitled-design-2024-08-21t112708-804-1600x900.jpeg'
    },

    // C-Dramas

    { divName: 'FallingIntoSmile', name: 'Falling Into Your Smile', year: 2021, rating: 'TV-14', seasons: '1 Season', episodes: '31 Episodes', genre: 'Romance', cast: 'Xu Kai, Cheng Xiao, Zhai Xiaowen', crew: 'Yang Xia, Li Zhanying, Jia Chang', 
        summary: "After joining an all-male e-sports team, an amateur gamer tests her skills and leads her team to the world championships. Based on a novel.",
        image: '../images/tv_shows/Falling_Into_Your_Smile.png'
    },
    { divName: 'HiddenLove', name: 'Hidden Love', year: 2023, rating: 'TV-14', seasons: '1 Season', episodes: '25 Episodes', genre: 'Romance', cast: 'Chen Zheyuan, Zhao Lusi, Victor Ma', crew: 'Lee Ching Jung', 
        summary: "Since high school, Sang Zhi has had a crush on Duan Jiaxu. When fate brings them together again, they find a chance to embark on a sweet relationship.",
        image: 'https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTQbj0JV5Jzo-E2pa1TISGedzuIcuv_Tv0hj77rHhpJGf6JIAkjMme2nPfM-STcFiN-kyg4eVqSEAq2RC1JFij0v0SD9EOmNCy_W.jpg?r=047'
    },
    { divName: 'Unforgettable', name: 'Unforgettable Love', year: 2021, rating: 'TV-PG', seasons: '1 Season', episodes: '24 Episodes', genre: 'Romance', cast: 'Miles Wei, Hu Yixuan, Sun Sicheng', crew: 'Ye Qin, Yulei Li, Tang Fan', 
        summary: "Child psychological counselor Qin Yiyue and He-Group CEO He Qiaoyan married first and then fell in love. The warm and kind Qin Yiyue gradually cured the lonely and indifferent He family of father and son.",
        image: '../images/tv_shows/Unforgettable_Love.png'
    },
    { divName: 'WhenFly', name: 'When I Fly Towards You', year: 2023, rating: 'TV-PG', seasons: '1 Season', episodes: '24 Episodes', genre: 'Romance', cast: 'Zhang Miaoyi, Yiran Zhou, Jiang Zhi Nan', crew: 'Mao Deshu, Zhu Yi', 
        summary: "Set off by a sweet chance encounter, 16-year-old Su Zaizai finds herself helplessly drawn to Zhang Lurang &#8212; her smart, charming yet distant schoolmate.",
        image: '../images/tv_shows/When_Fly.png'
    },
    { divName: 'Moonlight', name: 'Moonlight', year: 2021, rating: 'TV-14', seasons: '1 Season', episodes: '36 Episodes', genre: 'Romance', cast: 'Ester Yu, Ding Yuxi', crew: 'Qing Mei, Qiu Ting, Zhu Qi', 
        summary: "After graduating university with a major in financing, Chu Li successfully enters her dream company, Yuan Yue Publishing House. There she meets author Zhou Chuan, who is said to be gentle as a jade when he's really not.",
        image: '../images/tv_shows/Moonlight.png'
    },
    { divName: 'FirstFrost', name: 'The First Frost', year: 2025, rating: 'TV-14', seasons: '1 Season', episodes: '32 Episodes', genre: 'Romance', cast: 'Bai Jinting, Zhang Ruonan, Edward Chen', crew: '', 
        summary: "Wen Yifan, a reporter, meets Sang Yan, her former high school crush at a bar; initially pretending not to recognize each other, circumstances lead them to become housemates; they rekindle their love and reconcile the relationship.",
        image: ''
    }

];

/* Add this to the array named 'list' below to add a new movie/tv-show

{ divName: '', name: '', year: , rating: '', seasons: '', episodes: '', genre: '', cast: '', crew: '', 
    summary: "",
    image: ''
},

(Note: You might need to create a picture in canva for the sources)

*/

function enterInfo(divName) {
    const name = document.getElementById('name');
    const basics = document.getElementById('basics');
    const summary = document.getElementById('summary');
    const starring = document.getElementById('starring');
    const creators = document.getElementById('creators');
    const info = document.getElementById('info');
    const image = document.getElementById('image');
    
    var show;
    for (let i = 0; i < list.length; i++) {
        if (divName === list[i].divName) {
            show = list[i];
        }
    }
    name.textContent = show.name;
    basics.textContent = (show.year + " | " + show.rating + " | " + show.seasons + " | " + show.episodes + " | " + show.genre);
    summary.innerHTML = show.summary;
    starring.textContent = "Starring: " + show.cast;
    creators.textContent = "Creators: " + show.crew;
    info.style.backgroundImage = "url('" + show.image + "'), linear-gradient(to right, black, white)";
    image.src = show.image;

}