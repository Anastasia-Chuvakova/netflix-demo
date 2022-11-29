//api key
const key = '9c8de4dc664ecb68dfefc525e0e6e5f2'

//request different endpoints
 const requests = {
    reqPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    reqTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    reqTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    reqUpcoming:`https://api.themoviedb.org/3/movie/popular?api_key=${key}`,

}
export default  requests