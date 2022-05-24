export type TModal = {
    header?: string;
    isModal: boolean;
    onClose: () => void;
}

export type TModalOverlay = {
    onClick: () => void;
}