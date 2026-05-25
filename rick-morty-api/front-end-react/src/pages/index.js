import Head from "next/head";
import Container from "@/components/Container";
import HomeContent from "@/components/HomeContent"; 
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty © 2025</title>
        <meta name="description" content="Consumo da API Rick and Morty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🛸</text></svg>" />
      </Head>
      <main>
        <Container>
          <HomeContent /> 
        </Container>
      </main>
      <Footer />
    </>
  );
}