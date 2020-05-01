use movies_hub;
db.dropDatabase();

db.movies.insertMany([
    {title:"Gantz", director:"Shinsuke Sato"},
    {title:"Bleach", director:"Shinsuke Sato"},
    {title:"Final Fantasy: Spirits Within", director:"Hironobu Sakaguchi"},
    {title:"Final Fantasy: Advent Children", director:"Tetsuya Nomura"}
]);
