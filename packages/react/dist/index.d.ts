import { default as default_2 } from 'react';
import { Tinyflow as Tinyflow_2 } from '@tinyflow-ai/ui';
import { TinyflowOptions as TinyflowOptions_2 } from '@tinyflow-ai/ui';

export declare const Tinyflow: default_2.ForwardRefExoticComponent<TinyflowOptions & default_2.RefAttributes<TinyflowHandle>>;

export declare interface TinyflowHandle {
    getData: () => any;
    getInstance: () => Tinyflow_2 | null;
}

export declare type TinyflowOptions = {
    style?: default_2.CSSProperties;
    className?: string;
} & Omit<TinyflowOptions_2, 'element'>;

export { }
