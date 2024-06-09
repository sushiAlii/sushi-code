import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

function HomeLayout() {
  return (
    <>
      <Navbar />

      <main>
        <div>
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomeLayout;
