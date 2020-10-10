import React from 'react';
import { View, Image } from 'react-native';
import RootStyle from '../styles/Root.style';

const AvatarDot = ({image, status, size = 'medium', hasStories, imageOptions, dotOptions}) => {
    const statusMapping = {
        active: 'rgb(66, 183, 42)',
        deactive: '#ccc'
    }
    const sizeMapping = {
        small: {
            height: 38,
            width: 38,
            position: 'relative',
            top: 5,
        },
        medium: RootStyle.normalAvatar,
        large: {
            height: 56,
            width: 56,
            position: 'relative',
            top: 5,
            borderRadius: 56
        }
    }
    return (
        <View style={{position: 'relative'}}>
            <Image style={[RootStyle.avatar, RootStyle.circleRadius, imageOptions, sizeMapping[size], hasStories ? {borderColor: 'rgb(0, 153, 255)', borderWidth: 3} : {}]} source={image} />
            <View
                style={[
                    RootStyle.avatarDot,
                    dotOptions,
                    {
                        backgroundColor: statusMapping[status],
                        borderColor: '#fff',
                        borderWidth: 1,
                    }
                ]}
            />
        </View>
    )
}

export default AvatarDot;