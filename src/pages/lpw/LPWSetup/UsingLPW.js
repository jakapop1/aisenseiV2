import React from 'react';
import LPWLayout from '../../../components/layout/LPWLayout';
import NavButtons from '../../../components/shared/NavButtons';

const UsingLPW = () => {
  return (
    <LPWLayout>
      <div className="lpw-content">
        <h1>Using LPW for Packet Analysis</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            Once your preferred model and system message are set, you're ready to harness 
            the power of LLMs for packet analysis:
          </p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Uploading Your PCAP File</h2>
            <p className="mb-4">
              Return to the main page and upload your PCAP file. LPW will process the file, 
              transforming binary packet data into a format the LLM can interpret.
            </p>
            <img 
              src="/images/pcap-upload.png" 
              alt="PCAP File Upload Interface" 
              className="rounded-lg shadow-md mb-6"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Issuing Prompts</h2>
            <p className="mb-4">
              With your data loaded, enter a prompt to direct the LLM's focus. Many LLMs may 
              not be pre-trained on cybersecurity datasets, so provide specific instructions 
              on what to analyze or look for. Providing it with additional context on the type 
              of attack we are looking for and their indicators can help guide the model.
            </p>
            <p className="mb-4">For example, the prompts I used were:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <img 
                src="/images/prompt-example-1.png" 
                alt="Example Prompt 1" 
                className="rounded-lg shadow-md"
              />
              <img 
                src="/images/prompt-example-2.png" 
                alt="Example Prompt 2" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <NavButtons 
          previous={{
            text: "Configuring LPW",
            link: "/lpw/configuration"
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

export default UsingLPW;
