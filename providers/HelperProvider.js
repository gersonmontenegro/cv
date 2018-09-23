import { PureComponent } from 'react';
import { Animated } from 'react-native';

class HelperProvider extends PureComponent {
    static instance = null;

    static createInstance() {
        var object = new HelperProvider();
        return object;
    }

    static getInstance() {
        if (!HelperProvider.instance) {
            HelperProvider.instance = HelperProvider.createInstance();
        }
        return HelperProvider.instance;
    }

    animateVariable(variable, value, duration, delay = 0) {
        return Animated.timing(
            variable,
            {
                toValue: value,
                duration: duration,
                delay: delay
            }
        );
    }

}

export default HelperProvider;