export const search = (query = "the midnight", type = "artist") => {
  console.log({ query });
  return fetch(
    `https://api.discogs.com/database/search?type=artist&q=${query}
    &key=DDeEBXUQSleBwRtHyRsI&secret=TshvmvmxaRWqqxHroksunqGXvvepIIrd`,
    {
      method: "GET",
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "JuliaDiscogsBrowser/0.1 +http://localhost:3002/",
    }
  )
    .catch((err) => console.error(err))
    .then((res, a) => res.json())
    .then((data) => {
      const { id, cover_image: image } = data.results[0];
      return { id, image };
    });
};

export const getArtist = (artistId) =>
  fetch(`https://api.discogs.com/artists/${artistId}`, {
    method: "GET",
    Accept: "application/json",
    "Content-Type": "application/json",
    "User-Agent": "JuliaDiscogsBrowser/0.1 +http://localhost:3002/",
  })
    .catch((err) => console.error(err))
    .then((res) => res.json())
    .then((results) => results);

export const getArtistReleases = (artistId) =>
  fetch(`https://api.discogs.com//artists/${artistId}/releases`, {
    method: "GET",
    Accept: "application/json",
    "Content-Type": "application/json",
  })
    .catch((err) => console.error(err))
    .then((res) => res.json())
    .then((results) => results);
