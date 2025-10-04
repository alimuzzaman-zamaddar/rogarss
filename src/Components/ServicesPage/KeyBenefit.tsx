import Container from "../commonComponents/Container";
import { S1Svg, S2Svg } from "../SvgContainer/SvgContainer";
const data = [
  {
    id: 1,
    icon: <S1Svg />,
    title: "Precision with Versatility",
    description:
      "Tetra PRO offers full control over energy and depth, allowing us to treat everything from fine lines to deep wrinkles with unmatched accuracy and safety.",
  },
  {
    id: 2,
    icon: <S2Svg />,
    title: "Advanced Emission Modes",
    description:
      "Tetra PRO offers full control over energy and depth, allowing us to treat everything from fine lines to deep wrinkles with unmatched accuracy and safety.",
  },
  {
    id: 3,
    icon: <S1Svg />,
    title: "Faster, More Comfortable Treatments",
    description:
      "With large spot sizes, feathering techniques, and SmartTrack cooling, we treat larger areas quickly while keeping you relaxed throughout.",
  },
  {
    id: 4,
    icon: <S1Svg />,
    title: "Cool Peel® Technology with Minimal Downtime",
    description:
      "Tetra PRO offers full control over energy and depth, allowing us to treat everything from fine lines to deep wrinkles with unmatched accuracy and safety.",
  },
];

const KeyBenefit = () => {
  return (
    <section className="pt-16 2xl:pt-28">
      <Container>
        <h3 className="section_title max-w-[1208px] mx-auto text-center">
          Key Benefits of the Tetra PRO CO₂ Laser at Estevez Aesthetics
        </h3>

        <div className="grid lg:grid-cols-2 gap-5 2xl:gap-8">
          {data?.map(({ id, icon, title, description }) => (
            <div key={id} className="bg-[#F8F8F8] p-6 xl:p-7 2xl:p-10">
              <p className="w-12 xl:w-16 2xl:w-20 h-12 xl:h-16 2xl:h-20">
                {icon}
              </p>

              <h3 className="text-primary-black text-lg xl:text-xl 2xl:text-2xl font-semibold my-3 2xl:my-5">
                {title}
              </h3>
              <p className="text-primary-black xl:text-lg">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default KeyBenefit;
