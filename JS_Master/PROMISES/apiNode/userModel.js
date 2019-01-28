// The user objecet will make mock API calls.
const user = {
    id: 1,
    username: 'Juanito',
    age: 25,
    profession: 'developer'
}

const error = new TypeError('Something broke in the db');

class User {

    static findUser( postBody, callback) {
        const doesExist = Math.random() > 0.5 ? true: false;
        const shouldThrowError = Math.random() > 0.8 ?true:false;
        setTimeout(
            () => {
                const data = doesExist ? user: null;
                const err = shouldThrowError ? error : null;
                callback(err, data);
            },
            2000
        );
    }

    addUser(data, callback) {
        return this.save(data, callback);
    }

    save(obj, callback) {
        const shouldThrowError = Math.random > 0.8 ? true: false;
        setTimeout(
            () => {
                const data = obj;
                const err = shouldThrowError ? error : null;
                callback(err, data);
            },
            2000
        );
    }

    static findUserPromise(postBody) {
        return new Promise(
            (resolve, reject) => {
                const doesExist = Math.random > 0.5 ? true:false;
                const shouldThrowError = Math.random() > 0.8 ? true: false;
                setTimeout(
                    () => {
                        const data = doesExist ? user: null;
                        const err = shouldThrowError ? error: null;
                        if (err) {
                            return reject(err);
                        }
                        else {
                            return resolve(data);
                        }
                    },
                    2000
                );
            }
        );
    }

    savePromise(obj) {
        return new Promise(
            (resolve, reject) => {
                const shouldThrowError = Math.random > 08 ? true: false;
                setTimeout(
                    () => {
                        const data = obj;
                        const err = shouldThrowError ? error: null;
                        if (err) {
                            return reject(err);
                        }
                        else {
                            return resolve(data);
                        };
                    },
                    2000
                );
            }
        );
    }

    updatePromise(obj) {
        return new Promise(
            (resolve, reject) => {
                const shouldThrowError = Math.random > 0.8 ? true: false;
                setTimeout(
                    () => {
                        const data = obj;
                        const err = shouldThrowError ? error: null;
                        if (err) {
                            return reject(err);
                        }
                        else{
                            return resolve(data)
                        }
                    },
                    2000
                );
            }
        );
    }


};

module.exports = User;

