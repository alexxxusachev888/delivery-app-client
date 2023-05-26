export const theme = {
  colors: {
    primary: "#222B45",
    secondary: "#CCCCCC",
    accent: "#F2C94C",
    text: "#000000",
    background: "#FFFFFF",
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    fontWeight: {
      regular: 400,
      bold: 700,
    },
  },
  button: {
    primary: {
      color: "#FFFFFF",
      background: "#222B45",
      hover: {
        color: "#FFFFFF",
        background: "#F2C94C",
      },
    },
    secondary: {
      color: "#222B45",
      background: "#CCCCCC",
      hover: {
        color: "#FFFFFF",
        background: "#222B45",
      },
    },
  },
  borders: {
    radius: "4px",
    width: "1px",
    color: "#CCCCCC",
  },
  shadows: {
    small: "0 2px 4px rgba(0, 0, 0, 0.1)",
    medium: "0 4px 8px rgba(0, 0, 0, 0.1)",
    large: "0 8px 16px rgba(0, 0, 0, 0.1)",
  },
  inputs: {
    borderWidth: "1px",
    borderRadius: "4px",
    borderColor: "#CCCCCC",
    focusBorderColor: "#F2C94C",
    padding: "10px",
  },
  headings: {
    h1: {
      fontSize: "24px",
      fontWeight: 700,
      color: "#222B45",
      marginBottom: "16px",
    },
    h2: {
      fontSize: "20px",
      fontWeight: 700,
      color: "#222B45",
      marginBottom: "12px",
    },
    h3: {
      fontSize: "18px",
      fontWeight: 700,
      color: "#222B45",
      marginBottom: "10px",
    },
  },
};