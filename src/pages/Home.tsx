import { Button, Show } from "@chakra-ui/react";
import styles from "../components/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.HomeContainer}>
      <section className={styles.CompanyIntro}>
        <Show below="lg">
          <div className={styles.IntroContainer}>
            <div className={styles.Card}>
              <div className={styles.CardHead}>
                <div className={styles.Title}>
                  Bester Barber shop der Stadt
                  <div className={styles.SubTitle}>
                    Komm vorbei und überzeuge dich selbst
                  </div>
                </div>
              </div>
              <Button> Hier {"->"} </Button>
            </div>
          </div>
        </Show>
        <Show above="lg"></Show>
      </section>
      <section className={styles.Test}></section>
    </div>
  );
}
