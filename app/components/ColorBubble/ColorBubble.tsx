import { Inventory } from "~/data"

type ColorBubbleProps = {
    color: string,
    inventory?: Inventory
    handleColorChange: (crl:string) => void
}
export default function ColorBubble({color, inventory, handleColorChange}: ColorBubbleProps) {
    return <button onClick={() => handleColorChange(color)} className="circle focus:ring-indigo-200 focus:ring-offset-indigo-200" style={{'backgroundColor': color}}></button>
}