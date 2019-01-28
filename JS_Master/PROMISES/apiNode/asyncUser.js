// npm install --save async
//const async require('async');
exports.createOrAddUserAsync = async (req, res, next) => {
    try {
        const user = await User.findUserPromise(req.body);
        if (user) {

            const existingUser = new User(user);
            const data = await existingUser.updatePromise(req.body);
            return res.send(data);
        }
        const newUser = User();
        const data = await newUser.savePromise(req.body);
        return res.send(data);
    }
    catch(e){
        return next(e);
    }
    
}