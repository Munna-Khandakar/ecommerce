'use client';

import {useState} from 'react';
import useSWR from 'swr';
import {ExclamationTriangleIcon} from '@radix-ui/react-icons';
import api from '@/lib/apiInstance';
import {CategoryCard} from '@/components/categorysection/CategoryCard';
import {SectionLabel} from '@/components/SectionLabel';
import {Skeleton} from '@/components/ui/skeleton';
import {Category} from '@/types/Category';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import {Button} from '@/components/ui/button';

const SECTION_LABEL = 'Shop by Categories';
const INITIAL_SHOW_COUNT = 8;

const categoriesFetcher = (url: string) => api.get(url).then((res) => res.data);

export const CategorySection = () => {

    const {
        data: categories,
        error: categoriesError,
        isLoading: categoriesLoading
    } = useSWR<Category[]>('categories', categoriesFetcher, {revalidateOnFocus: false});

    const [showCount, setShowCount] = useState(INITIAL_SHOW_COUNT);

    return (
        <section className="container mx-auto bg-slate-50 py-20">
            <SectionLabel label={SECTION_LABEL}/>
            {
                categoriesError &&
                <Alert variant="destructive">
                    <ExclamationTriangleIcon className="h-4 w-4"/>
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        Sorry, there is something wrong with internet.
                    </AlertDescription>
                </Alert>
            }
            {
                categoriesLoading &&
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center overflow-x-auto py-2">
                    <Skeleton className="h-[4rem]"/>
                    <Skeleton className="h-[4rem]"/>
                    <Skeleton className="h-[4rem]"/>
                    <Skeleton className="h-[4rem]"/>
                    <Skeleton className="h-[4rem]"/>
                    <Skeleton className="h-[4rem]"/>
                    <Skeleton className="h-[4rem]"/>
                    <Skeleton className="h-[4rem]"/>
                </div>
            }
            {
                categories?.length &&
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center overflow-x-auto py-2">
                    {
                        categories?.slice(0, showCount).map((category) => (
                            <CategoryCard key={category.label} category={category}/>
                        ))
                    }
                </div>
            }
            {
                categories?.length && showCount < categories.length &&
                <div className="flex justify-center mt-4">
                    <Button variant="outline" onClick={() => {
                        setShowCount(showCount + 4);
                    }}>See More</Button>
                </div>
            }
        </section>
    );
};