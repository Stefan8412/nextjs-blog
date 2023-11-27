export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}

//Try accessing it at http://localhost:3000/api/hello. You should see {"text":"Hello"}. Note that:

/* import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
} */
