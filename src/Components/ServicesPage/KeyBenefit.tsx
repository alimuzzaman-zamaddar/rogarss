import { useSubServiceDetailsQuery } from "@/redux/slices/cms/homeSlice";
import Container from "../commonComponents/Container";
import { S1Svg, S2Svg } from "../SvgContainer/SvgContainer";
import Image from "next/image";


const KeyBenefit = () => {
      const { data, isLoading } = useSubServiceDetailsQuery("tetra-c02-laser");
  return (
    <section className="pt-16 2xl:pt-28">
      <Container>
        <h3 className="section_title max-w-[1208px] mx-auto text-center">
          Key Benefits of the Tetra PRO CO₂ Laser at Estevez Aesthetics
        </h3>

        <div className="grid lg:grid-cols-2 gap-5 2xl:gap-8">
          {data?.sub_service_benefits.map((item: any, index: number) => (
            <div key={index} className="bg-[#F8F8F8] p-6 xl:p-7 2xl:p-10">
              <Image
                className=" object-cover w-10 h-10 xl:h-20 xl:w-20"
                src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${item.benefit_icon}`}
                alt="contact image 2"
                height={700}
                width={700}
              />

              <h3 className="text-primary-black text-lg xl:text-xl 2xl:text-2xl font-semibold my-3 2xl:my-5">
                {item.benefit_title}
              </h3>
              <p className="text-primary-black xl:text-lg">
                {item.benefit_description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyBenefit;
