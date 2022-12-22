import { SearchNaver } from '../../../lib/load-naver'

export default async function handler(req, res) {

  const news = await SearchNaver(req.query.type, req.query.query);

  res.status(200).json(news);
}