import passport from 'passport'
const GoogleStrategy = require('passport-google-oauth20').Strategy
import { Strategy as JWTStrategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import env from '../utils/validateEnv'

passport.use(new GoogleStrategy({
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_SECRET_KEY,
    callbackURL: 'https://localhost/auth/google/redirect',
}, (accessToken: string, refreshToken: string, profile: any, done: any) => {
    // passport callback function
    // save to db
}))

type JWTToken = { 
    user: {
        id: number,
        name: string,
        email: string,
        password: string,
        role: string
    }
}
passport.use(new JWTStrategy({
    secretOrKey: env.JWT_SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}, async(token: JWTToken, done: VerifiedCallback) => {
    try {
        return done(null, token.user)
    } catch (error) {
        done(error)
    }
}))