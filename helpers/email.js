import nodemailer from 'nodemailer';

export const emailRegistro = async datos =>
{
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport(
    {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: 
        {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Informacion del email
    const info = await transport.sendMail(
        {
            from: '"UpTask - Administrador de Proyectos" <marcosjgodoyb@gmail.com>',
            to: email,
            subject: "UpTask - Compureba tu cuenta",
            text: "Comprueba tu cuenta de UpTask",
            html: `
                <p>Hola: ${nombre}, Comprueba tu cuenta en UpTask</p>

                <p>Tu cuenta ya está casi lista, solo debes comprobarla haciendo click en el siguiente enlace: <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprueba tu cuenta</a></p>

                <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
            `
        }
    )
}

export const emailOlvidePassword = async datos =>
{
    const { email, nombre, token } = datos;

    const transport = nodemailer.createTransport(
    {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: 
        {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Informacion del email
    const info = await transport.sendMail(
        {
            from: '"UpTask - Administrador de Proyectos" <marcosjgodoyb@gmail.com>',
            to: email,
            subject: "UpTask - Reestablece tu Contraseña",
            text: "Reestablece tu Contraseña",
            html: `
                <p>Hola: ${nombre}, has solicitado reestablecer tu contraseña</p>

                <p>Sigue el siguiente enlace para generar una nueva contraseña: <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Contraseña</a></p>

                <p>Si tu no solicitaste este correo, puedes ignorar este mensaje</p>
            `
        }
    )
}