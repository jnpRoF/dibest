import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SectionHead from "./components/SectionHead/SectionHead";
import Search from "./components/Search/Search";
import Products from "./components/Products/Products";
import Pagination from "./components/Pagination/Pagination";
import Banner from "./components/Banner/Banner";
// import { useState, useEffect } from "react";
// import axios from "axios";

const App = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://panel.dibestspot.com/api/public/category"
  //       );
  //       const responseData = response.data;
  //       console.log(responseData);
  //       setData(responseData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      {/* <Header /> */}
      <HeroSection />
      <SectionHead />
      <Search />
      <Products />
      <Pagination />
      <Banner />
      {/* <Footer /> */}
    </>
  );
};

export default App;

