
import { ComponentProps, forwardRef, PropsWithChildren } from 'react'

type LabelProps = ComponentProps<"label">

const Label = forwardRef<HTMLLabelElement, LabelProps>(({children, ...props}: PropsWithChildren<LabelProps>, ref)  => {
    return (
        <label {...props} className="text-neutral-700 text-sm">{children}</label>
    )
})

export default Label;


