export function getContrastingForegroundColor(backgroundHex: string): string {
    // Convert hex to RGB
    const rgb = hexToRgb(backgroundHex);
    if (!rgb) return '#000000'; // Fallback color

    // Calculate luminance
    const luminance = calculateLuminance(rgb);

    // Determine if we need a darker or lighter foreground
    const isDarkBackground = luminance < 0.5;

    // Adjust the background color brightness to get a contrasting foreground color
    const adjustedRgb = adjustBrightness(rgb, isDarkBackground ? 0.0 : -0.0);

    // Convert adjusted RGB back to hex
    adjustedRgb.r = Math.round(adjustedRgb.r);
    adjustedRgb.g = Math.round(adjustedRgb.g);
    adjustedRgb.b = Math.round(adjustedRgb.b);
    return rgbToHex(adjustedRgb);
}

function hexToRgb(hex: string): {r: number, g: number, b: number} | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex({r, g, b}: {r: number, g: number, b: number}): string {
    return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

function calculateLuminance({r, g, b}: {r: number, g: number, b: number}): number {
    const a = [r, g, b].map(function(v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function adjustBrightness({r, g, b}: {r: number, g: number, b: number}, factor: number): {r: number, g: number, b: number} {
    // Clamp values to ensure they remain within [0, 255]
    const adjust = (color: number) => Math.min(255, Math.max(0, color + color * factor));
    return {r: adjust(r), g: adjust(g), b: adjust(b)};
}
