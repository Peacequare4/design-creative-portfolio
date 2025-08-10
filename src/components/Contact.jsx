import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dc-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-dc-orange/10 rounded-full text-sm font-medium text-dc-orange mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Contactez-moi
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Prêt à Collaborer ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            N'hésitez pas à me contacter pour discuter de votre projet. Je suis toujours ravi d'échanger sur de nouvelles idées.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-moi un message</h3>
            <form 
  action="https://formspree.io/f/xrblrkjr" 
  method="POST"
  className="space-y-6"
>
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom Complet</label>
    <Input type="text" id="name" name="name" placeholder="Votre nom" className="w-full" required />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Adresse Email</label>
    <Input type="email" id="email" name="email" placeholder="votre.email@example.com" className="w-full" required />
  </div>
  <div>
    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
    <Input type="text" id="subject" name="subject" placeholder="Sujet de votre message" className="w-full" required />
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Votre Message</label>
    <Textarea id="message" name="message" placeholder="Décrivez votre projet ou votre question..." rows="5" className="w-full" required />
  </div>
  <Button type="submit" className="bg-dc-blue hover:bg-dc-blue/90 text-white w-full">
    Envoyer le Message <Send className="ml-2 w-4 h-4" />
  </Button>
</form>

          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mes Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-dc-orange" />
                  <span className="text-lg text-gray-700">ddesign.ccreative@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-dc-orange" />
                  <span className="text-lg text-gray-700">+237 659222602/692981267</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-dc-orange" />
                  <span className="text-lg text-gray-700">Douala-Cameroun</span>
                </div>
              </div>
            </div>

            {/* Call to Action for Quote */}
            <div className="bg-dc-blue rounded-lg shadow-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Besoin d'un Devis Personnalisé ?</h3>
              <p className="mb-6">Décrivez-moi votre projet et obtenez une estimation rapide et gratuite.</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-dc-blue">
                Demander un Devis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

