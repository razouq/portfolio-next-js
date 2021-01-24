import Navbar from "./Navbar";
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50 text-gray-700">
      <Navbar />
      <main className="px-20">{children}</main>
      <Footer />

    </div>
  );
}
