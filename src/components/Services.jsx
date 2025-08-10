import { CheckCircle, Lightbulb, Handshake, Briefcase, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

import kit1Image from '../assets/kit1.jpeg';
import kit2Image from '../assets/kit2.jpeg';
import kit3Image from '../assets/kit3.jpeg';
import kit4Image from '../assets/kit4.jpeg';
import kit5Image from '../assets/kit5.jpeg';
import kitxImage from '../assets/kitx.jpeg';

const Services = () => {
  const kitItems = [
    {
      image: kit1Image,
      title: 'Kit Standard',
      description: 'Idéal pour les entreprises nouvellement créées et les PME qui veulent une base solide.',
      advantages: [
        'Logo: Création ou refonte',
        'Charte graphique',
        'Flyer / Carte de visite',
      ],
      delay: '7 jours',
      cost: '40.000 fcfa',
    },
    {
      image: kit2Image,
      title: 'Kit Avancé',
      description: 'Pour les entreprises qui souhaitent aller plus loin dans leur communication visuelle.',
      advantages: [
        'Logo: Création ou refonte',
        'Charte graphique',
        'Flyer',
        'Carte de visite',
        'Brochure',
      ],
      delay: '10 jours',
      cost: '45.000 fcfa',
    },
    {
      image: kit3Image,
      title: 'Kit Professionnel',
      description: 'Un ensemble complet pour une présence visuelle impactante sur tous les supports clés.',
      advantages: [
        'Logo: Création ou refonte',
        'Charte graphique',
        'Flyer',
        'Carte de visite',
        'Brochure',
        'Roll-up',
        'Visuels pour réseaux sociaux',
      ],
      delay: '14 jours',
      cost: '55.000 fcfa',
    },
    {
      image: kit4Image,
      title: 'Kit Premium',
      description: 'La solution pour une image de marque forte et une présence digitale professionnelle.',
      advantages: [
        'Logo: Création ou refonte',
        'Charte graphique',
        'Flyer',
        'Carte de visite',
        'Brochure',
        'Roll-up',
        'Visuels pour réseaux sociaux',
        'Création de page professionnelle',
      ],
      delay: '20 jours',
      cost: '70.000 fcfa',
    },
    {
      image: kit5Image,
      title: 'Kit de Luxe',
      description: 'Le package ultime pour une identité visuelle complète et un accompagnement stratégique.',
      advantages: [
        'Logo: Création ou refonte',
        'Charte graphique',
        'Flyer',
        'Carte de visite',
        'Brochure',
        'Roll-up',
        'Visuels pour réseaux sociaux',
        'Gestion des pages professionnelles',
        'Site web basique (Design & Développement)',
        'Plus...',
      ],
      delay: 'X jours',
      cost: 'X fcfa',
    },
    {
      image: kitxImage,
      title: 'Kit 100% sur mesure',
      description: 'Créez par combinaisons des éléments suivants un kit parfaitement adapté à vos objectifs et à votre budget',
      advantages: [
        'Logo: Création ou refonte',
        'Charte graphique',
        'Flyer',
        'Carte de visite',
        'Brochure',
        'Roll-up',
        'Visuels pour réseaux sociaux',
        'Gestion des pages professionnelles',
        'Site web basique (Design & Développement)',
        'etc.',
      ],
      delay: 'X jours',
      cost: 'X fcfa',
    },
  ];

  const processSteps = [
    { step: '1. Analyse', description: 'Compréhension approfondie de votre projet, de vos valeurs et de vos objectifs.' },
    { step: '2. Conception', description: 'Développement de concepts créatifs et de premières maquettes.' },
    { step: '3. Affinage', description: 'Itérations basées sur vos retours pour perfectionner le design.' },
    { step: '4. Livraison', description: 'Remise des fichiers finaux et accompagnement pour leur utilisation.' }
  ];

  return (
    <section id="services" className="py-20 bg-dc-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-dc-orange/10 rounded-full text-sm font-medium text-dc-orange mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Mes Kits
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Des Solutions Adaptées à Vos Besoins
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos kits d'identité visuelle, conçus pour répondre aux besoins spécifiques des PME et startups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {kitItems.map((kit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300">
              <img src={kit.image} alt={kit.title} className="w-full h-48 object-cover rounded-md mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{kit.title}</h3>
              <p className="text-gray-600 mb-6">{kit.description}</p>
              <ul className="text-left w-full space-y-2 mb-6">
                {kit.advantages.map((advantage, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-dc-orange mr-2 flex-shrink-0" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
              <div className="text-gray-800 font-semibold mb-4">
                Délai: {kit.delay}
                {kit.cost && <span className="ml-4">Coût: {kit.cost}</span>}
              </div>
              <a href={`https://wa.me/237692981267?text=Bonjour%2C%20je%20souhaite%20commander%20le%20${encodeURIComponent(kit.title)}`} target="_blank" rel="noopener noreferrer" className="mt-auto bg-dc-orange hover:bg-dc-orange/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Commander ce kit
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-dc-blue/10 rounded-full text-sm font-medium text-dc-blue mb-4">
            <DollarSign className="w-4 h-4 mr-2" />
            Mon Processus
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Une Méthodologie Claire et Transparente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Je crois en un processus collaboratif et structuré pour garantir des résultats qui dépassent vos attentes.
          </p>
        </div>

        <div className="relative flex justify-center items-center mb-16">
          <div className="absolute w-full h-1 bg-gray-300 top-1/2 transform -translate-y-1/2 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 bg-dc-blue rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.step}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Prêt à transformer votre image de marque ?
          </h3>
          <a href="https://wa.me/237692981267?text=Bonjour%2C%20je%20souhaite%20demander%20un%20devis%20gratuit." target="_blank" rel="noopener noreferrer" size="lg" className="bg-dc-orange hover:bg-dc-orange/90 text-white px-8 py-4 text-lg rounded-md font-medium transition-colors">
            Demander un Devis Gratuit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;


