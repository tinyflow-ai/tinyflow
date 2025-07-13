export const deepEqual = <T>(obj1: T, obj2: T) => {
    if (obj1 === obj2) return true;

    // 处理 null 和 object 类型
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false;
    }

    // 判断是否都是数组
    const isArray1 = Array.isArray(obj1);
    const isArray2 = Array.isArray(obj2);

    if (isArray1 !== isArray2) return false; // 一个是数组另一个不是，不相等

    // 数组的情况
    if (isArray1 && isArray2) {
        if (obj1.length !== obj2.length) return false;
        for (let i = 0; i < obj1.length; i++) {
            if (!deepEqual(obj1[i], obj2[i])) return false;
        }
        return true;
    }
    // 普通对象的情况
    else {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) return false;

        for (const key of keys1) {
            if (!(key in obj2)) return false;
            if (!deepEqual((obj1 as any)[key], (obj2 as any)[key])) return false;
        }

        return true;
    }
};
