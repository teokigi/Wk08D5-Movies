use movies;

db.dropDatabase();

db.movies.insertMany([
    {title:"Gantz", director:"Shinsuke Sato", producer:"Takahiro Sato",runningTime:141,budget:"2.1 billion yen", boxOffice:"7.4 billion yen"},
    {title:"Bleach", director:"Shinsuke Sato", boxOffice:"493,052,600 yen"},
    {title:"Final Fantasy: Spirits Within", director:"Hironobu Sakaguchi", producer:["Chris Less","Jun Aida"],runningTime:106,budget:"137 million USD",boxOffice:"85.1 million USD"},
    {title:"Final Fantasy: Advent Children", director:"Tetsuya Nomura", producer:["Yoshinori Kitase","Shinji Hashimoto","Ichiro Hazama"], runningTime:101}
]);
