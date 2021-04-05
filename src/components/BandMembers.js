import { useState } from "react";
import { getArtist } from "../fetch";

export const BandMembers = ({ bandMembers }) => {
  const [artistProfile, setArtistProfile] = useState("");

  const getMemberInfo = (id) => {
    const fetchData = async () => {
      try {
        const { profile } = await getArtist(id);
        setArtistProfile(profile);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  return (
    <div>
      <ul>
        {bandMembers.map(({ id, name }) => {
          return (
            <li key={id} onClick={() => getMemberInfo(id)}>
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
      <p>{artistProfile}</p>
    </div>
  );
};
