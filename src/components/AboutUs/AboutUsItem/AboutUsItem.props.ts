
export interface AboutUsItemProps {
    appearance: 'big' | 'small';
    type: 'image' | 'text';
    title?: string;
    subtitle?: string;
    description?: string;
    image?: string;
}