import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose, module }) => {
  const navigate = useNavigate();

  if (!isOpen || !module) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-8 rounded-lg max-w-2xl w-full text-white">
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Header */}
          <h2 className="text-3xl font-bold mb-4">{module.title}</h2>
          
          {/* Overview */}
          <p className="mb-6 text-gray-200 leading-relaxed">
            {module.overview}
          </p>
          
          {/* Key Topics */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Key Topics:</h3>
            <ul className="list-disc pl-6 space-y-2">
              {module.keyTopics.map((topic, index) => (
                <li key={index} className="text-gray-200">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Learning Objectives */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Learning Objectives:</h3>
            <ul className="list-disc pl-6 space-y-2">
              {module.learningObjectives.map((objective, index) => (
                <li key={index} className="text-gray-200">
                  {objective}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-8">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={() => navigate(module.url)}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Start Training
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;