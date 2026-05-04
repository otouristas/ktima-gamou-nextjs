'use client';

import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Building2, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { FORMSPREE_FORM_ACTION, submitToFormspree } from '@/lib/formspree';

export default function ContactEn() {
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
      const response = await submitToFormspree({
        type: 'contact',
        firstName: formData.firstName,
        lastName: formData.lastName,
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        eventType: formData.eventType,
        guestCount: formData.guestCount,
        subject: formData.subject || `Contact — ${formData.eventType}`,
        message: `Event type: ${formData.eventType}\nGuests: ${formData.guestCount}\n\n${formData.message}`,
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
      setErrorMessage('An error occurred while sending your message. Please try again or contact us by phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Keratea, Attica, Greece"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+30 2299068812", "+30 6981889560"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ktimaorion.gr"]
    },
    {
      icon: Building2,
      title: "Registry No.",
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
              <span className="text-gradient-brand">Contact Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch to discuss your event needs and create unforgettable memories together.
            </p>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mt-8 max-w-2xl mx-auto bg-green-50 border-2 border-green-500 rounded-lg p-6 animate-fade-in">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message sent successfully!</h3>
                <p className="text-green-700">
                  Thank you! We received your message and will contact you as soon as possible.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mt-8 max-w-2xl mx-auto bg-red-50 border-2 border-red-500 rounded-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <AlertCircle className="w-12 h-12 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-red-800 mb-2">Submission error</h3>
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
                  <span className="text-gradient-brand">Contact Information</span>
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
                        <h3 className="text-xl font-bold text-gradient-brand mb-3">Business Hours</h3>
                        <p className="text-muted-foreground text-lg">
                          Monday - Sunday: 9:00 AM - 10:00 PM
                        </p>
                        <p className="text-muted-foreground text-sm mt-2">
                          *Contact us for appointments outside business hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  <span className="text-gradient-brand">Contact Form</span>
                </h2>
                
                <Card className="card-elegant">
                  <CardContent className="p-8">
                    <form action={FORMSPREE_FORM_ACTION} method="POST" onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Your first name" 
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Your last name" 
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
                          <Label htmlFor="phone">Phone *</Label>
                          <Input 
                            id="phone" 
                            placeholder="+30 210 123 4567" 
                            value={formData.phone}
                            onChange={handleInputChange}
                            required 
                          />
                        </div>
                      </div>

                      {/* Event Type & Guest Count */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="eventType">Event Type *</Label>
                          <select 
                            id="eventType" 
                            className="w-full px-3 py-2 border border-border rounded-md bg-background" 
                            value={formData.eventType}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select event type</option>
                            <option value="WEDDING">WEDDING</option>
                            <option value="BAPTISM">BAPTISM</option>
                            <option value="CORPORATE EVENTS">CORPORATE EVENTS</option>
                            <option value="PARTY">PARTY</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guestCount">Number of Guests</Label>
                          <Input 
                            id="guestCount" 
                            type="number" 
                            placeholder="e.g. 100" 
                            value={formData.guestCount}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input 
                          id="subject" 
                          placeholder="Your message subject" 
                          value={formData.subject}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us more about your event..."
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
                            Sending...
                          </>
                        ) : (
                          'SEND MESSAGE'
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
                <span className="text-gradient-brand">Find Us</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Located in Keratea, with easy access from Attiki Odos highway
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.468!2d24.0262364!3d37.8024928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a18dba5963d66d%3A0x753d26f1ce529d7!2sKtima%20Orion!5e0!3m2!1sen!2sgr" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[450px]"
                title="Ktima Orion Location"
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
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-gradient-to-r from-brand-main/5 to-brand-main/10">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact us today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have questions about your event? Want to book an appointment? 
              Contact us and we'll respond promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+302299068812" className="button button4">
                CALL US
              </a>
              <a href="mailto:info@ktimaorion.gr" className="button button4">
                SEND EMAIL
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}