import React from 'react';
import { View, StyleSheet } from 'react-native';

const IndicatorComponent = ({dots, currentDot, activeDotColor, dotColor, customeStyle}) => {
    const loadDots = (dots, currentDot) => {
        let renderDots = [];
        for (let i = 0; i < dots; i++) {
            renderDots = [
                ...renderDots,
                <View
                    key={i}
                    style={[
                        style.dot,
                        currentDot == i ? (
                            activeDotColor ? {
                                backgroundColor: activeDotColor
                            } : style.activeDot
                        ) : dotColor ? {backgroundColor: dotColor} : style.dot
                    ]}>
                </View>
            ]
        }
        return (
            <View style={[style.dotSlider, customeStyle]}>
                {renderDots}
            </View>
        );
    }
    return (
        <View style={style.container}>
            {loadDots(dots, currentDot)}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    dotSlider: {
        flexDirection: 'row'
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: '#eee',
        margin: 10,
        borderRadius: 50
    },
    activeDot: {
        backgroundColor: 'rgb(114, 169, 252)',
    }
});

export default IndicatorComponent;