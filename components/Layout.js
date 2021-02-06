import Navbar from "./Navbar";
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="text-gray-700 bg-gray-50 font-monserrat">
      <Header/>
      <main className="px-5 2xl:px-48 xl:px-32 md:px-16 sm:px-10">{children}</main>
      <Footer />
    </div>
  );
}
