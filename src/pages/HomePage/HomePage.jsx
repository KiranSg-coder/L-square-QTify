import React from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";
import {fetchFilters} from "../../api/api";
import FaqSection from "../../components/FaqSection/FaqSection";

function HomePage() {
   const { data } = useOutletContext();
   const { topAlbums, newAlbums, songs} = data;
   return (
    <>
        <Hero/>
        <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album" />
            <Section title="New Albums" data={newAlbums} type="album" />
            <hr style={{ backgroundColor: "#34C94B", height: "2px", border: "none" }} />
            <Section title="Songs" data={songs} filterSource={fetchFilters} type="song" />
            <hr style={{ backgroundColor: "#34C94B", height: "2px", border: "none" }} />
        </div>
       <FaqSection/>

    </>
   )
}

export default HomePage;