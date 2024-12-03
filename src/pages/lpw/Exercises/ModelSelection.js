import React from 'react';
import LPWLayout from '../../../components/layout/LPWLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CopyCodeButton from '../../../components/shared/CopyCodeButton';

const ModelSelection = () => {
  return (
    <LPWLayout>
      <div className="lpw-content">
        <h1>Model Selection and Installation Guide</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Installing Models with Ollama</h2>
          <p className="mb-4">
            Before diving into model selection, you'll need to install the models through Ollama. 
            First, ensure Ollama is running:
          </p>
          <CopyCodeButton code="ollama serve" />
          
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Install Dolphin Mistral (default)</h3>
              <CopyCodeButton code="ollama pull dolphin-mistral:latest" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Install Llama 2</h3>
              <CopyCodeButton code="ollama pull llama2:13b" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Install Qwen 2.5</h3>
              <CopyCodeButton code="ollama pull qwen2.5:3b" />
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Detailed Model Analysis</h2>
          
          <div className="space-y-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Dolphin Mistral (Default)</h3>
              <img 
                src="/images/dolphin-model.png" 
                alt="Dolphin Mistral Model Overview" 
                className="rounded-lg shadow-md mb-4"
              />
              <p className="mb-4">
                Built on the Mistral foundation model - a base AI model designed for general-purpose 
                tasks. Think of it as a versatile assistant that prioritizes speed and efficiency.
              </p>
              <strong className="block mb-2">Best suited for:</strong>
              <ul className="list-disc ml-6 space-y-1">
                <li>Quick response requirements</li>
                <li>Basic packet summary generation</li>
                <li>Initial traffic overview analysis</li>
                <li>General network pattern recognition</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Llama 2</h3>
              <img 
                src="/images/llama2-model.png" 
                alt="Llama 2 Model Overview" 
                className="rounded-lg shadow-md mb-4"
              />
              <p className="mb-4">
                Developed by Meta, Llama 2 excels at maintaining context in conversations and 
                generating detailed, human-like responses. The model performs particularly well 
                in scenarios requiring extended dialogue or detailed explanations.
              </p>
              <strong className="block mb-2">Best suited for:</strong>
              <ul className="list-disc ml-6 space-y-1">
                <li>Detailed protocol analysis</li>
                <li>Complex traffic pattern explanation</li>
                <li>Extended analysis sessions</li>
                <li>Teaching and documentation tasks</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg bg-green-50">
              <h3 className="text-lg font-semibold mb-3">Qwen 2.5 (Recommended)</h3>
              <img 
                src="/images/qwen-model.png" 
                alt="Qwen 2.5 Model Overview" 
                className="rounded-lg shadow-md mb-4"
              />
              <p className="mb-4">
                Qwen 2.5 stands out for its ability to handle technical and analytical tasks. 
                It excels at processing structured information and following complex instructions 
                with high accuracy.
              </p>
              <strong className="block mb-2">Best suited for:</strong>
              <ul className="list-disc ml-6 space-y-1">
                <li>Deep packet inspection</li>
                <li>Security threat analysis</li>
                <li>Complex protocol understanding</li>
                <li>Detailed technical documentation</li>
                <li>Pattern correlation and anomaly detection</li>
              </ul>
            </div>
          </div>
        </section>

        <NavButtons 
          previous={{
            text: "Understanding LLMs in LPW",
            link: "/lpw/UnderstandingLLMs"
          }}
          next={{
            text: "Prompt Engineering Guide",
            link: "/lpw/PromptEngineering"
          }}
        />
      </div>
    </LPWLayout>
  );
};

export default ModelSelection;
