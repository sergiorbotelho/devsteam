import SaleCard from "@/components/cards/saleCard/saleCard";
import Container from "@/components/container/container";
import Navbar from "@/components/navbar/navbar";
import Subtitle from "@/components/tipography/subtitle/subtitle";
import Head from "next/head";
import styles from "@/styles/index.module.css";
import GameCard from "@/components/cards/gameCard/gameCard";
import { useState } from "react";
export default function Home() {
  const [cart, setCart] = useState([]);

  function handleAddProduct(item) {
    setCart([...cart, item]);
  }

  function handleRemoveProduct(pos) {
    setCart(cart.filter((obj, posObj) => posObj !== pos));
  }

  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta
          name="description"
          content="DevSteam: A sua loja online de games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard
                name="league-of-legends.jpg"
                discount="20%"
                fullPrice="99,90"
                discountPrice="79,90"
                onAdd={() =>
                  handleAddProduct({
                    name: "League of Legends",
                    fullPrice: 99.9,
                    image: "league-of-legends.jpg",
                  })
                }
              />
              <SaleCard
                name="dota-2.jpg"
                discount="30%"
                fullPrice="150,90"
                discountPrice="120,90"
                onAdd={() =>
                  handleAddProduct({
                    name: "Dota 2",
                    fullPrice: 150.9,
                    image: "dota-2.jpg",
                  })
                }
              />
              <SaleCard
                name="valorant.jpg"
                discount="40%"
                fullPrice="240,90"
                discountPrice="190,90"
                onAdd={() =>
                  handleAddProduct({
                    name: "Valorant",
                    fullPrice: 240.9,
                    image: "valorant.jpg",
                  })
                }
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard
                onAdd={() =>
                  handleAddProduct({
                    name: "Counter Strike",
                    fullPrice: 99.9,
                    image: "counter-strike.jpg",
                  })
                }
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
