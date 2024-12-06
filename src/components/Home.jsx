import { useNavigate } from "react-router-dom";
import logoPutro from '../asset/putro.png';

const Home = () => {

  const navigate = useNavigate();
  return (
    <>
    {/* NAVBAR */}
    <div className="bg-black  min-h-screen">
      <div className="flex justify-between items-center px-7 w-full h-16 bg-black">
        <p className="text-white text-xl font-semibold">My Portofolio</p>
        <ul className="flex gap-x-5">
          <li
          className="font-thin text-white cursor-pointer hover:opacity-80"
          onClick={() => navigate('/about')}>
            About
          </li>

          <li
          className="font-thin text-white cursor-pointer hover:opacity-80"
          onClick={() => navigate('/service')}>
            Service
          </li>
        </ul>
      </div>
      {/* NAVBAR */}

      <div className="flex">
        {/* DIV LEFT */}
        <div className="w-1/2">
          <div className="pl-10 pt-14 gap-y-10">
            <p className="mb-2 text-white text-6xl font-bold">
              Si calon
            </p>

            <div className="px-1 bg-gradient-to-r from-yellow-400 to-amber-500 inline-block">
              <p className="relative bottom-1 text-black text-6xl font-bold">
                Front-End
              </p>
            </div>

            <p className="text-white text-6xl font-bold">
              Web Developer
            </p>
          </div>
          
          <p className="pl-10 pr-24 pt-10 text-white text-justify">
            "Menjadi <i>Front-End developer</i> merupakan impian saya ketika 
            pertamakali terjun kedalam dunia pemrograman.
            Menurut saya, seorang Front-End developer itu adalah
            orang yang sangat keren. Mengapa? Karena mereka
            mampu mengekspresikan emosi serta imajinasi mereka 
            ke dalam sebuah rentetan kode, yang pada akhirnya
            menjadi sebuah website."
          </p>

          <div className="flex gap-x-3 pl-10 pt-5">
            <p className="text-white text-lg font-bold">
              Kenalan lebih lanjut?
            </p>
            <a 
            target="_blank" 
            href="https://wa.me/qr/JRPSN6LNB37OA1"
            className="bg-gradient-to-l from-yellow-400 to-amber-500 inline-block bg-clip-text 
            text-transparent text-lg font-semibold hover:underline hover:text-yellow-500">
              Klik disini!
            </a>
          </div>
        </div>

        {/* DIV LEFT : END */}

        {/* DIV RIGHT */}
        <div className="w-1/2">
          <div className="pl-14 pt-10 flex">
            <div className="relative top-1 w-2 h-26 bg-yellow-500"></div>
            <div className="pl-2 pr-40 text-white">
              <p className="font-semibold">
                Muhammad Putra Darmawan .W
              </p>

              <p className="text-sm font-light">
                Siswa kelas XI PPLG 2 dari SMKN 8 Semarang.
                Sejak kecil sudah tertarik dengan hal-hal berbau teknologi, seni, serta logika.
                Cita-cita masa kecilnya pengen jadi kayak Tony Stark, superhero yang ahli teknologi.
                Hobinya beraneka ragam, menyesuaikan kondisi mood.
              </p>
            </div>
          </div>

          <img src={logoPutro} 
          alt="logo" 
          className="absolute right-0 bottom-0"/>
        </div>
      </div>
      {/* DIV RIGHT : END */}
    </div>
    </>
  )
}

export default Home;