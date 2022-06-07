import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, Text, Image, Modal, Pressable, TextInput, View, Share } from 'react-native';
import { GetAllCardsDocument, useAddNewCardMutation, useDeleteCardMutation, useDuplicateCardMutation, useShareCardMutation, useSignInMutation } from '../../generated';
import { useKeyboardShown } from '../../services/useKeyboardShown';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import { COLORS, IMAGES } from '../../config';
import { useQuery } from '@apollo/client';
import { CardItem } from './cardItem';
import { getStyle } from './styles';

interface Props {
	navigation: StackNavigationProp<any>;
}

export const CardListView: FC<Props> = memo(({ }) => {
	const styles = useMemo(() => getStyle(), []);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [newCardName, setNewCardName] = useState<string>('');
	const [selectedItem, setSelectedItem] = useState<any>({ name: '' });
	const [getUserSignIn] = useSignInMutation();
	const [sharedCode] = useShareCardMutation();
	const [deleteCard] = useDeleteCardMutation({ refetchQueries: [{ query: GetAllCardsDocument }] });
	const [duplicateCard] = useDuplicateCardMutation({ refetchQueries: [{ query: GetAllCardsDocument }] });
	const { loading, error, data } = useQuery(GetAllCardsDocument, { pollInterval: 100 });
	const [addNewCard] = useAddNewCardMutation({ refetchQueries: [{ query: GetAllCardsDocument }] });
	const { isKeyboardShow } = useKeyboardShown();
	const flatListRef = useRef<FlatList>(null);

	const onPressUserAuthorization = async ({ email, password }: { email: string; password: string; }): Promise<void> => {
		await getUserSignIn({ variables: { email, password } });
	};

	const onPressItem = (id?: string) => {
		setIsModalVisible(true);
		const selectedItem = data?.cards?.find((item: { id: string; }) => {
			return id && item.id == id;
		});
		selectedItem && setSelectedItem(selectedItem);
	};

	const onPressShareCard = async (id: string) => {
		const result = await sharedCode({ variables: { id } });
		await Share.share({ message: `${selectedItem.name}`, url: `https://cards.foodstyles.com/${result.data?.shareCard}`, });
	};

	const onScrollTo = () => {
		flatListRef?.current?.scrollToIndex({ animated: true, index: data?.cards?.length - 1 });
	};

	const onPressAddNewCard = async () => {
		setNewCardName('');
		await addNewCard({ variables: { name: newCardName } });
		onScrollTo();
	};

	const onPressDuplicateCard = async (id: string) => {
		await duplicateCard({ variables: { id } });
		setIsModalVisible(false);
	};

	const onPressDeleteCard = async (id: string) => {
		await deleteCard({ variables: { id } });
		setIsModalVisible(false);
	};

	useEffect(() => {
		// Temporarily 
		onPressUserAuthorization({ email: 'john@doe.com', password: 'p4SSW0rd' });
	}, []);

	useEffect(() => {
		onScrollTo();
	}, [isKeyboardShow]);

	if (loading) return <ActivityIndicator />;
	if (error) return <></>;

	return (
		<LinearGradient colors={[COLORS.gradientStart, COLORS.gradientStop]} style={styles.container}>
			<Modal onRequestClose={() => setIsModalVisible(false)} animationType='fade' visible={isModalVisible}>
				<Pressable onPress={() => setIsModalVisible(false)} style={styles.absolute}>
					<BlurView
						style={styles.absolute}
						blurType="light"
						blurAmount={50}
						reducedTransparencyFallbackColor="white"
					/>
				</Pressable>
				<View style={styles.modalContentWrapper}>
					<CardItem data={{
						id: selectedItem?.id,
						name: selectedItem?.newCardName
					}} {...{ onPressItem, isModalVisible, onPressDeleteCard, onPressDuplicateCard, onPressShareCard }} />
				</View>
			</Modal>
			<View style={styles.header}>
				<Image source={IMAGES.logo} style={styles.logo} />
			</View>
			<FlatList
				ref={flatListRef}
				showsVerticalScrollIndicator={false}
				data={data.cards}
				contentContainerStyle={{ paddingBottom: 20 }}
				style={styles.list}
				ListEmptyComponent={<Text style={styles.emptyText}>List is empty</Text>}
				keyExtractor={item => item.id}
				renderItem={(({ item, index }) => (
					<View style={styles.cardWrapper}>
						<CardItem {...{ data: item, index }} onPressItem={() => onPressItem(item.id)} />
					</View>
				))} />
			<View style={styles.actionWrapper}>
				<View style={styles.actionButtonWrapper}>
					<Pressable onPress={onPressAddNewCard} style={(({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }])}>
						<Image source={IMAGES.add} style={styles.addIcon} />
					</Pressable>
					<TextInput value={newCardName} onChangeText={(text) => setNewCardName(text)} placeholder='Your text' style={styles.input} />
				</View>
			</View>
		</LinearGradient>
	);
});
