"use client";

import { BannerSection } from "@/Components/commonComponents/bannerSection";
import Container from "@/Components/commonComponents/Container";
import contactImage from "../../../assets/contact/contact.png";
import DynamicContactUs from "@/Components/commonComponents/DynamicContactUs";
import bgImg from "../../../assets/blogPost/brunette-girl-posing-with-flowers.png";
import DynamicServicesCategories from "@/Components/commonComponents/DynamicServicesCategories";
import { useGetConditionTreatsQuery } from "@/redux/slices/cms/conditionSlice";




type ApiGroup = {
  id: number;
  condition_treat_name: string;
  sub_condition_treats: {
    id: number;
    condition_treat_id: number;
    name: string;
    slug: string;
  }[];
};

export default function Page() {
  const { data, isLoading, error } = useGetConditionTreatsQuery();

  const groups: ApiGroup[] = Array.isArray(data?.data)
    ? (data!.data as ApiGroup[])
    : [];

  const mapped = groups.map((g) => ({
    title: g.condition_treat_name,
    subtitle: "Your Guide To Radiant Skin & Timeless Beauty",
    categories: g.sub_condition_treats.map((item) => ({
      name: item.name,
      link: `/${item.slug}`,
      description: "Learn More",
    })),
  }));

  return (
    <section>
      <Container>
        <div>
          <BannerSection
            bgImages={[bgImg.src, bgImg.src, bgImg.src]}
            heading="Conditions Treated"
            description="Your Guide to Radiant Skin & Timeless Beauty"
          />
        </div>
        {isLoading && <p className="py-10">Loading conditions…</p>}
        {error && !isLoading && (
          <p className="py-10 text-red-500">Failed to load conditions.</p>
        )}
        {!isLoading &&
          !error &&
          mapped.map((group, idx) => (
            <DynamicServicesCategories
              key={`${group.title}-${idx}`}
              title={group.title}
              subtitle={group.subtitle}
              categories={group.categories}
            />
          ))}

        <DynamicContactUs image={contactImage} />
      </Container>
    </section>
  );
}
