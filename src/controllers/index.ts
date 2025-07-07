import { Request, Response } from "express"
import User from "../models/user"

export const getRoot = (req: Request, res: Response) => {
  res.send("OK")
}

export const getUser = (req: Request, res: Response) => {
  try {
    const user = User.findById(req.params.id)
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
}
