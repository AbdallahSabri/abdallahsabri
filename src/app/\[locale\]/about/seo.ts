export const getPersonSchema = (t: any) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://abdallahsabri.com/about#person",
  name: t("schemaName"),
  jobTitle: t("schemaJobTitle"),
  url: "https://abdallahsabri.com",
  image: {
    "@type": "ImageObject",
    url: "https://abdallahsabri.com/profile.jpg",
    width: 400,
    height: 400,
  },
  description: t("schemaDescription"),
  sameAs: [
    "https://linkedin.com/in/abdallah-sabri",
    "https://github.com/abdallah-sabri",
  ],
  worksFor: {
    "@type": "Organization",
    name: t("schemaOrganization"),
  },
  knowsAbout: t("schemaSkills", { returnObjects: true }),
  alumniOf: {
    "@type": "EducationalOrganization",
    name: t("schemaUniversity"),
    url: "https://www.aqou.edu.ps/",
  },
  award: t("schemaAwards", { returnObjects: true }),
});
