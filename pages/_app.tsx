import "../styles/globals.css";

type AppProps = {
  Component: React.ElementType;
  pageProps: Record<string, unknown>; // Specify a more specific type here
};

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
