export function formatLKR(n) {
  return Number(n).toLocaleString("en-LK", {
    style: "currency",
    currency: "LKR",
  });
}
