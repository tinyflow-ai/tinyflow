import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import {
    Tinyflow as TinyflowNative,
    TinyflowOptions as NativeTinyflowOptions
} from '@tinyflow-ai/ui';
import '@tinyflow-ai/ui/dist/index.css';

export type TinyflowOptions = {
    data?: NativeTinyflowOptions['data'];
    style?: React.CSSProperties;
    className?: string;
};

export interface TinyflowHandle {
    getData: () => any;
}

const Tinyflow = forwardRef<TinyflowHandle, TinyflowOptions>(({ data, style, className }, ref) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const tinyflowInstance = useRef<TinyflowNative | null>(null);

    useImperativeHandle(ref, () => ({
        getData: () => {
            if (tinyflowInstance.current) {
                return tinyflowInstance.current.getData();
            }
            console.warn('Tinyflow instance is not initialized');
            return null;
        }
    }));

    useEffect(() => {
        if (divRef.current) {
            const tinyflow = new TinyflowNative({
                element: divRef.current,
                data: data
            });

            tinyflowInstance.current = tinyflow;

            return () => {
                tinyflow.destroy();
                tinyflowInstance.current = null;
            };
        }
    }, [data]);

    return <div ref={divRef} style={{ height: '600px', ...style }} className={className} />;
}) as React.ForwardRefExoticComponent<TinyflowOptions & React.RefAttributes<TinyflowHandle>>;

export default Tinyflow;
