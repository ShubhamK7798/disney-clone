import Image from "next/image";
import {  FaSearch } from "react-icons/fa"
import { AiOutlineMenu} from "react-icons/ai"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

// import { useSession, signIn, signOut } from "next-auth/react"






const Header = () => {
 



  const [menu,setMenu] = useState(false)
 
 
  const router = useRouter()

  const[search,setSearch] = useState('')
  const[searchresult,setSearchResult] = useState([])

  const fetchsearch = async () =>{
    const res = search && await fetch(`https://api.themoviedb.org/3/search/company?api_key=${process.env.NEXT_PUBLIC_KEY}&query=${search}&page=1`)
    const data = search && await res.json()
    await setSearchResult(data)
  }

   const handlekey = (e) =>{
    e.key === 'Enter' && fetchsearch()

   }



  return <header className="bg-[#121a27] sticky top-0 z-50 md:px-4 py-3 w-full">
    <nav className="flex justify-around md:justify-between px-8 items-center md:px-8"> 


      <div className="flex items-center space-x-4">
          <AiOutlineMenu onClick={()=> setMenu(!menu)} className="cursor-pointer md:hidden"/>
          <i><Image alt="banner" onClick={()=>router.push("/")} className="cursor-pointer" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"   width={100} height={50} objectFit="contain" /></i>
          <div className="hidden md:flex z-10 md:items-center md:space-x-4">

            <h1 className="cursor-pointer hover:text-white text-white/80 transition-all duration-300">TV</h1>
            <h1 className="cursor-pointer hover:text-white text-white/80 transition-all duration-300">Movies</h1>
            <h1 className="cursor-pointer hover:text-white text-white/80 transition-all duration-300">Sports</h1>
            <h1 className="cursor-pointer hover:text-white text-white/80 transition-all duration-300">Disney+</h1>
          </div>


          {/* mobile menu */}


          <div className={`${menu ? 'fixed translate-x-0' : ' fixed -translate-x-[100vw]' } md:hidden top-20 -left-4 py-4 transition-all duration-300 z-40 flex-col flex space-y-6 px-12 right-0 bg-[#0d111c] h-screen  w-1/2`}>
          <h1 className="cursor-pointer hover:text-white text-white/80 transition-all duration-300 shadow-inner hover:scale-110 text-center shadow-red-500">TV</h1>
            <h1 className="cursor-pointer hover:text-white text-white/80 transition-all duration-300 shadow-inner hover:scale-110 text-center shadow-red-500 ">Movies</h1>
            <h1 className="cursor-pointer hover:text-white text-white/80 transition-all duration-300 shadow-inner hover:scale-110 text-center shadow-red-500">Sports</h1>
            <h1 className="cursor-pointer hover:text-white text-white/80 transition-all duration-300 shadow-inner hover:scale-110 text-center shadow-red-500">Disney+</h1>



          </div>





      </div>


      <div className="flex items-center space-x-4 relative">

        <div className="flex  items-center border-b p-1 w-20 group md:focus-within:w-60 focus-within:border-b-blue-600 duration-300 transition-all">
          <input    type="text" value={search} className="outline-none flex md:flex-grow bg-transparent placeholder:text-gray-500 " placeholder="Search" 
          onChange={(e)=>setSearch(e.target.value)}
          onKeyPress={handlekey}
          onBlur={()=>setSearch('')}/>
          <FaSearch className=" text-sm font-thin text-gray-500"/>


              <div className="absolute top-10 flex bg-black flex-col px-4 space-y-2 z-50">

         { search && searchresult?.results?.slice(0,5)?.map(item => (
           <div key={item.id} className="flex  hover:scale-110 hover:outline-double outline-red-500 px-4  text-center   items-center justify-center bg-[#1a2133] shadow rounded-lg p-2 hover:bg-opacity-40  hover:animate-pulse ">
             {/* <Image src={`https://image.tmdb.org/t/p/w300${item.logo_path}`} width={50} height={50} objectFit="contain" alt="thumbnail"/> */}

           <Link  href="/" >
             <a  >{item.name}</a>

           </Link>
           </div>

                  ))}
          </div>
          </div>
          
        <div className="flex items-center space-x-4 text-xs ">
          <button onClick={()=>router.push('/register')} className="bg-blue-500 hidden lg:flex items-center rounded-lg tracking-wider font-bold  shadow-lg py-1 px-2 ">SUBSCRIBE</button>
           <button  className="font-bold tracking-wider">Login</button> 
         
        </div>

      </div>

    </nav>


    





  </header>;
};

export default Header;
