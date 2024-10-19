'use client';

import useSWR from 'swr';
import {ExclamationTriangleIcon} from '@radix-ui/react-icons';
import {SectionLabel} from '@/components/SectionLabel';
import {ProductCard} from '@/components/medicine/ProductCard';
import api from '@/lib/apiInstance';
import {PaginatedProduct} from '@/types/ProductType';
import {Skeleton} from '@/components/ui/skeleton';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {SeeMoreProducts} from '@/components/common/SeeMoreProducts';

const SECTION_LABEL = 'New Launches';
const SUB_LABEL = 'New wellness range just for you!';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export const NewLaunchSection = () => {

    const {
        data,
        error,
        isLoading,
    } = useSWR<PaginatedProduct>('products/paginated?page=1&size=10', fetcher, {revalidateOnFocus: false});


    return (
        <section className="container mx-auto">
            <SectionLabel label={SECTION_LABEL} subLabel={SUB_LABEL}/>
            {
                error &&
                <Alert variant="destructive">
                    <ExclamationTriangleIcon className="h-4 w-4"/>
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        Sorry, there is something wrong with internet.
                    </AlertDescription>
                </Alert>
            }
            {
                isLoading &&
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                    <Skeleton className="h-[12rem]"/>
                    <Skeleton className="h-[12rem]"/>
                    <Skeleton className="h-[12rem]"/>
                    <Skeleton className="h-[12rem]"/>
                    <Skeleton className="h-[12rem]"/>
                    <Skeleton className="h-[12rem]"/>
                    <Skeleton className="h-[12rem]"/>
                    <Skeleton className="h-[12rem]"/>
                    <Skeleton className="h-[12rem]"/>
                    <Skeleton className="h-[12rem]"/>
                </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                {
                    data?.content.map((medicine, index) => (
                        <ProductCard
                            key={index}
                            product={medicine}
                        />
                    ))
                }
            </div>
            {
                data && data.content.length > 8 &&
                    <SeeMoreProducts/>
            }
        </section>
    );
};