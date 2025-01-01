
import { Laptop } from 'lucide-react'
import {Link} from 'react-router-dom'


export default function ElectronicsDonationPage() {
  

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link 
        to="/donate"
        className="text-emerald-600 hover:text-emerald-700 inline-flex items-center mb-6"
      >
        ← Back to categories
      </Link>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Laptop className="w-8 h-8 text-emerald-600" />
          <h1 className="text-2xl font-bold">Donate Electronics</h1>
        </div>
        <form  className="space-y-4">
          <div>
            <label htmlFor="deviceType" className="block text-sm font-medium mb-2">Device Type</label>
            <input
              type="text"
              id="deviceType"
              name="deviceType"
              
              placeholder="e.g., Laptop, Phone, Tablet"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="brandModel" className="block text-sm font-medium mb-2">Brand & Model</label>
            <input
              type="text"
              id="brandModel"
              name="brandModel"
              
              placeholder="e.g., Apple MacBook Pro 2019"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="condition" className="block text-sm font-medium mb-2">Condition</label>
            <input
              type="text"
              id="condition"
              name="condition"
              
              placeholder="e.g., Working, Needs repair"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium mb-2">Age of Device</label>
            <input
              type="text"
              id="age"
              name="age"
              
              placeholder="e.g., 2 years"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-2">Collection Address</label>
            <input
              type="text"
              id="address"
              name="address"
              
              placeholder="Enter the address for electronics collection"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="additionalNotes" className="block text-sm font-medium mb-2">Additional Notes</label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              
              placeholder="Any specific details about the device"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Submit Electronics Donation
          </button>
        </form>
      </div>
    </div>
  )
}

