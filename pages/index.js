import Navbar from "../components/Navbar";
import About from "../components/About";
import Layout from "../components/Layout";
import Articles from "../components/Articles";
import Projects from "../components/Projects";
import Header from "../components/Header";

const Home = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Projects />
      <Articles />
    </Layout>
  );
};

export default Home;
