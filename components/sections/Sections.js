import { TestSection } from './TestSection';

const section = {
  sectionOne: TestSection,
  sectionTwo: TestSection,
};

const Section = ({ sectionData }) => {
  const SectionComponent = section[sectionData?.serviceField];

  if (!SectionComponent) {
    return null;
  }

  return <SectionComponent {...sectionData} />;
};

export const Sections = ({ dataPages }) => (
  <>
    {dataPages?.map((sec) => (
      <Section key={sec.id} sectionData={sec} />
    ))}
  </>
);
