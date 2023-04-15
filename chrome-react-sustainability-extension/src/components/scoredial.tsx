import React, { useRef, useEffect } from "react";

function ScoreDial({ value, size, fillColor, strokeColor, textColor, circleSize, circleColor } : {value: string, size: number, fillColor: string, strokeColor: string, textColor: string, circleSize: number, circleColor: string}) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvasRef = useRef<HTMLCanvasElement>(null);
        const canvas = canvasRef.current;
        if(canvas == null) return;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
        return;
        }

        // Set the properties for the circle
        const x = 100;
        const y = 100;
        const radius = 20;
        const circleColor = "black";
        const fillColor = "black";
        const strokeColor = "white";
        const size = 30;
        const textColor = "white";

        // Draw the circle
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = circleColor || fillColor;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = strokeColor;
        ctx.stroke();

        // Set the properties for the text
        const font = `bold ${size / 2}px Arial`;
        ctx.font = font;
        ctx.fillStyle = textColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Draw the text
        ctx.fillText(value, x, y);
    }, [value, size, fillColor, strokeColor, textColor, circleSize, circleColor]);

  return <canvas ref={canvasRef} width={size} height={size} />;
}
export default ScoreDial;