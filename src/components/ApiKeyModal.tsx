'use client';

import React, { useState } from 'react';
import CanaryModal from '../../../components/canary-ui/layout/CanaryModal';
import CanaryButton from '../../../components/canary-ui/buttons/CanaryButton';
import { ButtonType } from '../../../components/canary-ui/buttons/types';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (apiKey: string) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!apiKey.trim()) {
      setError('API key is required');
      return;
    }

    if (!apiKey.startsWith('sk-ant-')) {
      setError('Please enter a valid Anthropic API key (starts with sk-ant-)');
      return;
    }

    // Save to localStorage
    localStorage.setItem('anthropic_api_key', apiKey.trim());
    onSave(apiKey.trim());
    
    // Reset and close
    setApiKey('');
    setError('');
    onClose();
  };

  const handleClose = () => {
    setApiKey('');
    setError('');
    onClose();
  };

  return (
    <CanaryModal
      isOpen={isOpen}
      onClose={handleClose}
      title="Setup Claude AI Integration"
      size="medium"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <p className="font-roboto text-body-sm text-canary-black-2 mb-4">
            To use Claude AI for menu parsing, you'll need an Anthropic API key. This will be stored securely in your browser.
          </p>
          
          <label className="block font-roboto text-body-sm font-medium text-canary-black-1 mb-2">
            Anthropic API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => {
              setApiKey(e.target.value);
              if (error) setError('');
            }}
            placeholder="sk-ant-..."
            className={`w-full h-12 px-4 border rounded font-roboto text-body-sm text-canary-black-1 focus:outline-none focus:ring-2 focus:ring-canary-blue-1 ${
              error ? 'border-red-400' : 'border-neutral-200'
            }`}
            autoFocus
          />
          {error && (
            <p className="mt-1 font-roboto text-caption text-red-600">
              {error}
            </p>
          )}
          
          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
            <p className="font-roboto text-caption text-blue-800">
              <strong>How to get an API key:</strong>
              <br />
              1. Visit <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="underline">console.anthropic.com</a>
              <br />
              2. Create an account or sign in
              <br />
              3. Go to API Keys section
              <br />
              4. Create a new API key
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <CanaryButton
            type={ButtonType.OUTLINED}
            onClick={handleClose}
          >
            Cancel
          </CanaryButton>
          <CanaryButton
            type={ButtonType.PRIMARY}
            nativeType="submit"
          >
            Save API Key
          </CanaryButton>
        </div>
      </form>
    </CanaryModal>
  );
};