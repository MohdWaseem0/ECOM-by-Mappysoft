import Link from "next/link"

export const metadata = {
  title: 'Privacy Policy - ECOM by Mappysoft',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container-narrow py-12 md:py-16">
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h1>Privacy Policy</h1>
        
        <p className="lead">Last Updated: March 15, 2023</p>
        
        <p>
          At ECOM by Mappysoft, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ecom.mappysoft.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
        </p>
        
        <h2>Information We Collect</h2>
        
        <h3>Personal Data</h3>
        <p>
          We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Site, or otherwise when you contact us. The personal information we collect may include:
        </p>
        <ul>
          <li>Name and contact information (such as email address, mailing address, and phone number)</li>
          <li>Account credentials (such as usernames and passwords)</li>
          <li>Billing and payment information</li>
          <li>Any other information you choose to provide</li>
        </ul>
        
        <h3>Automatically Collected Information</h3>
        <p>
          When you visit our Site, we may use cookies, web beacons, pixel tags, log files, or other technologies to automatically collect certain information about your device and browsing actions.
        </p>
        
        <h2>How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send administrative information, such as updates, security alerts, and support messages</li>
          <li>Respond to comments, questions, and requests</li>
          <li>Personalize your experience on our Site</li>
          <li>Monitor and analyze trends, usage, and activities</li>
          <li>Develop new products and services</li>
          <li>Protect against, identify, and prevent fraud and other illegal activity</li>
        </ul>
        
        <h2>Disclosure of Your Information</h2>
        <p>We may share information we collect as follows:</p>
        <ul>
          <li>With service providers who perform services on our behalf</li>
          <li>To comply with legal obligations</li>
          <li>To protect and defend our rights and property</li>
          <li>With your consent or at your direction</li>
        </ul>
        
        <h2>Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable, and no data transmission over the Internet can be guaranteed to be 100% secure.
        </p>
        
        <h2>Your Choices</h2>
        <p>You can choose not to provide certain information, but this may limit your ability to use certain features of our Site.</p>
        
        <h3>Cookies</h3>
        <p>
          Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject cookies.
        </p>
        
        <h2>Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p>
          ECOM by Mappysoft<br />
          123 Digital Avenue<br />
          Bangalore, Karnataka 560001<br />
          India<br />
          Email: privacy@mappysoft.com
        </p>
        
        <div className="mt-8">
          <Link href="/" className="btn btn-outline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 