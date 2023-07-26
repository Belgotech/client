import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
 } from "react-router-dom";

//Components
import { 
  Home,
  Navbar, 
  Transactions, 
  About,
  Contact,
  PageNotFound
} from "./components";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />} >
      
      <Route index element={< Home  />} />
      <Route path="transactions" element={< Transactions  />} />
      <Route path="about" element={< About  />} />
      <Route path="contact" element={< Contact />} />

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/> 
  )
};

export default App;
