import { cacheLife } from "next/cache";

// Cached server component: reading the time inside "use cache" is allowed under
// cacheComponents, and the cached year is refreshed daily.
export default async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
