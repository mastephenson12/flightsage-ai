import React, { useState } from 'react'
import { Plane, Hotel, Car, TreePine, Users, Calendar, MapPin, Search, Plus, Minus } from 'lucide-react'

interface SearchFormProps {
  activeTab: 'flights' | 'hotels' | 'cars' | 'attractions'
  setActiveTab: (tab: 'flights' | 'hotels' | 'cars' | 'attractions') => void
  onSearch: (data: any) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ activeTab, setActiveTab, onSearch }) => {
  const [groupSize, setGroupSize] = useState(8)
  const [isSearching, setIsSearching] = useState(false)
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    rooms: 4,
    adults: 8,
    children: 0
  })

  const handleSearch = () => {
    setIsSearching(true)
    onSearch({ ...formData, groupSize, type: activeTab })
    setTimeout(() => setIsSearching(false), 1500)
  }

  const tabs = [
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'hotels', label: 'Hotels', icon: Hotel },
    { id: 'cars', label: 'Rental Cars', icon: Car },
    { id: 'attractions', label: 'Attractions', icon: TreePine }
  ]

  return (
    <div className="card animate-slide-up">
      <div className="p-8">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Group Size Indicator */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold text-blue-900">Group Size: {groupSize} people</span>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setGroupSize(Math.max(2, groupSize - 1))}
                className="w-8 h-8 rounded-full bg-white border border-blue-300 flex items-center justify-center hover:bg-blue-50"
              >
                <Minus className="w-4 h-4 text-blue-600" />
              </button>
              <button
                onClick={() => setGroupSize(Math.min(50, groupSize + 1))}
                className="w-8 h-8 rounded-full bg-white border border-blue-300 flex items-center justify-center hover:bg-blue-50"
              >
                <Plus className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>
          <p className="text-sm text-blue-700 mt-2">
            Groups of 6+ qualify for exclusive discounts and dedicated support
          </p>
        </div>

        {/* Search Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {activeTab === 'flights' ? 'From' : 
               activeTab === 'hotels' ? 'Destination' : 
               activeTab === 'cars' ? 'Pickup Location' : 'Location'}
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={activeTab === 'flights' ? 'New York (JFK)' : 
                           activeTab === 'hotels' ? 'Los Angeles, CA' : 
                           activeTab === 'cars' ? 'Los Angeles Airport' : 'Yellowstone, WY'}
                className="input-field pl-10"
                value={formData.from}
                onChange={(e) => setFormData({...formData, from: e.target.value})}
              />
            </div>
          </div>

          {activeTab === 'flights' && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">To</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Los Angeles (LAX)"
                  className="input-field pl-10"
                  value={formData.to}
                  onChange={(e) => setFormData({...formData, to: e.target.value})}
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {activeTab === 'flights' ? 'Departure' : 
               activeTab === 'hotels' ? 'Check-in' : 
               activeTab === 'cars' ? 'Pickup Date' : 'Visit Date'}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="date"
                className="input-field pl-10"
                value={formData.departDate}
                onChange={(e) => setFormData({...formData, departDate: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {activeTab === 'flights' ? 'Return' : 
               activeTab === 'hotels' ? 'Check-out' : 
               activeTab === 'cars' ? 'Return Date' : 'End Date'}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="date"
                className="input-field pl-10"
                value={formData.returnDate}
                onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Additional Options for Hotels */}
        {(activeTab === 'hotels' || activeTab === 'attractions') && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {activeTab === 'hotels' && (
              <>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Rooms</label>
              <select 
                className="input-field"
                value={formData.rooms}
                onChange={(e) => setFormData({...formData, rooms: parseInt(e.target.value)})}
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Adults</label>
              <select 
                className="input-field"
                value={formData.adults}
                onChange={(e) => setFormData({...formData, adults: parseInt(e.target.value)})}
              >
                {Array.from({length: 20}, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Children</label>
              <select 
                className="input-field"
                value={formData.children}
                onChange={(e) => setFormData({...formData, children: parseInt(e.target.value)})}
              >
                {Array.from({length: 11}, (_, i) => i).map(num => (
                  <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>
                ))}
              </select>
            </div>
              </>
            )}
            {activeTab === 'attractions' && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Activity Type</label>
                  <select className="input-field">
                    <option>All Attractions</option>
                    <option>National Parks</option>
                    <option>State Parks</option>
                    <option>Museums</option>
                    <option>Adventure Tours</option>
                    <option>Cultural Sites</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Duration</label>
                  <select className="input-field">
                    <option>Any Duration</option>
                    <option>Half Day (2-4 hours)</option>
                    <option>Full Day (6-8 hours)</option>
                    <option>Multi-Day</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Difficulty</label>
                  <select className="input-field">
                    <option>All Levels</option>
                    <option>Easy</option>
                    <option>Moderate</option>
                    <option>Challenging</option>
                  </select>
                </div>
              </>
            )}
          </div>
        )}

        {/* Search Button */}
        <button
          onClick={handleSearch}
          disabled={isSearching}
          className="btn-primary w-full text-lg py-4 flex items-center justify-center"
        >
          {isSearching ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
          ) : (
            <Search className="w-6 h-6 mr-3" />
          )}
          {isSearching ? 'Searching...' : `Search ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
        </button>
      </div>
    </div>
  )
}

export default SearchForm