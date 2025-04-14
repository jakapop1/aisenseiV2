import React from 'react';
import NavButtons from '../../components/shared/NavButtons';
import G3POLayout from '../../components/layout/G3POLayout';

const GhidraInstallation = () => {
  return (
    <G3POLayout>
      <h1>Installing Ghidra on Your Desktop</h1>

      <img
        src="https://ghidra-sre.org/images/GHIDRA_1.png"
        alt="TBD"
        width="200"
      />

      <section>
        <h1>   </h1>
        <h2>Step 1: Download Ghidra</h2>
        <p>
          Visit the official Ghidra releases page on GitHub to download the latest version:
          {' '}
          <a href="https://github.com/NationalSecurityAgency/ghidra/releases"><pre><code>https://github.com/NationalSecurityAgency/ghidra/releases</code></pre></a>

          Select the zip with the name public in it. The file should contain the full runnable Ghidra application for Windows, macOS, and Linux.


        </p>

        <img
          src="/images/g3po/zips.png"
          alt="Zip to select"
          width="600"
        />

      </section>

      <section>
        <h2>Step 2: Extract Ghidra</h2>
        <p>
          Once downloaded, extract the ZIP file to a location of your choice. For ease of access, you can extract it to your Desktop.
          Ghidra does not require traditional installation; simply extract the contents into a folder.
        </p>
        <img
          src="/images/g3po/zipContents.png"
          alt="TBD"
          width="600"
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
      </section>

      <section>
        <h2>Step 5: Set Up a New Project</h2>
        <p>
          Once Ghidra is running, create a new project by selecting <em>File &gt; New Project</em>.
          Choose a <strong>Non-Shared Project</strong>, give your project a name (for example, "G3PO_Test"), and import a binary file (such as an executable or library) to start your reverse engineering analysis.
        </p>

        <img
          src="/images/g3po/homeScreen.png"
          alt="Ghidra Launch Screen"
          width="500"
        />
      </section>
      <section>

        <h1> </h1>
        <h2>Step 6: Uploading and Analyzing an Executable</h2>

        <h3>6.1 Create a Simple C Program</h3>
        <p>
          Below is a basic C program that prints "Hello, World!" and counts from 1 to 100. You can use any text editor to save this code in a file named <code>hello_loop.c</code>.
        </p>
        <pre><code>{`
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");

    for (int i = 1; i <= 100; i++) {
        printf("%d\\n", i);
    }

    return 0;
}
  `}</code></pre>

        <h3>6.2 Compile the Program</h3>
        <p>
          Use the following commands to compile <code>hello_loop.c</code> on your system:
        </p>
        <ul>
          <li>
            <strong>Windows:</strong>
            <pre><code>gcc hello_loop.c -o hello_loop.exe</code></pre>
          </li>
          <li>
            <strong>macOS or Linux:</strong>
            <pre><code>gcc hello_loop.c -o hello_loop</code></pre>
          </li>
        </ul>
        <p>
          This will generate an executable binary file named 
        </p>

        <p> <strong>Windows</strong>
          <code>hello_loop.exe</code> 
        </p>

        <p>
        <strong>macOS/Linux</strong>
         <code>hello_loop</code> 
        </p>


        <h3>6.3 Import the Binary into Ghidra</h3>
        <p>
        From the top menu, open your Ghidra project and go to <strong>File &gt; Import File</strong>
        </p>
        <p>
         Select your compiled binary ie: <code>hello_loop.exe</code>
        </p>
        <p>
          In your Ghidra UI, follow the import prompts to upload the executable. Once imported, double-click the file in your project to open it in Ghidra’s CodeBrowser.
        </p>

        <img
          src="/images/g3po/import.png"
          alt="Uploading Executable to Ghidra"
          width="300"
        />


        <p>

        </p>

        <p>
          Follow the sequence of instructions to analyze and prepare the executable.
        </p>

        <img
          src="/images/g3po/beforeAI.png"
          alt="Uploading Executable to Ghidra"
          width="700"
        />

        <p>
          With the project set up with the executable ready, we are now ready to move onto the Tenable Script G3PO.
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
