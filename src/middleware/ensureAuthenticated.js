const verify = require("jsonwebtoken/verify")

function ensureAuthenticated(request, response, next) {
    const token = request.headers.authorization

    if(!token) {
        return response.status(401).json({
            errorCode: "token.invalid"
        })
    }

    const [, jwtToken] = token.split(" ")

    try {
        const { sub } = verify(jwtToken, process.env.JWT_SECRET)

        request.user_id = sub;

        return next()
    } catch (error) {
        return response.status(401).json({
            errorCode: "token.expire"
        })
    }
}

module.exports = ensureAuthenticated