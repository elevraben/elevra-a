import React from 'react';
import { Mail, Clock, Search, Users, ArrowRight, CheckCircle, MessageSquare } from 'lucide-react';

const PainPointCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
    <div className="text-slate-700 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex gap-4 mb-8">
    <div className="flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">
                Stop Emailing PDFs
              </h1>
              <p className="text-2xl mb-8 text-slate-300">
                Review, markup, and track changes in your drawings — all in one collaborative space.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                  Try It Free
                </button>
                <button className="border border-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl shadow-xl">
              <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden relative">
                {/* Interface Preview Container */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-slate-800 flex items-center px-4 border-b border-slate-700">
                  <div className="flex space-x-3">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                </div>
                {/* Main Interface Area */}
                <div className="absolute top-12 left-0 right-0 bottom-0 grid grid-cols-4">
                  {/* Drawing Area */}
                  <div className="col-span-3 bg-white">
                    <img 
                      src="/placeholder-drawing.png" 
                      alt="Architectural drawing with markup"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Comment Thread */}
                  <div className="bg-slate-100 p-4 border-l border-slate-200">
                    <div className="space-y-4">
                      <div className="bg-white p-3 rounded shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-slate-300"></div>
                          <span className="text-sm text-slate-600">Sarah Chen</span>
                        </div>
                        <p className="text-sm text-slate-700">Please review the updated column spacing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Pain Points */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
            Sound Familiar?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PainPointCard
              icon={<Mail className="w-8 h-8" />}
              title="'Just sent v3.2_FINAL_rev4.pdf'"
              description="Digging through endless email threads trying to find the latest version of a drawing?"
            />
            <PainPointCard
              icon={<MessageSquare className="w-8 h-8" />}
              title="'Did you see my markup from Tuesday?'"
              description="Chasing down feedback scattered across emails, PDFs, and chat messages?"
            />
            <PainPointCard
              icon={<Search className="w-8 h-8" />}
              title="'Which version has the MEP changes?'"
              description="Struggling to track which consultant comments were addressed in which version?"
            />
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
            Finally, Drawing Reviews That Make Sense
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden relative">
                {/* Version Comparison Interface */}
                <div className="grid grid-cols-2 h-full">
                  <div className="border-r border-slate-200 p-4">
                    <div className="text-sm text-slate-500 mb-2">Previous Version</div>
                    <img 
                      src="/placeholder-previous.png" 
                      alt="Previous version"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-slate-500 mb-2">Current Version</div>
                    <img 
                      src="/placeholder-current.png" 
                      alt="Current version"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <BenefitItem
                icon={<CheckCircle className="w-6 h-6 text-slate-700" />}
                title="Every Comment in Context"
                description="Comments tied directly to drawing locations. No more 'See page 4, bottom right...'"
              />
              <BenefitItem
                icon={<CheckCircle className="w-6 h-6 text-slate-700" />}
                title="Visual Version Comparison"
                description="Instantly see what changed between versions with visual overlays and change highlighting."
              />
              <BenefitItem
                icon={<CheckCircle className="w-6 h-6 text-slate-700" />}
                title="Simple Sharing"
                description="Share the right version with the right people, every time. No more email attachments."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-slate-400 uppercase tracking-wider font-medium mb-6 block">Private Beta Program</span>
            <h2 className="text-4xl font-bold mb-4">
              Be First In Line
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              We're inviting select firms to help shape the future of drawing reviews.
            </p>
            <button className="bg-white text-slate-900 px-8 py-4 text-lg rounded-lg font-semibold hover:bg-slate-100 transition-colors w-full md:w-auto">
              Request Access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
