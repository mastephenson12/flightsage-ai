import React, { useState } from 'react'
import { Plane, Hotel, Car, Users, Calendar, MapPin, Search, Star, Clock, Shield, TreePine } from 'lucide-react'
import SearchForm from './components/SearchForm'
import GroupFeatures from './components/GroupFeatures'
import BookingResults from './components/BookingResults'
import Header from './components/Header'

function App() {
  const [searchResults, setSearchResults] = useState(null)
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'cars' | 'attractions'>('flights')

  const handleSearch = (searchData: any) => {
    // Simulate API call
    setTimeout(() => {
      setSearchResults({
        type: activeTab,
        data: generateMockResults(activeTab, searchData)
      })
    }, 1500)
  }

  const generateMockResults = (type: string, searchData: any) => {
    if (type === 'flights') {
      return [
        {
          id: 1,
          airline: 'Delta Airlines',
          departure: { time: '08:30', airport: 'JFK', city: 'New York' },
          arrival: { time: '11:45', airport: 'LAX', city: 'Los Angeles' },
          duration: '5h 15m',
          price: 299,
          groupDiscount: 15,
          stops: 0,
          aircraft: 'Boeing 737'
        },
        {
          id: 2,
          airline: 'American Airlines',
          departure: { time: '14:20', airport: 'JFK', city: 'New York' },
          arrival: { time: '17:55', airport: 'LAX', city: 'Los Angeles' },
          duration: '5h 35m',
          price: 279,
          groupDiscount: 20,
          stops: 0,
          aircraft: 'Airbus A321'
        }
      ]
    } else if (type === 'hotels') {
      return [
        {
          id: 1,
          name: 'Grand Plaza Hotel',
          rating: 4.5,
          location: 'Downtown Los Angeles',
          price: 189,
          groupDiscount: 25,
          amenities: ['Pool', 'Gym', 'WiFi', 'Restaurant'],
          groupRooms: 8,
          image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
        },
        {
          id: 2,
          name: 'Sunset Resort & Spa',
          rating: 4.8,
          location: 'Santa Monica',
          price: 245,
          groupDiscount: 30,
          amenities: ['Spa', 'Beach Access', 'Pool', 'Restaurant'],
          groupRooms: 12,
          image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        }
      ]
    } else if (type === 'cars') {
      return [
        {
          id: 1,
          company: 'Enterprise',
          model: 'Toyota Sienna (Minivan)',
          capacity: 8,
          price: 89,
          groupDiscount: 20,
          features: ['GPS', 'Bluetooth', 'USB Ports'],
          availability: 5
        },
        {
          id: 2,
          company: 'Hertz',
          model: 'Chevrolet Suburban (SUV)',
          capacity: 9,
          price: 109,
          groupDiscount: 25,
          features: ['4WD', 'GPS', 'Premium Audio'],
          availability: 3
        }
      ]
    } else {
      return [
        {
          id: 1,
          name: 'Yellowstone National Park',
          type: 'National Park',
          location: 'Wyoming, USA',
          price: 35,
          groupDiscount: 20,
          duration: 'Full Day',
          rating: 4.9,
          description: 'Experience geysers, hot springs, and incredible wildlife',
          features: ['Guided Tours', 'Wildlife Viewing', 'Photography', 'Hiking Trails'],
          groupSize: '15+ people',
          image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg'
        },
        {
          id: 2,
          name: 'Grand Canyon Skywalk',
          type: 'Attraction',
          location: 'Arizona, USA',
          price: 89,
          groupDiscount: 25,
          duration: '4 hours',
          rating: 4.7,
          description: 'Walk on glass 4,000 feet above the Colorado River',
          features: ['Glass Bridge', 'Scenic Views', 'Photo Opportunities', 'Gift Shop'],
          groupSize: '10+ people',
          image: 'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg'
        },
        {
          id: 3,
          name: 'Redwood State Park Adventure',
          type: 'State Park',
          location: 'California, USA',
          price: 45,
          groupDiscount: 30,
          duration: '6 hours',
          rating: 4.8,
          description: 'Explore the tallest trees on Earth with guided nature walks',
          features: ['Giant Trees', 'Nature Walks', 'Educational Tours', 'Picnic Areas'],
          groupSize: '12+ people',
          image: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg'
        },
        {
          id: 4,
          name: 'Niagara Falls Boat Tour',
          type: 'Attraction',
          location: 'New York, USA',
          price: 65,
          groupDiscount: 20,
          duration: '3 hours',
          rating: 4.6,
          description: 'Get up close to the thundering waterfalls on the Maid of the Mist',
          features: ['Boat Tour', 'Waterfall Views', 'Raincoats Provided', 'Photo Stops'],
          groupSize: '8+ people',
          image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg'
        }
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Group Travel Made
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Book flights, hotels, and rental cars for your entire group with exclusive discounts, 
              coordinated itineraries, and seamless group management.
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mb-12 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              Secure Booking
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              4.9/5 Rating
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              24/7 Support
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <SearchForm 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onSearch={handleSearch}
          />
        </div>
      </section>

      {/* Results Section */}
      {searchResults && (
        <section className="px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <BookingResults results={searchResults} />
          </div>
        </section>
      )}

      {/* Group Features Section */}
      <GroupFeatures />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <Plane className="w-8 h-8 mr-3 text-blue-400" />
            <span className="text-2xl font-bold">FlightSage AI</span>
          </div>
          <p className="text-gray-400 mb-6">
            Revolutionizing group travel with AI-powered booking and coordination
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App