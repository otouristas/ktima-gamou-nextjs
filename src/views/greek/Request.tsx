'use client';

import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { FORMSPREE_FORM_ACTION, submitToFormspree } from '@/lib/formspree';

export default function Request() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    specialRequests: '',
    howDidYouHear: '',
    services: [] as string[]
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmationEmail, setConfirmationEmail] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, value]
        : prev.services.filter(s => s !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await submitToFormspree({
        type: 'request',
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        eventType: formData.eventType,
        eventDate: formData.eventDate,
        guestCount: formData.guestCount,
        budget: formData.budget,
        specialRequests: formData.specialRequests,
        howDidYouHear: formData.howDidYouHear,
        services: formData.services.join(', '),
      });
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      const submittedEmail = formData.email;
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        budget: '',
        specialRequests: '',
        howDidYouHear: '',
        services: []
      });
      setConfirmationEmail(submittedEmail);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Παρουσιάστηκε σφάλμα κατά την αποστολή του αιτήματος. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας τηλεφωνικά.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-brand-main/10 to-background">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-brand">Αίτημα Πληροφοριών</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο 
              για να συζητήσουμε τις ανάγκες της εκδήλωσής σας.
            </p>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mt-8 max-w-2xl mx-auto bg-green-50 border-2 border-green-500 rounded-lg p-6 animate-fade-in">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Το αίτημά σας στάλθηκε επιτυχώς!</h3>
                <p className="text-green-700">
                  Σας ευχαριστούμε! Λάβαμε το μήνυμά σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.
                  Ένα email επιβεβαίωσης έχει σταλεί στο {confirmationEmail || 'email σας'}.
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

        {/* Form Section */}
        <section className="section-padding">
          <div className="container-max max-w-4xl">
            <Card className="card-elegant">
              <CardContent className="p-8">
                <form action={FORMSPREE_FORM_ACTION} method="POST" onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gradient-brand mb-6">Προσωπικές Πληροφορίες</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <Label htmlFor="phone">Τηλέφωνο *</Label>
                        <Input 
                          id="phone" 
                          placeholder="Το τηλέφωνό σας" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Event Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gradient-brand mb-6">Πληροφορίες Εκδήλωσης</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          <option value="wedding">Γάμος</option>
                          <option value="christening">Βάπτιση</option>
                          <option value="party">Πάρτι</option>
                          <option value="corporate">Εταιρική εκδήλωση</option>
                          <option value="other">Άλλο</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Ημερομηνία Εκδήλωσης</Label>
                        <Input 
                          id="eventDate" 
                          type="date" 
                          value={formData.eventDate}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guestCount">Αριθμός Καλεσμένων</Label>
                        <Input 
                          id="guestCount" 
                          type="number" 
                          placeholder="Π.χ. 80" 
                          value={formData.guestCount}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget (προαιρετικό)</Label>
                        <Input 
                          id="budget" 
                          placeholder="Π.χ. €5000" 
                          value={formData.budget}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gradient-brand mb-6">Επιπλέον Πληροφορίες</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="specialRequests">Ειδικές Απαιτήσεις ή Παρατηρήσεις</Label>
                        <Textarea 
                          id="specialRequests" 
                          placeholder="Πείτε μας για ειδικές ανάγκες, διατροφικούς περιορισμούς, ή οτιδήποτε άλλο θέλετε να ξέρουμε..."
                          rows={4}
                          value={formData.specialRequests}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="howDidYouHear">Πώς μας βρήκατε;</Label>
                        <select 
                          id="howDidYouHear" 
                          className="w-full px-3 py-2 border border-border rounded-md bg-background"
                          value={formData.howDidYouHear}
                          onChange={handleInputChange}
                        >
                          <option value="">Επιλέξτε</option>
                          <option value="Google">Google</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Instagram">Instagram</option>
                          <option value="Σύσταση">Σύσταση</option>
                          <option value="Άλλο">Άλλο</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Services Interest */}
                  <div>
                    <h3 className="text-2xl font-bold text-gradient-brand mb-6">Υπηρεσίες Ενδιαφέροντος</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 text-brand-main" 
                          value="Διακόσμηση"
                          checked={formData.services.includes('Διακόσμηση')}
                          onChange={handleCheckboxChange}
                        />
                        <span>Διακόσμηση</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 text-brand-main" 
                          value="Φωτογραφία & Video"
                          checked={formData.services.includes('Φωτογραφία & Video')}
                          onChange={handleCheckboxChange}
                        />
                        <span>Φωτογραφία & Video</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 text-brand-main" 
                          value="Μουσική & DJ"
                          checked={formData.services.includes('Μουσική & DJ')}
                          onChange={handleCheckboxChange}
                        />
                        <span>Μουσική & DJ</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 text-brand-main" 
                          value="Πλήρης Διοργάνωση"
                          checked={formData.services.includes('Πλήρης Διοργάνωση')}
                          onChange={handleCheckboxChange}
                        />
                        <span>Πλήρης Διοργάνωση</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      className="button button4 px-12 py-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Αποστολή...
                        </>
                      ) : (
                        'ΑΠΟΣΤΟΛΗ ΑΙΤΗΜΑΤΟΣ'
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      Υποβάλλοντας αυτή την φόρμα συμφωνείτε με τους όρους μας και την 
                      Πολιτική για Προστασία προσωπικών δεδομένων
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Τηλέφωνο</h3>
                <p className="text-muted-foreground">2299068812</p>
                <p className="text-muted-foreground">6981889560</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@ktimaorion.gr</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-main rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ώρες Λειτουργίας</h3>
                <p className="text-muted-foreground">Δευτέρα - Κυριακή</p>
                <p className="text-muted-foreground">9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
