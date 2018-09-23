import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class ProjectsViewer extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>
                    Projects viewer!
                </Text>
            </View>
        );
    }

}

export default ProjectsViewer;