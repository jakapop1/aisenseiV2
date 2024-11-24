import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="pt-16 px-10 pb-8 max-w-[1200px] mx-auto bg-background">
      <section className="text-center">
        <h2 className="text-3xl font-bold text-secondary mb-4">Welcome to AI Sensei</h2>
        <p className="text-lg text-textColor max-w-2xl mx-auto leading-relaxed">
          Enhance your cybersecurity skills with our cutting-edge courses that
          combine artificial intelligence with security analysis. Learn how to
          leverage AI tools for more efficient and effective security operations.
        </p>
      </section>

      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            title: "LPW for Packet Analysis",
            link: "/lpw",
            items: [
              "Enhance packet analysis with local LLM processing",
              "Learn model selection and configuration",
              "Develop effective prompt engineering strategies",
              "Automate common analysis tasks",
              "Work with offline analysis capabilities",
              "Create reproducible analysis workflows"
            ]
          },
          {
            title: "Packet Raptor for Analysis",
            link: "/raptor",
            items: [
              "Enhance packet analysis with local LLM processing",
              "Learn tree structure data organization",
              "Utilize efficient packet searching techniques",
              "Automate common analysis tasks",
              "Work with offline analysis capabilities",
              "Navigate hierarchical packet structures"
            ]
          },
          {
            title: "CTI with OpenWebUI",
            link: "/cti",
            items: [
              "Streamline threat intelligence gathering",
              "Create custom CTI dashboards",
              "Automated report generation",
              "Integration with MISP and STIX",
              "Real-time threat monitoring",
              "Advanced visualization techniques"
            ]
          }
        ].map((course, index) => (
          <div key={index} className="flex-1 min-w-[280px] max-w-[320px] bg-white rounded-lg shadow-md
                                    hover:transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300
                                    flex flex-col">
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-secondary mb-3 pb-2 border-b-2 border-primary-hover text-center">
                {course.title}
              </h3>
              <ul className="space-y-2 flex-grow mb-3">
                {course.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="pl-5 relative text-sm break-words">
                    <span className="absolute left-0 text-primary">→</span>
                    <span className="inline-block">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={course.link}
                className="block w-full py-2 px-4 bg-primary text-white text-sm text-center rounded-md
                           hover:bg-secondary transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;