"use client";

import DynamicCardSection from "../DynamicCardSectionBlack";
import DynamicCardSectionPink from "../DynamicCardSectionPink";


type CardItem = {
  id?: string;
  image?: string;
  title: string;
  description: string;
  sectionSubTitle?: string;
  buttonText?: string;
  buttonClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonLink?: string;
};

const ASSET = process.env.NEXT_PUBLIC_ASSET_URL ?? "";

const imgURL = (src?: string) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return `${ASSET}/${src}`.replace(/([^:]\/)\/+/g, "$1");
};

export default function DynamicCards({ items }: { items: CardItem[] }) {
  if (!items || items.length === 0) return null;

  if (items.length === 1) {
    const it = items[0];
    return (
      <DynamicCardSection
        id={it.id}
        image={imgURL(it.image)}
        title={it.title}
        description={it.description}
        sectionSubTitle={it.sectionSubTitle}
        buttonText={it.buttonText}
        buttonClassName={it.buttonClassName}
        titleClassName={it.titleClassName}
        descriptionClassName={it.descriptionClassName}
        buttonLink={it.buttonLink}
      />
    );
  }

  return (
    <>
      {items.map((it, i) =>
        i % 2 === 0 ? (
          <DynamicCardSection
            key={it.id ?? i}
            id={it.id}
            image={imgURL(it.image)}
            title={it.title}
            description={it.description}
            sectionSubTitle={it.sectionSubTitle}
            buttonText={it.buttonText}
            buttonClassName={it.buttonClassName}
            titleClassName={it.titleClassName}
            descriptionClassName={it.descriptionClassName}
            buttonLink={it.buttonLink}
          />
        ) : (
          <DynamicCardSectionPink
            key={it.id ?? i}
            image={imgURL(it.image)}
            title={it.title}
            description={it.description}
            sectionSubTitle={it.sectionSubTitle}
          />
        )
      )}
    </>
  );
}
