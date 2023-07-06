export default function MenuFreaturesSidebar() {
    return (
        <div className="flex flex-col ml-5 gap-1">
            <div className="flex flex-row items-center">
                <img className="mr-3" src="../../../images/icon-todo.svg" alt="" />
                Todo List
            </div>
            <div className="flex flex-row items-center">
                <img className="mr-3" src="../../../images/icon-calendar.svg" alt="" />
                Calendar
            </div>
            <div className="flex flex-row items-center">
                <img className="mr-3" src="../../../images/icon-reminders.svg" alt="" />
                Reminders
            </div>
            <div className="flex flex-row items-center">
                <img className="mr-3" src="../../../images/icon-planning.svg" alt="" />
                Planning
            </div>
        </div>
    )
}