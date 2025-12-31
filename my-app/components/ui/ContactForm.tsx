import { useState } from 'react';
import { ContactFormProps, ContactFormData } from '@/lib/types';

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'Name must be less than 50 characters';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 100) {
      newErrors.email = 'Email address is too long';
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters long';
    } else if (formData.subject.trim().length > 100) {
      newErrors.subject = 'Subject must be less than 100 characters';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // If it's a network error, show a more specific message
      if (error instanceof Error) {
        if (error.message.includes('network') || error.message.includes('fetch')) {
          // We could set a more specific error message here if needed
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-rwua-neutral-100 p-4">
      <div className="relative p-8 bg-white rounded-2xl shadow-lg max-w-lg w-full">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10 transform rotate-6 bg-rwua-secondary rounded-2xl"></div>
        
        <h2 className="rwua-heading-3 text-rwua-neutral-800 mb-2">
          <span className="text-rwua-secondary font-bold">Get Help?</span> Please Write Your Subject, Message & Notify Your Email.
        </h2>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800 rwua-body-small">Thank you for your message! We'll get back to you soon.</p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-800 rwua-body-small">Sorry, there was an error sending your message. Please try again.</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label htmlFor="name" className="block rwua-body font-medium text-rwua-neutral-700">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-rwua-secondary outline-none rwua-body transition-colors ${
                errors.name ? 'border-red-500' : 'border-rwua-neutral-300'
              }`}
              placeholder="Type Name"
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 rwua-body-small text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block rwua-body font-medium text-rwua-neutral-700">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-rwua-secondary outline-none rwua-body transition-colors ${
                errors.email ? 'border-red-500' : 'border-rwua-neutral-300'
              }`}
              placeholder="Type Your Email"
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 rwua-body-small text-red-600" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="block rwua-body font-medium text-rwua-neutral-700">
              Subject*
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              maxLength={100}
              className={`w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-rwua-secondary outline-none rwua-body transition-colors ${
                errors.subject ? 'border-red-500' : 'border-rwua-neutral-300'
              }`}
              placeholder="Type Here"
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1 rwua-body-small text-red-600" role="alert">
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block rwua-body font-medium text-rwua-neutral-700">
              Your Message*
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              maxLength={1000}
              className={`w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-rwua-secondary outline-none rwua-body resize-none transition-colors ${
                errors.message ? 'border-red-500' : 'border-rwua-neutral-300'
              }`}
              placeholder="Type Here"
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 rwua-body-small text-red-600" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-white bg-rwua-secondary rounded-md hover:bg-rwua-secondary-dark transition-colors rwua-button-text disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}