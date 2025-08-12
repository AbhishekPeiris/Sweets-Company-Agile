import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-black text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
          👑 Sweet Empire Dashboard ✨
        </h1>
        <p className="text-xl font-modern text-dark-base/70">
          Welcome to your magical sweet management center! 🏰
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-8 transition-all duration-300 transform border-2 shadow-2xl rounded-3xl bg-gradient-to-br from-white/80 to-primary-accent/20 backdrop-blur-xl border-primary-accent/30 hover:shadow-xl hover:scale-105 animate-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="text-5xl animate-bounce-gentle">🍬</div>
            <div className="text-right">
              <div className="text-3xl font-bold text-transparent font-fancy bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">
                42
              </div>
              <div className="text-sm font-stylish text-dark-base/70">
                Total Products
              </div>
            </div>
          </div>
          <h3 className="mb-2 text-lg font-bold font-stylish text-dark-base">
            Sweet Collection
          </h3>
          <p className="text-sm font-modern text-dark-base/70">
            Magical treats ready to delight customers
          </p>
          <Link
            to="/admin/products"
            className="inline-block mt-3 text-sm font-semibold text-primary-accent hover:underline"
          >
            View Products &rarr;
          </Link>
        </div>

        <div className="p-8 transition-all duration-300 transform border-2 shadow-2xl rounded-3xl bg-gradient-to-br from-white/80 to-secondary-accent/20 backdrop-blur-xl border-secondary-accent/30 hover:shadow-xl hover:scale-105 animate-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="text-5xl animate-bounce-gentle">📦</div>
            <div className="text-right">
              <div className="text-3xl font-bold text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-lavender">
                128
              </div>
              <div className="text-sm font-stylish text-dark-base/70">
                Items in Stock
              </div>
            </div>
          </div>
          <h3 className="mb-2 text-lg font-bold font-stylish text-dark-base">
            Inventory Status
          </h3>
          <p className="text-sm font-modern text-dark-base/70">
            Sweet stock levels and management
          </p>
          <Link
            to="/admin/inventory"
            className="inline-block mt-3 text-sm font-semibold text-secondary-accent hover:underline"
          >
            Manage Stock &rarr;
          </Link>
        </div>

        <div className="p-8 transition-all duration-300 transform border-2 shadow-2xl rounded-3xl bg-gradient-to-br from-white/80 to-tertiary-accent/20 backdrop-blur-xl border-tertiary-accent/30 hover:shadow-xl hover:scale-105 animate-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="text-5xl animate-bounce-gentle">📋</div>
            <div className="text-right">
              <div className="text-3xl font-bold text-transparent font-fancy bg-clip-text bg-gradient-to-r from-tertiary-accent to-light-base">
                15
              </div>
              <div className="text-sm font-stylish text-dark-base/70">
                Pending Orders
              </div>
            </div>
          </div>
          <h3 className="mb-2 text-lg font-bold font-stylish text-dark-base">
            Order Management
          </h3>
          <p className="text-sm font-modern text-dark-base/70">
            Sweet orders awaiting your attention
          </p>
          <Link
            to="/admin/orders"
            className="inline-block mt-3 text-sm font-semibold text-orange-600 hover:underline"
          >
            Process Orders &rarr;
          </Link>
        </div>

        <div className="p-8 transition-all duration-300 transform border-2 shadow-2xl rounded-3xl bg-gradient-to-br from-white/80 to-rose/20 backdrop-blur-xl border-rose/30 hover:shadow-xl hover:scale-105 animate-glow">
          <div className="flex items-center justify-between mb-4">
            <div className="text-5xl animate-bounce-gentle">👥</div>
            <div className="text-right">
              <div className="text-3xl font-bold text-transparent font-fancy bg-clip-text bg-gradient-to-r from-rose to-primary-accent">
                89
              </div>
              <div className="text-sm font-stylish text-dark-base/70">
                Happy Customers
              </div>
            </div>
          </div>
          <h3 className="mb-2 text-lg font-bold font-stylish text-dark-base">
            Customer Base
          </h3>
          <p className="text-sm font-modern text-dark-base/70">
            Sweet relationships that matter
          </p>
          <Link
            to="/admin/customers"
            className="inline-block mt-3 text-sm font-semibold text-rose hover:underline"
          >
            View Customers &rarr;
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="p-8 border-2 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-xl border-primary-accent/30 animate-glow">
          <h3 className="mb-6 text-2xl font-bold text-center font-fancy text-dark-base">
            🚀 Quick Actions
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to="/admin/products"
              className="p-4 transition-all duration-300 transform border group bg-gradient-to-r from-primary-accent/10 to-secondary-accent/10 rounded-2xl hover:from-primary-accent/20 hover:to-secondary-accent/20 hover:scale-105 border-primary-accent/20"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl group-hover:animate-wiggle">➕</span>
                <div>
                  <div className="font-semibold font-stylish text-dark-base">
                    Add Product
                  </div>
                  <div className="text-sm font-modern text-dark-base/70">
                    Create new sweet
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/admin/inventory"
              className="p-4 transition-all duration-300 transform border group bg-gradient-to-r from-tertiary-accent/10 to-light-base/10 rounded-2xl hover:from-tertiary-accent/20 hover:to-light-base/20 hover:scale-105 border-tertiary-accent/20"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl group-hover:animate-wiggle">📦</span>
                <div>
                  <div className="font-semibold font-stylish text-dark-base">
                    Manage Stock
                  </div>
                  <div className="text-sm font-modern text-dark-base/70">
                    Update inventory
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/admin/orders"
              className="p-4 transition-all duration-300 transform border group bg-gradient-to-r from-secondary-accent/10 to-lavender/10 rounded-2xl hover:from-secondary-accent/20 hover:to-lavender/20 hover:scale-105 border-secondary-accent/20"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl group-hover:animate-wiggle">📋</span>
                <div>
                  <div className="font-semibold font-stylish text-dark-base">
                    View Orders
                  </div>
                  <div className="text-sm font-modern text-dark-base/70">
                    Process pending
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/admin/customers"
              className="p-4 transition-all duration-300 transform border group bg-gradient-to-r from-rose/10 to-primary-accent/10 rounded-2xl hover:from-rose/20 hover:to-primary-accent/20 hover:scale-105 border-rose/20"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl group-hover:animate-wiggle">👥</span>
                <div>
                  <div className="font-semibold font-stylish text-dark-base">
                    Add Customer
                  </div>
                  <div className="text-sm font-modern text-dark-base/70">
                    Expand community
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-8 border-2 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-xl border-secondary-accent/30 animate-glow">
          <h3 className="mb-6 text-2xl font-bold text-center font-fancy text-dark-base">
            📈 Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border border-green-200 bg-gradient-to-r from-green-100 to-green-50 rounded-xl">
              <span className="text-2xl">✅</span>
              <div className="flex-1">
                <div className="font-semibold font-stylish text-dark-base">
                  Order #123456 Completed
                </div>
                <div className="text-sm font-modern text-dark-base/70">
                  Rainbow cupcakes delivered successfully
                </div>
              </div>
              <div className="text-xs font-modern text-dark-base/50">2m ago</div>
            </div>

            <div className="flex items-center gap-4 p-4 border border-blue-200 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl">
              <span className="text-2xl">📦</span>
              <div className="flex-1">
                <div className="font-semibold font-stylish text-dark-base">
                  Stock Updated
                </div>
                <div className="text-sm font-modern text-dark-base/70">
                  Chocolate cookies restocked (+50 units)
                </div>
              </div>
              <div className="text-xs font-modern text-dark-base/50">5m ago</div>
            </div>

            <div className="flex items-center gap-4 p-4 border border-purple-200 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl">
              <span className="text-2xl">🍬</span>
              <div className="flex-1">
                <div className="font-semibold font-stylish text-dark-base">
                  New Product Added
                </div>
                <div className="text-sm font-modern text-dark-base/70">
                  Magical macarons now available
                </div>
              </div>
              <div className="text-xs font-modern text-dark-base/50">15m ago</div>
            </div>

            <div className="flex items-center gap-4 p-4 border border-pink-200 bg-gradient-to-r from-pink-100 to-pink-50 rounded-xl">
              <span className="text-2xl">👤</span>
              <div className="flex-1">
                <div className="font-semibold font-stylish text-dark-base">
                  New Customer
                </div>
                <div className="text-sm font-modern text-dark-base/70">
                  Sweet lover joined the family!
                </div>
              </div>
              <div className="text-xs font-modern text-dark-base/50">1h ago</div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="p-8 text-center border-2 shadow-2xl rounded-3xl bg-gradient-to-r from-primary-accent/10 via-secondary-accent/10 to-tertiary-accent/10 backdrop-blur-xl border-primary-accent/30">
        <div className="mb-4 text-6xl animate-float">🎉</div>
        <h3 className="mb-4 text-3xl font-bold text-transparent font-fancy bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">
          Welcome to Sweet Empire Admin!
        </h3>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed font-modern text-dark-base/80">
          Your magical dashboard to manage all things sweet! From creating
          delightful products to tracking orders and caring for customers -
          everything you need is right here at your fingertips! ✨🍬
        </p>
      </div>
    </div>
  );
}
