import Navbar from "./Navbar";
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50 text-gray-700">
      <Navbar />
      <main className="2xl:px-96 xl:px-48 sm:px-10 px-5">{children}</main>
      <Footer />

    </div>
  );
}
