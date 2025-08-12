import { Award, Code, Palette, Users, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const skills = [
    { icon: Palette, name: 'Identité Visuelle', level: 95 },
    { icon: Code, name: 'Génie Logiciel', level: 90 },
    { icon: Users, name: 'Accompagnement PME', level: 98 },
    { icon: Award, name: 'Communication Cohérente', level: 92 }
  ];

  const achievements = [
    'Double expertise : Ingénieur + Graphiste',
    'Spécialisation PME et Startups',
    'Approche collaborative et personnalisée',
    'Solutions adaptées aux budgets limités',
    'Communication visuelle cohérente',
    'Accompagnement de A à Z'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-dc-blue/10 rounded-full text-sm font-medium text-dc-blue mb-6">
              <Star className="w-4 h-4 mr-2" />
              About – Pourquoi Design Creative ?
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Arassedé Delapaix
              <br />
              <span className="text-dc-orange">Graphiste, Ingénieur en génie logiciel & Photographe Pro</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
            J’ai fondé <span className="font-bold">Design Creative</span> avec une conviction simple : les petites entreprises et celles qui démarrent méritent, elles aussi, une communication visuelle professionnelle et impactante, même avec des moyens limités.
Trop souvent, ces structures renoncent à une image de qualité faute de budget, et perdent ainsi des opportunités précieuses.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
            Avec Design Creative, j’apporte des solutions <span className="font-bold">créatives, accessibles et efficaces</span>, allant du kit standard au kit deluxe, pour donner à chaque marque les outils visuels dont elle a besoin pour se démarquer, inspirer confiance et attirer ses clients.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-dc-blue flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <a href="/CVArassedeDelapaix.pdf" download className="bg-dc-orange hover:bg-dc-orange/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Télécharger mon CV
            </a>
          </div>

          {/* Right Content - Skills & Photo */}
          <div className="space-y-8">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-dc-subtle rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-dc opacity-10"></div>
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
    <img 
      src="maphoto.png" 
      alt="Arassedé Delapaix - Graphiste" 
      className="w-60 h-auto object-cover ml-10"
    />
  </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Mes Compétences</h3>
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-dc-blue/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-dc-blue" />
                        </div>
                        <span className="font-medium text-gray-900">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-dc-blue">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-dc h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Ma Philosophie</h3>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl text-gray-600 italic leading-relaxed">
              "Chaque entreprise, quelle que soit sa taille, mérite une identité visuelle forte et professionnelle. 
              Mon rôle est de rendre accessible cette expertise aux PME et startups, en proposant des solutions 
              créatives adaptées à leurs moyens et à leurs ambitions."
            </blockquote>
            <div className="mt-6 flex items-center justify-center space-x-2">
              <div className="w-12 h-0.5 bg-dc-blue"></div>
              <span className="text-dc-orange font-medium">Arassedé Delapaix</span>
              <div className="w-12 h-0.5 bg-dc-blue"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

