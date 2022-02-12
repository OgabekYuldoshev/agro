
export default ({ label, type = 'nodata' }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center gap-2 py-3">
            <img src={require(`@src/assets/images/site/${type}.svg`).default} width={250} />
            <h2 className="text-center">{label}</h2>
        </div>
    )
}