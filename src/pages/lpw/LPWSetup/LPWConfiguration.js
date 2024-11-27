import React from 'react';
import LPWLayout from '../../../components/layout/LPWLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CopyCodeButton from '../../../components/shared/CopyCodeButton';

const LPWConfiguration = () => {
  return (
    <LPWLayout>
      <div className="lpw-content">
        <h1>Configuring Local Packet Whisperer</h1>
        
        <section className="mb-8">
          <p className="mb-4">
            After activating the LPW environment, you'll see the main interface on your localhost browser.
          </p>
          <img 
            src="/images/lpw-interface.png" 
            alt="LPW Main Interface" 
            className="mb-6 rounded-lg shadow-md"
          />
          
          <div className="space-y-4">
            <p>
              <strong className="font-semibold">User Settings:</strong> In the top-right corner, 
              you'll find user options and settings, including a toggle for switching between 
              Light and Dark modes.
            </p>
            
            <p>
              <strong className="font-semibold">Navigation Bar:</strong> On the left, there's a 
              navigation bar offering additional information about LPW, with the most critical 
              feature being the current LLM model in use. The next section will guide you on 
              switching between models as needed.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Configuring LPW for Optimal Performance</h2>
          <p className="mb-4">
            To access and adjust LPW's key settings, navigate to the LPW Settings panel. 
            Here, you'll find options to tailor LPW's behavior and optimize its interaction 
            with your dataset, including:
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Set System Message</h3>
            <p className="mb-4">
              This setting allows you to provide the LLM with essential context before analysis. 
              Crafting an effective system message can guide the model in understanding its 
              analytical role and formatting responses according to your preferences. For instance, 
              you could set a system message that instructs the LLM to focus on specific packet 
              attributes or to present data in a concise, tabular format.
            </p>
            <img 
              src="/images/system-message.png" 
              alt="System Message Configuration" 
              className="mb-6 rounded-lg shadow-md"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">LLM Server Settings</h3>
            <p className="mb-4">
              Adjusting these settings allows you to choose the LLM server host and the model 
              LPW will operate with. To expand on LPW's capabilities, you can install additional 
              models from Ollama's Model Hub. After selecting a model, note its name and use 
              the following command in your terminal to install it:
            </p>
            
            <CopyCodeButton code="ollama pull [modelname]:[model_type]" />
            
            <p className="mt-4 mb-4">
              For example, to install the model qwen2.5:3b, use:
            </p>
            
            <CopyCodeButton code="ollama pull qwen2.5:3b" />
            
            <p className="mt-4 mb-4">
              You'll see a few progress bars as the model downloads. Once the installation 
              completes, restart LPW (by pressing Ctrl+C and re-launching LPW) to activate 
              the new model.
            </p>
            
            <img 
              src="/images/llm-settings.png" 
              alt="LLM Server Settings" 
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        <NavButtons 
          previous={{
            text: "Setting Up LPW in a Virtual Environment",
            link: "/lpw/venv"
          }}
          next={{
            text: "Using LPW",
            link: "/lpw/using"
          }}
        />
      </div>
    </LPWLayout>
  );
};

export default LPWConfiguration;
