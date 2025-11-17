'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobilePageTransitionProps {
  direction: 'forward' | 'backward' | 'modal';
  isVisible: boolean;
  children: React.ReactNode;
  onSwipeBack?: () => void;
}

export const MobilePageTransition: React.FC<MobilePageTransitionProps> = ({
  direction,
  isVisible,
  children,
  onSwipeBack
}) => {
  // Animation variants based on direction
  const variants = {
    forward: {
      initial: { x: '100%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: '-100%', opacity: 0 }
    },
    backward: {
      initial: { x: '-100%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: '100%', opacity: 0 }
    },
    modal: {
      initial: { y: '100%', opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: '100%', opacity: 0 }
    }
  };

  const currentVariant = variants[direction] || variants.forward;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={currentVariant.initial}
          animate={currentVariant.animate}
          exit={currentVariant.exit}
          transition={{
            type: "tween",
            ease: [0.4, 0.0, 0.2, 1],
            duration: 0.3
          }}
          className="fixed inset-0 z-50"
          drag={direction !== 'modal' ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(event, info) => {
            // Swipe back gesture detection
            if (direction !== 'modal' && info.offset.x > 100 && onSwipeBack) {
              onSwipeBack();
            }
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface FeedbackAnimationProps {
  type: 'success' | 'error' | 'loading';
  message: string;
  isVisible: boolean;
}

export const FeedbackAnimation: React.FC<FeedbackAnimationProps> = ({
  type,
  message,
  isVisible
}) => {
  // Icon based on type
  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
              fill="#10B981"
            />
          </svg>
        );
      case 'error':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="#EF4444"
            />
          </svg>
        );
      case 'loading':
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="animate-spin"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#6B7280"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="32"
              strokeDashoffset="32"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'loading':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className={`flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-white ${getBackgroundColor()}`}>
            {getIcon()}
            <span className="font-roboto text-sm font-medium">
              {message}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};