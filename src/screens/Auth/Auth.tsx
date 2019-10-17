import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen'
import PasswordResetScreen from './PasswordResetScreen'
import RegisterScreen from './RegisterScreen';

const Auth = createStackNavigator({
    Login: {
        screen: LoginScreen,
        path: 'login'
    },
    PasswordReset: {
        screen: PasswordResetScreen,
        path: 'reset'
    },
    Register: {
        screen: RegisterScreen,
        path: 'register'
    }
}, {
    initialRouteName: 'Login',
    headerMode: 'none',
});
Auth.path = 'auth';

export default Auth;