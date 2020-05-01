use movies_hub;
db.dropDatabase();

db.movies.insertMany([
    {title:"Gantz", Genre:"Action/Philosophical", rating:"30+", release_date:"29jan11", runtime:"141 min", crew:{director:"Shinsuke Sato", producer:"Takahiro Sato"}},
    {title:"Bleach", Genre:"Action/Drama", rating:"PG", release_date:"28jul18", runtime:"92 min", crew:{director:"Shinsuke Sato", producer:"Warner Bros. Pictures"}},
    {title:"Final Fantasy: Spirits Within", Genre:"Action/Sci-Fi", rating:"30+", release_date:"11jul01", runtime:"106 min", crew:{director:"Hironobu Sakaguchi", producer:"Chris Lee, Jun Aida"}},
    {title:"Final Fantasy: Advent Children", Genre:"Action/Adventure", rating:"30+", release_date:"14sep05", runtime:"101 min", crew:{director:"Tetsuya Nomura", producer:"Yoshinori Kitase, Shinji Hashimoto, Ichiro Hazama"}}
]);
