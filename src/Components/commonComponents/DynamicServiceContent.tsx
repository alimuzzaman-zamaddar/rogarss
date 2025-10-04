import Image, { StaticImageData } from "next/image";

// Define the types for props
export interface Item {
  name: string;
  image: string | StaticImageData;
  items: string[];
}

 export interface DynamicServiceContentProps {
  categories: Item[]; 
}

const DynamicServiceContent: React.FC<DynamicServiceContentProps> = ({
  categories,
}) => {
  return (
    <div className="service-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4 xl:gap-6 mt-10">
      {categories.map((category, index) => (
        <div key={index} className="service-category">
          <div className="relative w-full object-cover h-[220px] 3xl:h-[400px] shadow-[4px_-3px_26px_3px_rgba(0,0,0,0.15)]">
            <Image
              src={category.image}
              alt={category.name}
              className="object-cover w-full h-full"
              fill
            />
          </div>
          <h2 className="blog_title !text-[#C98575] mt-6 xl:mt-10 mb-5">
            {category.name}
          </h2>
          <ul>
            {category.items.map((item, i) => (
              <li
                className=" text-sm xl:text-base 2xl:text-lg font-family-gilmer text-primary-black mb-2 xl:mb-4 capitalize"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DynamicServiceContent;
