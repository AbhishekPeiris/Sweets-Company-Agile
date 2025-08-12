export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-dark-base">Admin Dashboard</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 border rounded-lg shadow-lg bg-light-base border-primary-accent/20">
          <h3 className="mb-2 font-semibold text-dark-base">Quick Overview</h3>
          <p className="text-sm text-dark-base/70">Monitor your business at a glance</p>
        </div>

        <div className="p-6 border rounded-lg shadow-lg bg-light-base border-primary-accent/20">
          <h3 className="mb-2 font-semibold text-dark-base">Product Management</h3>
          <p className="text-sm text-dark-base/70">Add products & manage stock</p>
        </div>

        <div className="p-6 border rounded-lg shadow-lg bg-light-base border-primary-accent/20">
          <h3 className="mb-2 font-semibold text-dark-base">Order Management</h3>
          <p className="text-sm text-dark-base/70">View and process orders</p>
        </div>

        <div className="p-6 border rounded-lg shadow-lg bg-light-base border-primary-accent/20">
          <h3 className="mb-2 font-semibold text-dark-base">Customer Management</h3>
          <p className="text-sm text-dark-base/70">Manage customer accounts</p>
        </div>
      </div>
    </div>
  );
}
