import "./App.css";

import { search, getArtist, getArtistReleases } from "./fetch";
import { useEffect, useState } from "react";

import { BandMembers } from "./components/BandMembers";
import { Releases } from "./components/Releases";
import { SearchForm } from "./components/SearchForm";

const App = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [artistId, setArtistId] = useState();
  const [artistName, setArtistName] = useState("");
  const [artistProfile, setArtistProfile] = useState("");
  const [artistImage, setArtistImage] = useState();
  const [loading, setLoading] = useState(false);
  const [bandMembers, setBandMembers] = useState();
  const [releases, setReleases] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      setLoading(true);
      try {
        const { id, image } = await search(searchQuery);
        setArtistId(id);
        setArtistImage(image);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { realname, profile, members, images } = await getArtist(
          artistId
        );
        setArtistName(realname);
        setArtistProfile(profile);
        setBandMembers(members);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }

      try {
        const { releases } = await getArtistReleases(artistId);
        setReleases(releases);
      } catch (error) {
        console.log(error);
      }
    };
    if (artistId) {
      fetchData();
    }
  }, [artistId]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Discogs Artist Search</h1>

        <SearchForm
          handleSubmit={handleSubmit}
          loading={loading}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
      </header>

      {artistImage && (
        <div>
          <h2>{artistName}</h2>
          <p>{artistProfile}</p>
          <img src={artistImage}></img>
          {bandMembers && <BandMembers bandMembers={bandMembers} />}
          {<Releases releases={releases} />}
        </div>
      )}
    </div>
  );
};

export default App;
