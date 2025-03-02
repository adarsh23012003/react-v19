import BikeCard from "../cards/BikeCard";

function ChooseYourBike() {
  const data = [
    {
      image: "/content/lp1.png",
      title: "Aerion Carbon Helmet",
      subtitle: "( Fashionable )",
      price: "$490",
      discount: "$590",
    },
    {
      image: "/content/lp2.png",
      title: "Softy Original Glove",
      subtitle: "( Fashionable )",
      price: "$490",
      discount: "$590",
    },
    {
      image: "/content/lp3.png",
      title: "Reckles Jacket",
      subtitle: "( Fashionable )",
      price: "$490",
      discount: "$590",
    },
    {
      image: "/content/lp4.png",
      title: "Flicky Traco Boot",
      subtitle: "( Fashionable )",
      price: "$490",
      discount: "$590",
    },
    {
      image: "/content/lp5.png",
      title: "Reckles Jacket",
      subtitle: "( Fashionable )",
      price: "$490",
      discount: "$590",
    },
    {
      image: "/content/lp6.png",
      title: "Flicky Traco Boot",
      subtitle: "( Fashionable )",
      price: "$490",
      discount: "$590",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-3xl sm:text-5xl font-normal">Choose Your Bike</h1>
        <div className="flex items-center">
          <hr className="border w-full border-primary" />
          <button className="bg-gradient-to-r from-primary to-secondary font-semibold text-white text-nowrap px-16 py-1.5 rounded-full">
            25% OFF
          </button>
          <hr className="border w-full border-secondary" />
        </div>
      </div>
      <div className="w-full mx-auto py-5 sm:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5">
        {data.map((item, index) => (
          <BikeCard
            title={item.title}
            image={item.image}
            price={item.price}
            discount={item.discount}
            subtitle={item.subtitle}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export default ChooseYourBike;
