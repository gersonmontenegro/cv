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

    getMaxima(data) {
        const groupedData = Object.keys(data[0]).reduce((memo, key) => {
            memo[key] = data.map(d => d[key]);
            return memo;
        }, {});
        return Object.keys(groupedData).reduce((memo, key) => {
            memo[key] = Math.max(...groupedData[key]);
            return memo;
        }, {});
    }

    processData(data) {
        const maxByGroup = this.getMaxima(data);
        const makeDataArray = d => {
            return Object.keys(d).map(key => {
                return { x: key, y: d[key] / maxByGroup[key] };
            });
        };
        return data.map(datum => makeDataArray(datum));
    }

}

export default HelperProvider;