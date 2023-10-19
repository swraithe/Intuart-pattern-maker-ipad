import { useState } from "react";

export default function useData() {
    const [artBoards, setArtBoards] = useState([]);
    const [clipboards, setClipboards] = useState([]);
    const [patterns, setPatterns] = useState([]);
    const [arts, setArts] = useState([]);

    return {
        artBoards,
        setArtBoards,

        clipboards,
        setClipboards,

        patterns,
        setPatterns,
        
        arts,
        setArts,
    }
}