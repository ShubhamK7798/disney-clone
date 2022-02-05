import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRouter } from 'next/router'

const SliderContainer = ({ result ,title}) => {


  const router = useRouter()
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 7,
    // className: "center",
    // centerMode: true,
    // centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const base = "https://image.tmdb.org/t/p/w500/";
  let img;

  return (  <div className="flex flex-col mt-4 ">


    <h1 className="mx-12 text-xl font-lg">{title}</h1>

    <Slider {...settings} className="max-w-screen mx-8 mt-2 flex items-center h-[280px] ">
      {result?.map((i) => {
        img = i.backdrop_path ? i.backdrop_path : i.poster_path
       
         

       return <div
        key={i.id}
        // onClick={()=>router.push(`/${i.id}${img}`)}
        onClick={()=>router.push({
          pathname: `/${i.id}`,
          query : { imgg : i.backdrop_path.slice(0,-4) || i.poster_path.slice(0,-4),
                    type : title },
          
      })}
        className="relative group overflow-hidden max-w-[95%]  h-[230px]  mt-8
        hover:scale-110 transition duration-300 shadow-inner cursor-pointer rounded-md "
        >
          {/* {img = i.backdrop_path ? i.backdrop_path : i.poster_path} */}
          

           
            {/* {(base+img)} */}
        
          <Image 
          blurDataURL={base + img} 
          placeholder="blur"
          alt="banner"
            // src={base + i.backdrop_path || base + i.poster_path}
            src={base + img }
            layout="fill"
            objectFit="cover"
            priority
            
            
            
            />

            <div className="absolute bottom-0 h-full w-full opacity-0 group-hover:opacity-100 p-2 flex flex-col flex-wrap text-sm space-y-4 text-white group-hover:bg-black/50">

              <div className="mt-32 p-2">
                
                <h1 className="text-normal font-semibold text-red-400 underline underline-offset-2  " >{i.title || i.name}</h1>
                  <p >{i.overview.slice(0,40) + '...'}</p>
                </div>





            </div>
        </div>
})}
    </Slider>




      </div>
  );
};

export default SliderContainer;
