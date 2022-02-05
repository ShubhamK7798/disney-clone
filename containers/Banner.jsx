
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (  <AiOutlineArrowRight className="  right-0 top-36 absolute z-10  text-3xl opacity-50 hover:opacity-100 cursor-pointer" onClick={onClick} />
    //   <div
    //     className={className}
    //     style={{ ...style, display: "block", background: "red" }}
    //     onClick={onClick}
    //   />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    //   <div >
                    <AiOutlineArrowLeft className="   top-36 absolute z-10  text-3xl opacity-50 hover:opacity-100 cursor-pointer" onClick={onClick} />
    //   </div>


               
        // className={className}
        // style={{ ...style, display: "block"  }}
        // onClick={onClick}
    
    );
  }




const Banner = () => {

    

    let settings = {
        fade: true,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
      };






  return <div className="">
        <Slider  {...settings} className="mx-4 ">


          <div className="relative  h-80  ">

              <Image src="/slider-1.jpg" layout="fill"   alt="banner"  priority  className=" object-contain scale-y-[2.5] sm:object-cover sm:scale-100"/>
          </div>
          <div className="relative  h-80">

              <Image src="/slider-2.jpg" layout="fill"  alt="banner" className=" object-contain scale-y-[2.5] sm:object-cover sm:scale-100" />
          </div>
          <div className="relative  h-80">

              <Image src="/slider-3.jpg" layout="fill"  priority alt="banner" className=" object-contain scale-y-[2.5] sm:object-cover sm:scale-100"/>
          </div>
         





      </Slider>

      
     



  </div>;
};

export default Banner;
