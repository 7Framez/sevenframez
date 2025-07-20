import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { X, Send, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Email service integration would go here
      // For now, we'll simulate the form submission
      
      // Construct mailto link for the email
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interest: ${formData.service}

Message:
${formData.message}
      `;
      
      const mailtoLink = `mailto:info@7framez.com?subject=New Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
      
      // Open default email client
      window.location.href = mailtoLink;

      toast({
        title: "Message Sent!",
        description: "Your default email client will open with the message. Thank you for contacting us!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border shadow-cinematic">
        <CardHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
          <CardTitle className="text-2xl text-foreground">Get In Touch</CardTitle>
          <CardDescription className="text-muted-foreground">
            Ready to bring your vision to life? Let's discuss your project and see how we can help.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-muted/20 rounded-lg">
            <div className="flex items-center space-x-2">
              <Mail className="text-primary" size={16} />
              <span className="text-sm text-muted-foreground">info@7framez.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-primary" size={16} />
              <span className="text-sm text-muted-foreground">+966 591918986</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-primary" size={16} />
              <a 
                href="https://maps.app.goo.gl/tD73u41VxkLwoB8z7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Studio Location
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Interest</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-background/50 border border-border rounded-md text-foreground"
                >
                  <option value="">Select a service</option>
                  <option value="video-production">Video Production</option>
                  <option value="photography">Photography</option>
                  <option value="space-rental">Creative Space Rental</option>
                  <option value="audio-production">Audio Production</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="bg-background/50"
                placeholder="Tell us about your project, timeline, and any specific requirements..."
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              variant="cinematic"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} className="mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};