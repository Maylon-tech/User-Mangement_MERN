import { User } from "lucide-react"



const StatsCard = () => {
  return (
      <div className={`rounded-lg shadow-lg p-6 border border-gray-800 transform hover:scale-105 transition-all`}>
          <div>    
            <p className="text-gray-300 text-sm font-medium">Title</p>
            <p className="text-3xl font-bold mt-2">Number</p>
            {/* Conditional rendering */}
            <p className="text-gray-400 text-sm mt-1">Description</p>
          </div>

            {/* ICON */}
          <div className={`p-3 rounded-lg flex items-center justify-center`}>
              <User />
          </div>
      Stats card
    </div>
  )
}

export default StatsCard
