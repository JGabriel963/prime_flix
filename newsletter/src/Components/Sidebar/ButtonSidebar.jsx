export default function ButtonSidebar({ children }) {
    return (
        <button className="flex flex-row items-center mb-2">
            {children}
        </button>
    )
}