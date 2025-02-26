export const parameterDataTypes = [
    {
        value: 'String',
        label: 'String'
    },
    {
        value: 'Number',
        label: 'Number'
    },
    {
        value: 'Boolean',
        label: 'Boolean'
    },
    {
        value: 'File',
        label: 'File'
    },
    {
        value: 'Object',
        label: 'Object'
    },
    {
        value: 'Array',
        label: 'Array'
    }
];

export const parameterRefTypes = [
    {
        value: 'ref',
        label: '引用'
    },
    {
        value: 'input',
        label: '固定值'
    }
];

export type Parameter = {
    id?: string;
    name?: string;
    nameDisabled?: boolean;
    dataType?: string;
    dataTypeDisabled?: boolean;
    ref?: string;
    refType?: string;
    value?: string;
    description?: string;
    required?: boolean;
    deleteDisabled?: boolean;
    children?: Parameter[];
};
