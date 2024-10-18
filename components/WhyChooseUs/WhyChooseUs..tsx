import {SectionLabel} from '@/components/SectionLabel';
import {WHY_US} from '@/constants/WhyUs';
import {ChooseUsCard} from '@/components/WhyChooseUs/ChooseUsCard';

const SECTION_LABEL = 'Why Choose Us';

export const WhyChooseUs = () => {
    return (
        <div className='bg-slate-200 px-4 py-10 md:py-28 container'>
            <section className="container mx-auto">
                <SectionLabel label={SECTION_LABEL}/>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2 justify-between'>
                    {
                        WHY_US.map((item, index) => (
                            <ChooseUsCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))
                    }
                </div>
            </section>
        </div>
    );
}