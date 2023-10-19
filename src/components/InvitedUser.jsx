export default function InvitedUser({ user, onRemove }) {
    return (
        <div className="flex items-center gap-2">
            <p className="text-lg">{user}</p>
            <button className="rounded-full bg-[#fff] text-black border px-4 py-1 border-[#000] text-lg" onClick={onRemove}>Remove</button>
        </div>
    )
}