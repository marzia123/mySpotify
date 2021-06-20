import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      res.status(200).json("OK");
      break;
    default:
      res.status(404).json("BAD METHOD")
      break;
  }
}
