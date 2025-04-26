import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <footer className="py-6 mt-8 text-center border-t-2 border-black bg-white">
        <div className="container mx-auto px-4">
          <p className="text-gray-700">&copy; {new Date().getFullYear()} DeepfakeDetector. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;