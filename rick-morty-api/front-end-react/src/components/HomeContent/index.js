import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

const HomeContent = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        setCharacters(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div className={styles.homeContent}>
      <div className={styles.listCharactersCard}>
        <div className={styles.title}>
          <h2>Personagens de Rick and Morty</h2>
        </div>

        {loading ? (
          <Loading loading={loading} />
        ) : (
          <div className={styles.characters}>
            {characters.map((character) => (
              <ul className={styles.listCharacters} key={character.id}>
                <div className={styles.characterImg}>
                  <img src={character.image} alt={character.name} />
                </div>
                <div className={styles.characterInfo}>
                  <h3>{character.name}</h3>
                  <li>Status: {character.status}</li>
                  <li>Espécie: {character.species}</li>
                  <li>Origem: {character.origin.name}</li>
                  <li>Localização: {character.location.name}</li>
                  <Link href={`/character/${character.id}`}>
                    Ver detalhes →
                  </Link>
                </div>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeContent;