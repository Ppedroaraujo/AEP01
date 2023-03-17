import {Request, Response} from 'express'

class UserController {
    public async findUsers(req: Request, res: Response) {
        return res.json('Pedro Araujo')
    }

    public async createUser(req: Request, res: Response) {
        return res.json("Usuário buscado do banco: Pedro Araujo")
    }
}

export default new UserController()