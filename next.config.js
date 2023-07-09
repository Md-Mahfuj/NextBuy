/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_URL:"http://localhost:3000/",
        DB_URI:"mongodb://0.0.0.0:27017/buynow",
        NEXTAUTH_SECRET: "codingwefd"
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
    experimental: {
        esmExternals: "loose",
    },
      
}

module.exports = nextConfig
