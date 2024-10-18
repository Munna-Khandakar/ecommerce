'use client';

import {SectionLabel} from '@/components/SectionLabel';
import {ARTICLES} from '@/constants/Articles';
import {HealthArticleCard} from '@/components/HealthArticle/HealthArticleCard';

const SECTION_LABEL = 'Health Articles';
const SUB_LABEL = 'Get up-to-date on our latest health updates';

export const HealthArticles = () => {
    return (
        <section className="container mx-auto">
            <SectionLabel label={SECTION_LABEL} subLabel={SUB_LABEL}/>
            <div className="flex flex-1 flex-nowrap no-scrollbar gap-2 items-start overflow-x-auto py-2">
                {
                    ARTICLES.map((article, index) => (
                        <HealthArticleCard key={index} article={article}/>
                    ))
                }
            </div>
        </section>
    );
};