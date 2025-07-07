import { Request, Response } from "express";
import User from "../models/user";

export const getRoot = (res: Response) => {
  res.send("OK")
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    if (!checkIdValid(id)) {
      res.status(400).send("Invalid ID")
      return
    }
    const user = await User.findById(id)
    if (user) {
      user.age > 21 ? res.json(user) : res.status(403).send("User is too young")
    } else {
      res.status(404).send("User not found")
    }
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
};

export const makeUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
};

const checkIdValid = (id: string) => {
  return typeof id === 'string' && id.length === 24 && /^[0-9a-fA-F]+$/.test(id)
}
