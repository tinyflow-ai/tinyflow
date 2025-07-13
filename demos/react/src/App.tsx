import { useRef } from 'react';
import { Tinyflow, TinyflowHandle } from '@tinyflow-ai/react';
import '@tinyflow-ai/react/dist/index.css'

function App() {
    const tinyflowRef = useRef<TinyflowHandle>(null);

    const handleGetData = () => {
        if (tinyflowRef.current) {
            const data = tinyflowRef.current.getData();
            console.log('Flow Data:', data);
            alert(JSON.stringify(data))
        }
    };
    return (
        <>
            <div style={{
                height: '40px',
                borderBottom: 'solid 1px #efefef',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <span>
                    Tinyflow 是一个轻量级、灵活且无侵入性的 AI 工作流编排 解决方案
                    <a href="https://gitee.com/tinyflow-ai/tinyflow" target="_blank">Gitee</a>
                    <a href="https://github.com/tinyflow-ai/tinyflow" target="_blank">Github</a>
                </span>
                <div>
                    <button onClick={handleGetData}>获取数据</button>
                </div>
            </div>
            <Tinyflow
                ref={tinyflowRef}
                style={{ border: '1px solid #ccc',height: 'calc(100vh - 60px)' }}
                className="custom-class"
                onDataChange={(data) => {
                    console.log('onDataChange', data);
                }}
            />
        </>
    );
}

export default App;
