import { withAuth } from "next-auth/middleware";

// export default withAuth(async function middleware(req) {
//   // authorize roles
// });

const middleware = async (req, res, next) => {
    // Authorize roles or perform other middleware logic here
    next(); // Call next to pass control to the next middleware or route handler
  };
  
  export default withAuth({ middleware });

export const config = {
  matcher: ["/me"],
};