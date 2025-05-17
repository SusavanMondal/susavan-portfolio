import { useState } from "react";

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 80, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "React.js", level: 88, category: "Frontend" },
    { name: "Next.js", level: 70, category: "Frontend" },
    { name: "Tailwind CSS", level: 80, category: "Frontend" },

    // Backend
    { name: "C#", level: 85, category: "Backend" },
    { name: "Python", level: 75, category: "language" },
    { name: "C#", level: 85, category: "language" },



    { name: "ASP.NET Core", level: 87, category: "Backend" },
    { name: "Entity Framework", level: 83, category: "Backend" },
    { name: "REST API", level: 90, category: "Backend" },

    // Database
    { name: "PostgreSQL", level: 90, category: "Database" },
    { name: "MySQL", level: 75, category: "Database" },

    // Tools & Platforms
    { name: "Git", level: 85, category: "Tools" },
    { name: "GitHub", level: 85, category: "Tools" },
    { name: "VS Code", level: 90, category: "Tools" },

    // Other
    { name: "Problem Solving", level: 92, category: "Other" },
    { name: "API Integration", level: 88, category: "Other" },
    { name: "Software Engineering Principles", level: 80, category: "Other" },
    { name: "OOPs", level: 85, category: "Other" }
];

const categories = [
  "All",
  ...Array.from(new Set(skills.map(skill => skill.category)))
];

export const SkillSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredSkills =
      selectedCategory === "All"
        ? skills
        : skills.filter(skill => skill.category === selectedCategory);

    return (
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skill</span>
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1 rounded-full border transition-colors duration-200
                  ${selectedCategory === category
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-primary border-primary/40 hover:bg-primary/10"}
                `}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredSkills.map((skill, key) => (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg flex items-center">
                    {skill.name}
                    <span className="ml-2 px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium">
                      {skill.category}
                    </span>
                  </h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>

                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};