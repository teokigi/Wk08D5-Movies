use movies_hub;
db.dropDatabase();

db.movies.insertMany([
    {title:"Gantz", Genre:"Action/Philosophical", rating:"10/10", release_date:"29jan11", runtime:"141 min"},
    {title:"Bleach", Genre:"Action/Drama", rating:"5/10", release_date:"28jul18", runtime:"92 min"},
    {title:"Final Fantasy: Spirits Within", Genre:"Action/Sci-Fi", rating:"4/10", release_date:"11jul01", runtime:"106 min"},
    {title:"Final Fantasy: Advent Children", Genre:"Action/Adventure", rating:"9/10", release_date:"14sep05", runtime:"101 min"}
]);
