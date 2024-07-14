import { ReactLenis, useLenis } from 'lenis/react'

export default function SmoothScroll({ children }) {
    return (
        <ReactLenis root options={{
            smoothWheel: true,
            syncTouch: true,
            lerp: 0.2,
        }}>
            {children}
        </ReactLenis>
    )
}