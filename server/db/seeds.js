use movies_hub;
db.dropDatabase();

db.movies.insertMany([
    {
        title:"Gantz",
        Genre:"Action/Philosophical",
        rating:"30+",
        release_date:"29jan11",
        runtime:"141 min",
        crew:{
            director:"Shinsuke Sato",
            producer:"Takahiro Sato"
        },
        summary:"NEW PEOPLE and NCM Fathom are bringing the world premiere of GANTZ to movie theaters nationwide for a one night live event on Thursday, Jan. 20 at 8 p.m. ET/ 7 p.m. CT/ 6 p.m. MT/ 8:30 p.m. PT (tape delayed).This live-action feature, based upon the popular Japanese manga and anime series, is the ultimate survival game. It will be English over-dubbed exclusively for this big screen event. Following the feature, the two stars, Kazunari Ninomiya and Kenichi Matsuyama will participate in an exclusive live interview that can only be seen at this event."
    },
    {
        title:"Bleach",
        Genre:"Action/Drama",
        rating:"PG",
        release_date:"28jul18",
        runtime:"92 min",
        crew:{director:"Shinsuke Sato", producer:"Warner Bros. Pictures"},
        summary:"A Japanese teenager acquires the powers of a Soul Reaper after a fateful encounter with an injured Soul Reaper. With her help, he takes on the duty of ushering lost souls into the afterlife and defeating evil spirits that threaten the living world."
    },
    {
        title:"Final Fantasy: Spirits Within",
        Genre:"Action/Sci-Fi",
        rating:"30+",
        release_date:"11jul01",
        runtime:"106 min",
        crew:{
            director:"Hironobu Sakaguchi",
            producer:"Chris Lee, Jun Aida"
        },
        summary:"The first feature-length motion picture to use computer-generated imagery to create not only effects, props, and environments but also the human cast members themselves, this lavish science-fiction adventure follows closely on the heels of another video game-based film, Tomb Raider (2001). Ming-Na provides the voice of Dr. Aki Ross, a female scientist in the year 2065, a time when Earth has been overrun by extraterrestrial phantoms borne of a crashed meteor. Humans have been pushed back to cities protected by barriers that keep the marauding space monsters away, but time is running out. Fatally infected by one of the ghostly beasts, Ross seeks information about their purpose and physiology, assisted by her mentor Dr. Sid (voice of Donald Sutherland) and the Deep Eyes military squad of courageous Captain Gray Edwards (voice of Alec Baldwin). Tension develops between Aki's quest to stop the alien onslaught through study and the more extreme solution favored by the vengeful, saber-rattling General Hein (voice of James Woods), who would destroy both the aliens and the Earth itself. Aki ultimately comes to realize that the key to unlocking the mystery of the invaders lies within her own dreams."
    },
    {
        title:"Final Fantasy: Advent Children",
        Genre:"Action/Adventure",
        rating:"30+",
        release_date:"14sep05",
        runtime:"101 min",
        crew:{
            director:"Tetsuya Nomura",
            producer:"Yoshinori Kitase, Shinji Hashimoto, Ichiro Hazama"
        },
        summary:"A strange disease is decimating the land and it's up to the Hero cloud to emerge from solitude and defeat a new breed of enemy in the computer animated feature that picks up where *Final Fantasy VII left off. It has been two years since the events of *Final Fantasy VII, and though the ruins of Midger still stand to show the sacrifices made for peace, a new threat to mankind has arrived. With the citizens of the countryside falling deathly ill and old enemies rising from the ashes to seek revenge, Cloud must leap back into action and help his fellow men lest his solitude leave all of mankind vulnerable to another devastating attack."
    }
]);
