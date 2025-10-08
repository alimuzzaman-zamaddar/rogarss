"use client";

import Image, { StaticImageData } from "next/image";
import { service } from "@/Components/Data/data";
import Container from "@/Components/commonComponents/Container";
import { useHomeContentsQuery } from "@/redux/slices/cms/homeSlice";
export interface SubService {
  id: number;
  name: string;
  service_id: number;
}

export interface Service {
  id: number;
  title: string;
  image: string | StaticImageData | null;
  sub_services: SubService[];
}

export interface HomeResponse {
  services: Service[];
}
export default function ServicesSection() {
  const { data, error, isLoading } = useHomeContentsQuery();


  return (
    <section className="section_padding">
      <Container>
        <div className="flex justify-start items-start">
          <div className="">
            <p className="section_sub-title">our services</p>
            <h3 className="section_title max-w-[930px]">
              Discover Aesthetic & Wellness Excellence
            </h3>
          </div>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {data?.data?.services.map((t: Service, index: number) => (
            <div key={index}>
              <div
                className="relative group overflow-hidden duration-300 transform transition-all"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={`${index * 200}`}
                data-aos-once="true"
              >
                {t.image ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${t.image}`}
                    alt={t.title}
                    className="object-cover h-[350px] lg:h-[400px] 2xl:h-[500px] w-full"
                    width={600}
                    height={700}
                  />
                ) : (
                  <div className="object-cover h-[350px] lg:h-[400px] 2xl:h-[500px] w-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_-18.16%,#140F0A_103.86%)] 
                  text-white flex items-center justify-center p-5 3xl:p-10
                  opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 
                  transition-all duration-500 ease-in-out"
                >
                  <ul className="space-y-2 text-center flex flex-col justify-center items-center">
                    {t.sub_services.map((i: any, key) => (
                      <li
                        key={key}
                        className="flex gap-3 text-sm lg:text-base 3xl:text-lg font-family-gloock tracking-[1.8px] cursor-pointer text-center"
                      >
                        <span className="text-center">{i.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <span className="lg:text-lg xl:text-xl 2xl:text-2xl font-family-gloock leading-[164%] text-primary-black inline-block mt-3 lg:mt-4 xl:mt-6">
                  {t.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
