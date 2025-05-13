import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B2B Marketplace Management | ECOM by Mappysoft',
  description: 'Expert B2B marketplace management services for platforms like Amazon Business, Alibaba.com, IndiaMART, and more.',
};

const b2bPlatforms = [
  {
    name: 'Amazon Business',
    description: 'Comprehensive management for your B2B presence on Amazon Business.',
    features: ['Account Setup', 'Catalog Management', 'Bulk Listing', 'B2B Pricing']
  },
  {
    name: 'Alibaba.com',
    description: 'Expand your global reach with our Alibaba.com management services.',
    features: ['Store Setup', 'Product Listing', 'RFQ Management', 'Trade Assurance']
  },
  {
    name: 'IndiaMART',
    description: 'Maximize your B2B potential on India\'s largest online marketplace.',
    features: ['Profile Optimization', 'Lead Management', 'Premium Services', 'Analytics']
  },
  {
    name: 'TradeIndia',
    description: 'Complete solutions for your TradeIndia seller account.',
    features: ['Product Listing', 'Lead Generation', 'Premium Membership', 'Performance Tracking']
  },
  {
    name: 'Udaan',
    description: 'End-to-end management for your Udaan B2B store.',
    features: ['Catalog Management', 'Order Processing', 'Inventory Sync', 'Growth Hacking']
  }
];

export default function B2BPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">B2B Marketplace Management</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expand your B2B presence with our expert marketplace management services
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our B2B Management Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">What We Offer</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Complete account setup and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Product catalog management and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Bulk listing and inventory management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>B2B pricing strategies and implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Performance analytics and reporting</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Why Choose Us</h3>
            <ul className="space-y-3">
              <li>• Dedicated B2B marketplace experts</li>
              <li>• Platform-specific optimization strategies</li>
              <li>• Regular performance reporting</li>
              <li>• Dedicated account manager</li>
              <li>• 24/7 support for critical issues</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">Platforms We Manage</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {b2bPlatforms.map((platform, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{platform.name}</h3>
              <p className="text-gray-600 mb-4">{platform.description}</p>
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="space-y-1 mb-4">
                {platform.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Get Started with {platform.name.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
