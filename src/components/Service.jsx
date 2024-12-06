import { useNavigate } from "react-router-dom";

function Service() {

  const navigate = useNavigate();

  return(
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
          onClick={() => navigate('/about')}>
            About
          </li>
        </ul>
      </div>

      <div className="relative top-60 flex flex-col text-center">
        <p className="text-white font-semibold text-5xl">
          Thankyou For Visiting
        </p>

        <p className="flex gap-2 justify-center text-white font-semibold text-5xl">
          My 
            <p className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Portofolio
            </p>
          Website!
        </p>
      </div>
    </div>
    </>
  )
}

export default Service;