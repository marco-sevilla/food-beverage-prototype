'use client';

import React, { useState } from 'react';
import { runMenuParserTest, testMenuParser, ParsedMenu } from '../utils/menuParser';

export const MenuParserTest: React.FC = () => {
  const [testResult, setTestResult] = useState<ParsedMenu | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleRunTest = async () => {
    setIsRunning(true);
    try {
      // Run the test in console
      runMenuParserTest();
      
      // Get the result for display
      const result = testMenuParser();
      setTestResult(result);
    } catch (error) {
      console.error('Test failed:', error);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="p-6 bg-white border-2 border-dashed border-gray-300 rounded-lg max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Menu Parser Test</h2>
      
      <button
        onClick={handleRunTest}
        disabled={isRunning}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isRunning ? 'Running Test...' : 'Run Menu Parser Test'}
      </button>
      
      <p className="text-sm text-gray-600 mb-4">
        Click the button to test the menu parser with mock data. Check the browser console for detailed logs.
      </p>

      {testResult && (
        <div className="mt-6 p-4 bg-gray-50 rounded">
          <h3 className="font-semibold text-lg mb-2">Test Results:</h3>
          <div className="space-y-3">
            <p><strong>Menu Name:</strong> {testResult.menuName}</p>
            <p><strong>Total Sections:</strong> {testResult.sections.length}</p>
            
            <div className="space-y-2">
              {testResult.sections.map((section, index) => (
                <div key={index} className="border-l-4 border-blue-400 pl-3">
                  <h4 className="font-medium text-blue-700">
                    {section.sectionName} ({section.items.length} items)
                  </h4>
                  <ul className="list-disc list-inside ml-2 text-sm text-gray-700">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};