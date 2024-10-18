import Image from 'next/image';

type ChooseUsCardProps = {
    icon: any;
    title: string;
    description: string;
}

export const ChooseUsCard = (props: ChooseUsCardProps) => {

    const {icon, title, description} = props;

    return (
        <div className="flex flex-col md:flex-row  items-center justify-center gap-1">
                <Image
                    className="w-16"
                    src={icon} alt={'icon'}
                />
            <div className="flex flex-col">
                <h4 className="text-center md:text-start text-base text-slate-900 font-semibold mt-4">{title}</h4>
                <p className="text-center md:text-start text-sm text-slate-700 mt-2">{description}</p>
            </div>
        </div>
    );
};