import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Marketing for E-commerce | ECOM by Mappysoft',
  description: 'Data-driven performance marketing solutions to maximize your e-commerce ROI across all major platforms.',
};

const services = [
  {
    title: 'PPC Campaign Management',
    description: 'Expert management of pay-per-click campaigns across all major platforms.',
    features: [
      'Keyword Research',
      'Ad Copy Creation',
      'Bid Management',
      'A/B Testing',
      'ROI Optimization'
    ]
  },
  {
    title: 'Marketplace Advertising',
    description: 'Specialized advertising solutions for e-commerce marketplaces.',
    features: [
      'Sponsored Products',
      'Brand Campaigns',
      'Display Ads',
      'DSP Management',
      'Retargeting'
    ]
  },
  {
    title: 'Social Media Advertising',
    description: 'Targeted social campaigns to drive traffic and sales.',
    features: [
      'Facebook & Instagram Ads',
      'Pinterest Marketing',
      'Influencer Campaigns',
      'Content Creation',
      'Audience Targeting'
    ]
  },
  {
    title: 'Analytics & Reporting',
    description: 'Comprehensive performance tracking and insights.',
    features: [
      'Custom Dashboards',
      'ROI Analysis',
      'Competitor Benchmarking',
      'KPI Tracking',
      'Monthly Reports'
    ]
  }
];

export default function PerformanceMarketingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Performance Marketing Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Data-driven marketing strategies to grow your e-commerce business with measurable results
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <div className="bg-blue-50 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Performance Marketing Approach</h2>
          <p className="text-gray-700 mb-6">
            We combine data, technology, and creative strategy to deliver measurable results for your e-commerce business. 
            Our performance marketing services are designed to drive targeted traffic, increase conversions, and maximize ROI.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Why Performance Marketing?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Pay only for actual results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Precise audience targeting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Real-time optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Transparent reporting</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Our Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {['Amazon Ads', 'Google Ads', 'Facebook Ads', 'Instagram Ads', 'Pinterest Ads', 'TikTok Ads', 'Programmatic', 'Retargeting'].map((platform, i) => (
                  <span key={i} className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-8 text-center">Our Performance Marketing Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Learn More About {service.title.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Ready to Boost Your E-commerce Performance?</h2>
        <p className="text-gray-700 mb-6">
          Let's discuss how our performance marketing services can help you achieve your business goals. 
          Get in touch for a free consultation and proposal.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Get Your Free Marketing Audit
        </button>
      </div>
    </div>
  );
}
