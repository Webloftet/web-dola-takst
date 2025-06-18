import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar  from '../components/Navbar'
import  Footer  from '../components/Footer'
import ScrollToTop from "../components/ScrollToTop";

export const Layout = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop/>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="min-h-screen"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}