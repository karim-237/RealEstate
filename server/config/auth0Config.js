import {auth} from 'express-oauth2-jwt-bearer'



const jwtCheck = auth({
    audience: "http://localhost:8001",
    issuerBaseURL: "https://dev-ktaomqpf0advp551.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck 