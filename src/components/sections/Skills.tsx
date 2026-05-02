import SectionLabel from "@/components/ui/SectionLabel";

const groups = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Microservices",
      "BFF Architecture",
      "REST APIs",
    ],
  },
  {
    category: "Databases & Messaging",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "Redis",
      "RabbitMQ",
      "SQS",
      "SNS",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "React Query",
      "Material UI",
      "Storybook",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (Lambda, S3, RDS, Cognito)",
      "Firebase (Auth, Firestore, Storage)",
      "Docker",
      "CI/CD Pipelines",
      "Vercel",
      "Swagger / OpenAPI",
    ],
  },
  {
    category: "Architecture",
    skills: [
      "Event-Driven Architecture",
      "Distributed Systems",
      "Monolith to Microservices",
      "Scalability Engineering",
    ],
  },
  {
    category: "Testing",
    skills: [
      "Jest",
      "Unit Testing",
      "Integration Testing",
      "Test-Driven Development (TDD)",
    ],
  },
  {
    category: "Practices",
    skills: [
      "System Design",
      "Performance Optimization",
      "Technical Leadership",
      "Agile / Scrum",
      "Code Review",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding bg-[#18181b]"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SectionLabel>Skills &amp; Toolkit</SectionLabel>
          <h2
            id="skills-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            What I build with
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {groups.map(({ category, skills }) => (
            <div
              key={category}
              className="rounded-2xl border border-white/5 bg-[#0f0f0f] p-5"
            >
              <p className="mb-4 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
