
import { Plus, Users } from "lucide-react"
import StatsCard from "./components/StatsCard"
import SearchBar from "./components/SearchBar"
import UserTable from "./components/UserTable"
import UserModel from "./components/UserModel"
import {
  getUsers,
  searchUsers,
  getStats,
  addUser,
  updateUser,
  deleteUser
} from './api/userApi'


function App() {


  return (
    <div className="min-h-screen bg-gray-950">
      {/* HEADER */}
      <header className="bg-gray-900 shadow-xl border-b border-gray-800">
        <div className="max-s-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500 rounded-lg">
              <Users size={28} className="text-gray-900" />
            </div>
            <div className="">
              <h1 className="text-3xl font-bold text-white">User Management</h1>
              <p className="text-gray-400 mt-1">MERN Stack Application</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-green-500 text-gray-900 px-5 py-2.5 rounded-lg hover:bg-green-400 transition-colors shadow-lg font-semibold">
            <Plus size={20} /> Add User
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* STATS */}
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatsCard />
          {/* <StatsCard />
          <StatsCard /> */}
        </div>
        {/* SEARCH */}
        <SearchBar />

        {/* User Table */}
        <UserTable />

        {/* User Add Modal */}
        {/* <UserModel /> */}
      </main>
      

    </div>
  )
}

export default App
