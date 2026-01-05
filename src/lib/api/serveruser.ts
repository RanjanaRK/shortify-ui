// // lib/api/user.server.ts
// import { cookies } from "next/headers";
// import "server-only";

// export const getCurrentUserServer = async () => {
//   const res = await fetch(`api/me`, {
//     // cache: "no-store", // VERY important for auth

//     cache: "no-store",
//   });
//   console.log(res);

//   if (!res.ok) return null;

//   return res.json();
// };
// //
