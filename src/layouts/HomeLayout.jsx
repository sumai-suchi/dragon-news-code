import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div className="mt-10">
      <header>
        <Header></Header>
      </header>
      <section>
        <LatestNews></LatestNews>
      </section>
      <section className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </section>
      <main className="w-11/12 mx-auto  grid grid-cols-12 my-8">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main  col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className=" col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
