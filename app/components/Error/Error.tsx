type ErrorProps = {
    message: string
}
export default function Error(props: ErrorProps) {
   return (
    <div className="bg-red-100 rounded-full w-fit absolute mx-auto top-0 mt-2">
        <div className="flex gap-3 m-1 items-baseline">
            <div className="rounded-full p-1 text-sm drop-shadow bg-white text-red-900">Error</div>
            <div className="text-sm text-red-500">{props.message}</div>

        </div>
    </div>
   )
}