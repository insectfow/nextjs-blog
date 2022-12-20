const { REACT_APP_NAVER_CLIENT_ID, REACT_APP_NAVER_CLIENT_SECRET } = process.env;

// 네이버 뉴스 검색

//  /api/naver?query={news}&searchText={'검색어'}&display={'불러올 뉴스 수'}&start={'불러올 시작 위치'}
//  ex) /api/naver?query=news&searchText=코로나&display=10&start=1

export default async function handler(req, res) {
  const query = req.query;
  const clientId = REACT_APP_NAVER_CLIENT_ID;
  const secretKey = REACT_APP_NAVER_CLIENT_SECRET;
  const encodeText = encodeURI(query.searchText);
  const apiUrl = `https://openapi.naver.com/v1/search/${query.query}.json?query=${encodeText}&display=10`;
  const fetchs = await fetch(apiUrl, {
    method: 'GET',
    headers: {'X-Naver-Client-Id':clientId, 'X-Naver-Client-Secret': secretKey}
  }).then((res) => {
    return res.json();
  }).catch((error) => {
    return 'naver 검색 api 문제 발생!' + error.message;
  })
  res.status(200).json({ text: fetchs });
}
