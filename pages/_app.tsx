import "../styles/globals.css"; // Adjust the path based on your file structure

function MyApp({ Component, pageProps }: { Component: React.ElementType; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;
