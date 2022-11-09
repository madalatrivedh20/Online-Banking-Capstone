import { Container, Box } from "@mui/system";
import { Typography, Paper } from "@mui/material";
import Image from "mui-image";

const Footer = () => {
    return (
        <div>
            <Paper sx={{
                
                width: '100%',
                position: 'fixed',
                bottom: 0,
                width: '100%'
            }} component="footer" square variant="outlined">
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "left",
                            display: "flex",
                            m: 1
                        }}
                    >
                        VERTEX BANK GROUP
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: "left",
                            display: "flex",
                            m: 1
                        }}
                    >
                        <Typography variant="caption" color="initial">
                            Copyright ©2022. Limited
                        </Typography>
                    </Box>
                </Container>
            </Paper>
        </div>
    );
};

export default Footer;