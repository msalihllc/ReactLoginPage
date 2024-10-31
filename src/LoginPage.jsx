import React from 'react';
import logo from './assets/logo.png';

const LoginPage = () => {
  return (
    <div className="relative flex h-screen justify-center items-center custom-bg">
      {/* Siyah Opak Katman */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Login Formu */}
      <div className="relative z-10 w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Form Alanları */}
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Kullanıcı Adı</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Kullanıcı adınızı girin"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Şifre</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Şifrenizi girin"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-[#6300a7] rounded hover:bg-[#c1c1c1] transition-colors"
            >
            Giriş
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
