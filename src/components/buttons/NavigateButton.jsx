import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavigateButton = (props) => {
    const { text, link, ...otherProps } = props;
    return (
        <Button
            size="large"
            sx={{
                backgroundColor: "#E51D52",
                color: "white",
                borderRadius: "0",
                maxWidth:'50%',
                borderRadius:1,
                textTransform: 'none'
            }}
            variant="text"
            component={Link}
            to={link}
            {...otherProps}
        >
            {text}
        </Button>
    );
};

export default NavigateButton;