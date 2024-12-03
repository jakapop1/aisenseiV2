import React from 'react';
import LPWLayout from '../../../components/layout/LPWLayout';
import NavButtons from '../../../components/shared/NavButtons';

const UnderstandingLLMs = () => {
  return (
    <LPWLayout>
      <div className="lpw-content">
        <h1>Understanding LLMs in Packet Analysis</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            Local Packet Whisperer (LPW) represents a significant advancement in packet analysis 
            by leveraging Large Language Models (LLMs). However, its effectiveness heavily depends 
            on two critical factors: the choice of the underlying model and the way we communicate 
            with it through prompts. Unlike traditional packet analysis tools that work with 
            predefined rules and signatures, LPW's ability to understand and analyze network 
            traffic relies on how well we can guide the LLM through our model selection and 
            prompting strategy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Understanding Model Capabilities</h2>
          <p className="mb-4">
            Before diving into specific models, it's helpful to understand that each language 
            model has been pretrained - meaning it has learned to understand language and concepts 
            by analyzing vast amounts of text data. While all these models can handle general 
            tasks, they each have their own strengths that make them better suited for different 
            situations.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Dolphin Mistral (Default)</h3>
              <p>
                Built on the Mistral foundation model, it prioritizes speed and efficiency. 
                Excellent for quick responses and good general understanding rather than deep 
                technical analysis.
              </p>
              <ul className="list-disc ml-4 mt-2">
                <li>Writing emails or blog posts</li>
                <li>Answering general questions</li>
                <li>Summarizing documents</li>
                <li>Basic research tasks</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Llama 2</h3>
              <p>
                Developed by Meta, represents a middle ground in capabilities. Excels at maintaining 
                context and generating detailed, human-like responses.
              </p>
              <ul className="list-disc ml-4 mt-2">
                <li>Educational content creation</li>
                <li>Detailed explanations</li>
                <li>Long-form writing</li>
                <li>Complex conversations</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg bg-green-50">
              <h3 className="text-lg font-semibold mb-2">Qwen 2.5 (Recommended)</h3>
              <p>
                Stands out for technical and analytical tasks. Excels at processing structured 
                information and following complex instructions with high accuracy.
              </p>
              <ul className="list-disc ml-4 mt-2">
                <li>Technical documentation</li>
                <li>Data analysis</li>
                <li>Scientific writing</li>
                <li>Complex problem-solving</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Understanding Model Limitations</h2>
          <div className="p-4 rounded-lg">
            <ul className="space-y-2">
              <li><strong>Knowledge Cutoff:</strong> Models can only reference information they 
                were trained on - similar to a person who hasn't read any news or learned 
                anything new since a certain date.</li>
              <li><strong>Technical Knowledge:</strong> While these models can discuss many topics, 
                they may struggle with highly specialized subjects that weren't well-represented 
                in their training data.</li>
              <li><strong>Accuracy Concerns:</strong> Models can sometimes generate incorrect 
                information that sounds convincing - a phenomenon known as "hallucination" in 
                AI terminology. Always verify critical information from reliable sources.</li>
            </ul>
          </div>
        </section>

        <NavButtons 
          previous={{
            text: "Exercises",
            link: "/lpw/Exercises"
          }}
          next={{
            text: "Model Selection Guide",
            link: "/lpw/ModelSelection"
          }}
        />
      </div>
    </LPWLayout>
  );
};

export default UnderstandingLLMs;