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
              Return to the main page and upload your PCAP file, confirming with the left side menu 
              that you are "whispering" with the correct packet. LPW will process the file, 
              transforming binary packet data into a format the LLM can interpret.
            </p>
            <p>Here are a few packet repositories if you need sample captures:</p>
            <ol className="list-decimal list-inside space-y-4 my-6 ml-6">
              <li>
                <a target='_blank' rel="noreferrer" href="https://wiki.wireshark.org/samplecaptures" className="text-blue-600 hover:underline">https://wiki.wireshark.org/samplecaptures</a> 
              </li>
              <li>
                <a target='_blank' rel="noreferrer" href="https://github.com/sbousseaden/PCAP-ATTACK" className="text-blue-600 hover:underline">https://github.com/sbousseaden/PCAP-ATTACK</a> 
              </li>
              <li>
                <a target='_blank' rel="noreferrer" href="https://github.com/StopDDoS/packet-captures" className="text-blue-600 hover:underline">https://github.com/StopDDoS/packet-captures</a> 
              </li>
            </ol>
            <p className="mb-4">
              The time taken to process will depend on the file size and the script used
              to process the packet data - we will cover enhancing packet processing in
              one of the exercises in Section 5.
            </p>
            <video className="my-6" width="60%" controls>
              <source src="/videos/lpw-using-guide.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Performing Analysis</h2>
            <p className="mb-4">
              Finally, the part we've all been waiting for - the analysis! Once the PCAP is uploaded
              and processed, you will be able to ask the LLM questions about the PCAP using the Chat feature.
            </p>
            <p className="mb-4">
              Try uploading your own packet capture and asking it a simple prompt like:
              "What is happening in this packet capture" or "Provide a detailed analysis of
              this packet capture and provide specific information about any anomalies or
              suspicious behavior. If there is an attack, tell me what it is and provide
              next steps for mitigation."
            </p>
            <p className="mb-4">
              Many LLMs may not be pre-trained on cybersecurity datasets, so provide specific instructions
              on what to analyze or look for. Providing it with additional context on the type
              of attack we are looking for and their indicators can help guide the model.
            </p>
            <p className="mb-4">
              You may notice that the packet takes a while to be processed and to receive a result
              from - and the result will probably lack many details or provide inaccurate information.
              However, do not worry as we will cover how to obtain better, more accurate results, and
              even speed up the processing time in the following exercises.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <img
                  src="/images/lpw-prompt-2.png"
                  alt="Example Prompt 1"
                  className="rounded-lg shadow-md"
              />
              <img
                  src="/images/lpw-result-2.png"
                  alt="Example Prompt 2"
                  className="rounded-lg shadow-md mb-4"
              />
            </div>


            <h2 className="text-xl font-semibold mb-4">Agentic Insights</h2>
            <p className="mb-4">
              An experimental feature that has recently been added to LPW is its ability to provide "agentic insights",
              which you can find under the Insights tab.
            </p>
            <p className="mb-4">
              This feature will allow you to generate unprompted, comprehensive reports on the packet capture,
              providing a detailed analysis of the packet capture and any anomalies, allowing you to quickly
              identify areas of interest and potential threats without the need to prompt the model.
            </p>
            <p className="mb-4">
              Some parts of this report include an overall summary of the packet capture, IP address ranges,
              network mapping, security recommendations, and more.
            </p>
            <img
                src="/images/lpw-insights.png"
                alt="Example Prompt 2"
                className="rounded-lg shadow-md mb-4"
            />

            <b>
              *Note that LPW is not the strongest AI/LLM out there - we are using it
              here as it is open source and easy to use.
            </b>
          </div>
        </section>

        <NavButtons
            previous={{
              text: "Configuring LPW",
              link: "/lpw/configuration"
            }}
            next={{
              text: "Moving onto Exercises",
              link: "/lpw/Exercises"
            }}
        />
      </div>
    </LPWLayout>
  );
};

export default UsingLPW;
