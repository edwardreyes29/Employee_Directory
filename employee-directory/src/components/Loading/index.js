import React from 'react';

export const Loading = () => {
  return (
    <div className="d-flex justify-content-center mb-3 mt-3">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}