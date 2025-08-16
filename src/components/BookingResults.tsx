import React from 'react'
import { Star, Clock, Users, Wifi, Car, MapPin, Plane } from 'lucide-react'

interface BookingResultsProps {
  results: {
    type: string
    data: any[]
  }
}

const BookingResults: React.FC<BookingResultsProps> = ({ results }) => {
  const { type, data } = results

  const renderFlightResult = (flight: any) => (
    <div key={flight.id} className="card mb-4 hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Plane className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{flight.airline}</h3>
              <p className="text-gray-600">{flight.aircraft}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">
              ${flight.price - (flight.price * flight.groupDiscount / 100)}
              <span className="text-sm text-gray-500 line-through ml-2">${flight.price}</span>
            </div>
            <div className="text-sm text-green-600 font-medium">
              {flight.groupDiscount}% Group Discount
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <div className="text-xl font-bold">{flight.departure.time}</div>
              <div className="text-sm text-gray-600">{flight.departure.airport}</div>
              <div className="text-xs text-gray-500">{flight.departure.city}</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-sm text-gray-600 mb-1">{flight.duration}</div>
              <div className="h-px bg-gray-300 relative">
                <Plane className="w-4 h-4 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white" />
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {flight.stops === 0 ? 'Nonstop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">{flight.arrival.time}</div>
              <div className="text-sm text-gray-600">{flight.arrival.airport}</div>
              <div className="text-xs text-gray-500">{flight.arrival.city}</div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            Perfect for groups
          </div>
          <button className="btn-primary">
            Select Flight
          </button>
        </div>
      </div>
    </div>
  )

  const renderHotelResult = (hotel: any) => (
    <div key={hotel.id} className="card mb-4 hover:shadow-xl transition-shadow">
      <div className="flex">
        <div className="w-48 h-48">
          <img 
            src={hotel.image} 
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
              <div className="flex items-center mb-2">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{hotel.rating}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                {hotel.location}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                ${hotel.price - (hotel.price * hotel.groupDiscount / 100)}
                <span className="text-sm text-gray-500 line-through ml-2">${hotel.price}</span>
              </div>
              <div className="text-sm text-green-600 font-medium">
                {hotel.groupDiscount}% Group Discount
              </div>
              <div className="text-xs text-gray-500">per night</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {hotel.amenities.map((amenity: string, index: number) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {amenity}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <Users className="w-4 h-4 inline mr-1" />
              {hotel.groupRooms} rooms available for groups
            </div>
            <button className="btn-primary">
              Select Hotel
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCarResult = (car: any) => (
    <div key={car.id} className="card mb-4 hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <Car className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{car.company}</h3>
              <p className="text-gray-600">{car.model}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">
              ${car.price - (car.price * car.groupDiscount / 100)}
              <span className="text-sm text-gray-500 line-through ml-2">${car.price}</span>
            </div>
            <div className="text-sm text-green-600 font-medium">
              {car.groupDiscount}% Group Discount
            </div>
            <div className="text-xs text-gray-500">per day</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            Seats {car.capacity} people
          </div>
          <div className="text-gray-600">
            {car.availability} vehicles available
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {car.features.map((feature: string, index: number) => (
            <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Perfect for group transportation
          </div>
          <button className="btn-primary">
            Select Vehicle
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {data.length} {type} found for your group
        </h2>
        <div className="flex items-center space-x-4">
          <select className="input-field">
            <option>Best Value</option>
            <option>Lowest Price</option>
            <option>Highest Rating</option>
            <option>Group Discount</option>
          </select>
        </div>
      </div>
      
      <div>
        {data.map((item) => {
          if (type === 'flights') return renderFlightResult(item)
          if (type === 'hotels') return renderHotelResult(item)
          if (type === 'cars') return renderCarResult(item)
          return null
        })}
      </div>
    </div>
  )
}

export default BookingResults