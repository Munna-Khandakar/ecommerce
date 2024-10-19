'use client';

import {SectionLabel} from '@/components/SectionLabel';
import {ProductCard} from '@/components/medicine/ProductCard';
import api from '@/lib/apiInstance';
import useSWR from 'swr';
import {PaginatedProduct} from '@/types/ProductType';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {ExclamationTriangleIcon} from '@radix-ui/react-icons';
import {Skeleton} from '@/components/ui/skeleton';
import {SeeMoreProducts} from '@/components/common/SeeMoreProducts';

const SECTION_LABEL = 'Trending Near You';
const SUB_LABEL = 'Popular in your city';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export const TrendingNearYouSection = () => {

    const {
        data,
        error,
        isLoading,
    } = useSWR<PaginatedProduct>('products/paginated?page=2&size=10', fetcher, {revalidateOnFocus: false});

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