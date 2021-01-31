import Navbar from "../components/Navbar";
import About from "../components/About";
import Layout from "../components/Layout";
import Articles from "../components/Articles";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <Layout>
      <About />
      <Projects />
      <Articles />
    </Layout>
  );
};

export default Home;
