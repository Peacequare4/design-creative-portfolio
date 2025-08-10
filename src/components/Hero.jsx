import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const rotatingTexts = [
    "Votre identité visuelle forte",
    "Une communication cohérente", 
    "L'accompagnement de vos projets",
    "Le succès de votre entreprise"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dc-subtle">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-dc-blue/10 rounded-full spiral-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-dc-orange/10 rounded-full" style={{animation: 'spiral-rotate 4s ease-in-out infinite reverse'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-dc-blue/5 rounded-full spiral-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-dc-orange/5 rounded-full" style={{animation: 'spiral-rotate 5s ease-in-out infinite', animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-dc-blue mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Graphiste spécialisé PME & Startups
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              <span className="text-dc-orange">Design Creative</span>
              <br />
              <span className="text-dc-blue">
                {rotatingTexts[currentText]}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Accompagnement des entreprises nouvellement créées et des PME pour créer des identités visuelles fortes et une communication cohérente, adaptée à vos moyens et ambitions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-dc-blue hover:bg-dc-blue/90 text-white px-8 py-4 text-lg group"
              >
                Découvrir mes réalisations
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-dc-orange text-dc-orange hover:bg-dc-orange hover:text-white px-8 py-4 text-lg"
              >
                Devis gratuit
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-dc-blue mb-2">100+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dc-orange mb-2">98%</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-dc-blue mb-2">3+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Circle with Spiral Pattern */}
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-dc rounded-full spiral-animation opacity-20"></div>
                <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-dc rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Identité Visuelle</h3>
                    <p className="text-sm text-gray-600">Créativité, Professionnalisme & Impact</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-bounce" style={{animationDelay: '0.5s'}}>
                <Users className="w-6 h-6 text-dc-blue mb-2" />
                <div className="text-xs font-medium">PME & Startups</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-bounce" style={{animationDelay: '1s'}}>
                <Sparkles className="w-6 h-6 text-dc-orange mb-2" />
                <div className="text-xs font-medium">Design Créatif</div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-white rounded-lg shadow-lg p-4 animate-bounce" style={{animationDelay: '1.5s'}}>
                <Target className="w-6 h-6 text-dc-blue mb-2" />
                <div className="text-xs font-medium">Résultats</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dc-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-dc-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

