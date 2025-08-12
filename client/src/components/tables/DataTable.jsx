export default function DataTable({
  columns = [],
  rows = [],
  rowKey = "_id",
  actions,
}) {
  return (
    <div className="overflow-x-auto border rounded-lg shadow-lg bg-light-base border-primary-accent/20">
      <table className="min-w-full text-sm">
        <thead className="border-b bg-primary-accent/10 border-primary-accent/20">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="px-4 py-3 font-semibold text-left text-dark-base">
                {c.header}
              </th>
            ))}
            {actions && <th className="px-4 py-3 font-semibold text-center text-dark-base">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[rowKey]} className="border-b border-primary-accent/10">
              {columns.map((c) => (
                <td key={c.key} className="px-4 py-3 text-dark-base">
                  {c.render ? c.render(r) : r[c.key]}
                </td>
              ))}
              {actions && <td className="px-4 py-3 text-center">{actions(r)}</td>}
            </tr>
          ))}
          {!rows.length && (
            <tr>
              <td
                className="px-4 py-6 text-center text-dark-base/70"
                colSpan={columns.length + 1}
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
