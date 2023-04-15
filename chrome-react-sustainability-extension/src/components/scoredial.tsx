import React, { useRef, useEffect } from "react";

function ScoreDial({ value, size, strokeColor, textColor, circleSize} : {value: string, size: number, strokeColor: string, textColor: string, circleSize: number}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    var numerical_value = Number(value);
    var fillColor = "";
    var circleColor = "";
    if(numerical_value < 20) {
        fillColor = "red";
        circleColor = "red";
    }
    else if(numerical_value >= 20 && numerical_value < 40) {
        fillColor = "orange";
        circleColor = "orange";
    }
    else if(numerical_value >= 40 && numerical_value < 60) {
        fillColor = "darkgoldenrod";
        circleColor = "darkgoldenrod";
    }
    else if(numerical_value >= 60 && numerical_value < 80) {
        fillColor = "lightgreen";
        circleColor = "lightgreen";
    }
    else {
        fillColor = "green";
        circleColor = "green";
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if(canvas == null) return;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
        return;
        }

        // Set the properties for the circle
        const x = size / 2;
        const y = size / 2;
        const radius = circleSize || size / 2;

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