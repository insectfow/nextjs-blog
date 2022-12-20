export default function handler(req, res) {
  console.log(req.url);
  if (req.method === 'Get') {
    
  } else {
    res.status(200).json({ text: 'Hello' });
  }
}