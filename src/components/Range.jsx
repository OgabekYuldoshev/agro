import { Range, getTrackBackground } from "react-range"

export default ({ values, MIN = 10, MAX = 100, onChange = () => null }) => {
    const STEP = 1

    return (
        <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={onChange}
            renderTrack={({ props, children }) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: "320x",
                        display: "flex",
                        width: "100%"
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: "5px",
                            width: "100%",
                            borderRadius: "4px",
                            background: getTrackBackground({
                                values,
                                colors: ["#ccc", "#548BF4", "#ccc"],
                                min: MIN,
                                max: MAX
                            }),
                            alignSelf: "center"
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: "20px",
                        width: "20px",
                        borderRadius: "4px",
                        backgroundColor: "#FFF",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 2px 6px #AAA"
                    }}
                >
                    <div
                        style={{
                            height: "16px",
                            width: "5px",
                            backgroundColor: isDragged ? "#548BF4" : "#CCC"
                        }}
                    />
                </div>
            )}
        />
    )
}