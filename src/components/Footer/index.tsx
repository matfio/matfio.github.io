import { Box, Container, Grid, Link } from '@mui/material';
import './index.css'

const Footer = () => (
    <footer>
      <Box>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
                <Box>
                    <Link href='/' color='inherit'>
                        Contact
                    </Link>
                </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
);

export default Footer;
