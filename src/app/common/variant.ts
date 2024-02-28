import { Variants } from "framer-motion";

export function AppVariantsX(x: any, duration: any): Variants {
    return {
        hide: {
            opacity: 0,
            x: x
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: duration,
            },
        },
    }
}

export function AppVariantsY(y: any, duration: any): Variants {
    return {
        hide: {
            opacity: 0,
            y: y
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration,
            },
        },
    }
}

