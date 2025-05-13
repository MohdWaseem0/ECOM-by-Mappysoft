git add .
git commit -m "fix: resolve TypeScript errors and clean up API routes"
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'E-commerce Management Services | ECOM by Mappysoft',
  description: 'Comprehensive e-commerce management services for B2B and B2C marketplaces. Maximize your online sales with our expert platform management solutions.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'B2B Marketplace Management',
      description: 'Complete management for B2B marketplaces including Amazon Business, Alibaba.com, and more.',
      href: '/services/b2b',
      platforms: ['Amazon Business', 'Alibaba.com', 'IndiaMART', 'TradeIndia', 'Udaan'],
    },
    {
      title: 'B2C Marketplace Management',
      description: 'End-to-end solutions for B2C platforms like Amazon India, Flipkart, and Myntra.',
      href: '/services/b2c',
      platforms: ['Amazon India', 'Flipkart', 'Myntra', 'Meesho', 'AJIO'],
    },
    {
      title: 'Performance Marketing',
      description: 'Data-driven marketing strategies to boost your e-commerce sales and ROI.',
      href: '/services/performance-marketing',
      features: ['PPC Management', 'Campaign Optimization', 'ROI Analysis'],
    },
    {
      title: 'Creative & Content',
      description: 'High-quality visuals and content to enhance your brand presence.',
      href: '/services/creative-content',
      features: ['Product Photography', 'A+ Content', 'Infographic Design'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our E-commerce Management Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions to grow your online business across multiple platforms
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            {service.platforms && (
              <div className="mb-4">
                <h3 className="font-medium mb-2">Platforms We Cover:</h3>
                <div className="flex flex-wrap gap-2">
                  {service.platforms.map((platform, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {service.features && (
              <div className="mb-4">
                <h3 className="font-medium mb-2">Key Features:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <Link 
              href={service.href}
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
