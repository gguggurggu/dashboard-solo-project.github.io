export function renderSpotify() {
  const token =
    "BQDC7sinHEXTWohNQDV2F7lf9ivYK1nYCEfr69k7r6r8-Y5CKMO0VGGduImfTGD-4y8ZLyBSTXhwjFMB9VEKv5Kvlq3y9XTTyqzxB29UTSDuSkVFe7pvhFOnrY1EE1Dm0Bk3aXeQfG733nccL6G5M86yFuaHiM6PjkBzSGMlwICDrxazmdZIR8R6-pRrRe-phWe0-DMI4O_ZOY727oLMUtq2E9xkgpCaN9WAAuJrnuWCGUVLbIP35bDzQBJLnDy7FQoYXGsN3AYvAxPEr2gNNr7NyWek8nVR8ZSv";
  async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body: JSON.stringify(body),
    });
    return await res.json();
  }

  const tracksUri = [];

  async function createPlaylist(tracksUri) {
    const { id: user_id } = await fetchWebApi("v1/me", "GET");

    const playlist = await fetchWebApi(
      `v1/users/${user_id}/playlists`,
      "POST",
      {
        name: "My top tracks playlist",
        description:
          "Playlist created by the tutorial on developer.spotify.com",
        public: false,
      }
    );

    await fetchWebApi(
      `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(",")}`,
      "POST"
    );

    return playlist;
  }
}
