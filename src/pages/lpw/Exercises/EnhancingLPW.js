import React from 'react';
import LPWLayout from '../../../components/layout/LPWLayout';
import NavButtons from '../../../components/shared/NavButtons';
import CodeBlock from '../../../components/shared/CodeBlock';
import CopyCodeButton from '../../../components/shared/CopyCodeButton';

const EnhanceLPW = () => {
  return (
    <LPWLayout>
      <div className="lpw-content">
        <h1>Enhancing LPW Processing Speed</h1>
        
        <section className="mb-8">
          <p className="mb-6">
            While Local Packet Whisperer (LPW) provides powerful packet analysis capabilities through LLMs,
            its default processing method can be optimized for better performance. By default, LPW converts
            PCAP files into raw text format, which includes a significant amount of redundant data and
            requires more processing power to analyze. However, by implementing a custom packet extractor,
            we can transform the data into a streamlined JSON format that focuses on the most relevant
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Understanding the Enhancement</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Default LPW Processing</h3>
              <p>
                Converts PCAP to raw text format:
              </p>
              <ul className="list-disc ml-4 mt-2">
                <li>Contains all packet information</li>
                <li>Includes redundant data</li>
                <li>Slower processing time</li>
                <li>More complex for LLMs to analyze</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg bg-green-50">
              <h3 className="text-lg font-semibold mb-2">Enhanced Processing</h3>
              <p>
                Converts PCAP to structured JSON:
              </p>
              <ul className="list-disc ml-4 mt-2">
                <li>Contains only relevant fields</li>
                <li>Structured, clean format</li>
                <li>Faster processing speed</li>
                <li>Easier for LLMs to analyze</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Implementation Guide</h2>
          
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Step 1: Create the Python Script</h3>
              <p className="mb-4">Create a new file named packet_extractor.py in your LPW directory:</p>
              <CopyCodeButton code="touch packet_extractor.py" />
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Step 2: Add the Code</h3>
              <p className="mb-4">Copy and paste the following code into packet_extractor.py:</p>
              <CodeBlock code={`import pyshark
import json
from datetime import datetime

def extract_packet_data(pcap_file):
    try:
        cap = pyshark.FileCapture(pcap_file)
        packets = []

        for packet in cap:
            packet_data = {
                'timestamp': str(packet.sniff_timestamp),
                'length': packet.length,
                'protocol': packet.transport_layer if hasattr(packet, 'transport_layer') else 'Unknown'
            }

            # Extract IP information if available
            if hasattr(packet, 'ip'):
                packet_data.update({
                    'src_ip': packet.ip.src,
                    'dst_ip': packet.ip.dst
                })

            # Extract port information if available
            if hasattr(packet, 'tcp'):
                packet_data.update({
                    'src_port': packet.tcp.srcport,
                    'dst_port': packet.tcp.dstport
                })
            elif hasattr(packet, 'udp'):
                packet_data.update({
                    'src_port': packet.udp.srcport,
                    'dst_port': packet.udp.dstport
                })

            # Extract DNS information if available
            if hasattr(packet, 'dns'):
                packet_data['dns'] = {
                    'qry_name': packet.dns.qry_name if hasattr(packet.dns, 'qry_name') else None
                }

            packets.append(packet_data)

        return json.dumps(packets, indent=2)

    except Exception as e:
        return str(e)

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        print(extract_packet_data(sys.argv[1]))`} />
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Step 3: Restart LPW</h3>
              <p>
                After implementing the packet extractor, restart LPW to apply the changes. The tool will
                now automatically use the optimized JSON format for packet processing.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Benefits of the Enhanced Processing</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="space-y-2">
              <li><strong>Improved Speed:</strong> Processing JSON is significantly faster than parsing raw text</li>
              <li><strong>Better Structure:</strong> Data is organized in a clear, hierarchical format</li>
              <li><strong>Reduced Noise:</strong> Only relevant packet information is included</li>
              <li><strong>Enhanced Analysis:</strong> LLMs can more easily identify patterns and anomalies</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <div className="p-4 rounded-lg">
            <ul className="space-y-2">
              <li><strong>Flexible Data Extraction:</strong> Captures key packet information including timestamps, IPs, ports, and protocols</li>
              <li><strong>Protocol Support:</strong> Handles TCP, UDP, and DNS protocols</li>
              <li><strong>Error Handling:</strong> Includes robust error checking and reporting</li>
              <li><strong>Command Line Support:</strong> Can be run directly from the command line</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Note</h2>
            <p>
              This enhancement significantly improves LPW's processing capabilities while maintaining
              all the benefits of LLM-based analysis. The structured JSON format not only speeds up
              processing but also provides a cleaner foundation for detailed packet analysis.
            </p>
          </div>
        </section>

        <NavButtons 
          previous={{
            text: "Understanding LLMs",
            link: "/lpw/understandingLLMS"
          }}
        />
      </div>
    </LPWLayout>
  );
};

export default EnhanceLPW;
