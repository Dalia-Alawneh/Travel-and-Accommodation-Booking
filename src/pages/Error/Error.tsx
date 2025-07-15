import { UTurnLeftRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import AppButton from "@travelia/components/Button";

interface IErrorPageProps {
  title: string;
  caption?: string;
  image: string;
  onClick: () => void;
}
const ErrorPage = ({ title, caption, image, onClick }: IErrorPageProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      p={{ xs: 5, lg: 20 }}
      height="100vh"
    >
      <Typography variant="h2" mb={3}>
        {title}
      </Typography>
      {caption && <Typography variant="body2">{caption}</Typography>}
      <Box width={{ sm: "100%", md: 500 }}>
        <img src={image} alt={caption} width="100%" />
      </Box>
      <AppButton onClick={onClick}>
        <UTurnLeftRounded
          sx={{
            transform: "rotate(90deg)",
            fontSize: 17,
            mr: 1,
          }}
        />{" "}
        Back
      </AppButton>
    </Box>
  );
};

export default ErrorPage;
