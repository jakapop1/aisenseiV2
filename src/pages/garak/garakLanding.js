import React from 'react';
import NavButtons from '../../components/shared/NavButtons';
import GarakLayout from '../../components/layout/GarakLayout';

const GarakLanding = () => {
  return (
    <GarakLayout>
      <h1>Guide to Using Garak</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          In this module, we will explore Garak, an open-source LLM vulnerability scanner designed to test and improve the
          security of large language models. Garak helps you discover weaknesses and unwanted behaviors in any technology
          using language models, allowing security professionals to identify potential vulnerabilities before they can be exploited.

          With dozens of plugins and thousands of probes, Garak provides comprehensive security testing for LLMs, enhancing
          your ability to deploy these powerful tools safely and responsibly.
        </p>

        <h2>What Garak Tests</h2>
        <p>
          Garak probes for multiple types of weaknesses that could cause an LLM to fail or behave in undesirable ways.
          This includes testing for prompt injections, jailbreaks, guardrail bypasses, hallucinations, toxic outputs,
          misinformation, and data leakage. Using systematic exploration, Garak identifies vulnerabilities that may
          inform alignment discussions and security policies for practical LLM deployment.
        </p>
        <p>
          After scanning, Garak provides detailed reports that show exactly where your LLM is working well and where
          it's vulnerable to attack. This helps you understand your model's strengths and weaknesses, allowing you to
          address security concerns before deployment.
        </p>

        <h2>Benefits for Security Professionals</h2>
        <ul>
          <li>
            <strong>Comprehensive Vulnerability Assessment:</strong> Scans chatbots and models to quickly discover security weaknesses.
          </li>
          <li>
            <strong>Automated Security Testing:</strong> Runs a variety of probes with minimal human intervention.
          </li>
          <li>
            <strong>Self-Adapting Capability:</strong> Logs failures to improve testing strategies for more thorough security evaluations.
          </li>
          <li>
            <strong>Diverse Failure Mode Exploration:</strong> Uses multiple plugins and challenging prompts to test various security scenarios.
          </li>
          <li>
            <strong>Red-Team Testing:</strong> Includes adaptive probes that can evolve based on model responses.
          </li>
        </ul>
        <h2>Demo</h2>
        <a href="https://drive.google.com/file/d/165WLxPyM60FlNTjWYSVDkzXQeOBlkIvJ/view?usp=sharing" className="text-blue-600 hover:underline">Link to Demo</a>
      </section>

      <NavButtons
        next={{
          link: "/garak/initial-setup",
          text: "Set up Garak"
        }}
        singleButtonPosition="right"
      />
    </GarakLayout>
  );
};

export default GarakLanding;