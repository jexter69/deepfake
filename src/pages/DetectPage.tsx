import { Upload, ArrowRight } from 'lucide-react';

const DetectPage = () => {
  const handleDeepfakeDetection = () => {
    // In a real implementation, this would redirect to the actual detection service
    window.open('http://your-deepfake-detection-service.com', '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="card">
          <h2 className="text-center mb-8">Detect <span className="gradient-text">Deepfakes</span></h2>
          
          <div className="mb-8">
            <p className="text-xl text-center mb-6">
              Upload a video or image to analyze for potential manipulation.
            </p>
            
            <div className="neo-box p-8 bg-gradient-to-r from-gray-50 to-gray-100 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
              <Upload className="w-16 h-16 text-gray-400 mb-4" />
              <p className="text-lg font-medium mb-2">Drag and drop your file here</p>
              <p className="text-gray-500 mb-4">or</p>
              <button className="btn btn-secondary">
                Browse Files
              </button>
              <p className="mt-4 text-sm text-gray-500">
                Supported formats: MP4, AVI, MOV, JPG, PNG (max 100MB)
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleDeepfakeDetection}
              className="btn btn-primary inline-flex items-center"
            >
              Proceed to Detection
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="mt-4 text-sm text-gray-500">
              By using this service, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl mb-6 text-center">How It <span className="gradient-text">Works</span></h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600 font-bold text-xl mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold mb-2">Upload</h4>
              <p>Upload the media file you suspect might be manipulated.</p>
            </div>
            
            <div className="card">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-secondary-100 text-secondary-600 font-bold text-xl mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold mb-2">Analysis</h4>
              <p>Our AI model analyzes the file for signs of manipulation.</p>
            </div>
            
            <div className="card">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-accent-100 text-accent-600 font-bold text-xl mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold mb-2">Results</h4>
              <p>Receive detailed results with confidence score and explanations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectPage;