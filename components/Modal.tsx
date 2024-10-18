import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {useEffect, useState} from 'react';

type ModalProps = {
    children: React.ReactNode;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    isOpen: boolean;
    trigger?: React.ReactNode;
    onClose?: () => void;
};

function Modal(props: ModalProps) {
    const {children, title, description, isOpen, trigger, onClose} = props;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    const onCLoseModal = () => {
        setOpen(false);
        onClose && onClose();
    };

    return (
        <Dialog open={open} onOpenChange={onCLoseModal}>
            {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
            <DialogContent>
                <DialogHeader>
                    {title && <DialogTitle>{title}</DialogTitle>}
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}

export default Modal;
