import { loadNaver } from '../../../lib/load-naver'

export default async function handler(req, res) {

  const news = await loadNaver('news');

  res.status(200).json(news);
}