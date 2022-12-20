const { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } = process.env;

export default function handler(req, res) {
  const clientId = NAVER_CLIENT_ID;
  const secretKey = NAVER_CLIENT_SECRET;
  const apiUrl = "https://openapi.naver.com/v1/search";
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log(data));
  console.log(req, res);
  //   res.status(200).json({ text: "Hello" });
}
