import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
      <div className="bg-red-900/20 border-l-4 border-red-500 p-4 mb-6 rounded-md">
        <div className="flex items-start">
          <div> 
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Error</h3>
            <div className="mt-1 text-sm text-red-700">
              <p>{message}</p>
            </div>
            <div className="mt-2 text-sm text-red-700">
              <p>Please check the city name and try again.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ErrorMessage;
