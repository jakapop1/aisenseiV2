import React from 'react';
import LPWLayout from '../../../components/layout/LPWLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CodeBlock from '../../../components/shared/CodeBlock';

const PromptEngineering = () => {
  return (
    <LPWLayout>
      <div className="lpw-content">
        <h1>Prompt Engineering for LPW</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            Prompt engineering is particularly crucial for LPW because it bridges the gap between 
            general language models and specialized packet analysis. The way we structure our 
            prompts directly influences the quality and usefulness of the analysis we receive.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">Basic Principles of Effective Prompting</h2>
            <ul className="space-y-2">
              <li><strong>Specificity:</strong> Clear, specific requests help the model focus on 
                relevant packet attributes and patterns.</li>
              <li><strong>Context:</strong> Including technical details about network protocols 
                and attack patterns improves analysis accuracy.</li>
              <li><strong>Structure:</strong> Requesting organized output formats makes findings 
                more actionable.</li>
              <li><strong>Domain Knowledge:</strong> Incorporating cybersecurity context helps 
                guide the model's analysis.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Practical Prompt Engineering Examples</h2>
          
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Basic Prompt</h3>
              <CodeBlock code="What's in this packet capture?" />
              <p className="mt-3 text-gray-600">
                This type of prompt typically results in surface-level analysis that lacks 
                actionable insights. Without specific guidance, the model may miss critical 
                security indicators or fail to focus on relevant packet attributes.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Intermediate Prompt</h3>
              <CodeBlock code={`Analyze this PCAP file for:
- Source and destination IPs
- Protocol information
- Unusual patterns`} />
              <p className="mt-3 text-gray-600">
                While this prompt provides more structure, it still doesn't give the model 
                enough context about what constitutes "unusual" or what specific protocol 
                behaviors might be significant.
              </p>
            </div>

            <div className="border rounded-lg p-6 bg-green-50">
              <h3 className="text-lg font-semibold mb-3">Advanced Prompt (Recommended)</h3>
              <CodeBlock code={`Perform a detailed analysis of this PCAP with focus on:
1. Layer-by-layer packet inspection
2. All IP addresses and their geolocation
3. Protocol anomalies and potential security issues

Context:
- Look for indicators of C2 communication
- Check for unusual port usage
- Identify potential data exfiltration patterns

Output format:
1. Executive Summary
2. Technical Details Table
3. Suspicious Activities List
4. Recommended Actions`} />
              <p className="mt-3 text-gray-600">
                This prompt provides comprehensive guidance that helps the model understand 
                exactly what to look for and how to present its findings. The inclusion of 
                specific security concerns and output structure requirements results in more 
                valuable analysis.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Practice Exercise</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-4">To practice prompt engineering with LPW, try this exercise:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Start with a basic PCAP analysis prompt</li>
              <li>
                Gradually enhance it by adding:
                <ul className="list-disc ml-6 mt-2">
                  <li>Specific technical elements to examine</li>
                  <li>Context about potential security concerns</li>
                  <li>Structured output requirements</li>
                </ul>
              </li>
              <li>Compare the results from each iteration</li>
              <li>Note how the addition of context and structure improves the quality of analysis</li>
            </ol>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Best Practices</h2>
          <div className="">
            <ul className="space-y-3">
              <li><strong>Provide Security Context:</strong> Include information about potential 
                attack patterns, normal network behavior, and specific security concerns you're 
                investigating.</li>
              <li><strong>Structure Output:</strong> Clearly specify how you want the analysis 
                presented, including any specific formats or categories of information.</li>
              <li><strong>Layer Analysis:</strong> Start with broader questions and progressively 
                narrow down to specific areas of concern based on initial findings.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Remember</h2>
            <p>
              Prompt engineering is an iterative process. As you work with LPW, you'll develop 
              a better understanding of how different prompting strategies affect the quality 
              of analysis. Keep refining your prompts based on the results you receive, and 
              don't hesitate to experiment with different approaches to find what works best 
              for your specific analysis needs.
            </p>
          </div>
        </section>

        <NavButtons 
          previous={{
            text: "Model Selection Guide",
            link: "/lpw/model-selection"
          }}
          next={{
            text: "Moving onto Exercises",
            link: "/lpw/exercises"
          }}
        />
      </div>
    </LPWLayout>
  );
};

export default PromptEngineering;