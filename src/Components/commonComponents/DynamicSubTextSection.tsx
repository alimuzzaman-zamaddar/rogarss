export  interface SectionData {
  id: number;
  title: string;
  description: string;
}

interface DynamicSubTextSectionProps {
  data: SectionData[];
}

export const DynamicSubTextSection = ({ data }: DynamicSubTextSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
      {data.map((section: SectionData) => (
        <div key={section.id} className="p-10 bg-[#ebebeb]">
          <h3 className="text-lg md:text-xl xl:text-[32px] font-normal font-bold leading-[132%] font-family-gilmer text-primary-black mb-2">
            {section.title}
          </h3>
          <p className="section_description">{section.description}</p>
        </div>
      ))}
    </div>
  );
};


