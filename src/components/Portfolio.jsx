import { useState } from 'react';
import { FolderOpen, Search, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Import des images générées
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';

const projects = [
  {
    id: 1,
    title: 'Identité Visuelle pour Design Creative, notre propre marque',
    category: 'Startup', 
    type: 'Branding',
    image: project1,
    description: 'Création d\'une identité visuelle moderne et dynamique pour Design Creative, une startup innovante qui promeut le professionnalisme dans la communication visuelle. Inclut logo, charte graphique et applications sur divers supports.',
    link: 'https://web.facebook.com/Delapaix.designer/'
  },
  {
    id: 2,
    title: 'Charte Graphique pour Vri-Simai: Construction et Design Architechtural',
    category: 'Startup', 
    type: 'Branding',
    image: project2,
    description: 'Accompagnement d\'une PME agroalimentaire dans la refonte complète de son identité de marque, de l\'emballage aux supports de communication.',
    link: '#'
  },
  {
    id: 3,
    title: 'Refonde de marque pour PME Minière et Energétique',
    category: 'PME', 
    type: 'Refonte',
    image: project3,
    description: 'Développement d\'une charte graphique professionnelle et institutionnelle pour entreprise BARH-KOH ZOOM. Elle est de droit tchadienne qui fait dans le secteur énergétique et minier africain.',
    link: 'https://web.facebook.com/profile.php?id=61577759542341'
  },
  {
    id: 4,
    title: 'Logotype pour iSKOUL : Education innovante',
    category: 'Startup', 
    type: 'Logo',
    image: project4,
    description: 'Conception d\'un logotype unique et mémorable pour une La plateforme qui révolutionne l éducation en Côte d Ivoire et en Afrique francophone, reflétant son savoir-faire et son authenticité.',
    link: 'https://web.facebook.com/profile.php?id=61566949914714'
  },
  {
    id: 5,
    title: 'Collection de quelques logos de différents projets réalisés par Design Creative',
    category: 'PME', 
    type: 'Logos',
    image: project5,
    description: 'Ces logo sont tirés de quelques projets réalisés et livrés (Refonte/Creation avec charte graphique complet',
    link: '#'
  },
  {
    id: 6,
    title: 'Identité Visuelle pour entreprise Omni Services',
    category: 'Startup', 
    type: 'Branding',
    image: project6,
    description: 'Développement d\'une identité visuelle pour Omni service, une entreprise multiservices tchadienne qui touche les secteurs comme : commerce, transport etc. ',
    link: '#'
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'Startup', 'PME'];
  const types = ['all', 'Branding', 'Refonte', 'Logo', 'Supports'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-dc-blue/10 rounded-full text-sm font-medium text-dc-blue mb-4">
            <FolderOpen className="w-4 h-4 mr-2" />
            Mon Portfolio
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Réalisations Impactantes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes projets en identité visuelle et communication, conçus pour des PME et startups aux ambitions variées.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <Button 
                key={cat} 
                variant={filter === cat ? 'default' : 'outline'}
                className={filter === cat ? 'bg-dc-blue hover:bg-dc-blue/90 text-white' : 'border-dc-blue text-dc-blue hover:bg-dc-blue/10'}
                onClick={() => setFilter(cat)}
              >
                {cat === 'all' ? 'Tous' : cat}
              </Button>
            ))}
          </div>
          <div className="relative w-full sm:w-auto">
            <Input 
              type="text" 
              placeholder="Rechercher un projet..." 
              className="pl-10 pr-4 py-2 border rounded-full w-full sm:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div key={project.id} className="bg-dc-gray rounded-lg shadow-lg overflow-hidden group transform transition-transform hover:scale-105 duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-dc-blue/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-dc-blue" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Voir le projet <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-dc-orange font-medium mb-3">{project.category} | {project.type}</p>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">
              Aucun projet trouvé pour cette sélection.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

