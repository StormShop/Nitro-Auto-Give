import { randomInt } from "crypto"
import { Router, Request, Response } from "express"

const router = Router()

router.post('/purchase-nitro', async (req: Request, res: Response) => {
    const {token, type, id} = req.body

    return res.json("Nitro куплен")
})

router.post('/generate-id', async (req: Request, res: Response) => {
    const {api} = req.body

    return res.json(randomInt(1, 1000).toString())
})

router.post('/generate-code', async (req: Request, res: Response) => {
    const {id, type} = req.body

    return res.json("Клиентский кирпич кода")
})

export default router