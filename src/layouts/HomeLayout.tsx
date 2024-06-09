import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

function HomeLayout() {
  return (
    <>
      <Navbar />

      <main>
        <div>
          <Outlet />
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default HomeLayout;
