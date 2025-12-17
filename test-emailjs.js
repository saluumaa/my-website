#!/usr/bin/env node

// EmailJS Configuration Test Script
// Run with: node test-emailjs.js

import emailjs from '@emailjs/browser';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const serviceId = process.env.VITE_EMAILJS_SERVICE_ID;
const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY;

console.log('🔍 Testing EmailJS Configuration...\n');

if (!serviceId || !templateId || !publicKey) {
    console.error('❌ Missing environment variables:');
    if (!serviceId) console.log('  - VITE_EMAILJS_SERVICE_ID');
    if (!templateId) console.log('  - VITE_EMAILJS_TEMPLATE_ID');
    if (!publicKey) console.log('  - VITE_EMAILJS_PUBLIC_KEY');
    console.log('\nPlease check your .env file and ensure all variables are set.');
    process.exit(1);
}

console.log('✅ Environment variables found');
console.log(`📧 Service ID: ${serviceId}`);
console.log(`📄 Template ID: ${templateId}`);
console.log(`🔑 Public Key: ${publicKey.substring(0, 10)}...\n`);

console.log('🧪 Sending test email...');

const templateParams = {
    from_name: 'EmailJS Test',
    from_email: 'test@example.com',
    message: 'This is a test message from the EmailJS configuration script.',
    to_name: 'Test Recipient',
};

emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
        console.log('✅ Test email sent successfully!');
        console.log(`📨 Response: ${response.status} ${response.text}`);
        console.log('\n🎉 Your EmailJS configuration is working correctly!');
        console.log('The contact form should now work on your portfolio website.');
    })
    .catch((error) => {
        console.error('❌ Test email failed:');
        console.error(`Error: ${error.text || error.message}`);

        if (error.text?.includes('template ID not found')) {
            console.log('\n🔧 Solution: Check your Template ID in EmailJS dashboard');
        } else if (error.text?.includes('service ID not found')) {
            console.log('\n🔧 Solution: Check your Service ID in EmailJS dashboard');
        } else if (error.text?.includes('public key')) {
            console.log('\n🔧 Solution: Check your Public Key in EmailJS dashboard');
        } else {
            console.log('\n🔧 Solution: Verify all credentials in your .env file');
        }

        console.log('\n📖 For setup help, see the EmailJS Setup section in README.md');
        process.exit(1);
    });