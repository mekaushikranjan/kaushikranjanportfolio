const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology (IIT)",
      description: "Specialized in Software Engineering and Data Structures. Graduated with distinction and active participation in coding competitions.",
      period: "2019 - 2023",
      badges: ["CGPA: 8.5/10", "Dean's List"],
      badgeColors: ["bg-primary/10 text-primary", "bg-accent/10 text-accent"]
    },
    {
      title: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      description: "Comprehensive certification covering cloud architecture, security, and best practices for scalable applications on AWS platform.",
      period: "2023",
      badges: ["Professional Level"],
      badgeColors: ["bg-primary/10 text-primary"]
    },
    {
      title: "Full Stack Web Development Bootcamp",
      institution: "FreeCodeCamp",
      description: "Intensive program covering modern web development technologies including React, Node.js, MongoDB, and responsive design principles.",
      period: "2022",
      badges: ["Completed", "300+ Hours"],
      badgeColors: ["bg-accent/10 text-accent", "bg-primary/10 text-primary"]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-16">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold font-poppins text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">{item.institution}</p>
                    <p className="text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.badges.map((badge, badgeIndex) => (
                        <span key={badgeIndex} className={`px-3 py-1 rounded-full text-sm ${item.badgeColors[badgeIndex]}`}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 text-muted-foreground font-medium">
                    {item.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
