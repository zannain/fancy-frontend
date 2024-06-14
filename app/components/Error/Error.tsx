type ErrorProps = {
    message: string
}
export default function Error(props: ErrorProps) {
   return (
    <div className="w-fit h-8 py-2 px-3 bg-red-100 rounded-full flex">
        <div className="self-center">
            <div className="bg-white rounded-full p-1 text-sm drop-shadow">
                <span className="rounded-full p-1 text-sm drop-shadow">Error</span>
            </div>{' '}
        <span className="text-sm text-red-500">{props.message}</span>

        </div>
    </div>
   )
}