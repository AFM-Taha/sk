import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Navbar from './Components/Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactUs from './Pages/ContactUs/ContactUs';
import Service from './Pages/Service/Service';
import AboutUs from './Pages/AboutUs/AboutUs';
import Blog from './Pages/Blog/Blog';
import BlogDetail from './Pages/Blog/BlogDetails';

function App() {
  // const pathname = useLocation().pathname;
  // const avoidFooter = pathname.includes('/sign-up') || pathname.includes('/kyc') || pathname.includes('/choose-plan') || pathname.includes('/selected-plan') || pathname.includes('/log-in') || pathname.includes('/dashboard');
  // const avoidHeader = false;
  // const dashboardRoutes = [
  //   { path: "home", component: <DashboardHome />, id: 9 }
  // ]

  const routes = [
    { path: '/', component: <Home />, id: 1 },
    { path: '/service', component: <Service />, id: 2 },
    { path: '/contact-us', component: <ContactUs />, id: 3 },
    { path: '/blog', component: <Blog />, id: 4 },
    { path: '/blog-details', component: <BlogDetail />, id: 5 },
    // { path: '/about-us', component: <AboutUs />, id: 2 },



    // { path: "/dashboard/*", component: <ProfileProtected><Dashboard /></ProfileProtected>, children: dashboardRoutes, id: 8 }
  ];
  return (
    <>
      <Navbar />
      {/* {!avoidHeader ? <Header /> : null} */}

      <ScrollToTop />
      <ToastContainer closeOnClick />
      <Routes>
        {
          routes.map(route => {
            return (
              <Route path={route?.path} element={route?.component} key={route?.id}>
                {route?.children && (
                  route?.children.map((child, index) => {
                    return index === 0 ?
                      (<Route key={child?.id} index element={child?.component} />) :
                      (<Route key={child?.id} path={child?.path} element={child?.component} />)
                  })
                )}
              </Route>
            )
          })
        }
      </Routes>
      {/* {!avoidFooter ? <Footer /> : null} */}
    </>
  );
}

export default App;
