import { Box } from "react-feather"
export default ({ label }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-2 py-3">
            <Box size={150} />
            <h2 className="text-center">{label}</h2>
        </div>
    )
}