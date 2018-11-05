import React, { PureComponent } from 'react';
import { Modal, TouchableHighlight, View, Text, ScrollView } from "react-native";
import { mainBackgroundColor, lightMainBackgroundColor, screenHeight, screenWidth } from "./../../assets/css/general";
import { VictoryChart, VictoryTheme, VictoryGroup, VictoryPolarAxis, VictoryLabel, VictoryArea } from "victory-native";
import LinearGradient from "react-native-linear-gradient";
import ItemDetail from "./ItemDetail";

class DetailModal extends PureComponent {
    constructor(props) {
        super(props);
        this.settingState();
    }

    settingState(){
        this.state = {modalVisible: this.props.modalVisible};
    }

    quantityText = quantity => {
        if (quantity >= 20) {
            return "20+";
        } else {
            return quantity;
        }
    };

    yearsToMonths = time => {
        if (time < 1) {
            return Math.floor(time * 12) + " months";
        } else {
            if (time >= 5) {
                return time + "+ years";
            } else {
                return time + " years";
            }
        }
    };

    render() {

        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                    console.log("modal has been close...");
                }}
            >
                <TouchableHighlight
                    style={{
                        width: 150,
                        height: 30,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: mainBackgroundColor,
                        borderRadius: 10,
                        alignSelf: "center",
                        marginTop: 5
                    }}
                    onPress={() => {
                        this.setState({modalVisible: !this.state.modalVisible});
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            alignSelf: "center",
                            fontFamily: "CocoGothic"
                        }}
                    >
                        Close
              </Text>
                </TouchableHighlight>
            </Modal>

        );



        // return (
        //     <Modal
        //         animationType="slide"
        //         transparent={false}
        //         visible={this.props.modalVisible}
        //         onRequestClose={() => {
        //             console.log("modal has been close...");
        //         }}
        //     >
        //         <View
        //             style={{
        //                 width: screenWidth,
        //                 height: screenHeight,
        //                 backgroundColor: lightMainBackgroundColor,
        //                 flex: 1
        //             }}
        //         >
        //             <View
        //                 style={{
        //                     width: screenWidth,
        //                     height: 40,
        //                     backgroundColor: this.props.primaryColor,
        //                     justifyContent: "center",
        //                     alignItems: "center"
        //                 }}
        //             >
        //                 <Text
        //                     style={{
        //                         alignItems: "center",
        //                         alignSelf: "center",
        //                         fontFamily: "CocoGothic-Bold",
        //                         fontSize: 16,
        //                         color: "white"
        //                     }}
        //                 >
        //                     {this.props.name}
        //                 </Text>
        //             </View>
        //             <LinearGradient
        //                 colors={["#ffffff", mainBackgroundColor]}
        //                 style={{
        //                     width: screenWidth,
        //                     marginLeft: 0,
        //                     backgroundColor: "white"
        //                 }}
        //             >
        //                 <VictoryChart
        //                     polar
        //                     theme={VictoryTheme.material}
        //                     domain={{ y: [0, 1] }}
        //                 >
        //                     <VictoryGroup
        //                         colorScale={[
        //                             lightMainBackgroundColor,
        //                             this.props.primaryColor
        //                         ]}
        //                         style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        //                     >
        //                         {this.props.data.map((data, i) => {
        //                             return <VictoryArea key={i} data={data} />;
        //                         })}
        //                     </VictoryGroup>
        //                     {Object.keys(this.props.maxima).map((key, i) => {
        //                         return (
        //                             <VictoryPolarAxis
        //                                 key={i}
        //                                 dependentAxis
        //                                 style={{
        //                                     axisLabel: { padding: 10 },
        //                                     axis: { stroke: "none" },
        //                                     grid: {
        //                                         stroke: "grey",
        //                                         strokeWidth: 0.25,
        //                                         opacity: 0.5
        //                                     }
        //                                 }}
        //                                 tickLabelComponent={
        //                                     <VictoryLabel labelPlacement="vertical" />
        //                                 }
        //                                 labelPlacement="perpendicular"
        //                                 axisValue={i + 1}
        //                                 label={key}
        //                                 tickFormat={t => Math.ceil(t * this.props.maxima[key])}
        //                                 tickValues={[0.25, 0.5, 0.75]}
        //                             />
        //                         );
        //                     })}
        //                     <VictoryPolarAxis
        //                         labelPlacement="parallel"
        //                         tickFormat={() => ""}
        //                         style={{
        //                             axis: { stroke: "none" },
        //                             grid: { stroke: "grey", opacity: 0.5 }
        //                         }}
        //                     />
        //                 </VictoryChart>
        //             </LinearGradient>
        //             <View
        //                 style={{
        //                     marginTop: -20,
        //                     flexDirection: "column"
        //                 }}
        //             >
        //                 <ScrollView>
        //                     <ItemDetail
        //                         name="Projects"
        //                         value={this.quantityText(this.props.projects.quantity)}
        //                         icon={require("./../../assets/img/icons/projects.png")}
        //                         arrow={true}
        //                     />
        //                     <ItemDetail
        //                         name="Time"
        //                         value={this.yearsToMonths(
        //                             parseFloat(this.props.projects.time)
        //                         )}
        //                         icon={require("./../../assets/img/icons/time.png")}
        //                         arrow={false}
        //                     />
        //                     <ItemDetail
        //                         name="Feeling"
        //                         value={this.percentajeText(this.props.projects.feeling)}
        //                         icon={require("./../../assets/img/icons/feeling.png")}
        //                         arrow={false}
        //                     />
        //                 </ScrollView>
        //             </View>

        //             <TouchableHighlight
        //                 style={{
        //                     width: 150,
        //                     height: 30,
        //                     justifyContent: "center",
        //                     alignItems: "center",
        //                     backgroundColor: mainBackgroundColor,
        //                     borderRadius: 10,
        //                     alignSelf: "center",
        //                     marginTop: 5
        //                 }}
        //                 onPress={() => {
        //                     this.setModalVisible(!this.props.modalVisible);
        //                 }}
        //             >
        //                 <Text
        //                     style={{
        //                         color: "white",
        //                         alignSelf: "center",
        //                         fontFamily: "CocoGothic"
        //                     }}
        //                 >
        //                     Close
        //       </Text>
        //             </TouchableHighlight>
        //         </View>
        //     </Modal>
        // );
    }

}

export default DetailModal;