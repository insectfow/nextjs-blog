// 네이버 검색 API
const { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } = process.env;

//  /api/naver?query={news}&searchText={'검색어'}&display={'불러올 뉴스 수'}&start={'불러올 시작 위치'}
//  ex) /api/naver?query=news&searchText=코로나&display=10&start=1


// 한글을 utf-8로 인코딩하는 함수
const encodeText = (text) => {
  return encodeURI(text);
}

// 네이버 검색 api 요청 함수
const fetchFunc = async (apiUrl) => {
  const naverFetch = await fetch(apiUrl, {
    method: 'GET',
    headers: {'X-Naver-Client-Id':NAVER_CLIENT_ID, 'X-Naver-Client-Secret': NAVER_CLIENT_SECRET}
  }).then((res) => {
    return res.json();
  }).catch((error) => {
    return 'naver 검색 api 문제 발생!' + error.message;
  })
  return naverFetch;
}

// 검색 타입 미입력 체크 함수
const errorFunc = (req) => {
  if (!req) {
    return '검색 타입 미입력 에러';
  }
}

export async function loadNaver(type) {
  errorFunc(type);

  const apiUrl = `https://openapi.naver.com/v1/search/${type}.json?query=${encodeText('경제')}&display=10`;
  return await fetchFunc(apiUrl);
}

export async function SearchNaver(type, data) {
  errorFunc(type);

  const apiUrl = `https://openapi.naver.com/v1/search/${type}.json?query=${encodeText(data)}&display=10`;
  return await fetchFunc(apiUrl);
}