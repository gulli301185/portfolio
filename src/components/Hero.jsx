import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

const Hero = () => {
  return (
    <section className="flex w-[90%] mx-auto items-center flex-col  lg:flex lg:flex-row  lg:justify-around lg:items-start space-x-10">
      <div className="order-3 lg:order-1 whitespace-pre-line text-white text-sm lg:text-lg font-bold flex flex-col lg:w-1/3 w-1/2">
        <h1 className="text-3xl lg:text-5xl mt-10 lg:mt-0 mb-10 text-gray-200">{`I'm\n Asman Leila`}</h1>
        <p className="text-gray-200">
          {` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quasi\n asperiores officiis nisi fugiat? Labore, quod neque cupiditate
            fugiat consequuntur iure necessitatibus voluptates, ducimus
            architecto sunt tempora? Ullam, totam quibusdam.`}
        </p>
      </div>

      <div className="lg:order-2 order:1 pb-10 lg:w-1/3 items-center w-fit">
        <img
          className=" rounded-full w-full border-8 border-gray-200 "
          src="https://img2.tradewheel.com/uploads/images/products/2/0/chinese-new-year-dress-design-long-sleeves-flower-lace-kids-baby-girl-party-dress1-0949256001556789437.jpg.webp"
          alt="*"
        />
      </div>

      <div className="lg:order-3 order-2 flex flex-col  space-y-6   lg:w-1/3  my-10 w-1/2">
        <p className="text-3xl lg:text-5xl font-bold text-gray-200">About us</p>
        <p className="text-lg font-mono text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          excepturi aliquam deserunt sapiente ea quasi.
        </p>
        <button className="bg-white text-indigo-600 max-w-52  py-2 rounded-full mt-4 text-lg hover:bg-indigo-600 hover:text-white">
          Show more...
        </button>

        <div className="flex space-x-4 ">
          <BsFacebook
            size={40}
            className="border-2 hover:border-black rounded-full"
          />
          <BsInstagram
            size={40}
            className="border-2 hover:border-black rounded-full"
          />
          <BsTwitter
            size={40}
            className="border-2 hover:border-black rounded-full"
          />
          <BsPinterest
            size={40}
            className="border-2 hover:border-black rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
