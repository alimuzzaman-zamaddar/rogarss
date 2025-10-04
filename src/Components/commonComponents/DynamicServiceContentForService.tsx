import Image from "next/image";

// Define the types for sub services
interface SubService {
  id: number;
  name: string;
  description?: string; // optional
}

// Define the type for a single service
interface Service {
  id: number;
  title: string;
  image: string;
  sub_services: SubService[];
}

// Define props for the component
interface ServiceProps {
  services: Service[];
}

const DynamicServiceContentForService: React.FC<ServiceProps> = ({
  services,
}) => {
  return (
    <div className="service-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 xl:gap-6 mt-10">
      {services.map((service, index) => (
        <div key={index} className="service-category">
          <div className="relative w-full object-cover h-[220px] 3xl:h-[400px] shadow-[4px_-3px_26px_3px_rgba(0,0,0,0.15)]">
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${service.image}`}
              alt={service.title}
              className="object-cover w-full h-full"
              fill
            />
          </div>
          <h2 className="blog_title !text-[#C98575] mt-6 xl:mt-10 mb-5">
            {service.title}
          </h2>
          <ul>
            {service.sub_services.map((item, i) => (
              <li
                className="text-sm xl:text-base 2xl:text-lg font-family-gilmer text-primary-black mb-2 xl:mb-4 capitalize"
                key={i}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DynamicServiceContentForService;
