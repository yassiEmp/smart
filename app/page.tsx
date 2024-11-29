import React from "react";

const Home = () => {
  return (
    <section className="relative w-[320px] h-[658px] bg-gray-200 flex flex-col justify-center items-center p-0 overflow-hidden border border-red-600">
      <section className="w-[95%] h-[95%] border border-black relative top-0 left-0">
        <section className="w-full h-[167px] bg-gray-500 rounded-3xl">
          <div className="border border-black h-[80px] flex p-2 ">
            <div>
              <h2>bienvenue a la maison</h2>
              <p>mr arnaud</p>
            </div>
            <div>
              <img src="nuage.png" alt="une image de  nuage" />
              <p>le soleil avec un peu de nuage</p>
            </div>
          </div>
          <div>
            <div>
              <p>27deg</p>
              <p>temperature</p>
            </div>
            <div>
              <p>27deg</p>
              <p>temperature</p>
            </div>
            <div>
              <p>27deg</p>
              <p>temperature</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Home;
