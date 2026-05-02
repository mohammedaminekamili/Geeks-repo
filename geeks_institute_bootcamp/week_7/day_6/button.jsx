function BaseButton({ text, color, action }) {
    return (
      <button
        style={{
          backgroundColor: color,
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}
        onClick={action}
      >
        {text}
      </button>
    );
  }