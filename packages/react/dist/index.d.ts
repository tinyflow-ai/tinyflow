import { TinyflowOptions as TinyflowOptions_2 } from '@tinyflow-ai/ui';

export declare const Tinyflow: React.ForwardRefExoticComponent<TinyflowOptions & React.RefAttributes<TinyflowHandle>>;

export declare interface TinyflowHandle {
    getData: () => any;
}

export declare type TinyflowOptions = {
    style?: React.CSSProperties;
    className?: string;
} & Omit<TinyflowOptions_2, 'element'>;

export { }
