import React from 'react';
import { Link } from 'react-router-dom';
import LPWLayout from '../../../components/layout/LPWLayout';

const LPWExercises = () => {
  return (
    <LPWLayout>
      <div className="px-8 py-6 max-w-[1200px] mx-auto">
        <section className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-secondary mb-4">LPW Hands-on Exercises</h1>
          <p className="text-lg text-textColor leading-relaxed mb-8 max-w-3xl mx-auto">
            Now that we have LPW set up and configured, let's dive into some hands-on exercises. 
            Below are carefully designed exercises to help you master AI-powered packet analysis. 
            Choose an exercise track that interests you to get started with practical experience.
          </p>
        </section>

        <div className="flex flex-wrap justify-center gap-6 my-5">
          {[
            {
              title: "Prompt Engineering and Models",
              link: "/lpw/understandingLLMS",
              items: [
                "Understand different LLM models and their capabilities",
                "Learn effective prompt construction techniques",
                "Practice prompt optimization strategies",
                "Analyze model response patterns",
                "Handle complex analytical queries",
                "Create reusable prompt templates"
              ]
            },
            {
              title: "LPW Packet Analysis Exercise",
              link: "/lpw/basic-analysis",
              items: [
                "Analyze basic network traffic patterns",
                "Identify common protocols and behaviors",
                "Extract meaningful insights from packet data",
                "Practice traffic classification techniques",
                "Learn pattern recognition strategies"
              ]
            },
            {
              title: "Enhancing LPW with Python Scripts",
              link: "/lpw/advanced-analysis",
              items: [
                "Create custom analysis scripts",
                "Automate repetitive analysis tasks",
                "Build packet filtering mechanisms",
                "Implement custom data processors",
                "Develop analysis pipelines",
                "Integration with external tools"
              ]
            }
          ].map((exercise, index) => (
            <div 
              key={index} 
              className="flex-1 min-w-[280px] max-w-[320px] bg-white rounded-lg shadow-md 
                         hover:transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300 
                         flex flex-col"
            >
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-lg font-semibold text-secondary mb-3 pb-2 border-b-2 border-primary-hover text-center">
                  {exercise.title}
                </h3>
                <ul className="space-y-2 flex-grow mb- !list-none">
                  {exercise.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="pl-5 relative text-base break-words">
                      <span className="absolute left-0 text-primary">→</span>
                      <span className="inline-block">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={exercise.link}
                  className="block w-full py-2 px-4 bg-primary text-white text-sm text-center rounded-md
                           hover:bg-secondary transition-colors duration-300"
                >
                  Start Exercise
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LPWLayout>
  );
};

export default LPWExercises;
