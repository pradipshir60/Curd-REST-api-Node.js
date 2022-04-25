/*const auth = async(request, response, next) => {

    try {

        const firstName = request.query.firstname;

        if (firstName !== "adam") {

            return response.send({

                status: 404,

                message: "User not found !",

            });

        }

        return next(); // Continue to requested endpoint

    } catch (error) {}

};



module.exports = auth;*/