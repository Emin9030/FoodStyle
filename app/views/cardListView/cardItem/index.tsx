import React, { FC, memo, useEffect, useMemo } from 'react';
import { Alert, Image, Pressable, Text, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withDelay, withTiming } from 'react-native-reanimated';
import { IMAGES } from '../../../config';
import { getStyle } from './styles';

interface Props {
	index?: number;
	data: { id: string; name: string; };
	isModalVisible?: boolean;
	onPressItem: () => void;
	onPressDeleteCard?: (id: string) => void;
	onPressShareCard?: (id: string) => void;
	onPressDuplicateCard?: (id: string) => void;
}

export const CardItem: FC<Props> = memo(({ index = 1, isModalVisible, onPressItem, data, onPressDuplicateCard, onPressShareCard, onPressDeleteCard }: Props) => {
	const styles = useMemo(() => getStyle(), []);
	const opacity: { value: number; } = useSharedValue(0);
	const containerStyle = useAnimatedStyle(() => {
		return { opacity: opacity.value };
	});

	useEffect(() => {
		opacity.value = withDelay(index * 60, withTiming(1, { duration: 600 }));
	}, [index]);

	const onPressToShare = async () => {
		onPressShareCard && onPressShareCard(data.id);
	};

	const onPressToDuplicate = (): void => {
		onPressDuplicateCard && onPressDuplicateCard(data.id);
	};

	const onPressDeleteCardById = (): void => {
		Alert.alert('Confirm delete', `This will delete the ${data.name} and all its settings`, [
			{ text: 'Cancel' },
			{
				text: 'Delete',
				onPress: () => onPressDeleteCard && onPressDeleteCard(data.id)
			},
		]);
	};

	const menuItems = [
		{ text: 'Share', icon: IMAGES.share, onPress: onPressToShare },
		{ text: 'Duplicate', icon: IMAGES.duplicate, onPress: onPressToDuplicate },
		{ text: 'Delete', icon: IMAGES.delete, onPress: onPressDeleteCardById }
	];

	return (
		<Animated.View style={containerStyle}>
			<View style={styles.container}>
				<Text style={styles.text}>{data.name}</Text>
				<Pressable disabled={isModalVisible} onPress={onPressItem} style={(({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }])}>
					<Image source={!isModalVisible ? IMAGES.options : IMAGES.close} style={styles.logo} />
				</Pressable>
			</View>
			{isModalVisible && menuItems.map(({ text, icon, onPress }) => (
				<Pressable {...{ onPress }} style={(({ pressed }) => [styles.menuItemWrapper, { opacity: pressed ? 0.7 : 1 }])}>
					<Text style={styles.menuTitle}>{text}</Text>
					<Image source={icon} style={styles.icon} />
				</Pressable>
			))}
		</Animated.View>
	);
});
