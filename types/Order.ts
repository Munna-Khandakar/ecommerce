import {User} from '@/types/User';
import {Medicine} from '@/types/Medicine';

export type Order = {
    id: string;
    user: User;
    products: Medicine[];
    status: 'pending' | 'completed' | 'cancelled' | 'approved';
    total: number;
    createdAt: string;
}