import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Container from "@/components/Container";
import Loading from "@/components/Loading";
import styles from "@/styles/Character.module.css";

const CharacterPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };

    fetchCharacter();
  }, [id]);

  return (
    <Container>
      <Loading loading={loading} />
      {!loading && character && (
        <div className={styles.card}>
          <img src={character.image} alt={character.name} className={styles.image} />
          <h1 className={styles.name}>{character.name}</h1>
          <ul className={styles.info}>
            <li>Status: {character.status}</li>
            <li>Espécie: {character.species}</li>
            <li>Gênero: {character.gender}</li>
            <li>Origem: {character.origin.name}</li>
            <li>Localização: {character.location.name}</li>
            <li>Episódios: {character.episode.length}</li>
          </ul>
          <Link href="/" className={styles.back}>← Voltar</Link>
        </div>
      )}
    </Container>
  );
};

export default CharacterPage;