'use client';

import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Building2, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// Contact page with form submission functionality
export default function Epikoinonia() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || `Επικοινωνία — ${formData.eventType}`,
          message: `Τύπος εκδήλωσης: ${formData.eventType}\nΚαλεσμένοι: ${formData.guestCount}\n\n${formData.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventType: '',
        guestCount: '',
        subject: '',
        message: ''
      });
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Παρουσιάστηκε σφάλμα κατά την αποστολή του μηνύματος. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας τηλεφωνικά.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: MapPin,
      title: "Τοποθεσία",
      details: ["Κερατέα, Αττική"]
    },
    {
      icon: Phone,
      title: "Τηλέφωνα",
      details: ["2299068812", "6981889560"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ktimaorion.gr"]
    },
    {
      icon: Building2,
      title: "Γ.Ε.ΜΗ.",
      details: ["062719803000"]
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Επικοινωνία</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες της εκδήλωσής σας 
              και να δημιουργήσουμε μαζί αξέχαστες αναμνήσεις.
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
        </section>

        {/* Contact Information */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                  <span className="text-gradient-brand">Στοιχεία Επικοινωνίας</span>
                </h2>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <info.icon className="w-8 h-8 text-brand-main flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="text-xl font-bold text-gradient-brand mb-3">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground text-lg">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Business Hours */}
                <Card className="card-elegant mt-8 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="w-8 h-8 text-brand-main flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gradient-brand mb-3">Ώρες Λειτουργίας</h3>
                        <p className="text-muted-foreground text-lg">
                          Δευτέρα - Κυριακή: 9:00 - 22:00
                        </p>
                        <p className="text-muted-foreground text-sm mt-2">
                          *Επικοινωνήστε μαζί μας για ραντεβού εκτός ωρών
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  <span className="text-gradient-brand">Φόρμα Επικοινωνίας</span>
                </h2>
                
                <Card className="card-elegant">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Όνομα *</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Το όνομά σας" 
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Επώνυμο *</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Το επώνυμό σας" 
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required 
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="email@example.com" 
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Τηλέφωνο *</Label>
                          <Input 
                            id="phone" 
                            placeholder="210 123 4567" 
                            value={formData.phone}
                            onChange={handleInputChange}
                            required 
                          />
                        </div>
                      </div>

                      {/* Event Type & Guest Count */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="eventType">Τύπος Εκδήλωσης *</Label>
                          <select 
                            id="eventType" 
                            className="w-full px-3 py-2 border border-border rounded-md bg-background" 
                            value={formData.eventType}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Επιλέξτε τύπο εκδήλωσης</option>
                            <option value="ΓΑΜΟΣ">ΓΑΜΟΣ</option>
                            <option value="ΒΑΠΤΙΣΗ">ΒΑΠΤΙΣΗ</option>
                            <option value="ΕΤΑΙΡΙΚΕΣ ΕΚΔΗΛΩΣΕΙΣ">ΕΤΑΙΡΙΚΕΣ ΕΚΔΗΛΩΣΕΙΣ</option>
                            <option value="ΠΑΡΤΙ">ΠΑΡΤΙ</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guestCount">Αριθμός Ατόμων</Label>
                          <Input 
                            id="guestCount" 
                            type="number" 
                            placeholder="π.χ. 100" 
                            value={formData.guestCount}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <Label htmlFor="subject">Θέμα *</Label>
                        <Input 
                          id="subject" 
                          placeholder="Το θέμα του μηνύματός σας" 
                          value={formData.subject}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message">Μήνυμα *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Πείτε μας περισσότερα για την εκδήλωσή σας..."
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        className="button button4 w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Αποστολή...
                          </>
                        ) : (
                          'ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ'
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="section-padding bg-gradient-to-b from-background to-brand-main/5">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-brand">Βρείτε μας</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Βρισκόμαστε στην Κερατέα, με εύκολη πρόσβαση από την Αττική Οδό
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.468!2d24.0262364!3d37.8024928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a18dba5963d66d%3A0x753d26f1ce529d7!2s%CE%9A%CF%84%CE%AE%CE%BC%CE%B1%20%CE%A9%CF%81%CE%AF%CF%89%CE%BD!5e0!3m2!1sel!2sgr" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[450px]"
                title="Χάρτης Κτήμα Ωρίων"
              />
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://www.google.gr/maps/place/%CE%9A%CF%84%CE%AE%CE%BC%CE%B1+%CE%A9%CF%81%CE%AF%CF%89%CE%BD/@37.8024928,24.0262364,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-main hover:underline inline-flex items-center gap-2 text-lg font-semibold"
              >
                <MapPin className="w-5 h-5" />
                Άνοιγμα στο Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Επικοινωνήστε μαζί μας σήμερα
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Έχουμε ερωτήσεις για την εκδήλωσή σας; Θέλετε να κλείσετε ραντεβού; 
              Επικοινωνήστε μαζί μας και θα σας απαντήσουμε άμεσα.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2299068812" className="button button4">
                ΚΑΛΕΣΤΕ ΜΑΣ
              </a>
              <a href="mailto:info@ktimaorion.gr" className="button button4">
                ΣΤΕΙΛΤΕ EMAIL
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
