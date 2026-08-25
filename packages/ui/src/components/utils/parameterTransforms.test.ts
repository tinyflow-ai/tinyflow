import { describe, expect, it } from 'vitest';
import { transformParameterData } from './parameterTransforms';

describe('transformParameterData', () => {
    it('recursively regenerates parameter ids and clears references', () => {
        const source = {
            title: 'node data',
            parameters: [
                {
                    id: 'input-1',
                    name: 'input',
                    refType: 'ref',
                    ref: 'source.output',
                    children: [{ id: 'child-1', name: 'child', dataType: 'String' }]
                }
            ],
            outputDefs: [{ id: 'output-1', name: 'output', dataType: 'Object' }]
        };
        const ids = ['new-input', 'new-child', 'new-output'];

        const result = transformParameterData(source, {
            regenerateIds: true,
            clearRefs: true,
            idFactory: () => ids.shift()!
        }) as typeof source;

        const generatedIds = [
            result.parameters[0].id,
            result.parameters[0].children[0].id,
            result.outputDefs[0].id
        ];
        expect(new Set(generatedIds)).toEqual(new Set(['new-input', 'new-child', 'new-output']));
        expect(generatedIds).not.toContain('input-1');
        expect(result.parameters[0].ref).toBeUndefined();
        expect(source.parameters[0].id).toBe('input-1');
        expect(source.parameters[0].ref).toBe('source.output');
    });

    it('does not change unrelated object ids', () => {
        const source = {
            id: 'node-id',
            position: { x: 10, y: 20 },
            metadata: { id: 'meta-id' },
            forms: [{ id: 'option-id', name: 'A business option' }]
        };
        const result = transformParameterData(source, {
            regenerateIds: true,
            idFactory: () => 'replacement'
        });

        expect(result).toEqual(source);
        expect(result).not.toBe(source);
    });
});
