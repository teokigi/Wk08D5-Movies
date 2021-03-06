const baseUrl = 'http://localhost:3000/api/movies/'

export default{

    //get all
    getMovies(){
        return fetch(baseUrl)
        .then( res=> res.json())
    },
    //show 1
    getMovie(id){
        return fetch(baseUrl + id)
        .then(res =>res.json())
    },
    //delete 1
    deleteMovie(id){
        console.log(id)
        return fetch(baseUrl + id, { method: 'DELETE' })
        .then(res => res.json())
    }

}
