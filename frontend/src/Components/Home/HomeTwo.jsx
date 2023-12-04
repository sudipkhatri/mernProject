import React from 'react'

export default function HomeTwo() {
  return (
    <div>
      <div className="flex mx-auto flex-wrap items-center mt-10 sm:mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto text-black">
          <h3 className="text-3xl mb-3 font-semibold leading-normal">
            Why Choose Us?
          </h3>
          {/* <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p> */}
          <p
            className="mb-3 text-gray-600 dark:text-gray-400 
        first-line:uppercase first-line:tracking-widest 
        first-letter:text-7xl first-letter:font-bold 
        first-letter:text-gray-900 dark:first-letter:text-gray-100 
        first-letter:mr-3 first-letter:float-left"
          >
            At Estate, our deep knowledge of the Australian market ensures you
            always get the best deals. We value relationships, offering
            round-the-clock support and guidance every step of the way.
          </p>
          <p className="mt-5 text-gray-600 dark:text-gray-400">
            From buying and selling to property management and legal support, we
            provide a seamless experience. Leveraging cutting-edge technology,
            we make real estate transactions transparent and efficient.
          </p>
          <p className="mt-5 mb-6 text-gray-600 dark:text-gray-400">
            Our reputation in Australian Market is built on trust and proven
            success. With countless satisfied clients, choosing Estate means
            opting for reliability and dedication.
          </p>
        </div>
        <div className="w-full md:w-4/12 flex px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 w-full mb-6 shadow-lg rounded-lg bg-teal-600">
            <img
              alt="..."
              src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg"
              className="w-full align-middle rounded-t-lg"
            />
            <div className="relative p-8 mb-4">
              <h4 className="text-xl font-bold text-white">
                Dedicated Customer Support
              </h4>
              <p className="text-md font-light mt-2 text-white">
                For us, real estate isn't just about property; it's about
                people. Our dedicated team is available around the clock to
                support, advise, and assist you. We pride ourselves on building
                lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
