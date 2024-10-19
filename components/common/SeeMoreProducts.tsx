import Link from 'next/link';
import {ChevronRight} from 'lucide-react';

export const SeeMoreProducts = () => {
    return (
        <div className="flex justify-center mt-4">
            <Link href={`/products`} className="flex items-center justify-between w-fit gap-1 p-2 border rounded-md">
                <span> More</span>
                <ChevronRight/>
            </Link>
        </div>
    );
};