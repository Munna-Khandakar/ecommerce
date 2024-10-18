'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Article} from '@/types/Article';

type HealthArticleCardProps = {
    article: Article;
}

export const HealthArticleCard = (props: HealthArticleCardProps) => {

    const {article} = props;

    return (
        <Link href={`blog/${article.slug}`}
              className="border rounded-lg min-w-[220px] md:min-w-[250px] w-[220px] md:w-[250px] h-[250px] md:h-[280px]">
            <div>
                <Image
                    className="w-full h-[150px] md:h-[180px] object-cover"
                    src={article.image} alt={'article image'}/>
            </div>
            <div
                className="p-4 text-sm md:text-base font-normal leading-5 text-wrap truncate line-clamp-3 text-slate-700">
                {article.title}
            </div>
        </Link>
    );
};