import Navbar from './Navbar';
import About from './About';

export default function Header() {
  return (
    <div
      className="flex flex-col"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(17, 24, 39, .5), rgba(17, 24, 39, .5)), url("/images/hero.jpg")',
        height: "75vh",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <About />
    </div>
  );
}
