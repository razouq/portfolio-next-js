import Navbar from './Navbar';

export default function Header() {
  return (
    <div
      style={{
        // background: 'url("/images/hero.jpg") no-repeat, linear-gradient(135deg, #50A684 30%, #115E67 90%)',
        backgroundImage: 'linear-gradient(to right, rgba(17, 24, 39, .5), rgba(17, 24, 39, .5)), url("/images/hero.jpg")',
        height: "75vh",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
    </div>
  );
}
