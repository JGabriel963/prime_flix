export default function MenuSidebar({children, setMenu}) {
    return (
        <button className="flex flex-row  items-center mb-2" onClick={setMenu}>
            {children}
        </button>
    )
}