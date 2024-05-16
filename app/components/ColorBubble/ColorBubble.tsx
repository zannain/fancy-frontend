import { Inventory } from "~/data"

type ColorBubbleProps = {
    color: string,
    inventory: Inventory
    handleInventoryUpdate: (url:string) => void
}
export default function ColorBubble({color, inventory, handleInventoryUpdate}: ColorBubbleProps) {
    return <button onClick={() => handleInventoryUpdate(color)} className="circle focus:ring-indigo-200 focus:ring-offset-indigo-200" style={{'backgroundColor': color}}></button>
}