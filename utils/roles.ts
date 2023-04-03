import { Request, Response, NextFunction} from 'express'

export const checkIsinRole = (...roles: []) => (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.send('Please login to proceed')
    }

    if(!req) 
        return res.send('Req is not valid')

    const hasRole = roles.find((role) => req?.user?.role === role)

    if (!hasRole) {
        return res.send({ message: 'You are unauthorized for this action'})
    }
}

