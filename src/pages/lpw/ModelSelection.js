import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/cards/card';
import CodeBlock from '../../components/shared/CodeBlock';
import NavButtons from '../../components/shared/NavButtons';

const ModelSelection = () => {
  const models = [
    {
      title: "Dolphin Mistral (Default)",
      description: "Built on the Mistral foundation model...",
      uses: [
        "Writing emails or blog posts",
        "Answering general knowledge questions",
        "Summarizing documents",
        "Basic research tasks"
      ]
    },
    {
      title: "Llama 2",
      description: "Llama 2, developed by Meta, represents a middle ground in terms of capabilities. It excels at maintaining context in conversations and generating detailed, human-like responses.",
      uses: [
        "Educational content creation",
        "Detailed explanations",
        "Long-form writing",
        "Complex conversations requiring good memory of context"
      ]
    },
    {
      title: "Qwen 2.5 (Recommended)",
      description: "Qwen 2.5 stands out for its ability to handle technical and analytical tasks. It excels at processing structured information and following complex instructions with high accuracy.",
      uses: [
        "Technical documentation",
        "Data analysis",
        "Scientific writing",
        "Code analysis and review"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6">Model Selection and Installation</h2>
      
      <section className="prose max-w-none">
        <p className="text-lg mb-6">
          The choice of model significantly impacts LPW's analysis capabilities...
        </p>

        <h3 className="text-xl font-semibold mb-4">Installing Models with Ollama</h3>
        
        <CodeBlock code="ollama serve" />

        {models.map((model, index) => (
          <Card key={index} className="mb-6">
            <CardHeader>
              <CardTitle>{model.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{model.description}</p>
              {model.uses && (
                <>
                  <p className="font-medium">Most effective when used for:</p>
                  <ul className="list-disc pl-5 mt-2">
                    {model.uses.map((use, idx) => (
                      <li key={idx}>{use}</li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </section>

      <NavButtons 
        previous={{ text: "Installing Python and Wireshark", href: "/lpw/setup" }}
        next={{ text: "Setting up Virtual Environment", href: "/lpw/venv" }}
      />
    </div>
  );
};

export default ModelSelection;