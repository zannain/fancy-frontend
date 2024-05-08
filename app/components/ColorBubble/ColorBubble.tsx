
type ColorBubbleProps = {
    color: string,
    handleProductImage: (url:string) => void
}
export default function ColorBubble({color, handleProductImage}: ColorBubbleProps) {
    return <button onClick={() => handleProductImage(color)} className="circle" style={{'backgroundColor': color}}></button>
}