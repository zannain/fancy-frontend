import { Inventory } from "~/data"

type ColorBubbleProps = {
    color: string,
    inventory: Inventory
    handleInventoryUpdate: (url:string) => void
}
export default function ColorBubble({color, inventory, handleInventoryUpdate}: ColorBubbleProps) {
    console.log({inventory})
    return <button onClick={() => handleInventoryUpdate(color)} className="circle" style={{'backgroundColor': color}}></button>
}