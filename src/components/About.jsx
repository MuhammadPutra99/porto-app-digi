import AboutComponent from "./nestedcomponents/AboutComponent";
import AboutContent from "./nestedcomponents/AboutContent";
import { useNavigate } from "react-router-dom";
import logoPutroo from '../asset/putrod.jpeg';

function About() {

  const navigate = useNavigate();

  return (
    <>
    <div className="bg-black min-h-screen">
      <div className="flex justify-center pt-3">
        <ul className="flex gap-x-5">
          <li
          className="font-thin text-white cursor-pointer hover:opacity-80"
          onClick={() => navigate('/')}>
            Home
          </li>

          <li
          className="font-thin text-white cursor-pointer hover:opacity-80"
          onClick={() => navigate('/service')}>
            Service
          </li>
        </ul>
      </div>

      <div className="flex pt-4">
        {/* DIV LEFT */}
        <div className="w-1/2 pl-10 pt-20 grid grid-cols-2 gap-6">
          <div>
            <AboutComponent 
            variant='bg-gradient-to-r from-yellow-400 to-yellow-600'
            text='text-black font-semibold text-lg'>

              <p>My Favorite Music</p>
            </AboutComponent>
            <AboutContent>
                <p>- Skyfall</p>
                <p>- Memory Reboot</p>
                <p>- Royalty</p>
                <p>- If We Being Real</p>
                <p>- Wait and Bleed</p>
            </AboutContent>
          </div>

          <div>
            <AboutComponent 
            variant='bg-gradient-to-r from-emerald-400 to-green-600'
            text='text-black font-semibold text-lg'>

              <p>
                My Favorite Books
              </p>
            </AboutComponent>
            <AboutContent>
                <p>- The Intelligent Investor</p>
                <p>- Rich Dad Poor Dad </p>
                <p>- Psychology of Money</p>
                <p>- Negeri Para Bedebah</p>
                <p>- Filosofi Teras</p>
            </AboutContent>
          </div>

          <div>
            <AboutComponent 
            variant='bg-gradient-to-r from-blue-400 to-indigo-600'
            text='text-black font-semibold text-lg'>

              <p>My Favorites Hobbies</p>
            </AboutComponent>
            <AboutContent>
              <p>- Futsal, jogging, etc</p>
              <p>- Reading book</p>
              <p>- Watching Films</p>
              <p>- Workout</p>
              <p>- Coding</p>
            </AboutContent>
          </div>

          <div>
            <AboutComponent 
              variant='bg-gradient-to-r from-pink-400 to-pink-600'
              text='text-black font-semibold text-lg'>
              <p>My Favorite Movies</p>
            </AboutComponent>
            <AboutContent>
              <p>- Spiderman Series</p>
              <p>- Naruto Series</p>
              <p>- Rush Hour Series</p>
              <p>- Jurrasic World Series</p>
              <p>- Sijjin, Pengabdi Setan, etc</p>
            </AboutContent>
          </div>

          <div className="flex flex-row text-2xl gap-x-2">
            <p className="text-white font-medium">
              More about Me?
            </p>

            <p className="text-yellow-500 font-bold">
              Soon :)
            </p>
          </div>
        </div>
        
        {/* DIV RIGHT */}
        <div className="w-1/2">
          <p 
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent text-4xl 
          font-bold text-center text-yellow-500 underline pt-16">
            My Top 3 :
          </p>

          <p className="text-white font-semibold text-3xl text-center">
            Daily Activities
          </p>

          <div className="flex pt-10 justify-center items-center">
            <img src={logoPutroo} alt="logo-putro" 
            className='w-44 h-48 rounded-full'/>
          </div>

          <p className="px-52 pt-5 text-center text-white font-light">
            "Selalu jalani, resapi, dan syukuri setiap kejadian yang berlalu."
          </p>

          <p className="px-40 pt-5 text-center text-white font-medium">
            - Muhammad Putra -
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default About;