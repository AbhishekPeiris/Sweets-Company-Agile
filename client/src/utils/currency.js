export function formatAED(n) {
  return Number(n).toLocaleString("en-LK", {
    style: "currency",
    currency: "AED",
  });
}
