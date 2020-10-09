import users from '../api/users';

const Auth = {
    getUserById(id) {
        return users.find(user => user.id == id);
    }
}

export default Auth;