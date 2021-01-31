import Navbar from "./Navbar";
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50 text-gray-700">
      <Header/>
      <main className="2xl:px-48 xl:px-32 md:px-16 sm:px-10 px-5">{children}</main>
      <Footer />

    </div>
  );
}
