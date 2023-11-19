import NavBar from "./NavBar";
import Footer from "./footer";
import bgimg from "./assets/pic_1.jpg";
import { IoIosContact } from "react-icons/io";
import { MdOutlineContactPage } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

function Home() {
  const tutionCategories = [
    { type: "Bangla Medium" },
    { type: "English Medium" },
    { type: "English Version" },
    { type: "Madrasha Medium" },
    { type: "Admission Test" },
    { type: "Test Prepation" },
  ];
  const process = [
    { img: <IoIosContact />, title: "Create an Account" },
    { img: <MdOutlineContactPage />, title: "CV/Resume" },
    { img: <IoIosSearch />, title: "Find Your Job" },
    { img: <IoIosSend />, title: "Save & Apply" },
  ];
  return (
    <div className="">
      <NavBar></NavBar>
      {/* banner */}
      <div className="w-fit h-[92vh] relative">
        <img src={bgimg} className="h-full w-screen" />
        {/* content */}
        <div className="absolute top-0 w-full bg-black/[.45] h-full">
          <h1 className="text-7xl w-1/2 text-white font-bold translate-x-1/2 translate-y-1/2">
            Hello Tutor,
            <br /> The Best Tutoring Platform for Home Tutor
          </h1>
        </div>
      </div>
      {/* tution type */}
      <div className="container px-32 mx-auto mt-20">
        <h1 className="text-5xl font-bold text-center mb-20">
          Tution Category
        </h1>
        <div className="grid grid-cols-3 gap-5 items-center justify-center text-center ">
          {tutionCategories.map((category, index) => (
            <div
              key={index}
              className=" btn hover:btn-success text-xl  hover:text-white"
            >
              {category.type}
            </div>
          ))}
        </div>
      </div>
      {/* how does it work */}
      <div className="container px-32 mx-auto my-20">
        <h1 className="text-5xl font-bold text-center mb-20">
          How does it work ?
        </h1>
        <div className="flex items-center justify-between">
          {process.map((process, index) => (
            <div
              key={index}
              className="card card-compact  bg-base-100 shadow-xl"
            >
              <figure className="text-5xl hover:text-success">{process.img}</figure>
              <div className="card-body">
                <h2 className="card-title">{process.title}</h2>
                <p></p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
