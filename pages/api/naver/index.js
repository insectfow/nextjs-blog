import { loadNaverNews } from '../../../lib/load-naver'

export default async function handler(req, res) {

  const news = await loadNaverNews();

  res.status(200).json(news);
}