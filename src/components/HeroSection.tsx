
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";
import demoVideo from "@/assets/Student_Activity_Tracker_Video.mp4";
import { toast } from "@/components/ui/use-toast";
import React from "react";

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const handleDemo = () => {
    // Open the demo video in a new tab
    window.open(demoVideo, '_blank');
  };
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 gradient-subtle"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Optimise your time -
                <span className="gradient-wellness bg-clip-text text-transparent"> elevate your life</span>
                
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive  tracking with AI-powered insights. Monitor your 
                study habits, meals, sleep and more in one beautiful dashboard.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex items-center space-x-2" onClick={onGetStarted}>
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="flex items-center space-x-2" onClick={handleDemo}>
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
             <div className="text-center">
                <div className="text-2xl font-bold text-accent">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Health Tracking Dashboard" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 gradient-wellness opacity-20"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-card border">
              <div className="text-sm text-muted-foreground">Today's Progress</div>
              <div className="text-2xl font-bold text-success">85%</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-card border">
              <div className="text-sm text-muted-foreground">Weekly Goal</div>
              <div className="text-2xl font-bold text-primary">12/15</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
