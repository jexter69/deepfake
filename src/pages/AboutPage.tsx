import { Shield, AlertTriangle, FileVideo, Eye, Brain, Check, X } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="card max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="mb-4">
                <span className="gradient-text">Deepfake</span> Detection
              </h1>
              <p className="text-xl mb-6">
                Protect yourself from manipulated media with our advanced AI-powered deepfake detection technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/signup" className="btn btn-primary">
                  Get Started
                </a>
                <a href="#how-it-works" className="btn btn-outline">
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="neo-box p-4 bg-gradient-to-r from-primary-100 to-secondary-100">
                <img 
                  src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="AI facial recognition"
                  className="w-full h-auto rounded border-2 border-black" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are Deepfakes */}
      <section className="mb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 text-center">What are <span className="gradient-text">Deepfakes?</span></h2>
          
          <div className="card mb-8">
            <p className="text-xl mb-6">
              Deepfakes are synthetic media in which a person's likeness is replaced with someone else's using artificial intelligence. 
              This technology can create convincing videos or images of events that never occurred or people saying things they never said.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="neo-box p-6">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-xl">The Risks</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                    <span>Misinformation and fake news</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                    <span>Identity theft and fraud</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                    <span>Reputation damage</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                    <span>Political manipulation</span>
                  </li>
                </ul>
              </div>
              
              <div className="neo-box p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-xl">Our Solution</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Advanced AI detection algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>High accuracy rate (95%+)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Continuous model improvements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>User-friendly interface</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="mb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 text-center">How It <span className="gradient-text">Works</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary-100 rounded-full">
                <FileVideo className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="mb-2 text-xl">Upload Media</h3>
              <p>Upload the video or image you want to analyze for potential manipulation.</p>
            </div>
            
            <div className="card flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-secondary-100 rounded-full">
                <Brain className="w-8 h-8 text-secondary-500" />
              </div>
              <h3 className="mb-2 text-xl">AI Analysis</h3>
              <p>Our advanced AI model examines inconsistencies, facial anomalies, and digital artifacts.</p>
            </div>
            
            <div className="card flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-accent-100 rounded-full">
                <Eye className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="mb-2 text-xl">Get Results</h3>
              <p>Receive a detailed report with confidence score and highlighted areas of concern.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="max-w-4xl mx-auto">
          <div className="card bg-gradient-to-r from-primary-100 to-secondary-100">
            <div className="text-center">
              <h2 className="mb-4">Ready to <span className="gradient-text">Detect Deepfakes?</span></h2>
              <p className="text-xl mb-6">
                Sign up now to access our deepfake detection tool and protect yourself from manipulated media.
              </p>
              <a href="/signup" className="btn btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;