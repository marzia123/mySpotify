import spotifyAPI from "../../backend/spotifyAPI";

export default async function validateAPI(req, res) {
  let spotify = spotifyAPI(req);

  await spotify.getMe().then((data) => {
    let resBody = data.body;
    res.status(200).json({
      'id': resBody.id,
      'name': resBody.display_name,
      'image': resBody.images.length === 0 ? '' : resBody.images[0].url
    });
  }, () => {
    res.status(401).json("Invalid token");
  });
}
