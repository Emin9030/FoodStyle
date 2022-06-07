import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export const useKeyboardShown = () => {
    const [isKeyboardShow, setIsKeyboardShow] = useState<boolean>(false);
    const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

    const onKeyboardDidShow = (e: any) => {
        setIsKeyboardShow(true);
        setKeyboardHeight(e.endCoordinates.height);
    };

    const onKeyboardDidHide = (e: any) => {
        setIsKeyboardShow(false);
        setKeyboardHeight(e.endCoordinates.height);
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => onKeyboardDidShow(e));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', (e) => onKeyboardDidHide(e));

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return { isKeyboardShow, keyboardHeight };
};