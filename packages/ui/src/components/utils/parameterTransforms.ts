import { genShortId } from './IdGen';

export const transformParameterData = (
    value: unknown,
    options: { regenerateIds?: boolean; clearRefs?: boolean; idFactory?: () => string } = {},
    inParameterTree = false
): unknown => {
    if (Array.isArray(value)) {
        return value.map((item) => transformParameterData(item, options, inParameterTree));
    }
    if (!value || typeof value !== 'object') {
        return value;
    }

    const record = value as Record<string, unknown>;
    const result: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(record)) {
        const childIsParameterTree =
            inParameterTree || key === 'parameters' || key === 'outputDefs';
        result[key] = transformParameterData(child, options, childIsParameterTree);
    }

    if (options.regenerateIds && inParameterTree && 'id' in record) {
        result.id = (options.idFactory ?? genShortId)();
    }
    if (options.clearRefs && record.refType === 'ref') {
        result.ref = undefined;
    }

    return result;
};
