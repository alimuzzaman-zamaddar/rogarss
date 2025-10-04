import { BannerSection } from "@/Components/commonComponents/bannerSection";
import Container from "@/Components/commonComponents/Container";
import contactImage from "../../../assets/contact/contact.png";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import bgImg from "../../../assets/blogPost/brunette-girl-posing-with-flowers.png";
import DynamicServicesCategories from "@/Components/commonComponents/DynamicServicesCategories";

export default function page() {
  const skincareData = {
    title: "Skincare",
    subtitle: "Your Guide To Radiant Skin & Timeless Beauty",
    categories: [
      {
        name: "Wrinkles & Fine Lines",
        link: "/wrinklcs-fine-lines",
        description: "Learn More",
      },
      {
        name: "Enlarged Pores",
        link: "/enlarged-pores",
        description: "Learn More",
      },
      {
        name: "Skin Laxity (Loose Skin)",
        link: "/skin-laxity",
        description: "Learn More",
      },
      {
        name: "Sun Damage",
        link: "/sun-damage",
        description: "Learn More",
      },
      {
        name: "Hyperpigmentation",
        link: "/hyperpigmentation",
        description: "Learn More",
      },
      {
        name: "Melasma",
        link: "/melasma",
        description: "Learn More",
      },
      {
        name: "Dull Or Dehydrated Skin",
        link: "/dull-dehydrated-skin",
        description: "Learn More",
      },
      {
        name: "Redness & Rosacea",
        link: "/redness-rosacea",
        description: "Learn More",
      },
      {
        name: "Acne",
        link: "/acne",
        description: "Learn More",
      },
      {
        name: "Acne Scars",
        link: "/acne-scars",
        description: "Learn More",
      },
      {
        name: "Scars",
        link: "/scars",
        description: "Learn More",
      },
      {
        name: "Stretch Marks",
        link: "/stretch-marks",
        description: "Learn More",
      },
      {
        name: "Skin Tags",
        link: "/skin-tags",
        description: "Learn More",
      },
    ],
  };

  const FatSculptingContouringData = {
    title: "Fat, Sculpting & Contouring",
    subtitle: "Your Guide To Radiant Skin & Timeless Beauty",
    categories: [
      {
        name: "Stubborn Body Fat",
        link: "/stubborn-body-fat",
        description: "Learn More",
      },
      {
        name: "Loose Skin on Arms, Abdomen, Thighs",
        link: "/loose-skin",
        description: "Learn More",
      },
      {
        name: "Jowls or Sagging Jawline",
        link: "/jowls-sagging-jawline",
        description: "Learn More",
      },
    ],
  };


    const HairScalpSkinConcernsData = {
      title: "Hair & ScalpSkin Concerns",
      subtitle: "Your Guide To Radiant Skin & Timeless Beauty",
      categories: [
        {
          name: "Thinning Hair",
          link: "/thinning-hair",
          description: "Learn More",
        },
        {
          name: "Early Hair Loss",
          link: "/early-hair-loss",
          description: "Learn More",
        },
        {
          name: "Receding Hairline",
          link: "/receding-hairline",
          description: "Learn More",
        },
      ],
    };

    const VascularPigmentIssuesData = {
      title: "Vascular & Pigment Issues",
      subtitle: "Your Guide To Radiant Skin & Timeless Beauty",
      categories: [
        {
          name: "Spider Veins",
          link: "/spider-veins",
          description: "Learn More",
        },
        {
          name: "Vascular Lesions",
          link: "vascular-lesions",
          description: "Learn More",
        },
        {
          name: "Broken Capillaries",
          link: "/broken-capillaries",
          description: "Learn More",
        },
        {
          name: "Brown Spots & Age Spots",
          link: "/brown-spots-&-age-spots",
          description: "Learn More",
        },
      ],
    };
    const UnwantedGrowthsData = {
      title: "Unwanted Growths",
      subtitle: "Your Guide To Radiant Skin & Timeless Beauty",
      categories: [
        {
          name: " Skin Tags",
          link: "/skin-tags",
          description: "Learn More",
        },
        {
          name: "Benign Lesions",
          link: "/benign-lesions",
          description: "Learn More",
        },
        {
          name: "Sebaceous Hyperplasia",
          link: "/sebaceous-hyperplasia",
          description: "Learn More",
        },
      ],
    };
    const WellnessHormonalData = {
      title: "Wellness & Hormonal",
      subtitle: "Your Guide To Radiant Skin & Timeless Beauty",
      categories: [
        {
          name: "Low Energy & Fatigue",
          link: "/low-energy-&-fatigue",
          description: "Learn More",
        },
        {
          name: "Menopausal Symptoms",
          link: "/menopausal-symptoms",
          description: "Learn More",
        },
        {
          name: "Hormonal Imbalance",
          link: "/hormonal-imbalance",
          description: "Learn More",
        },
        {
          name: "Low Libido",
          link: "/low-libido",
          description: "Learn More",
        },
        {
          name: "Erectile Dysfunction",
          link: "/erectile-dysfunction",
          description: "Learn More",
        },
        {
          name: "Vaginal Laxity or Sensitivity Loss",
          link: "/vaginal-laxity",
          description: "Learn More",
        },
        {
          name: "Weight Gain",
          link: "/weight-gain",
          description: "Learn More",
        },
        {
          name: "Slow Metabolism",
          link: "/slow-metabolism",
          description: "Learn More",
        },
      ],
    };
    const LaserSpecificData = {
      title: "Laser-Specific",
      subtitle: "Your Guide To Radiant Skin & Timeless Beauty",
      categories: [
        {
          name: "Unwanted Hair (Face & Body)",
          link: "/unwanted-hair",
          description: "Learn More",
        },
        {
          name: "Tattoo Removal",
          link: "/tattoo-removal",
          description: "Learn More",
        },
        {
          name: " Nail Fungus",
          link: "/nail-fungus",
          description: "Learn More",
        },
      ],
    };

  return (
    <section>
      <Container>
        <div className="">
          <BannerSection
            bgImages={[bgImg.src, bgImg.src, bgImg.src]}
            heading="Conditions Treated"
            description="Your Guide to Radiant Skin & Timeless Beauty"
          />
        </div>
        {/* Pass the injectableData as props */}
        <DynamicServicesCategories
          title={skincareData.title}
          subtitle={skincareData.subtitle}
          categories={skincareData.categories}
        />
        <DynamicServicesCategories
          title={FatSculptingContouringData.title}
          subtitle={FatSculptingContouringData.subtitle}
          categories={FatSculptingContouringData.categories}
        />
        <DynamicServicesCategories
          title={HairScalpSkinConcernsData.title}
          subtitle={HairScalpSkinConcernsData.subtitle}
          categories={HairScalpSkinConcernsData.categories}
        />
        <DynamicServicesCategories
          title={VascularPigmentIssuesData.title}
          subtitle={VascularPigmentIssuesData.subtitle}
          categories={VascularPigmentIssuesData.categories}
        />
        <DynamicServicesCategories
          title={UnwantedGrowthsData.title}
          subtitle={UnwantedGrowthsData.subtitle}
          categories={UnwantedGrowthsData.categories}
        />
        <DynamicServicesCategories
          title={WellnessHormonalData.title}
          subtitle={WellnessHormonalData.subtitle}
          categories={WellnessHormonalData.categories}
        />
        <DynamicContactUs image={contactImage} />.
      </Container>
    </section>
  );
}
