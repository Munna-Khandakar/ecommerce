type SectionLabelProps = {
    label: string;
    subLabel?: string;
}

export const SectionLabel = (props: SectionLabelProps) => {

    const {label, subLabel} = props;

    return (
        <div className="flex flex-col gap-0 md:gap-2 items-start mb-2 md:mb-4">
            <h2 className="text-lg md:text-2xl font-semibold antialiased leading-8 tracking-normal text-slate-800">
                {label}
            </h2>
            {
                subLabel &&
                <p className="text-sm md:text-base font-normal antialiased leading-6 tracking-normal text-slate-500">
                    {subLabel}
                </p>
            }
        </div>
    );
};