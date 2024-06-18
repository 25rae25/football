/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gwmbluhqzjsorxlkmsij.supabase.co",
        pathname: "/storage/v1/object/sign/**",
      },
    ],
  },
};
export default nextConfig;

// next.config.js
// 바뀐방식
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'example.com',
//         port: '', // 포트가 있다면 여기에 명시하세요.
//         pathname: '/**', // 경로 패턴을 지정합니다. '/**'는 모든 경로를 허용합니다.
//       },
//     ],
//   },
// };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "gwmbluhqzjsorxlkmsij.supabase.co",
//         pathname: "/storage/v1/object/sign/**",
//       },
//     ],
//   },
// };

// export default nextConfig;
