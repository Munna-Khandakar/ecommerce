import Image from 'next/image';

type ChooseUsCardProps = {
    icon: any;
    title: string;
    description: string;
}

export const ChooseUsCard = (props: ChooseUsCardProps) => {

    const {icon, title, description} = props;

    return (
        <div
            className="flex flex-col items-start justify-center gap-1 border p-6 rounded-lg hover:bg-teal-600 hover:text-white">
            <Image
                className="w-10"
                src={icon} alt={'icon'}
            />
            <h4 className="text-start text-base font-semibold mt-2">{title}</h4>
            <p className="text-start  text-sm opacity-65">{description}</p>
        </div>
    );
};