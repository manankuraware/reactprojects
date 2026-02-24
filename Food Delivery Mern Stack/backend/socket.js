import User from "./models/user.model.js"

export const socketHandler = (io) => {
    io.on('connection', (socket) => {
        // on to get event eg here getting user identity event from frontend
        socket.on('identity', async ({ userId }) => {
            try {
                const user = await User.findByIdAndUpdate(userId, {
                    socketId: socket.id
                }, { new: true })
            } catch (error) {
                console.log(error)
            }
        })
    })
}