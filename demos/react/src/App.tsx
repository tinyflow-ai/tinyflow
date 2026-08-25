import { useRef, useState } from 'react';
import { Tinyflow, type TinyflowHandle } from '@tinyflow-ai/react';
import '@tinyflow-ai/react/dist/index.css';

const flowData = (id: string, title: string, viewport: { x: number; y: number; zoom: number }) => ({
    nodes: [
        {
            id,
            type: 'startNode',
            position: { x: 100, y: 80 },
            data: { title, description: `${title} 的独立工作流` }
        }
    ],
    edges: [],
    viewport
});

const secondFlowData = flowData('flow-b', '工作流 B', { x: -80, y: 20, zoom: 1.25 });

function App() {
    const firstRef = useRef<TinyflowHandle>(null);
    const secondRef = useRef<TinyflowHandle>(null);
    const [firstData, setFirstData] = useState(
        flowData('flow-a', '工作流 A', { x: 40, y: 30, zoom: 0.8 })
    );
    const [firstOutput, setFirstOutput] = useState('尚未读取');
    const [secondOutput, setSecondOutput] = useState('尚未读取');

    const readFlows = () => {
        setFirstOutput(JSON.stringify(firstRef.current?.getData(), null, 2));
        setSecondOutput(JSON.stringify(secondRef.current?.getData(), null, 2));
    };

    return (
        <main style={{ fontFamily: 'system-ui, sans-serif', padding: 16 }}>
            <header
                style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    marginBottom: 12
                }}
            >
                <strong>Tinyflow React 集成回归</strong>
                <label>
                    编辑器外输入框：
                    <input aria-label="编辑器外输入框" defaultValue="Ctrl+A 应只选中这里" />
                </label>
                <button onClick={readFlows}>读取两个工作流</button>
                <button
                    onClick={() =>
                        setFirstData(
                            flowData('flow-a-updated', '工作流 A 已更新', {
                                x: 120,
                                y: 60,
                                zoom: 1.1
                            })
                        )
                    }
                >
                    更新工作流 A
                </button>
            </header>

            <section
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
                    gap: 16
                }}
            >
                <article>
                    <h2 style={{ fontSize: 16 }}>实例 A</h2>
                    <Tinyflow
                        ref={firstRef}
                        data={firstData}
                        style={{ height: 440, border: '1px solid #bbb' }}
                    />
                    <pre
                        data-testid="flow-a-output"
                        style={{ whiteSpace: 'pre-wrap', maxHeight: 180, overflow: 'auto' }}
                    >
                        {firstOutput}
                    </pre>
                </article>
                <article>
                    <h2 style={{ fontSize: 16 }}>实例 B</h2>
                    <Tinyflow
                        ref={secondRef}
                        data={secondFlowData}
                        style={{ height: 440, border: '1px solid #bbb' }}
                    />
                    <pre
                        data-testid="flow-b-output"
                        style={{ whiteSpace: 'pre-wrap', maxHeight: 180, overflow: 'auto' }}
                    >
                        {secondOutput}
                    </pre>
                </article>
            </section>
        </main>
    );
}

export default App;
