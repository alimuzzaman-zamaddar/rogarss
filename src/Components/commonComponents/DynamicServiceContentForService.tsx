import Image from "next/image";
import Link from "next/link";


interface SubService {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

interface Service {
  id: number;
  title: string;
  image: string;

  sub_services: SubService[];
}

interface ServiceProps {
  services: Service[];
  onLinkClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const DynamicServiceContentForService: React.FC<ServiceProps> = ({
  services,
  onLinkClick,
}) => {
  return (
    <div className="service-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4 xl:gap-6 mt-10">
      {services.map(
        (service, index) => (
          console.log(service, "from service"),
          (
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
                {service.sub_services.map(
                  (item, i) => (
                    console.log(item.slug, "dy na mic"),
                    (
                      <li
                        className="text-sm xl:text-base 2xl:text-lg font-family-gilmer text-primary-black mb-2 xl:mb-4 capitalize"
                        key={i}
                      >
                        <Link href={`/${item?.slug}`} onClick={onLinkClick}>
                          {item.name}
                        </Link>
                      </li>
                    )
                  )
                )}
              </ul>
            </div>
          )
        )
      )}
    </div>
  );
};

export default DynamicServiceContentForService;
