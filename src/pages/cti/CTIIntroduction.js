import React from 'react';
import CTILayout from '../../components/layout/CTILayout';

const CTIIntro = () => {
  return (
    <CTILayout>
      <h1>What Is Open Web UI?</h1>
      
      <section>
        <h2>Introduction</h2>
        <p>
        OpenWebUI is a user-friendly and self-hosted AI interface designed to operate locally and offline. It supports 
        various LLM runners such as Ollama and OpenAI compatible APIs. It also is extensible and offers a variety of 
        easy to use features. OpenWebUI is an open source project built with the goal to lower the barrier of entry for 
        setting up and running an LLM locally. </p>

        <blockquote>“Our objective is unequivocal: to democratize access to refined, user-curated datasets, thereby eliminating 
            barriers to advancing AI for all.”  <footer>- <a href='https://docs.openwebui.com/mission'>OpenWebUI Mission Page</a></footer>
        </blockquote>
	
        <p>
            OpenWebUI allows users to curate their own datasets that can be applied to multiple models. The easy to use UI mirrors 
            OpenAI&apos;s UI and allows you to switch between various models and apply your curated knowledge base to each. OpenWebUI&apos;s 
            easy to use interface also makes it easy to create tools, scripts, custom prompts, and various other features. 
        </p>

        <h2>Why Use Open Web UI?</h2>
        <p>
            Open Web UI is an extremely easy to use tool that offers multiple deployment methods. It is customizable and allows users 
            to implement RAG extremely easily. It does this using its knowledge tools that provide the LLM "persistent information" the 
            user can reference whenever they need. The knowledge tool provided by Open Web UI allows users to upload and manage a knowledge 
            base of documents. The AI can then access and reference the documents when generating responses. This enhances its accuracy by 
            pulling relevant information from external sources, making it a practical implementation of RAG.
        </p>

        <p>
            Open Web UI also offers many tools that allow you to customize and enhance your LLMs abilities. OpenWebUI offers the ability 
            to create your own functions and tools to use with your AI. Open Web UI's Pipelines also extend the capabilities of functions 
            and can help reduce the load on your Open Web UI instance by executing on a sepearate server. The tool is both easy to use and 
            accessible for beginner users without limiting what advanced users can do.
        </p>

        <h2>See the full Open Web UI Documentation</h2>
        <a href="https://docs.openwebui.com/">https://docs.openwebui.com/</a>
      </section>
    </CTILayout>
  );
};

export default CTIIntro;