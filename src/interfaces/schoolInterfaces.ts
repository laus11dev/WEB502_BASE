export interface Club {
    id: number;
    titles: string;
    cup: number;
    image: string;
    city: string;
}

export interface FormValues {
    titles: string;
    cup: number;
    image: string;
    city: string;
}

export interface APIResponse<T> {
    data: T;
    message: string;
    success: boolean;
}

export interface ClubListProps {
    clubs: Club[];
    onDelete: (id: number) => void;
}

export interface AddClubProps {
    onSubmit: (values: FormValues) => void;
}

export interface EditClubProps {
    club: Club;
    onSubmit: (values: FormValues) => void;
}
