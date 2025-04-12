import React from 'react';
import GarakLayout from '../../components/layout/GarakLayout';
import NavButtons from '../../components/shared/NavButtons';

const GarakInitialSetup = () => {
  return (
    <GarakLayout>
      <h1>Guide to Installing Garak</h1>

      <section>

        <h2>Python Requirements</h2>
        <p>
          Garak requires Python 3.10-3.12. Before installing Garak, ensure you have a compatible
          Python version installed on your system.
        </p>

        <h3>Setting Up Python Environment (Optional)</h3>
        <p>
          The easiest way to install garak is using Python's pip package manager. You need at least Python 3.10 to use garak.
        </p>

        <h2>Installing Garak</h2>
        <p>
          There are several ways to install Garak depending on your needs:
        </p>

        <h3>Method 1: Install from PyPI (Standard Installation)</h3>
        <p>
          For the latest stable release:
        </p>
        <pre><code># Ensure pip is up to date <br/>
python -m pip install -U pip<br/>

# Install garak <br/>
python -m pip install garak</code></pre>

        <h3>Method 2: Install Latest Development Version</h3>
        <p>
          For the most recent updates and features:
        </p>
        <pre><code># Install directly from GitHub<br/>
python -m pip install -U git+https://github.com/NVIDIA/garak.git@main</code></pre>

        <h3>Method 3: Clone Repository (For Contributors or Custom Development)</h3>
        <p>
          This method is recommended for those who want to contribute to Garak or develop custom features:
        </p>
        <pre><code># Clone the repository<br/>
git clone https://github.com/NVIDIA/garak.git
<br/>
# Navigate to the garak directory<br/>
cd garak
<br/>
# Install in development mode<br/>
python -m pip install -e .</code></pre>

        <h2>Verifying Installation</h2>
        <p>
          To confirm that Garak is properly installed, run the following command:
        </p>
        <pre><code>garak</code></pre>

        <p>
          You should see output similar to:
        </p>
        <pre><code>garak LLM vulnerability scanner v[version] (https://github.com/NVIDIA/garak) at [timestamp]<br/>
nothing to do 🤷 try --help</code></pre>

        <h2>Help and Documentation</h2>
        <p>
          To view all available options and commands:
        </p>
        <pre><code>garak --help</code></pre>

        <p>
          For additional help, you can check the official documentation:
        </p>
        <a href='https://docs.garak.ai/' target='_blank' rel='noreferrer noopener'><pre><code>https://docs.garak.ai/</code></pre></a>
      </section>
      <NavButtons
        previous = {{
          link: "/garak",
          text: "Installation Methods"
        }}
        next={{
          link: "/garak/first-scan",
          text: "Running Your First Garak Scan"
        }}
      />
    </GarakLayout>
  );
};

export default GarakInitialSetup;