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
          <p className="mb-4 w-[57%]">
            After activating the LPW environment, you'll see the main interface on your localhost browser. 
            The video below will show guide you through some basic setting you are able to change.
          </p>
          <video className="my-6" width="60%" controls>
            <source src="/videos/lpw_landing_guide.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        
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
            <video className="my-6" width="60%" controls>
              <source src="/videos/lpw_systemprompt_guide.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
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
              For example, to install the model phi3:3.8b, use:
            </p>
            
            <CopyCodeButton code="ollama pull phi3:3.8b" />
            
            <p className="mt-4 mb-4">
              You'll see a few progress bars as the model downloads. Note that in the video below 
              the model was already downloaded and normally takes a few minutes to download. 
              Once the installation completes, you can immediately start using the model in LPW by 
              pressing R or navigating to the settings menu in the top right for the Rerun button.
            </p>

            <p className="mt-4 mb-4">
              If the Rerun option does not work, you can restart LPW by going back to your terminal,
              pressing Ctrl+C to kill the program, and restart it using the same command we 
              previously used to start LPW:
            </p>

            <CopyCodeButton code="streamlit run lpw_main.py" />

          <video className="my-6" width="60%" controls>
            <source src="/videos/lpw_models_guide.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
