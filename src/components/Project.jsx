const Project = () => {
  return (
    <>
      <div className="bg-indigo-700 max-w-full m-20">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Projects</h1>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
            <div className="max-w-md md:max-w-2xl mx-auto overflow-hidden shadow-md rounded-xl bg-white hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <h1 className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Hospital managment system
                  </h1>
                  <a href="">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, voluptas. Rem pariatur atque distinctio repellat
                    sapiente fugiat inventore, eveniet molestias.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    width={150}
                    height={150}
                    src="https://w7.pngwing.com/pngs/957/974/png-transparent-hospital-logo-clinic-health-care-physician-business-thumbnail.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="max-w-md md:max-w-2xl mx-auto overflow-hidden shadow-md rounded-xl bg-white hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-5">
                  <img
                    width={150}
                    height={150}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXg04V6NzlQZZJH6cQ1bd5wo20m40KjeTKaQ&s"
                    alt=""
                  />
                </div>
                <div className="p-8">
                  <h1 className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    school managment system
                  </h1>
                  <a href="">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, voluptas. Rem pariatur atque distinctio repellat
                    sapiente fugiat inventore, eveniet molestias.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
            <div className="max-w-md md:max-w-2xl mx-auto overflow-hidden shadow-md rounded-xl bg-white hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <h1 className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Inventory managment system
                  </h1>
                  <a href="">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, voluptas. Rem pariatur atque distinctio repellat
                    sapiente fugiat inventore, eveniet molestias.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    width={150}
                    height={150}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdRmYO0p-FyLIgnT_FXX-dYAvHnbTG1bsSIYaYapmnIgiWOPSjRd7cwzvVMJtz8Xmdqk&usqp=CAU"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="max-w-md md:max-w-2xl mx-auto overflow-hidden shadow-md rounded-xl bg-white hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-5">
                  <img
                    width={150}
                    height={150}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKRZBJZSyXb-VlaLoodtRpAKlEjQwbRu-Z3w&s"
                    alt=""
                  />
                </div>
                <div className="p-8">
                  <h1 className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    pos managment system
                  </h1>
                  <a href="">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, voluptas. Rem pariatur atque distinctio repellat
                    sapiente fugiat inventore, eveniet molestias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
