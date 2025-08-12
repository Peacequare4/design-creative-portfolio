import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo et Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center mr-3 p-1">
                <img src="new-logo-design-creative.png" alt="Design Creative Logo" className="w-12 h-auto object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Arassedé Delapaix</h3>
                <p className="text-sm text-gray-400">Design Creative</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Spécialiste en identité visuelle pour PME et startups. 
              Créons ensemble une image de marque forte et cohérente.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-400 hover:text-dc-orange transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-dc-orange transition-colors">À Propos</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-dc-orange transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-dc-orange transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-dc-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-dc-orange mr-3" />
                <span className="text-gray-400">ddesign.ccreative@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-dc-orange mr-3" />
                <span className="text-gray-400">+237 659222602/692981267</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-dc-orange mr-3" />
                <span className="text-gray-400">Douala-Cameroun</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © 2025 Design Creative - Arassedé Delapaix. Créé avec 
            <Heart className="w-4 h-4 text-dc-orange mx-1" />
            pour les PME et startups.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

