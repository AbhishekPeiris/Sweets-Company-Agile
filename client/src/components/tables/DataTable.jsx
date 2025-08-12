export default function DataTable({
  columns = [],
  rows = [],
  rowKey = "_id",
  actions,
}) {
  return (
    <div className="overflow-x-auto bg-white border rounded">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="px-3 py-2 text-left">
                {c.header}
              </th>
            ))}
            {actions && <th className="px-3 py-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[rowKey]} className="border-t">
              {columns.map((c) => (
                <td key={c.key} className="px-3 py-2">
                  {c.render ? c.render(r) : r[c.key]}
                </td>
              ))}
              {actions && <td className="px-3 py-2">{actions(r)}</td>}
            </tr>
          ))}
          {!rows.length && (
            <tr>
              <td
                className="px-3 py-6 text-center text-gray-500"
                colSpan={columns.length + 1}
              >
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
