import { IoHeart } from "react-icons/io5";
import PrimaryButton from "../buttons/PrimaryButton";
function BikeCard({ image, title, subtitle, price, discount }) {
  return (
    <>
      <div className="overflow-hidden rounded-xl border border-black/10 hover:border-primary bg-tertiary min-w-xs group">
        <div>
          <div className="flex justify-between p-5">
            <div className="p-5 rounded-full bg-primary relative">
              <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-sm">{`50%`}</p>
            </div>
            <div>
              <IoHeart className="text-secondary text-2xl" />
            </div>
          </div>
          <img
            src={image}
            alt="product_image"
            className="object-cover mx-auto"
          />
          <div className="text-center">
            <div className="py-3">
              <h3 className="text-xl font-semibold text-black/80">{title}</h3>
              <p>{subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 group-hover:bg-white py-6 rounded-t-full">
              <p className="text-2xl text-secondary">
                {price}
                {"  "}
                <span className="text-xl text-black/50 line-through">
                  {discount}
                </span>
              </p>
              <PrimaryButton title="Buy Now" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BikeCard;
