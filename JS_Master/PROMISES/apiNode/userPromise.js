exports.createOrAddUserPromise = (req, res, next) => {
    User.findUserPromise(req.body).then(
        (user) => {
            if (user) {
                const existingUser = new User(user);
                return newUser.updatePromise(req.body);
            }
            else {
                const newUser = new User();
                return newUser.savePromise(req.body);
            } 
        }
    ).then(
        (data) => res.send(data)
    ).catch(
        (e) => next(e)
    );
};

