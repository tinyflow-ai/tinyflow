import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import {
    Tinyflow as TinyflowNative,
    type TinyflowOptions as TinyflowNativeOptions
} from '@tinyflow-ai/ui';
import '@tinyflow-ai/ui/dist/index.css';

export type TinyflowOptions = {
    style?: React.CSSProperties;
    className?: string;
} & Omit<TinyflowNativeOptions, 'element'>;

export interface TinyflowHandle {
    getData: () => any;
    getInstance: () => TinyflowNative | null;
}

const Tinyflow = forwardRef<TinyflowHandle, TinyflowOptions>((options, ref) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const tinyflowInstance = useRef<TinyflowNative | null>(null);
    const skipInitialOptionsEffect = useRef(true);

    // 核心实例始终持有这两个稳定代理。React 每次渲染只替换 ref 中的真实回调，
    // 因而父组件使用内联函数时不会触发画布销毁重建，也不会调用到过期闭包。
    const onDataChangeRef = useRef(options.onDataChange);
    const onNodeExecuteRef = useRef(options.onNodeExecute);
    onDataChangeRef.current = options.onDataChange;
    onNodeExecuteRef.current = options.onNodeExecute;

    const stableCallbacks = useRef<Pick<TinyflowNativeOptions, 'onDataChange' | 'onNodeExecute'>>({
        onDataChange: (data) => onDataChangeRef.current?.(data),
        onNodeExecute: (node) => onNodeExecuteRef.current?.(node)
    });

    useImperativeHandle(ref, () => ({
        getData: () => {
            if (tinyflowInstance.current) {
                return tinyflowInstance.current.getData();
            }
            console.warn('Tinyflow instance is not initialized');
            return null;
        },
        getInstance: () => {
            if (tinyflowInstance.current) {
                return tinyflowInstance.current;
            }
            console.warn('Tinyflow instance is not initialized');
            return null;
        }
    }));

    const {
        data,
        style,
        className,
        provider,
        customNodes,
        hiddenNodes,
        defaultTheme,
        formRefTypeEnable
    } = options;

    // 挂载和卸载严格对应一个原生实例，React StrictMode 的重复挂载也能正确释放资源。
    useEffect(() => {
        if (divRef.current) {
            const tinyflow = new TinyflowNative({
                element: divRef.current,
                data,
                provider,
                customNodes,
                onNodeExecute: stableCallbacks.current.onNodeExecute,
                hiddenNodes,
                onDataChange: stableCallbacks.current.onDataChange,
                defaultTheme,
                formRefTypeEnable
            });

            tinyflowInstance.current = tinyflow;

            return () => {
                tinyflow.destroy();
                tinyflowInstance.current = null;
            };
        }
        return undefined;
        // 初始化只执行一次；后续结构配置由下面的 effect 增量同步。
    }, []);

    // 回调不在依赖中：稳定代理已经能读取最新回调。这样 onDataChange={setData}
    // 的受控写法不会因为回调 identity 变化形成反复重建。
    useEffect(() => {
        if (skipInitialOptionsEffect.current) {
            skipInitialOptionsEffect.current = false;
            return;
        }
        tinyflowInstance.current?.setOptions({
            data,
            provider,
            customNodes,
            hiddenNodes,
            defaultTheme,
            formRefTypeEnable
        });
    }, [data, provider, customNodes, hiddenNodes, defaultTheme, formRefTypeEnable]);

    return <div ref={divRef} style={{ height: '600px', ...style }} className={className} />;
}) as React.ForwardRefExoticComponent<TinyflowOptions & React.RefAttributes<TinyflowHandle>>;

export default Tinyflow;
