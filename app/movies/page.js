import MovieSlider from '../(components)/MovieSlider'
import TitleOfCategorySlider from '../(components)/TitleOfCategorySlider';
import MainSlider from '../(components)/mainSlider/MainSlider'
import { getActorData,getMoviesData} from '../utils/getdata';

export async function generateMetadata() {
  return {
    title: "تماشای آنلاین فیلم | نماوا",
    description : "سایت فیلم نماوا کاملترین فیلم های روز دنیا را با ترافیک نیم بها ارائه می دهد. علاوه بر تماشای آنلاین فیلم های جدید، دانلود فیلم ها نیز در اختیار شما قرار میگیرد. با خرید اشتراک نماوا میتوانید دانلود رایگان فیلم را تجربه کنید."
  }
}


export default async function Movies() {

  const movieData = await getMoviesData()
  const movies = movieData.record
  const actorData= await getActorData();
  const actor = actorData.record

  //select categories movie

  const selectMovie = (categoryId) => {
    const movieData = movies.filter((movie)=>{
      return movie.categoryId == categoryId;
    })
    return movieData
  }
  const actionMovies = selectMovie(12);
  const comedyMovies = selectMovie(13);
  const horrorMovies = selectMovie(14);
  const dramaMovies = selectMovie(16);
  const scifiMovies = selectMovie(17);

  //select best movies --> imdb > 7

  const bestMovies = movies.filter((movie)=>{
    return movie.imdb >= 7;
  })
  
  //select is dubbed movies

  const dubbedMovies = movies.filter(( movie )=>{
    return movie.isDubbed
  })

  //select new movies
  const newMovieId = movies.length - 10;
  const newMovies = movies.filter((movie)=>{
    return movie.id >= newMovieId
  }) 

  return (
  
        <div>
          
            <MainSlider movieData={movie} actors={actor} subject={'homePath'}/>
            <TitleOfCategorySlider title={"تازه های نماوا"} link={"/categories"}/>
            <MovieSlider data={newMovies}/>
            <TitleOfCategorySlider title={"دوبله شده"} link={"/categories"}/>
            <MovieSlider data={dubbedMovies}/>
            <TitleOfCategorySlider title={"اکشن"} link={"/categires/12"}/>
            <MovieSlider data={actionMovies}/>
            <TitleOfCategorySlider title={"کمدی"} link={"/categories/13"}/>
            <MovieSlider data={comedyMovies}/>
            <TitleOfCategorySlider title={"ترسناک"} link={"/categories/14"}/>
            <MovieSlider data={horrorMovies}/>
            <TitleOfCategorySlider title={"درام"} link={"/categories/16"}/>
            <MovieSlider data={dramaMovies}/>
            <TitleOfCategorySlider title={"علمی تخیلی"} link={"/categories/17"}/>
            <MovieSlider data={scifiMovies}/>
            <TitleOfCategorySlider title={"برترین ها"} link={"/categories"}/>
            <MovieSlider data={bestMovies}/>
        </div>
  )
}
