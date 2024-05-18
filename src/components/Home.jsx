import Navbar from "./Nav";
import Footer from "./Footer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <header className="grid grid-cols-2 p-20 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate__animated  animate__fadeIn">
          <div>
            <img
              src="./images/student.jpg"
              alt="student"
              className="w-3/4 rounded-full animate__animated animate__pulse animate__infinite border border-2 shadow-xl"
            />
          </div>
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-7xl font-bold text-slate-100">
              "Say Hello! JustCoder
            </h1>
            <p className="text-2xl font-semibold">
              Enjoy complete digital learning experience with JustCoder by Shiv
              Singh.
            </p>
            <div className="flex gap-5">
              <button className="bg-[#100d22] text-white px-8 py-4 rounded-md text-xl hover:bg-orange-600">
                Learn more
              </button>
              <button className=" text-[#100d22] px-8 py-3 rounded-md text-xl  font-medium border border-2 border-[#100d22]">
                Watch video
              </button>
            </div>
          </div>
        </header>

        <div className="p-24">
          <h1 className="text-center text-4xl font-bold">
            Benifits & Advantages
          </h1>
          <p className="text-justify text-gray-600 mt-8 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            cumque, voluptas itaque officiis ipsam facilis culpa necessitatibus
            dolorem delectus pariatur. Exercitationem voluptatum impedit
            sapiente ipsum porro eos ab voluptatibus blanditiis minima cumque
            quam voluptatem natus maxime consectetur fuga, quidem provident?
            Blanditiis, magnam! Laudantium reiciendis, tempore odit molestiae,
            alias ipsum quod non optio excepturi placeat voluptates. Provident
            eaque fugit molestias aliquid labore! Deleniti porro odio, nobis
            facilis aut sed magni doloribus? Laborum accusantium deleniti nam
            facilis ut asperiores ullam impedit earum iure! Architecto,
            accusamus at beatae nostrum nesciunt recusandae suscipit dolorum
            harum alias ipsum! Ad eaque possimus minima excepturi explicabo
            ipsa.
          </p>

          <div className="w-11/12  mx-auto mt-12 grid grid-cols-3 gap-8">
            <div className="shadow-lg border rounded-md p-4 text-center">
              <i className="ri-artboard-line text-6xl "></i>
              <h1 className="text-2xl font-semibold mb-2">Great Faculty</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates beatae necessitatibus consequatur velit fuga.
              </p>
            </div>
            <div className="shadow-lg border rounded-md p-4 text-center">
              <i className="ri-edit-box-line text-5xl"></i>
              <h1 className="text-2xl font-semibold mb-2">Latest Curriculum</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates beatae necessitatibus consequatur velit fuga.
              </p>
            </div>
            <div className="shadow-lg border rounded-md p-4 text-center">
              <i class="ri-tree-fill text-6xl text-green-700"></i>
              <h1 className="text-2xl font-semibold mb-2">Green Environment</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates beatae necessitatibus consequatur velit fuga.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 p-12">
          <div>
            <Swiper className="mySwiper w-8/12 ">
              <SwiperSlide>
                <img src="./student/s1.jpg" alt="s1" className="w-full" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="./student/s2.jpg" alt="s2" className="w-full" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="./student/s3.jpg" alt="s3" className="w-full" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="./student/s4.jpg" alt="s4" className="w-full" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col gap-8 justify-center ">
            <h1 className="text-7xl font-bold ">"Say Hello! JustCoder</h1>
            <p className="text-2xl font-semibold">
              Enjoy complete digital learning experience with JustCoder by Shiv
              Singh.
            </p>
            <div className="flex gap-5">
              <button className="bg-[#100d22] text-white px-8 py-4 rounded-md text-xl hover:bg-orange-600">
                Learn more
              </button>
              <button className=" text-[#100d22] px-8 py-3 rounded-md text-xl  font-medium border border-2 border-[#100d22]">
                Watch video
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
