import { Typography } from "@mui/material";

interface ISectionTitle {
  title: string;
  subTitle: string;
}

const SectionTitle = ({ title, subTitle }: ISectionTitle) => {
  return (
    <>
      <Typography variant="h2" mb={{ xs: 1, md: 2 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="custom.darkSalver" mb={5}>
        {subTitle}
      </Typography>
    </>
  );
};

export default SectionTitle;
