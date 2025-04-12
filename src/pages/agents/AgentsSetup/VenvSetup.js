import React from 'react';
import AgentsLayout from '../../../components/layout/AgentsLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CopyCodeButton from '../../../components/shared/CopyCodeButton';
import CodeBlock from '../../../components/shared/CodeBlock';

const VenvSetup = () => {
  return (
    <AgentsLayout>
      <div className="lpw-content">
        <h1>Setting Up Virtual Environment for CSLA</h1>
        
        <section className="mb-8">
          <p className="mb-4">
            A virtual environment is an isolated Python environment that allows you to work on a specific project without 
            affecting other projects or the system-wide Python installation. It helps maintain project dependencies 
            separately and avoids conflicts between different versions of libraries and packages.
          </p>

          <h2 className="text-xl font-semibold mb-4">Why Use a Virtual Environment?</h2>
          <ol className="list-decimal space-y-2 ml-6 mb-6">
            <li>
              <strong>Dependency Management:</strong> By creating a virtual environment specifically for LPW, we can ensure 
              that the required packages and libraries are installed within that environment without interfering with other 
              projects or the global Python setup.
            </li>
            <li>
              <strong>Isolation:</strong> Virtual environments provide isolation from other Python projects on your system. 
              For example, if LPW requires a specific version of a library, it can be installed in its virtual environment 
              without affecting other projects that might need a different version.
            </li>
            <li>
              <strong>Reproducibility:</strong> By using a virtual environment, you can easily reproduce the exact setup 
              and dependencies required for LPW. You can share the virtual environment configuration, and others can recreate 
              the same environment with the specified dependencies.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Virtual Environment Setup Guide</h2>
          <ol className="list-decimal space-y-4">
            <li>
              Open command prompt/terminal
            </li>
            <li>
              Navigate to your desired installation directory:
              <CodeBlock code={`cd Documents
cd Desktop
cd [desired directory]`} />
            </li>
            <li>
              Create a new virtual environment:
              <CodeBlock code={`# Option 1
python -m venv [desired_name]

# Option 2
pip install virtualenv
virtualenv [desired_name]`} />
            </li>
            <li>
              Activate the virtual environment (example using lpw_env):
              <CodeBlock code={`# For Windows:
cd lpw_env
Scripts\\activate

# For MacOS/Linux:
cd lpw_env
source bin/activate`} />
            </li>
          </ol>
          <img 
            src="/images/lpw_venv.png" 
            alt="Virtual Environment Setup Example" 
            className="mr-6 mb-4 w-[500px] rounded-lg shadow-md"
          />
                  
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Installing LPW</h2>
          <ol className="list-decimal space-y-4">
            <li>
              Ensure your virtual environment is activated (you should see (lpw_env) at the start of your command line)
            </li>
          </ol>
        </section>


        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Common Commands Reference</h2>
          
          <p className="font-semibold mb-2">To activate virtual environment (when returning to project):</p>
          <CodeBlock code={`# Windows:
cd path\\to\\lpw_project\\lpw_env
Scripts\\activate

# MacOS/Linux:
cd path/to/lpw_project/lpw_env
source bin/activate`} />

          <p className="font-semibold mt-4 mb-2">To deactivate virtual environment:</p>
          <CopyCodeButton code="deactivate" />
        </section>


        <NavButtons 
          previous={{
            text: "Installing Python",
            link: "/agents/python"
          }}
          next={{
            text: "Installing Caldera",
            link: "/agents/caldera"
          }}
        />
      </div>
    </AgentsLayout>
  );
};

export default VenvSetup;
