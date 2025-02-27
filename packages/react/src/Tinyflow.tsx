import { useEffect, useRef } from 'react';
import { Tinyflow as TinyflowNative } from '@tinyflow-ai/ui';
import '@tinyflow-ai/ui/dist/index.css';

function Tinyflow() {
    //定义 ref
    const divRef = useRef(null);

    //初始化 AiEditor
    useEffect(() => {
        if (divRef.current) {
            const tinyflow = new TinyflowNative({
                element: divRef.current,
                data: {}
            });
            return () => {
                tinyflow.destroy();
            };
        }
    }, []);

    return <div ref={divRef} style={{ height: '600px' }} />;
}

export default Tinyflow;
