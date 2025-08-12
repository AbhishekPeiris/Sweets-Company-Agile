export default function Dashboard() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <div className="p-4 bg-white rounded shadow">
        Quick actions & overview.
      </div>
      <div className="p-4 bg-white rounded shadow">
        Add products / manage stock.
      </div>
      <div className="p-4 bg-white rounded shadow">View orders.</div>
      <div className="p-4 bg-white rounded shadow">Manage customers.</div>
    </div>
  );
}
