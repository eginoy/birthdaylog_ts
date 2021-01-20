import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette:{
        primary:{
            main: "#08d9d6"
        },
        secondary:{
            main:"#252a34"
        },
        text:{
            primary:"#08d9d6",
            secondary: "#fff",
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
    }
})

export default theme