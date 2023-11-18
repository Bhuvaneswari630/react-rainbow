function ColorBlock({ color }) {
    return (
        <div className="colorBlock"
            style={{ 'backgroundColor': color }}
        >
            {color}
        </div>
    )
}

export default ColorBlock