import React from 'react';
import RaptorLayout from '../../components/layout/RaptorLayout';
import NavButtons from '../../components/shared/NavButtons';
import CopyCodeButton from '../../components/shared/CopyCodeButton';

const PacketRaptorSetup = () => {
  return (
    <RaptorLayout>
      <div className="lpw-content">
        <h1>Configuring Packet Raptor</h1>
        
        <section>
          <h2>1. Download the Code</h2>
          <p>Open Terminal and run these commands:</p>
          <CopyCodeButton code={`git clone https://github.com/automateyournetwork/packet_raptor
cd packet_raptor`} />
        </section>

        <section>
          <h2>2. Modify Configuration Files</h2>
          <p>We need to adjust some settings for Mac:</p>

          <h3>a. Open docker-compose.yml and remove these blocks:</h3>
          <CopyCodeButton 
            code={`deploy:
  resources:
    reservations:
      devices:
        - driver: nvidia
          count: 1
          capabilities: [ gpu ]`}
          />

          <h3>b. Open packet_raptor/packet_raptor.py and make these changes:</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Find <code className="bg-gray-200 px-2 py-0.5 rounded">"device": "cuda"</code> and change it to <code className="bg-gray-200 px-2 py-0.5 rounded">"device": "cpu"</code></li>
            <li>Find <code className="bg-gray-200 px-2 py-0.5 rounded">http://ollama:11434</code> (appears twice) and change both to <code className="bg-gray-200 px-2 py-0.5 rounded">http://localhost:11434</code></li>
          </ul>

          <h3>c. In packet_raptor/packet_raptor.py, replace the store_in_chroma method with:</h3>
          <CopyCodeButton 
            code={`def store_in_chroma(self):
    st.write("Storing in Chroma")
    all_texts = []
    all_summaries = []

    def traverse_and_collect(node):
        if node.is_leaf():
            all_texts.append(node.text)
        else:
            all_summaries.append(node.text)
            for child in node.children:
                traverse_and_collect(child)

    traverse_and_collect(self.root_node)
    combined_texts = all_texts + all_summaries

    # Create a unique collection name based on timestamp
    import time
    collection_name = f"collection_{int(time.time())}"
    
    # Initialize Chroma with persistent directory
    self.vectordb = Chroma.from_texts(
        texts=combined_texts,
        embedding=self.embedding_model,
        persist_directory="./chroma_db",
        collection_name=collection_name
    )
    # Persist the database
    self.vectordb.persist()`}
          />

          <p className="mt-4">This modification ensures that the database is properly initialized and persisted, preventing database-related errors during usage.</p>
        </section>

        <section>
          <h2>3. Set Up Python Environment</h2>
          <p>Copy and paste these commands into Terminal one at a time:</p>
          <CopyCodeButton 
            code={`# Create a special environment for Packet Raptor
python3 -m venv venv
source venv/bin/activate`}
          />  
          <CopyCodeButton code={`# Install required software
pip3 install huggingface_hub==0.19.4
pip3 install torch==2.2.1
pip3 install transformers==4.37.2
pip3 install sentence-transformers==2.2.2
pip3 install InstructorEmbedding==1.0.1
pip3 install langchain_experimental langchain langchain-community
pip3 install chromadb tiktoken
pip3 install jq
pip3 install streamlit --upgrade
pip3 install pyshark pandas
pip3 install scikit-learn networkx pyvis`}
        />

        <CopyCodeButton code={`# Create a needed directory
mkdir -p chroma_db`}
          />
        </section>

        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 my-6">
          <h3 className="text-yellow-200 font-bold mb-2">Troubleshooting Tips:</h3>
          <ul className="list-disc ml-6 text-black">
            <li>If you see "command not found", make sure you're in the right directory and environment</li>
            <li>If something isn't working, try closing everything and starting over from the beginning</li>
            <li>If you get error messages, they usually tell you what's wrong - read them carefully</li>
          </ul>
        </div>

        <NavButtons 
          previous={{
            link: "/raptor/docker",
            text: "Docker Setup"
          }}
          next={{
            link: "/raptor/raptor-start",
            text: "Start Packet Raptor"
          }}
        />
      </div>
    </RaptorLayout>
  );
};

export default PacketRaptorSetup;