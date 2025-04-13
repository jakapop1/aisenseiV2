import React from 'react';
import NavButtons from '../../components/shared/NavButtons';
import G3POLayout from '../../components/layout/G3POLayout';

const GhidraInstallation = () => {
  return (
    <G3POLayout>
      <h1>Installing Ghidra on Your Desktop</h1>

      <section>
        <h2>Step 1: Download Ghidra</h2>
        <p>
          Visit the official Ghidra releases page on GitHub to download the latest version:
          {' '}
          <a href="https://github.com/NationalSecurityAgency/ghidra/releases"><pre><code>https://github.com/NationalSecurityAgency/ghidra/releases</code></pre></a>

          Select the ZIP file appropriate for your operating system.
        </p>
        <img 
          src="/images/ghidra-download.png" 
          alt="TBD" 
          width="700" 
        />
      </section>

      <section>
        <h2>Step 2: Extract Ghidra</h2>
        <p>
          Once downloaded, extract the ZIP file to a location of your choice. For ease of access, you can extract it to your Desktop.
          Ghidra does not require traditional installation; simply extract the contents into a folder.
        </p>
        <img 
          src="/images/ghidra-extract.png" 
          alt="TBD" 
          width="700" 
        />
      </section>

      <section>
        <h2>Step 3: Verify Your Java Installation</h2>
        <p>
          Ghidra requires Java 17 or later. Open your terminal (or Command Prompt on Windows) and run the following command:
        </p>
        <pre><code>java -version</code></pre>
        <p>
          If Java is not installed or your version is below 17, download and install the latest Java Development Kit (JDK) from one of these sources:
        </p>
        <ul>
          <li>
            <a 
              href="https://adoptium.net/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Adoptium
            </a>
          </li>
          <li>
            <a 
              href="https://www.oracle.com/java/technologies/javase-downloads.html" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Oracle JDK
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Step 4: Launch Ghidra</h2>
        <p>
          Navigate to the extracted Ghidra folder and start Ghidra using the appropriate method for your operating system:
        </p>
        <ul>
          <li>
            <strong>Windows:</strong> Locate and Double-click <code>ghidraRun.bat</code> 
          </li>
          <li>
            <strong>macOS and Linux:</strong> Open a terminal in the Ghidra folder and run:
            <pre><code>./ghidraRun</code></pre>
          </li>
        </ul>
        <p>
          Ghidra will launch its graphical interface, and you will be prompted to create or open a project.
        </p>
        <img 
          src="/images/ghidra-launch.png" 
          alt="Ghidra Launch Screen" 
          width="700" 
        />
      </section>

      <section>
        <h2>Step 5: Set Up a New Project</h2>
        <p>
          Once Ghidra is running, create a new project by selecting <em>File &gt; New Project</em>.
          Choose a <strong>Non-Shared Project</strong>, give your project a name (for example, "G3PO_Test"), and import a binary file (such as an executable or library) to start your reverse engineering analysis.
        </p>
      </section>

      <NavButtons 
        previous={{
          link: "/g3po/docker/ollama",
          text: "Ollama with Docker Setup"
        }}
        next={{
          link: "/g3po/docker/ollama/ghidra/script",
          text: "G3PO Script"
        }}
      />
    </G3POLayout>
  );
};

export default GhidraInstallation;
