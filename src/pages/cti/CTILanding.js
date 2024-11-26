import React from 'react';
import CTILayout from '../../components/layout/CTILayout';

const CTILanding = () => {
  return (
    <CTILayout>
      <h1>Guide to using OpenWebUI</h1>
      
      <section>
        <h2>Introduction</h2>
        <p>
          In this module we will be exploring how LLMs can be utilized to enhance the Cyber Threat Intelligence (CTI) workflow 
          when identifying and analyzing possible threats. LLMs are excellent at querying their knowledge base to find relevant 
          information. LLMs excel at this by going beyond simple queries and trying to understand the sentiment behind the text. 
          By understanding the meaning behind the words it can find more relevant information. We take advantage of this ability 
          by using Retrieval Augmented Generation (RAG) and connecting the LLM to a database of CTI focused documents. By doing 
          this we ensure that the LLM is pulling from an updated database with the most current information. This guide will show 
          that we can leverage an LLMs ability to understand in order to find the most relevant Cyber Threat Intelligence documents 
          for each situation. 
        </p>

        <h2>Using LLMs to find more information faster</h2>
        <p>
        LLMs use something called embeddings to represent information numerically as vectors. Embeddings capture the meaning behind 
        the words, allowing LLMs to understand the documents it has access to. This understanding is what facilitates an LLMs ability 
        to query relevant information. It goes beyond what is capable with a Google search and LLMs can provide relevant information 
        that may have been previously missed.</p>

        <p>
        By combining a model&apos;s embeddings with RAG, we are able to use an LLMs ability to understand meaning and apply it to a database 
        of documents with relevant and approved data. Think of the LLM as a librarian that organizes the books by topic using the Dewey 
        Decimal system. Without the LLM it's like you have a library of books organized by title or author. It would be impossible to 
        find anything unless you knew exactly what you were looking for. But with a LLM you now have an organized library and can find 
        supplemental information easily.
        </p>

        <h2>Benefits for Cyber Analysts</h2>
        <ul>
          <li>
            <strong>Efficiency:</strong> Filter irrelevant data and get the information you need faster.
          </li>
          <li>
            <strong>Accessibility:</strong> Talk to the LLM and narrow down your search to the right information.
          </li>
          <li>
            <strong>Local Control:</strong> Run entirely locally to ensure data privacy and security.
          </li>
          <li>
            <strong>Customization:</strong> Create your own RAG knowledge base to connect to the LLM for even better results.
          </li>
        </ul>
      </section>
    </CTILayout>
  );
};

export default CTILanding;