import { Footer } from "../components/Footer"
import { ArrowRight, User, Settings, MapPin, Package, LogOut } from "lucide-react"

export const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-grow px-6 py-8">
        {/* Profile header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center shadow-md">
            <User size={48} className="text-gray-500" />
          </div>
          <h2 className="mt-4 text-xl font-bold">John Doe</h2>
          <p className="text-gray-500 text-sm">johndoe@email.com</p>
        </div>

        {/* Profile action cards */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-between p-4 border border-border-primary rounded-xl shadow-sm hover:bg-gray-50 transition">
            <span className="flex items-center gap-3">
              <Package className="text-btn-primary" />
              <span className="font-medium">My Orders</span>
            </span>
            <ArrowRight />
          </button>

          <button className="flex items-center justify-between p-4 border border-border-primary rounded-xl shadow-sm hover:bg-gray-50 transition">
            <span className="flex items-center gap-3">
              <MapPin className="text-btn-primary" />
              <span className="font-medium">Shipping Address</span>
            </span>
            <ArrowRight />
          </button>

          <button className="flex items-center justify-between p-4 border border-border-primary rounded-xl shadow-sm hover:bg-gray-50 transition">
            <span className="flex items-center gap-3">
              <Settings className="text-btn-primary" />
              <span className="font-medium">Account Settings</span>
            </span>
            <ArrowRight />
          </button>

          <button className="flex items-center justify-between p-4 border border-border-primary rounded-xl shadow-sm hover:bg-gray-50 transition">
            <span className="flex items-center gap-3">
              <LogOut className="text-btn-primary" />
              <span className="font-medium">Log Out</span>
            </span>
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer page="profile" />
    </div>
  )
}
