export const componentName = 'tinyflow-component';

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
        value: 'fixed',
        label: '固定值'
    }
    // {
    //     value: 'input',
    //     label: '输入'
    // }
];

export const contentTypes = [
    { label: '文字', value: 'text' },
    { label: '图片', value: 'image' },
    { label: '视频', value: 'video' },
    { label: '音频', value: 'audio' },
    { label: '文件', value: 'file' },
    { label: '其他', value: 'other' }
];

export const startFormTypes = [
    { label: '当行输入框', value: 'input' },
    { label: '多行输入框', value: 'textarea' },
    { label: '单选', value: 'radio' },
    { label: '多选', value: 'checkbox' }
];

export const confirmFormTypes = [
    { label: '单选', value: 'radio' },
    { label: '多选', value: 'checkbox' }
];
