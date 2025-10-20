/**
 * 判断当前焦点是否位于可编辑元素中（如 input、textarea 或 contenteditable 区域）。
 * 适用于快捷键、全局事件监听等需要避免干扰用户输入的场景。
 */
export const isInEditableElement = () => {
    const el = document.activeElement;
    if (!el || !(el instanceof HTMLElement)) {
        return false;
    }

    return (
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        el.isContentEditable
    );
};
