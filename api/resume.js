export default function handler(req, res) {
  const resumeData = {
    name: "Warda Khan",
    title: "QA Analyst",
    summary: "Software testing professional blending a strong development background with a meticulous eye for quality. Specialized in delivering bug-free, robust software solutions.",
    skills: {
      manual: ["Regression Testing", "Smoke Testing", "User Acceptance Testing (UAT)", "Boundary Value Analysis"],
      automation: ["Selenium WebDriver", "Cypress", "Appium", "TestNG"],
      api: ["Postman", "REST Assured", "Swagger", "API Mocking"],
      tools: ["Jira", "Trello", "GitHub", "Jenkins", "Docker"]
    },
    experience: [
      {
        role: "QA Analyst",
        company: "Tech Solutions Inc.",
        period: "2023 - Present",
        description: "Leading QA efforts for multiple web and mobile applications."
      }
    ],
    education: {
      degree: "BS Computer Science",
      university: "Women University Swabi",
      cgpa: "3.8"
    }
  };

  res.status(200).json(resumeData);
}
