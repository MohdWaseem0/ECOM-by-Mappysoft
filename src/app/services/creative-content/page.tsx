import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creative & Content Services | ECOM by Mappysoft',
  description: 'Professional creative and content services to enhance your e-commerce presence and boost conversions.',
};

const services = [
  {
    title: 'Product Photography',
    description: 'High-quality product images that showcase your products in the best light.',
    features: [
      'White Background Shots',
      'Lifestyle Photography',
      '360° Product Views',
      'Image Editing',
      'Infographics'
    ],
    icon: '📸'
  },
  {
    title: 'A+ Content Creation',
    description: 'Enhanced brand content to highlight your products and brand story.',
    features: [
      'A+ Detail Pages',
      'Enhanced Brand Content',
      'Comparison Charts',
      'Brand Storytelling',
      'Mobile-Optimized'
    ],
    icon: '✨'
  },
  {
    title: 'Video Production',
    description: 'Engaging product videos that drive conversions.',
    features: [
      'Product Demos',
      'How-To Videos',
      'Brand Videos',
      'Social Media Clips',
      'Editing & Effects'
    ],
    icon: '🎥'
  },
  {
    title: 'Copywriting',
    description: 'Compelling product descriptions and marketing copy.',
    features: [
      'SEO-Optimized Copy',
      'Product Descriptions',
      'Marketing Content',
      'Feature Highlights',
      'Call-to-Action'
    ],
    icon: '✍️'
  }
];

export default function CreativeContentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Creative & Content Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          High-quality creative assets and content to make your products stand out and convert
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Creative Content Matters</h2>
          <p className="text-gray-700 mb-6">
            In today&apos;s competitive e-commerce landscape, high-quality visuals and compelling content are no longer optional. 
            Our creative services help you create a strong brand presence, improve conversion rates, and reduce returns.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { stat: '85%', label: 'of shoppers say product information and photos are very important' },
              { stat: '40%', label: 'higher conversion rates with professional product images' },
              { stat: '3x', label: 'more engagement on listings with videos vs. those without' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</div>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-8 text-center">Our Creative Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <h4 className="font-medium mb-2">What's Included:</h4>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Get Started with {service.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Our Creative Process</h2>
        <div className="space-y-6">
          {[
            { step: '1', title: 'Discovery', description: 'We learn about your brand, products, and goals' },
            { step: '2', title: 'Planning', description: 'We create a content strategy and shot list' },
            { step: '3', title: 'Production', description: 'Our team captures and creates your assets' },
            { step: '4', title: 'Editing', description: 'We enhance and optimize all content' },
            { step: '5', title: 'Delivery', description: 'You receive all final assets in required formats' }
          ].map((item, i) => (
            <div key={i} className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                {item.step}
              </div>
              <div>
                <h3 className="font-medium text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
