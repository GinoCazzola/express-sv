import mongoose from "mongoose"

export const dbConection = async () => {
        try {
            const mongoDB = await mongoose.connect(
                  "mongodb+srv://blacklust:cgf8wbrRWfJ3h8TR@ecommerce.sy47euk.mongodb.net/express-server-1",
                  {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                  }
            );
            console.log ("Se conecto satisfactoriamente a la base de datos de: ", mongoDB.connections[0].name)

        } catch (eror) {
        console.error("Error al conectar la BD.")
        throw new Error(error)

        }
}