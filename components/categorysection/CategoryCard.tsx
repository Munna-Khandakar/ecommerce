'use client';

import Link from 'next/link';
import {Category} from '@/types/Category';

type CategoryCardProps = {
    category: Category
}

export function CategoryCard(props: CategoryCardProps) {
    const {category} = props;
    return (
        <Link href={`/${category.id}`} className="flex items-center h-[4rem] bg-white  hover:bg-slate-50 gap-2 border px-2 py-1 rounded-lg hover:border-teal-600">
                    <img src={category.iconUrl} alt={category.label}
                           width={40}  height={40}
                           className="object-contain rounded-md"
                    />

                <p className="text-xs md:text-base font-medium text-wrap truncate w-full text-slate-800">
                    {category.label}
                </p>
        </Link>
    );
}
