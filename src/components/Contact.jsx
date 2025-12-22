import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log("Form submitted:", formData);
    alert("Terima kasih! Pesan Anda telah dikirim.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

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
          onClick={() => navigate('/about')}>
            About
          </li>

          <li
          className="font-thin text-white cursor-pointer hover:opacity-80"
          onClick={() => navigate('/service')}>
            Service
          </li>

          <li
          className="font-thin text-white cursor-pointer hover:opacity-80"
          onClick={() => navigate('/contact')}>
            Contact
          </li>
        </ul>
      </div>

      <div className="flex justify-center pt-10 px-4">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl font-bold text-white text-center mb-2">
            Contact Me
          </h1>
          <p className="text-gray-400 text-center mb-10">
            Hubungi saya untuk pertanyaan atau kolaborasi
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama Anda"
                required
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan email Anda"
                required
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Subjek
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Masukkan subjek"
                required
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-white font-semibold mb-2">
                Pesan
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tulis pesan Anda di sini..."
                rows="6"
                required
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:opacity-90 transition"
            >
              Kirim Pesan
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800">
              <h3 className="text-yellow-400 font-bold mb-2">Email</h3>
              <p className="text-gray-300">your.email@example.com</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800">
              <h3 className="text-yellow-400 font-bold mb-2">Phone</h3>
              <p className="text-gray-300">+62 123 4567 8900</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center border border-gray-800">
              <h3 className="text-yellow-400 font-bold mb-2">Location</h3>
              <p className="text-gray-300">Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
