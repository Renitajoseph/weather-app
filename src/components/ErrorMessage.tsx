import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="glass-card border-2 border-red-300/30 rounded-2xl p-6 max-w-md mx-auto error-shake">
      <div className="flex items-center mb-4">
        <AlertCircle className="text-red-300 mr-3 drop-shadow-lg" size={24} />
        <h3 className="text-lg font-semibold text-white drop-shadow-lg">Oops! Something went wrong</h3>
      </div>
      <p className="text-white/90 mb-4 leading-relaxed drop-shadow-lg">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center justify-center w-full py-3 px-4 btn-primary text-white rounded-xl transition-all duration-300 font-medium shadow-lg"
        >
          <RefreshCw className="mr-2 drop-shadow-lg" size={18} />
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;