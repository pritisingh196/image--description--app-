import React from 'react';
import { ImageUpload } from './components/ImageUpload';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Image Description App
          </h1>
          <p className="mt-2 text-gray-600">
            Upload an image to receive an AI-generated description
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ImageUpload />
      </main>
    </div>
  );
}

export default App;