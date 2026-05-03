const BASE_URL = "https://abdallahsabri.com";
const LINKEDIN = "https://linkedin.com/in/abdallahsabri";

const EN_JOB_TITLE = "Senior Software Engineer & Founding Engineer";
const EN_DESCRIPTION =
  "I architect distributed backends, lead cross-functional teams, and ship products end-to-end — from early POC to production systems serving real users. I've founded two SaaS products, scaled platforms to 1M+ users, and stepped into founding engineer roles where the job is to build fast, make smart technical bets, and own outcomes — not just write code.";

const AR_JOB_TITLE = "مهندس برمجيات أول ومؤسس تقني";
const AR_DESCRIPTION =
  "أُصمّم أنظمة خوادم موزعة، وأقود فرقًا متعددة التخصصات، وأُطلق منتجات من الفكرة حتى الإنتاج. أسّست منتجَين SaaS وتوسّعت بمنصات لتخدم أكثر من مليون مستخدم، وتولّيت أدوار المهندس المؤسِّس حيث المهمة هي البناء بسرعة واتخاذ رهانات تقنية ذكية.";

export default function JsonLd({ locale }: { locale: string }) {
  const isAr = locale === "ar";
  const url = `${BASE_URL}/${locale}`;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}#person`,
    name: "Abdallah Sabri",
    url: BASE_URL,
    sameAs: [LINKEDIN],
    jobTitle: isAr ? AR_JOB_TITLE : EN_JOB_TITLE,
    description: isAr ? AR_DESCRIPTION : EN_DESCRIPTION,
    knowsAbout: [
      "Next.js",
      "Node.js",
      "Distributed Systems",
      "SEO",
      "SaaS",
      "Team Leadership",
      "Google Ads",
    ],
    workLocation: { "@type": "VirtualLocation", name: "Remote" },
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: { "@id": `${BASE_URL}#person` },
    url,
    inLanguage: locale,
    name: isAr
      ? "عبدالله صبري — مهندس برمجيات أول ومؤسس تقني"
      : "Abdallah Sabri — Senior Software Engineer Portfolio",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
    </>
  );
}
