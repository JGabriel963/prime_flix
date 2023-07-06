export default function ButtonArrow({children, setArrow}) {
    return (
        <button className="relative text-slate-700 flex justify-center items-center hover:text-slate-950" onClick={setArrow}>
            {children}
        </button>
    )
}