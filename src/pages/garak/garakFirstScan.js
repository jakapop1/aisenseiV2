import React from 'react';
import NavButtons from '../../components/shared/NavButtons';
import GarakLayout from '../../components/layout/GarakLayout';

const GarakFirstScan = () => {
  return (
    <GarakLayout>
      <h1>Running Your First Scan with Garak</h1>

      <section>
        <h2>Running a Basic Scan</h2>
        <p>
          Let's start with a simple scan to make sure everything is working properly. We'll test a Hugging Face model
          using one basic probe:
        </p>
        <pre>
# Basic test with GPT-2 and a simple profanity probe <br />
python -m garak --model_type huggingface --model_name gpt2 --probes lmrc.Profanity
        </pre>

        <p>
          This command specifies:
        </p>

        <ol>
          <li><strong>--model_type huggingface</strong>: Use the Hugging Face model family</li>
          <li><strong>--model_name gpt2</strong>: Test the GPT-2 model specifically</li>
          <li><strong>--probes lmrc.Profanity</strong>: Use the profanity probe from the Language Model Risk Cards framework</li>
        </ol>

        <p>
          When you run this command, Garak will:
        </p>
        <ol>
          <li>Download GPT-2 if you don't already have it locally</li>
          <li>Run the profanity probe against the model</li>
          <li>Analyze the results using appropriate detectors</li>
          <li>Display a progress bar during the scan</li>
          <li>Show PASS/FAIL results for each test</li>
        </ol>

        <h2>Understanding the Results</h2>
        <p>
          After the scan completes, Garak generates multiple output files:
        </p>
        <ul>
          <li>
            <strong>A log file (garak.log)</strong>: Contains debugging information and is continued across runs
          </li>
          <li>
            <strong>A report file (JSONL format)</strong>: Contains detailed information about each test, including
            prompts, responses, and detection results
          </li>
          <li>
            <strong>A hit log</strong>: Lists all attempts that yielded a vulnerability (a "hit")
          </li>
          <li>
            <strong>An HTML report</strong>: Provides an interactive summary of the scan results
          </li>
        </ul>

        <p>
          For each probe, Garak shows whether the test passed or failed, along with statistics about the failure rate.
          For example, you might see something like:
        </p>
        <pre>
riskywords.SurgeProfanityAnimalReferences: PASS ok on 10/10<br/>
riskywords.SurgeProfanityMentalDisability: FAIL hits on 3/10
        </pre>

        <p>
          This indicates that the model passed all tests related to animal references but failed on 3 out of 10
          tests related to mental disability profanity.
        </p>

        <h2>Exploring More Advanced Scans</h2>
        <p>
          Once you're comfortable with basic scans, you can explore more specific vulnerabilities:
        </p>
        <pre>
# Test for prompt injection vulnerabilities<br/>
python -m garak --model_type huggingface --model_name gpt2 --probes promptinject<br/>

# Test for jailbreak vulnerabilities using DAN (Do Anything Now) techniques<br/>
python -m garak --model_type huggingface --model_name gpt2 --probes dan.Dan_11_0<br/>

# Test for encoding-based bypass attacks with OpenAI models (requires API key)<br/>
export OPENAI_API_KEY="your-api-key-here"<br/>
python -m garak --model_type openai --model_name gpt-3.5-turbo --probes encoding
        </pre>

        <h2>Customizing Your Scans</h2>
        <p>
          Garak offers several options to customize your scans:
        </p>
        <ul>
          <li><strong>--generations N</strong>: Change the number of outputs collected per prompt (default is 10)</li>
          <li><strong>--parallel_requests N</strong>: Set the number of parallel requests to make</li>
          <li><strong>--report_prefix PREFIX</strong>: Set a custom prefix for report files</li>
          <li><strong>--verbose</strong>: Enable detailed logging</li>
        </ul>

        <p>
          You can see all available options with:
        </p>
        <pre>
python -m garak --help
        </pre>

        <p>
          To see all available probes, detectors, or generators:
        </p>
        <pre>
python -m garak --list_probes<br/>
python -m garak --list_detectors<br/>
python -m garak --list_generators
        </pre>
      </section>

      <NavButtons
        previous = {{
          link: "/garak/initial-setup",
          text: "Initial Setup"
        }}
        next={{
          link: "/garak/understanding-output",
          text: "Understanding Garak Results"
        }}
      />
    </GarakLayout>
  );
};

export default GarakFirstScan;