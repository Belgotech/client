import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Services from "./Services";
import Transactions from "./Transactions";
import Footer from "./Footer";


const Home = () => (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        {/* <Navbar /> */}
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
  
  export default Home;