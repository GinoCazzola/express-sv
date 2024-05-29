import User from "../../models/User.js";

export const createUser = async (req, res) => {
    const { body } = req;
    try {
        const user = await User.create(body);
        res.json({
            ok: true,
            user,
            msg: "Usuario creado correctamente."
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ocurrió un error en el servidor."
        });
    }
};
