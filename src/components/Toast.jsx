export default function Toast({ text, type, onClose }) {
    const bgColor =
        {
            error: "#e44336",
            success: "#4caf50",
            info: "#2196f3",
            warning: "#ff9800",
        }[type] || "#333";
    return (
        <div
            style={{
                padding: "10px 16px",
                backgroundColor: bgColor,
                color: "white",
                position: "fixed",
                top: "20px",
                right: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minWidth: "200px",
            }}
        >
            <span>{text}</span>
            <button
                onClick={onClose}
                style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                    fontSize: "1.2rem",
                    marginLeft: "12px",
                    cursor: "pointer",
                }}
                aria-label="Close toast"
            >
                &times;
            </button>
        </div>
    );
}
