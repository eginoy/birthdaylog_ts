import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette:{
        primary:{
            main: "#252a34"
        },
        secondary:{
            main:"#08d9d6"
        },
        text:{
            primary:"#fff",
            secondary: "#08d9d6"
        },
        background:{
            default: "#fff",
            paper: "#eaeaea"
        },
        error:{
            main: "#ff2e63"
        }
    },
    typography:{
        button:{
            textTransform:"none"
        }
    },
    props:{
        MuiTextField:{
            variant: "outlined"
        }
    },
    mixins:{
        toolbar:{
            minHeight:45
        }
    }
})

export default theme