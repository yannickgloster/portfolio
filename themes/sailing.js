export default {
  colors: {
    text: "#000000",
    primary: "#ff686b",
    secondary: "#a5ffd6",
    highlight: "#84dcc6",
    accent: "#ffa69e",
    background: "#ffffff"
  },
  links: {
    bold: {
      fontWeight: "bold"
    },
    nav: {
      color: "white",
      bg: "primary",
      "&:hover": {
        color: "secondary",
        textDecoration: "none"
      }
    }
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "accent"
      }
    },
    secondary: {
      color: "background",
      bg: "secondary"
    }
  },
  footer: {
    fontSize: "1"
  }
};
