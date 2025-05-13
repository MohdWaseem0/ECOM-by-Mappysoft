import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B2C Marketplace Management | ECOM by Mappysoft',
  description: 'Professional B2C marketplace management for Amazon India, Flipkart, Myntra, and other leading e-commerce platforms.',
};

const b2cPlatforms = [
  {
    name: 'Amazon India',
    description: 'Complete seller account management for Amazon India marketplace.',
    features: ['A+ Content', 'FBA Management', 'PPC Campaigns', 'Brand Registry']
  },
  {
    name: 'Flipkart',
    description: 'Expert management for your Flipkart seller account.',
    features: ['Catalog Management', 'Flipkart Ads', 'Price Management', 'Analytics']
  },
  {
    name: 'Myntra',
    description: 'Specialized services for fashion and lifestyle brands on Myntra.',
    features: ['Brand Store Setup', 'Visual Merchandising', 'Campaign Management', 'Performance Tracking']
  },
  {
    name: 'Meesho',
    description: 'Grow your business on Meesho with our expert management services.',
    features: ['Product Listing', 'Price Optimization', 'Order Management', 'Growth Hacks']
  },
  {
    name: 'AJIO',
    description: 'Complete solutions for your AJIO Fashion Store.',
    features: ['Store Setup', 'Product Photography', 'Inventory Management', 'Performance Analysis']
  }
];

export default function B2CPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">B2C Marketplace Management</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Maximize your sales on India's top B2C marketplaces with our expert management services
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our B2C Management Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">Our Offerings</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>End-to-end marketplace account management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Product listing optimization for maximum visibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Inventory and order management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Performance marketing and advertising</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Analytics and performance reporting</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Why Partner With Us</h3>
            <ul className="space-y-3">
              <li>• Platform-certified experts</li>
              <li>• Data-driven strategies for growth</li>
              <li>• Dedicated account management</li>
              <li>• Regular performance reviews</li>
              <li>• Transparent reporting</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our B2C Marketplace Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {b2cPlatforms.map((platform, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{platform.name}</h3>
              <p className="text-gray-600 mb-4">{platform.description}</p>
              <h4 className="font-medium mb-2">Our Services Include:</h4>
              <ul className="space-y-1 mb-4">
                {platform.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Start Selling on {platform.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
