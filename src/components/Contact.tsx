'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

// Contact form component with email functionality
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'contact', ...formData }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Παρουσιάστηκε σφάλμα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας τηλεφωνικά.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-champagne">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-brand">Επικοινωνία</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ας μιλήσουμε για την ξεχωριστή σας εκδήλωση
          </p>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mt-8 max-w-2xl mx-auto bg-green-50 border-2 border-green-500 rounded-lg p-6 animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Το μήνυμά σας στάλθηκε επιτυχώς!</h3>
              <p className="text-green-700">
                Σας ευχαριστούμε! Λάβαμε το μήνυμά σας και θα επικοινωνήσουμε μαζί σας το συντομότερο.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mt-8 max-w-2xl mx-auto bg-red-50 border-2 border-red-500 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <AlertCircle className="w-12 h-12 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-2">Σφάλμα αποστολής</h3>
              <p className="text-red-700">{errorMessage}</p>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient-brand mb-6">
                Στοιχεία Επικοινωνίας
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-main" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Διεύθυνση</h4>
                    <p className="text-muted-foreground">Κερατέα, Αττική</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-main" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Τηλέφωνα</h4>
                    <p className="text-muted-foreground">2299068812</p>
                    <p className="text-muted-foreground">6981889560</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-main" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@ktimaorion.gr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-main" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ώρες Λειτουργίας</h4>
                    <p className="text-muted-foreground">Δευτέρα - Κυριακή</p>
                    <p className="text-muted-foreground">9:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Ακολουθήστε μας</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/ktimaorion.gr/?locale=el_GR"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ακολουθήστε μας στο Facebook"
                  className="w-12 h-12 bg-brand-main/10 rounded-lg flex items-center justify-center hover:bg-brand-main hover:text-white transition-colors min-w-[48px] min-h-[48px]"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/ktimaorion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ακολουθήστε μας στο Instagram"
                  className="w-12 h-12 bg-brand-main/10 rounded-lg flex items-center justify-center hover:bg-brand-main hover:text-white transition-colors min-w-[48px] min-h-[48px]"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-elegant p-8">
            <h3 className="text-2xl font-bold text-gradient-brand mb-6">
              Στείλτε μας μήνυμα
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ονοματεπώνυμο *</Label>
                  <Input 
                    id="name" 
                    placeholder="Το όνομά σας" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Τηλέφωνο</Label>
                  <Input 
                    id="phone" 
                    placeholder="Το τηλέφωνό σας"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="το email σας" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Θέμα *</Label>
                <Input 
                  id="subject" 
                  placeholder="Θέμα μηνύματος"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Μήνυμα *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Πείτε μας για την εκδήλωσή σας..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full button button4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Αποστολή...
                  </>
                ) : (
                  'Αποστολή Μηνύματος'
                )}
              </Button>
              
              <p className="text-xs text-muted-foreground">
                Υποβάλλοντας αυτή την φόρμα συμφωνείτε με τους όρους μας και την 
                Πολιτική για Προστασία προσωπικών δεδομένων
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};