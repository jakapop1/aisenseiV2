// src/pages/agents/AgentsLanding3.js
import React from 'react';
import AgentsLayout from '../../components/layout/AgentsLayout';
import NavButtons from '../../components/shared/NavButtons';

const AgentsLanding3 = () => {
  return (
    <AgentsLayout>
      <div className="lpw-content">
        <h1>Video Walkthrough</h1>
        <section>

          <p>
            Here is a full video walkthrough of the CSLA module, covering everything from purpose to installation and
            usage. The video is long and covers a lot of information, so it may be more beneficial to follow along with
            the written guide at your own pace.
          </p>

          <iframe
              src="https://drive.google.com/file/d/1Zc1cNh1Lu-QBSkX0ldJ4UY8qDWaPwCId/preview"
              title="CSLA Demo Walkthrough Video"
              width="100%"
              height="520"
              allow="autoplay"
              style={{borderRadius: '8px', maxWidth: '920px', margin: '0 auto', display: 'block'}}
          ></iframe>

        </section>


        <NavButtons
            previous={{
              text: "What is CSLA?",
              link: "/agents/introduction2"
            }}
            next={{
              text: "Installing Python",
              link: "/agents/python"
            }}
        />
      </div>
    </AgentsLayout>
  );
};

export default AgentsLanding3;