'use client';

import React, { useState } from 'react';
import CanaryModal from '../../../components/canary-ui/layout/CanaryModal';
import CanaryButton from '../../../components/canary-ui/buttons/CanaryButton';
import { ButtonType, ButtonSize } from '../../../components/canary-ui/buttons/types';
import { motion, AnimatePresence } from 'framer-motion';
import { parseMenuFromFile, ParsedMenu } from '../utils/claudeMenuParser';
import { ApiKeyModal } from './ApiKeyModal';

interface CreateMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateMenu: (menuName: string, parsedMenu?: ParsedMenu) => void;
}

export const CreateMenuModal: React.FC<CreateMenuModalProps> = ({
  isOpen,
  onClose,
  onCreateMenu,
}) => {
  const [step, setStep] = useState<'method' | 'form'>('method');
  const [uploadState, setUploadState] = useState<'default' | 'uploading' | 'uploaded' | 'parsing'>('default');
  const [menuName, setMenuName] = useState('');
  const [error, setError] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [parsedMenu, setParsedMenu] = useState<ParsedMenu | null>(null);
  const [ocrProgress, setOcrProgress] = useState<string>('');
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);

  // Check for API key on component mount
  React.useEffect(() => {
    const apiKey = localStorage.getItem('anthropic_api_key');
    setHasApiKey(!!apiKey);
  }, []);

  // Reset all state when modal opens
  React.useEffect(() => {
    if (isOpen) {
      console.log('🔄 Modal opened - resetting all state');
      setStep('method');
      setUploadState('default');
      setMenuName('');
      setError('');
      setUploadedFile(null);
      setUploadError('');
      setIsProcessing(false);
      setParsedMenu(null);
      setOcrProgress('');
      setIsDragOver(false);
      setIsHovering(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!menuName.trim()) {
      setError('Menu name is required');
      return;
    }

    onCreateMenu(menuName.trim(), parsedMenu || undefined);
    setMenuName('');
    setError('');
    setStep('method');
    setParsedMenu(null);
    onClose();
  };

  const handleClose = () => {
    setMenuName('');
    setError('');
    setStep('method');
    setUploadState('default');
    // Reset upload state
    setUploadedFile(null);
    setUploadError('');
    setIsProcessing(false);
    setIsDragOver(false);
    setIsHovering(false);
    setParsedMenu(null);
    setOcrProgress('');
    onClose();
  };

  const handleManualBuild = () => {
    // If we have parsed data, pre-populate the menu name
    if (parsedMenu && !menuName) {
      setMenuName(parsedMenu.menuName || '');
    }
    setStep('form');
  };

  // File validation
  const validateFile = (file: File): boolean => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/jpg', 
      'image/png',
      'image/webp'
    ];

    if (file.size > maxSize) {
      setUploadError('File size must be less than 10MB');
      return false;
    }

    if (!allowedTypes.includes(file.type)) {
      setUploadError('Only PDF, JPEG, PNG, and WebP files are supported');
      return false;
    }

    setUploadError('');
    return true;
  };

  // Handle file processing with new upload flow
  const processFile = async (file: File) => {
    if (!validateFile(file)) return;

    // Check for API key first
    const apiKey = localStorage.getItem('anthropic_api_key');
    if (!apiKey) {
      setIsApiKeyModalOpen(true);
      return;
    }

    // Generate unique upload ID for tracking
    const uploadId = `upload-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Clear previous results first
    setParsedMenu(null);
    setMenuName('');
    setUploadError('');
    
    // Set upload state to show uploading animation
    setUploadState('uploading');
    setUploadedFile(file);
    
    try {
      console.log('🔄 Processing new file:', {
        uploadId,
        fileName: file.name,
        size: file.size,
        lastModified: file.lastModified,
        type: file.type
      });
      console.log('🗑️ Cleared previous parsed menu data');
      
      // Simulate upload time for better UX (minimum 1 second)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Move to uploaded state - user can review file and choose to parse
      setUploadState('uploaded');
      console.log('✅ File uploaded successfully:', file.name);
      
    } catch (error) {
      console.error('❌ Error uploading file', uploadId, ':', error);
      setUploadError(`Error uploading file: ${error instanceof Error ? error.message : 'Please try again.'}`);
      setUploadState('default');
      setUploadedFile(null);
    }
  };

  // Handle parsing process when user clicks "Parse & create menu"
  const handleParseAndCreate = async () => {
    if (!uploadedFile) return;

    const uploadId = `parse-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setUploadState('parsing');
    setUploadError('');
    
    try {
      console.log('🧠 Starting Claude parsing for:', uploadId);
      
      // Use Claude to analyze and parse the menu
      const parsed = await parseMenuFromFile(uploadedFile);
      
      console.log('📊 Parsing complete for upload:', uploadId);
      console.log('✅ Claude parsed result:', parsed);
      
      setParsedMenu(parsed);
      
      // Auto-populate the menu name from parsed data
      if (parsed.menuName) {
        setMenuName(parsed.menuName);
        console.log('📝 Set menu name from parsed data:', parsed.menuName);
      }
      
      // Create the menu automatically and navigate to Edit Menu page
      console.log('🚀 Auto-creating menu with parsed data');
      const menuName = parsed.menuName || 'Imported Menu';
      onCreateMenu(menuName, parsed);
      
      // Reset and close modal
      setUploadState('default');
      setUploadedFile(null);
      setParsedMenu(null);
      setMenuName('');
      onClose();
      
      console.log('✅ Parse and create completed for:', uploadId);
      
    } catch (error) {
      console.error('❌ Error parsing file', uploadId, ':', error);
      setUploadError(`Error parsing file: ${error instanceof Error ? error.message : 'Please try again.'}`);
      setUploadState('uploaded'); // Go back to uploaded state so user can try again
    }
  };

  // Handle cancel upload (X button click)
  const handleCancelUpload = () => {
    console.log('❌ User canceled upload');
    setUploadState('default');
    setUploadedFile(null);
    setUploadError('');
    setParsedMenu(null);
    setMenuName('');
  };

  // Truncate filename for display
  const getTruncatedFileName = (fileName: string, maxLength: number = 20) => {
    if (fileName.length <= maxLength) return fileName;
    const extension = fileName.split('.').pop();
    const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
    const truncated = nameWithoutExt.substring(0, maxLength - extension!.length - 4) + '...';
    return `${truncated}.${extension}`;
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      console.log('📂 New file dropped:', files[0].name);
      processFile(files[0]);
    }
  };

  // Handle click upload
  const handleUploadClick = () => {
    console.log('🗂️ Starting new file upload...');
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.jpg,.jpeg,.png,.webp';
    
    // Force a fresh file input by setting value to empty
    input.value = '';
    
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        console.log('📁 New file selected:', file.name, 'Size:', file.size, 'Last modified:', file.lastModified);
        processFile(file);
      }
    };
    input.click();
  };

  const handleUploadMenu = () => {
    handleUploadClick();
  };


  const handleBackToMethod = () => {
    setMenuName('');
    setError('');
    setStep('method');
  };

  const handleApiKeySave = (apiKey: string) => {
    setHasApiKey(true);
    setIsApiKeyModalOpen(false);
  };

  const handleApiKeyCancel = () => {
    setIsApiKeyModalOpen(false);
  };

  // Bouncing Stars Animation Component
  const BouncingStars = () => (
    <motion.div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0">
      <div className="col-[1] flex h-[calc(1px*((var(--transform-inner-width)*0.27563735842704773)+(var(--transform-inner-height)*0.9612616896629333)))] items-center justify-center ml-0 mt-0 relative row-[1] w-[calc(1px*((var(--transform-inner-height)*0.27563735842704773)+(var(--transform-inner-width)*0.9612616896629333)))]">
        <div className="flex-none rotate-[16deg]">
          <div className="overflow-clip relative size-[64px]">
            <svg width="96" height="80" viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <g clipPath="url(#clip0_2791_37991)">
                {/* Document */}
                <path d="M50.2877 23.233L59.1186 39.1643L52.3783 62.6704L16.4912 52.3799L26.7817 16.4928L50.2877 23.233ZM51.7578 18.1063L28.2517 11.3661C25.432 10.5575 22.4635 12.203 21.6549 15.0227L11.3645 50.9098C10.5559 53.7295 12.2014 56.6981 15.0211 57.5066L50.9082 67.7971C53.7279 68.6056 56.6965 66.9601 57.505 64.1404L64.2453 40.6344C64.6349 39.2758 64.4714 37.8141 63.7693 36.5864L54.9385 20.6551C54.2693 19.4091 53.1164 18.4959 51.7578 18.1063ZM24.5581 43.5965L50.1917 50.9468L48.7216 56.0736L23.088 48.7232L24.5581 43.5965ZM27.4982 33.343L53.1318 40.6934L51.6618 45.8201L26.0281 38.4698L27.4982 33.343ZM30.4383 23.0896L48.3819 28.2348L46.9118 33.3615L28.9683 28.2163L30.4383 23.0896Z" fill="url(#paint0_linear_2791_37991)"/>
              </g>
              
              {/* Star 1 - Top right */}
              <motion.path 
                d="M58.4186 5.42494C58.7577 4.38134 60.2341 4.38134 60.5732 5.42494L60.9912 6.71136C61.1428 7.17807 61.5778 7.49406 62.0685 7.49406H63.4211C64.5184 7.49406 64.9746 8.89821 64.0869 9.54319L62.9926 10.3382C62.5956 10.6267 62.4295 11.138 62.5811 11.6047L62.9991 12.8911C63.3382 13.9347 62.1438 14.8025 61.256 14.1575L60.1617 13.3625C59.7647 13.074 59.2271 13.074 58.8301 13.3625L57.7358 14.1575C56.8481 14.8025 55.6536 13.9347 55.9927 12.8911L56.4107 11.6047C56.5623 11.138 56.3962 10.6267 55.9992 10.3382L54.9049 9.54319C54.0172 8.89821 54.4734 7.49406 55.5707 7.49406H56.9233C57.4141 7.49406 57.849 7.17807 58.0006 6.71136L58.4186 5.42494Z" 
                fill="url(#paint1_linear_2791_37991)"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0
                }}
              />
              
              {/* Star 2 - Large right */}
              <motion.path 
                d="M81.605 8.84161C82.7393 7.61701 84.778 8.55938 84.5801 10.2168L84.3409 12.2204C84.2524 12.9616 84.6512 13.6756 85.3288 13.9888L87.1604 14.8354C88.6756 15.5358 88.4093 17.7659 86.7719 18.0899L84.7924 18.4815C84.0601 18.6264 83.5044 19.2264 83.4159 19.9676L83.1767 21.9712C82.9788 23.6286 80.7756 24.0646 79.9614 22.6073L78.9773 20.8458C78.6132 20.1941 77.8709 19.851 77.1386 19.9959L75.1591 20.3875C73.5216 20.7115 72.4262 18.7508 73.5606 17.5262L74.9318 16.0459C75.439 15.4982 75.536 14.6862 75.1719 14.0345L74.1878 12.273C73.3736 10.8157 74.8999 9.16804 76.4151 9.86844L78.2466 10.7151C78.9242 11.0283 79.7265 10.8696 80.2338 10.3219L81.605 8.84161Z" 
                fill="url(#paint2_linear_2791_37991)"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
              />
              
              {/* Star 3 - Bottom right */}
              <motion.path 
                d="M66.47 24.6937C66.7279 23.8999 67.8509 23.9 68.1088 24.6937L68.4519 25.7497C68.5672 26.1046 68.898 26.345 69.2713 26.345H70.3815C71.2161 26.345 71.5632 27.413 70.8879 27.9036L69.9897 28.5562C69.6877 28.7756 69.5614 29.1644 69.6767 29.5194L70.0198 30.5754C70.2777 31.3691 69.3692 32.0292 68.694 31.5386L67.7958 30.886C67.4938 30.6666 67.0849 30.6666 66.783 30.886L65.8847 31.5386C65.2095 32.0292 64.301 31.3691 64.5589 30.5754L64.902 29.5194C65.0173 29.1644 64.891 28.7756 64.589 28.5562L63.6908 27.9036C63.0156 27.413 63.3626 26.345 64.1972 26.345H65.3075C65.6807 26.345 66.0115 26.1046 66.1269 25.7497L66.47 24.6937Z" 
                fill="url(#paint3_linear_2791_37991)"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4
                }}
              />
              
              <defs>
                <linearGradient id="paint0_linear_2791_37991" x1="9.89441" y1="56.0366" x2="56.7562" y2="68.8558" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1937ED"/>
                  <stop offset="0.495192" stopColor="#D429AF"/>
                  <stop offset="1" stopColor="#DD3131"/>
                </linearGradient>
                <linearGradient id="paint1_linear_2791_37991" x1="66.6932" y1="18.3489" x2="30.8031" y2="15.088" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0865385" stopColor="#DB3044"/>
                  <stop offset="0.485577" stopColor="#3F35E0"/>
                </linearGradient>
                <linearGradient id="paint2_linear_2791_37991" x1="84.7836" y1="31.8439" x2="37.5264" y2="4.55996" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0865385" stopColor="#DB3044"/>
                  <stop offset="0.423077" stopColor="#3F35E0"/>
                </linearGradient>
                <linearGradient id="paint3_linear_2791_37991" x1="61.25" y1="34.2506" x2="73.4747" y2="34.1011" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1937ED"/>
                  <stop offset="0.495192" stopColor="#D429AF"/>
                  <stop offset="1" stopColor="#DD3131"/>
                </linearGradient>
                <clipPath id="clip0_2791_37991">
                  <rect width="64" height="64" fill="white" transform="translate(17.6406) rotate(16)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      {step === 'method' ? (
        <CanaryModal
          isOpen={isOpen}
          onClose={handleClose}
          title="Create new menu"
          size="medium"
        >
          <motion.div
            key="method"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Drop Zone Container */}
            <div className="flex flex-col items-center justify-center gap-6">
              {/* Animated Drop Zone with different states */}
              <motion.div 
                onClick={uploadState === 'default' ? handleUploadMenu : undefined}
                onHoverStart={uploadState === 'default' ? () => setIsHovering(true) : undefined}
                onHoverEnd={uploadState === 'default' ? () => setIsHovering(false) : undefined}
                onDragOver={uploadState === 'default' ? handleDragOver : undefined}
                onDragLeave={uploadState === 'default' ? handleDragLeave : undefined}
                onDrop={uploadState === 'default' ? handleDrop : undefined}
                className={`w-full h-[231px] rounded-lg flex flex-col items-center justify-center px-6 py-6 relative ${
                  uploadState === 'default' ? 'cursor-pointer' : ''
                }`}
                animate={{
                  backgroundColor: uploadState === 'default' && (isHovering || isDragOver) ? '#eaeef9' : 'white',
                  borderColor: uploadState === 'default' && (isHovering || isDragOver) ? '#2858c4' : uploadError ? '#ef4444' : '#9CA3AF',
                  borderWidth: uploadState === 'default' && (isHovering || isDragOver) ? '3px' : '2px',
                  scale: uploadState === 'default' && (isHovering || isDragOver) ? 1.02 : 1,
                  boxShadow: uploadState === 'default' && (isHovering || isDragOver) ? '0px 8px 24px rgba(40, 88, 196, 0.15)' : '0px 0px 0px rgba(0, 0, 0, 0)',
                }}
                style={{
                  borderStyle: uploadState === 'default' && (isHovering || isDragOver) ? 'solid' : 'dashed',
                  transition: 'border-style 0.3s ease-in-out, border-color 0.3s ease-in-out',
                  willChange: 'transform, background-color, border-color, box-shadow, border-style',
                }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.25, 0.1, 0.25, 1],
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }}
              >
                {/* Content based on upload state */}
                {uploadState === 'default' && (
                  <motion.div 
                    className="flex flex-col items-center text-center"
                    animate={{
                      gap: isHovering ? '24px' : '24px',
                    }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.25, 0.1, 0.25, 1],
                      type: 'spring',
                      stiffness: 300,
                      damping: 30
                    }}
                  >
                    {/* Upload Icon with rotation */}
                    <motion.div 
                      className="flex items-center justify-center"
                      animate={{
                        rotate: isHovering || isDragOver ? 16 : 0,
                        width: isHovering || isDragOver ? '80px' : '32px',
                        height: isHovering || isDragOver ? '80px' : '32px',
                      }}
                      style={{ willChange: 'transform, width, height' }}
                      transition={{ 
                        duration: 0.4, 
                        ease: [0.25, 0.1, 0.25, 1],
                        type: 'spring',
                        stiffness: 300,
                        damping: 30
                      }}
                    >
                      {isHovering || isDragOver ? (
                        <motion.div 
                          className="w-full h-full flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            ease: [0.25, 0.1, 0.25, 1]
                          }}
                        >
                          <svg width="96" height="80" viewBox="0 0 96 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <g clipPath="url(#clip0_default)">
                              <path d="M50.2877 23.233L59.1186 39.1643L52.3783 62.6704L16.4912 52.3799L26.7817 16.4928L50.2877 23.233ZM51.7578 18.1063L28.2517 11.3661C25.432 10.5575 22.4635 12.203 21.6549 15.0227L11.3645 50.9098C10.5559 53.7295 12.2014 56.6981 15.0211 57.5066L50.9082 67.7971C53.7279 68.6056 56.6965 66.9601 57.505 64.1404L64.2453 40.6344C64.6349 39.2758 64.4714 37.8141 63.7693 36.5864L54.9385 20.6551C54.2693 19.4091 53.1164 18.4959 51.7578 18.1063ZM24.5581 43.5965L50.1917 50.9468L48.7216 56.0736L23.088 48.7232L24.5581 43.5965ZM27.4982 33.343L53.1318 40.6934L51.6618 45.8201L26.0281 38.4698L27.4982 33.343ZM30.4383 23.0896L48.3819 28.2348L46.9118 33.3615L28.9683 28.2163L30.4383 23.0896Z" fill="url(#paint0_linear_default)"/>
                            </g>
                            <motion.path 
                              d="M58.4186 5.42494C58.7577 4.38134 60.2341 4.38134 60.5732 5.42494L60.9912 6.71136C61.1428 7.17807 61.5778 7.49406 62.0685 7.49406H63.4211C64.5184 7.49406 64.9746 8.89821 64.0869 9.54319L62.9926 10.3382C62.5956 10.6267 62.4295 11.138 62.5811 11.6047L62.9991 12.8911C63.3382 13.9347 62.1438 14.8025 61.256 14.1575L60.1617 13.3625C59.7647 13.074 59.2271 13.074 58.8301 13.3625L57.7358 14.1575C56.8481 14.8025 55.6536 13.9347 55.9927 12.8911L56.4107 11.6047C56.5623 11.138 56.3962 10.6267 55.9992 10.3382L54.9049 9.54319C54.0172 8.89821 54.4734 7.49406 55.5707 7.49406H56.9233C57.4141 7.49406 57.849 7.17807 58.0006 6.71136L58.4186 5.42494Z" 
                              fill="url(#paint1_linear_default)"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.15, duration: 0.4, ease: 'backOut' }}
                            />
                            <motion.path 
                              d="M81.605 8.84161C82.7393 7.61701 84.778 8.55938 84.5801 10.2168L84.3409 12.2204C84.2524 12.9616 84.6512 13.6756 85.3288 13.9888L87.1604 14.8354C88.6756 15.5358 88.4093 17.7659 86.7719 18.0899L84.7924 18.4815C84.0601 18.6264 83.5044 19.2264 83.4159 19.9676L83.1767 21.9712C82.9788 23.6286 80.7756 24.0646 79.9614 22.6073L78.9773 20.8458C78.6132 20.1941 77.8709 19.851 77.1386 19.9959L75.1591 20.3875C73.5216 20.7115 72.4262 18.7508 73.5606 17.5262L74.9318 16.0459C75.439 15.4982 75.536 14.6862 75.1719 14.0345L74.1878 12.273C73.3736 10.8157 74.8999 9.16804 76.4151 9.86844L78.2466 10.7151C78.9242 11.0283 79.7265 10.8696 80.2338 10.3219L81.605 8.84161Z" 
                              fill="url(#paint2_linear_default)"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.25, duration: 0.4, ease: 'backOut' }}
                            />
                            <motion.path 
                              d="M66.47 24.6937C66.7279 23.8999 67.8509 23.9 68.1088 24.6937L68.4519 25.7497C68.5672 26.1046 68.898 26.345 69.2713 26.345H70.3815C71.2161 26.345 71.5632 27.413 70.8879 27.9036L69.9897 28.5562C69.6877 28.7756 69.5614 29.1644 69.6767 29.5194L70.0198 30.5754C70.2777 31.3691 69.3692 32.0292 68.694 31.5386L67.7958 30.886C67.4938 30.6666 67.0849 30.6666 66.783 30.886L65.8847 31.5386C65.2095 32.0292 64.301 31.3691 64.5589 30.5754L64.902 29.5194C65.0173 29.1644 64.891 28.7756 64.589 28.5562L63.6908 27.9036C63.0156 27.413 63.3626 26.345 64.1972 26.345H65.3075C65.6807 26.345 66.0115 26.1046 66.1269 25.7497L66.47 24.6937Z" 
                              fill="url(#paint3_linear_default)"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.35, duration: 0.4, ease: 'backOut' }}
                            />
                            <defs>
                              <linearGradient id="paint0_linear_default" x1="9.89441" y1="56.0366" x2="56.7562" y2="68.8558" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#1937ED"/>
                                <stop offset="0.495192" stopColor="#D429AF"/>
                                <stop offset="1" stopColor="#DD3131"/>
                              </linearGradient>
                              <linearGradient id="paint1_linear_default" x1="66.6932" y1="18.3489" x2="30.8031" y2="15.088" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0865385" stopColor="#DB3044"/>
                                <stop offset="0.485577" stopColor="#3F35E0"/>
                              </linearGradient>
                              <linearGradient id="paint2_linear_default" x1="84.7836" y1="31.8439" x2="37.5264" y2="4.55996" gradientUnits="userSpaceOnUse">
                                <stop offset="0.0865385" stopColor="#DB3044"/>
                                <stop offset="0.423077" stopColor="#3F35E0"/>
                              </linearGradient>
                              <linearGradient id="paint3_linear_default" x1="61.25" y1="34.2506" x2="73.4747" y2="34.1011" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#1937ED"/>
                                <stop offset="0.495192" stopColor="#D429AF"/>
                                <stop offset="1" stopColor="#DD3131"/>
                              </linearGradient>
                              <clipPath id="clip0_default">
                                <rect width="64" height="64" fill="white" transform="translate(17.6406) rotate(16)"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </motion.div>
                      ) : (
                        <motion.img
                          src="/document scan.svg"
                          alt="Document scan"
                          className="w-full h-full object-contain"
                          initial={{ opacity: 1 }}
                          animate={{ opacity: isHovering || isDragOver ? 0 : 1 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        />
                      )}
                    </motion.div>

                    {/* Default State Text */}
                    <motion.div 
                      className="flex flex-col items-center w-full"
                      animate={{
                        gap: isHovering ? '4px' : '4px',
                      }}
                      style={{
                        willChange: 'gap'
                      }}
                      transition={{ 
                        duration: 0.4, 
                        ease: [0.25, 0.1, 0.25, 1],
                        type: 'spring',
                        stiffness: 300,
                        damping: 30
                      }}
                    >
                      <motion.h3 
                        className="text-[20px] font-medium leading-[30px] font-['Roboto',sans-serif] text-center w-full whitespace-pre-wrap"
                        style={{
                          background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          color: 'transparent',
                          willChange: 'opacity'
                        }}
                        transition={{ 
                          duration: 0.4, 
                          ease: [0.25, 0.1, 0.25, 1],
                          type: 'spring',
                          stiffness: 300,
                          damping: 30
                        }}
                      >
                        Drop menu here
                      </motion.h3>
                      
                      <motion.p 
                        className="text-[16px] font-normal leading-[24px] font-['Roboto',sans-serif] text-center w-full"
                        style={{
                          background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          color: 'transparent',
                          willChange: 'opacity, height'
                        }}
                        animate={{
                          opacity: isHovering || isDragOver ? 0 : 1,
                          height: isHovering || isDragOver ? 0 : 'auto',
                        }}
                        transition={{ 
                          duration: 0.4, 
                          ease: [0.25, 0.1, 0.25, 1],
                          type: 'spring',
                          stiffness: 300,
                          damping: 30
                        }}
                      >
                        Turn your file into a digital menu instantly, without manual setup.
                      </motion.p>
                    </motion.div>

                    {/* Supported Formats */}
                    <motion.p 
                      className="text-[12px] font-normal leading-[18px] font-['Roboto',sans-serif] text-center w-full"
                      style={{
                        background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                        willChange: 'opacity, height'
                      }}
                      animate={{
                        opacity: isHovering || isDragOver ? 0 : 1,
                        height: isHovering || isDragOver ? 0 : 'auto',
                      }}
                      transition={{ 
                        duration: 0.4, 
                        ease: [0.25, 0.1, 0.25, 1],
                        type: 'spring',
                        stiffness: 300,
                        damping: 30
                      }}
                    >
                      Supported formats: .pdf, .jpg, .png, .webp
                    </motion.p>
                  </motion.div>
                )}

                {/* Uploading State */}
                {uploadState === 'uploading' && (
                  <motion.div 
                    className="flex flex-col items-center text-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BouncingStars />
                    <p className="text-[14px] font-normal leading-[22px] font-['Roboto',sans-serif] text-center"
                       style={{
                         background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
                         backgroundClip: 'text',
                         WebkitBackgroundClip: 'text',
                         WebkitTextFillColor: 'transparent',
                         color: 'transparent'
                       }}
                    >
                      Uploading file...
                    </p>
                  </motion.div>
                )}

                {/* File Uploaded State */}
                {uploadState === 'uploaded' && uploadedFile && (
                  <motion.div 
                    className="flex flex-col items-center text-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BouncingStars />
                    
                    {/* File name with X button */}
                    <div className="flex items-center gap-2">
                      <p className="text-[14px] font-normal leading-[22px] font-['Roboto',sans-serif] text-center"
                         style={{
                           background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
                           backgroundClip: 'text',
                           WebkitBackgroundClip: 'text',
                           WebkitTextFillColor: 'transparent',
                           color: 'transparent'
                         }}
                      >
                        {getTruncatedFileName(uploadedFile.name)} uploaded.
                      </p>
                      <button
                        onClick={handleCancelUpload}
                        className="flex items-center justify-center p-1 hover:bg-gray-100 rounded"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.8333 5.34166L14.6583 4.16666L10 8.825L5.34167 4.16666L4.16667 5.34166L8.825 10L4.16667 14.6583L5.34167 15.8333L10 11.175L14.6583 15.8333L15.8333 14.6583L11.175 10L15.8333 5.34166Z" fill="#2858c4"/>
                        </svg>
                      </button>
                    </div>

                    {/* Parse & create menu button */}
                    <CanaryButton
                      type={ButtonType.PRIMARY}
                      onClick={handleParseAndCreate}
                    >
                      Parse & create menu
                    </CanaryButton>
                  </motion.div>
                )}

                {/* Parsing State */}
                {uploadState === 'parsing' && (
                  <motion.div 
                    className="flex flex-col items-center text-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BouncingStars />
                    <p className="text-[14px] font-normal leading-[22px] font-['Roboto',sans-serif] text-center"
                       style={{
                         background: 'linear-gradient(45deg, #8B5CF6, #EC4899)',
                         backgroundClip: 'text',
                         WebkitBackgroundClip: 'text',
                         WebkitTextFillColor: 'transparent',
                         color: 'transparent'
                       }}
                    >
                      Parsing
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Error Display */}
              {uploadError && (
                <motion.div
                  className="w-full text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-red-600 text-sm font-['Roboto',sans-serif]">
                    {uploadError}
                  </p>
                </motion.div>
              )}

              {/* Buttons - only show Build menu manually in default state */}
              {uploadState === 'default' && (
                <CanaryButton
                  type={ButtonType.TEXT}
                  size={ButtonSize.LARGE}
                  onClick={handleManualBuild}
                >
                  Build menu manually
                </CanaryButton>
              )}
            </div>
          </motion.div>
        </CanaryModal>
      ) : (
        <CanaryModal
          isOpen={isOpen}
          onClose={handleClose}
          title="Create new menu"
          size="medium"
        >
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Back button */}
            <div className="mb-4">
              <button
                onClick={handleBackToMethod}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <span className="text-lg">←</span>
                <span className="text-sm">Back to upload method</span>
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-roboto text-body-sm font-medium text-canary-black-1 mb-2">
                  Menu name
                </label>
                <input
                  type="text"
                  value={menuName}
                  onChange={(e) => {
                    setMenuName(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Breakfast menu, Lunch menu, Happy hour"
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
                <p className="mt-2 font-roboto text-caption text-canary-black-4">
                  This name will be used for both guest-facing and internal staff views. You can set a separate internal name once you create the menu.
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end gap-3 pt-4">
                <CanaryButton
                  type={ButtonType.PRIMARY}
                  nativeType="submit"
                >
                  Create menu
                </CanaryButton>
              </div>
            </form>
          </motion.div>
        </CanaryModal>
      )}

      {/* API Key Setup Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={handleApiKeyCancel}
        onSave={handleApiKeySave}
      />
    </>
  );
};