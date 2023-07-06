export default function MenuFreature() {
    return (
        <div className="flex flex-col gap-1 absolute top-9 right-1 shadow-2xl rounded-lg py-4 items-center w-36">
            <div>
                <img className="inline mr-3" src="../../../images/icon-todo.svg"  alt="icon-todo" />
                <span>Todo List</span>
            </div>
            <div>
            <img className="inline mr-3" src="../../../images/icon-calendar.svg"  alt="icon-todo" />
                Calendar
            </div>
            <div>
            <img className="inline mr-3" src="../../../images/icon-reminders.svg"  alt="icon-todo" />
                Remiders
            </div>
            <div>
            <img className="inline mr-3" src="../../../images/icon-planning.svg"  alt="icon-todo" />
                Planning
            </div>
        </div>
    )
}