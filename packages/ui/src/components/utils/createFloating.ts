import {
    computePosition,
    flip,
    shift,
    arrow,
    offset,
    type Placement,
    type OffsetOptions,
    type FlipOptions,
    type ShiftOptions
} from '@floating-ui/dom';

export type FloatingOptions = {
    trigger: string | HTMLElement;
    triggerEvent?: string[];
    floatContent: string | HTMLElement;
    placement?: Placement;
    offsetOptions?: OffsetOptions;
    flipOptions?: FlipOptions;
    shiftOptions?: ShiftOptions;
    interactive?: boolean;
    showArrow?: boolean;
};

export type FloatingInstance = {
    destroy: () => void;
    hide: () => void;
    isVisible: () => boolean;
};

export const createFloating = ({
    trigger,
    triggerEvent,
    floatContent,
    placement = 'bottom',
    offsetOptions,
    flipOptions,
    shiftOptions,
    interactive,
    showArrow
}: FloatingOptions): FloatingInstance => {
    if (typeof trigger === 'string') {
        const triggerEl = document.querySelector(trigger);
        if (!triggerEl) {
            throw new Error("element not found by document.querySelector('" + trigger + "')");
        } else {
            trigger = triggerEl as HTMLElement;
        }
    }

    let floating: HTMLElement;
    if (typeof floatContent === 'string') {
        const floatContentEl = document.querySelector(floatContent);
        if (!floatContentEl) {
            throw new Error("element not found by document.querySelector('" + floatContent + "')");
        } else {
            floating = floatContentEl as HTMLElement;
        }
    } else {
        floating = floatContent as HTMLElement;
    }

    let arrowElement: HTMLElement;
    if (showArrow) {
        arrowElement = document.createElement('div');
        arrowElement.style.position = 'absolute';
        arrowElement.style.backgroundColor = '#222';
        arrowElement.style.width = '8px';
        arrowElement.style.height = '8px';
        arrowElement.style.transform = 'rotate(45deg)';
        arrowElement.style.display = 'none';

        floating.firstElementChild!.before(arrowElement);
    }

    function updatePosition() {
        computePosition(trigger as Element, floating, {
            placement: placement,
            middleware: [
                offset(offsetOptions), // 手动偏移配置
                flip(flipOptions), //自动翻转
                shift(shiftOptions), //自动偏移（使得浮动元素能够进入视野）
                ...(showArrow ? [arrow({ element: arrowElement })] : [])
            ]
        }).then(({ x, y, placement, middlewareData }) => {
            Object.assign(floating.style, {
                left: `${x}px`,
                top: `${y}px`
            });

            if (showArrow) {
                const { x: arrowX, y: arrowY } = middlewareData.arrow as { x: number; y: number };
                const staticSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right'
                }[placement.split('-')[0]] as string;

                Object.assign(arrowElement.style, {
                    zIndex: -1,
                    left: arrowX != null ? `${arrowX}px` : '',
                    top: arrowY != null ? `${arrowY}px` : '',
                    right: '',
                    bottom: '',
                    [staticSide]: '2px'
                });
            }
        });
    }

    let visible = false;

    function showTooltip() {
        floating.style.display = 'block';
        floating.style.visibility = 'block';
        floating.style.position = 'absolute';

        if (showArrow) {
            arrowElement.style.display = 'block';
        }

        visible = true;
        updatePosition();
    }

    function hideTooltip() {
        floating.style.display = 'none';
        if (showArrow) {
            arrowElement.style.display = 'none';
        }
        visible = false;
    }

    function onTrigger(event: any) {
        event.stopPropagation();
        if (!visible) {
            showTooltip();
        } else {
            hideTooltip();
        }
    }

    function hideTooltipCompute(event: any) {
        if (floating.contains(event.target as Node)) {
            return;
        }
        hideTooltip();
    }

    if (!triggerEvent || triggerEvent.length == 0) {
        if (interactive) {
            triggerEvent = ['click'];
        } else {
            triggerEvent = ['mouseenter', 'focus'];
        }
    }

    triggerEvent.forEach((event) => {
        (trigger as HTMLElement).addEventListener(event, onTrigger);
    });

    if (interactive) {
        document.addEventListener('click', hideTooltipCompute);
    } else {
        ['mouseleave', 'blur'].forEach((event) => {
            trigger.addEventListener(event, hideTooltip);
        });
    }

    return {
        destroy() {
            triggerEvent.forEach((event) => {
                (trigger as HTMLElement).removeEventListener(event, onTrigger);
            });

            if (interactive) {
                document.removeEventListener('click', hideTooltipCompute);
            } else {
                ['mouseleave', 'blur'].forEach((event) => {
                    trigger.removeEventListener(event, hideTooltip);
                });
            }
        },
        hide() {
            hideTooltip();
        },

        isVisible() {
            return visible;
        }
    };
};
