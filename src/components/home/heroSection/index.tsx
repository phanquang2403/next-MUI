import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import avatar from "@/images/avt.jpeg";

export function HeroSection() {
  return (
    <Box component="section">
      <Container>
        <Stack
          direction={{ sx: "column-reverse", md: "row" }}
          alignItems={{ sx: "center", md: "flex-start" }}
          textAlign={{ sx: "center", md: "left" }}
          spacing={8}
        >
          <Box>
            <Typography>
              Hi, I am John <br />
              Creative Technologist
            </Typography>
            <Typography>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur, natus vitae fugit, officia distinctio in similique vel
              earum magni velit eveniet sit. Ipsa, impedit qui molestias iste
              incidunt architecto delectus?
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "red",
              }}
            >
              Download Resume
            </Button>
          </Box>

          <Box>
            <Image src={avatar} alt="avt" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
