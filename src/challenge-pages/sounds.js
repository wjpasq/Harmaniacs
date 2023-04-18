import useSound from "use-sound";
import { useState, useEffect } from "react"

export default function Sounds() {
    const [c1Play, {stop: c1Stop}] = useSound('../../public/assets/C1_harmonica.wav');
    const [c2Play, {stop: c2Stop}] = useSound('../../public/assets/C2_harmonica.mp3');
    const [c3Play, {stop: c3Stop}] = useSound('../../public/assets/C3_harmonica.mp3');
    const [c4Play, {stop: c4Stop}] = useSound('../../public/assets/C4_harmonica.mp3');
    const [e1Play, {stop: e1Stop}] = useSound('../../public/assets/E1_harmonica.mp3');
    const [e2Play, {stop: e2Stop}] = useSound('../../public/assets/E2_harmonica.mp3');
    const [e3Play, {stop: e3Stop}] = useSound('../../public/assets/E3_harmonica.mp3');
    const [g1Play, {stop: g1Stop}] = useSound('../../public/assets/G1_harmonica.mp3');
    const [g2Play, {stop: g2Stop}] = useSound('../../public/assets/G2_harmonica.mp3');
    const [g3Play, {stop: g3Stop}] = useSound('../../public/assets/G3_harmonica.mp3');



}