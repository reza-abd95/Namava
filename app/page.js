import CategorySlider from './(components)/CategorySlider'
import FilmCrewSlider from './(components)/FilmCrewSlider'
import MovieSlider from './(components)/MovieSlider'
import TitleOfCategorySlider from './(components)/TitleOfCategorySlider';
import MainSlider from './(components)/mainSlider/MainSlider'
import { getActorData, getHomeSliderData ,getMoviesData , getAgentsData , getSeriesMoviesSliderData} from './utils/getdata';

export async function generateMetadata() {
  return {
    title: "تماشای آنلاین فیلم | نماوا",
    description : "سایت فیلم نماوا کاملترین فیلم های روز دنیا را با ترافیک نیم بها ارائه می دهد. علاوه بر تماشای آنلاین فیلم های جدید، دانلود فیلم ها نیز در اختیار شما قرار میگیرد. با خرید اشتراک نماوا میتوانید دانلود رایگان فیلم را تجربه کنید."
  }
}

export default async function Home() {

  const sliderData = await getHomeSliderData();
  const slider = sliderData.record
  const movieData = await getMoviesData()
  const movie = movieData.record
  const actorData= await getActorData();
  const actor = actorData.record
  const agentsData = await getAgentsData();
  const agents = agentsData.record;
  const seriesSliderData = await getSeriesMoviesSliderData();
  const seriesSlider = seriesSliderData.record;


    //select categories movie

    const selectMovie = (categoryId) => {
      const movieData = movie.filter((movie)=>{
        return movie.categoryId == categoryId;
      })
      return movieData;
    }
    const actionMovies = selectMovie(12);
    const comedyMovies = selectMovie(13);
    const horrorMovies = selectMovie(14);
    const dramaMovies = selectMovie(16);
    const scifiMovie = selectMovie(17);
    const scifiMovies = scifiMovie;
    for (let index = 0; index < 5; index++) {
      const element = horrorMovies[index];
      scifiMovies.push(element)
    }

    //select new Year movies --> 2023

    const newYearMovies = movie.filter((movie)=>{
      return movie.year == 2023;
    }) 
    
    //select best movies --> imdb > 7

    const bestMovies = movie.filter((movie)=>{
      return movie.imdb >= 7;
    })

    // select best director

    const bsetDirector = agents.filter((agent)=>{
      return agent.job == "کارگردان";
    })
    //select new movies
    const newMovieId = movie.length - 10;
    const newMovies = movie.filter((movie)=>{
      return movie.id >= newMovieId
    }) 

  return (
  
        <div>
          
            <MainSlider movieData={movie} actors={actor} subject={'homePath'}/>
            <CategorySlider data={slider}/> 
            <TitleOfCategorySlider title={"فیلم ها"} link={"/movies"}/>
            <MovieSlider data={movie}/>
            <TitleOfCategorySlider title={"۲۰۲۳"} link={"/movies"}/>
            <MovieSlider data={newYearMovies}/>
            <TitleOfCategorySlider title={"برترین های IMDB"} link={"/movies"}/>
            <MovieSlider data={bestMovies}/>

            <FilmCrewSlider data={actor} title="ستارگان"/>

            <TitleOfCategorySlider title={"اکشن"} link={"/categories/12"}/>
            <MovieSlider data={actionMovies}/>

            <CategorySlider data={seriesSlider}/> 

            <TitleOfCategorySlider title={"کمدی"} link={"/categories/13"}/>
            <MovieSlider data={comedyMovies}/>
            <TitleOfCategorySlider title={"تازه های نماوا"} link={"/categories"}/>
            <MovieSlider data={newMovies}/>

            <FilmCrewSlider data={bsetDirector} title="کارگردانان بزرگ"/>

            <TitleOfCategorySlider title={"ترسناک"} link={"/categories/14"}/>
            <MovieSlider data={horrorMovies}/>
            <TitleOfCategorySlider title={"درام"} link={"/categories/16"}/>
            <MovieSlider data={dramaMovies}/>
            <TitleOfCategorySlider title={"علمی تخیلی"} link={"/categories/17"}/>
            <MovieSlider data={scifiMovies}/>
            
        </div>
  )
}
