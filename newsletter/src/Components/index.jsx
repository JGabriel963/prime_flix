export default function Container({children}) {
    return (
        <div className="h-[calc(100vh_-_4rem)]
        lg:h-[calc(100vh_-_5rem)] px-3 flex md:flex-row flex-col-reverse justify-center items-center gap-x-40 md:px-6 relative">
            {children}
        </div>
    )
}