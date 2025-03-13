import Link from "next/link"

export const metadata = {
  title: 'Terms of Service - ECOM by Mappysoft',
  description: 'Our terms of service outline the rules, guidelines, and agreements for using our website and services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="container-narrow py-12 md:py-16">
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h1>Terms of Service</h1>
        
        <p className="lead">Last Updated: March 15, 2023</p>
        
        <p>
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the ecom.mappysoft.com website (the "Service") operated by ECOM by Mappysoft ("us", "we", or "our").
        </p>
        
        <p>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
        </p>
        
        <p>
          By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
        </p>
        
        <h2>Content</h2>
        
        <p>
          Our Service allows you to access educational content related to digital marketing, e-commerce platforms, and marketplace management. The content on our Service includes text, images, videos, and other materials ("Content").
        </p>
        
        <p>
          The Content found on or through this Service is the property of ECOM by Mappysoft or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.
        </p>
        
        <h2>Accounts</h2>
        
        <p>
          When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
        
        <p>
          You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
        </p>
        
        <p>
          You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
        </p>
        
        <h2>Intellectual Property</h2>
        
        <p>
          The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of ECOM by Mappysoft and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ECOM by Mappysoft.
        </p>
        
        <h2>Links To Other Web Sites</h2>
        
        <p>
          Our Service may contain links to third-party websites or services that are not owned or controlled by ECOM by Mappysoft.
        </p>
        
        <p>
          ECOM by Mappysoft has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that ECOM by Mappysoft shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
        </p>
        
        <h2>Termination</h2>
        
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
        
        <p>
          Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
        </p>
        
        <h2>Governing Law</h2>
        
        <p>
          These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
        </p>
        
        <p>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
        </p>
        
        <h2>Changes</h2>
        
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        
        <p>
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
        </p>
        
        <h2>Contact Us</h2>
        
        <p>
          If you have any questions about these Terms, please contact us:
        </p>
        
        <p>
          ECOM by Mappysoft<br />
          123 Digital Avenue<br />
          Bangalore, Karnataka 560001<br />
          India<br />
          Email: legal@mappysoft.com
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