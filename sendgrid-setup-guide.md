# SendGrid Setup Guide to Avoid Spam Filtering

This guide will help you properly configure SendGrid to improve email deliverability and prevent emails from being marked as spam.

## 1. Domain Authentication (Crucial Step)

Domain authentication tells email providers that SendGrid is authorized to send emails on your behalf.

1. **Log in to SendGrid** and go to Settings -> Sender Authentication -> Domain Authentication
2. **Click "Get Started"** and enter:
   - Your domain (e.g., desmare.it)
   - Advanced settings: enable all options (especially DKIM)
3. **Add DNS records** to your domain:
   - You'll receive 3-5 DNS records (CNAME records)
   - Add these to your domain's DNS settings with your hosting provider
   - Typically takes 24-48 hours to propagate

## 2. Complete Sender Verification

While waiting for domain authentication, verify your sender identity:

1. Go to Settings -> Sender Authentication -> Single Sender Verification
2. Add lorenzoboschi39@gmail.com as a verified sender
3. Complete the verification process via the email you receive

## 3. Improve Sender Reputation

1. **Warm up your sending domain**:
   - Start with low volume (10-20 emails/day)
   - Gradually increase over 2-4 weeks
   - Avoid sending to non-existent addresses
2. **Ask recipients to mark emails as "Not Spam"**:
   - Request trusted contacts to move your emails from spam to inbox
   - Ask them to add your sending address to their contacts

## 4. Immediate Fixes for Spam Issues

While building sender reputation, try these immediate fixes:

1. **Add a physical address** to your emails (required by law):
   - Update the email templates to include your business address
2. **Set up a reverse DNS record** for your sending IP:

   - Contact your hosting provider or IT team

3. **Ensure your "From" address matches your authenticated domain**:

   - Use lorenzoboschi39@gmail.com explicitly

4. **Request whitelisting**:
   - Ask IT administrators to whitelist your sending domain/IP

## 5. Best Practices for Email Content

1. **Avoid spam trigger words** in subject lines:
   - "Free", "Guarantee", "No obligation", "Winner", "Cash"
   - Excessive punctuation (!!!) or ALL CAPS
2. **Balance text-to-image ratio**:
   - Aim for more text than images
   - Add proper alt text to images
3. **Include unsubscribe options** (now added to your emails)

4. **Maintain healthy engagement metrics**:
   - High open rates and click rates help deliverability
   - Remove unengaged contacts periodically

## 6. Testing Your Email Deliverability

1. **Use Mail Tester**:

   - Visit [mail-tester.com](https://www.mail-tester.com/)
   - Send a test email to the provided address
   - Review your score and recommendations

2. **Check SPF, DKIM, and DMARC records**:
   - Use [MXToolBox](https://mxtoolbox.com/) to verify your DNS records

## 7. Monitoring and Improving

1. **Monitor SendGrid statistics**:

   - Track opens, clicks, bounces, blocks, and spam reports
   - Investigate any issues

2. **Set up Event Webhook**:
   - Go to Settings -> Mail Settings -> Event Webhook
   - Track detailed email events for debugging

## Need More Help?

- SendGrid Support: [support.sendgrid.com](https://support.sendgrid.com/)
- Email Deliverability Guide: [sendgrid.com/blog/email-deliverability-guide](https://sendgrid.com/blog/email-deliverability-guide/)
