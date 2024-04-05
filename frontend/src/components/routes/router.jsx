
import { createBrowserRouter} from 'react-router-dom';
import App from '../../App'
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import ServicesPage from '../pages/ServicesPage';
import Blog from '../blog/Blog';
import PostDetails from '../blog/postdetail/PostDetails';
import Login from '../login/Login';
import CreatePost from '../blog/createPost/CreatePost'

export const router = createBrowserRouter([
  {path:"/", element: <App/>},
  {path:"/servicios", element: <ServicesPage/>},
  {path:"/nosotros", element: <AboutPage/>},
  {path:"/blog", element: <Blog/>},
  {path:"/blog/:id", element: <PostDetails/>},
  {path:"/contacto", element: <ContactPage/>},
  {path:"/login", element: <Login/>},
  {path:"/agregarpost", element: <CreatePost/>},
  
])