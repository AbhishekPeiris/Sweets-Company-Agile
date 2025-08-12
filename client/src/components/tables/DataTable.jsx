export default function DataTable({
  columns = [],
  rows = [],
  rowKey = "_id",
  actions,
}) {
  return (
    <div className="overflow-x-auto border-2 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-xl border-primary-accent/30 animate-glow">
      <table className="min-w-full text-sm">
        <thead className="border-b-2 bg-gradient-to-r from-primary-accent/20 to-secondary-accent/20 border-primary-accent/30">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="px-6 py-4 font-bold text-left font-stylish text-dark-base">
                {c.header}
              </th>
            ))}
            {actions && <th className="px-6 py-4 font-bold text-center font-stylish text-dark-base">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, index) => (
            <tr
              key={r[rowKey]}
              className={`border-b border-primary-accent/10 hover:bg-gradient-to-r hover:from-primary-accent/10 hover:to-secondary-accent/10 transition-all duration-300 ${index % 2 === 0 ? 'bg-white/50' : 'bg-cream/30'
                }`}
            >
              {columns.map((c) => (
                <td key={c.key} className="px-6 py-4 font-modern text-dark-base">
                  {c.render ? c.render(r) : r[c.key]}
                </td>
              ))}
              {actions && <td className="px-6 py-4 text-center">{actions(r)}</td>}
            </tr>
          ))}
          {!rows.length && (
            <tr>
              <td
                className="px-6 py-12 text-xl text-center font-elegant text-dark-base/70"
                colSpan={columns.length + 1}
              >
                <div className="flex flex-col items-center gap-4">
                  <span className="text-4xl animate-bounce-gentle">📭</span>
                  <span>No magical data available yet... ✨</span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
