import {WHY_US} from '@/constants/WhyUs';
import {ChooseUsCard} from '@/components/WhyChooseUs/ChooseUsCard';

export const WhyChooseUs = () => {
    return (
        <div className='px-4 py-10 md:py-28 container'>
            <section className="container mx-auto">
                  <p className="text-center text-4xl mb-8 ">Why Choose Us</p>
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