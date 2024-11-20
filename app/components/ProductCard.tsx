import Image from "next/image";

interface ProductProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  description,
  price,
  image,
}) => {
  return (
    <div className="bg-orange-400 shadow-lg rounded-lg p-6 flex flex-col items-center">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-4">{name}</h2>
      <p className="text-black font-semibold mt-2 text-center">{description}</p>
      <span className="text-blue-700 font-bold mt-2">${price.toFixed(2)}</span>
      <button className="bg-green-500 text-white mt-4 px-6 py-3 rounded hover:bg-green-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
