import React from 'react'
import { Users, DollarSign, Calendar, Headphones, Shield, Award } from 'lucide-react'

const GroupFeatures = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Exclusive Group Discounts',
      description: 'Save 15-30% on flights, hotels, and rental cars when booking for 6+ people',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Calendar,
      title: 'Coordinated Itineraries',
      description: 'Keep everyone on the same schedule with synchronized bookings and shared calendars',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Users,
      title: 'Group Management',
      description: 'Easily manage traveler details, preferences, and special requirements in one place',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: '24/7 group travel specialists to help with changes, cancellations, and emergencies',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Shield,
      title: 'Flexible Policies',
      description: 'Group-friendly cancellation and change policies with reduced fees',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Award,
      title: 'Premium Experience',
      description: 'Priority check-in, seat selection, and exclusive group amenities',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose FlightSage for Group Travel?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in making group travel seamless, affordable, and stress-free with 
            features designed specifically for coordinating multiple travelers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index} 
                className="card p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card p-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Plan Your Group Trip?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied group travelers who trust FlightSage AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Start Planning
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Talk to Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GroupFeatures