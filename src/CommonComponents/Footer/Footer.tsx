import {
  Avatar,
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import routeTree from "../../Routes";
interface Props {}

interface Developer {
  name: string;
  role: string;
  avatarSrc: string;
}
type SocialType = "facebook" | "qldt" | "hanu" | "fithanu";
interface Social {
  type: SocialType;
  link: string;
  name: string;
  iconSrc: string;
}

const CustomFooter: React.FC<Props> = () => {
  const members: Developer[] = [
    {
      name: "Đỗ Văn Hòa",
      role: "Project Manager",
      avatarSrc:
        "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/32231541_2032533817067363_2240034197454454784_o.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=GlJiyBMoMiIAX92pHyY&_nc_ht=scontent.fhan3-2.fna&oh=9d7f0d245ebb5eff0689fead3ba448e9&oe=5FA9FE65",
    },
    {
      name: "Nguyễn Thùy Dương",
      role: "System Architect",
      avatarSrc:
        "https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/120070323_1654441308072420_836793167068543965_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=anT74qEnoaAAX9VQNad&_nc_ht=scontent.fhan4-1.fna&oh=7b862720da9aef4e69fa2a95116208ea&oe=5FA82259",
    },
    {
      name: "Nguyễn Quốc Bảo",
      role: "Software Engineer",
      avatarSrc:
        "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/104111363_1338911162968900_3851317361686221959_o.jpg?_nc_cat=103&_nc_sid=a4a2d7&_nc_ohc=VrbuvxFMhY4AX9K8Jnr&_nc_ht=scontent.fhan3-2.fna&oh=48b60620c91cf01dc0a27073218dbfc9&oe=5FA818F9",
    },
    {
      name: "Tăng Bá Minh",
      role: "Intern",
      avatarSrc:
        "https://kenh14cdn.com/thumb_w/660/2020/9/8/photo-2-15995772922521570753570.jpg",
    },
  ];

  const socials: Social[] = [
    {
      iconSrc:
        "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/56208365_618343251942952_4594067817766060032_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=8bN1w2kOs-YAX9_Nj67&_nc_oc=AQkdotBzvBDDrcIYAAQfK0INMAwXavF8xwNCVIBWt8bWTKq64jlfc9zzx2fXyWH-WxM&_nc_ht=scontent.fhan3-1.fna&oh=64c97b45c4e97a1ec5b11b08c0a79440&oe=5FAAF0CF",
      link: "https://www.facebook.com/khoacntt.hanu/",
      name: "FIT Fanpage",
      type: "facebook",
    },
    {
      iconSrc:
        "http://fit.hanu.vn/theme/image.php/essential/theme/1574932483/favicon",
      link: "http://fit.hanu.vn/",
      name: "Falcuty of Information Technology",
      type: "fithanu",
    },
    {
      iconSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQneaAzaMSD2DqZjJGiav29zSi2bSjocSFlh-atc&s=10",
      link: "http://www.hanu.vn/",
      name: "HANU University",
      type: "hanu",
    },
    {
      iconSrc: "http://qldt.hanu.vn/Images/Edusoft.gif",
      link: "http://qldt.hanu.vn/",
      name: "QLDT",
      type: "qldt",
    },
  ];
  return (
    <footer>
      <Paper style={{ borderRadius: 0 }} elevation={3}>
        <Container maxWidth="lg" style={{ padding: "25px" }}>
          <Grid container spacing={4}>
            <Grid
              container
              item
              xs={12}
              md={6}
              lg={3}
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Link href="/">
                <img
                  src={window.location.origin + "/LearnCodingLogo.png"}
                  alt={"Logo"}
                />
              </Link>
              <Box mb={2} />
              <Typography component="div">
                A project for the System Architecture Design course
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={6}
              lg={3}
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Typography variant="h5">Menu</Typography>
              <List>
                {routeTree.content.map((route) => {
                  return (
                    <ListItem button component="a" href={route.path}>
                      <ListItemAvatar>
                        <Avatar alt={route.name} src={route.media.icon} />
                      </ListItemAvatar>
                      <ListItemText primary={route.name} />
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
            <Grid container item xs={12} md={6} lg={3} direction="column">
              <Typography variant="h5" component="div">
                Developers
              </Typography>
              <List>
                {members.map((member) => {
                  return (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar alt={member.name} src={member.avatarSrc} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={member.name}
                        secondary={member.role}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
            <Grid container item xs={12} md={6} lg={3} direction="column">
              <Typography variant="h5">Connect</Typography>
              <List>
                {socials.map((social) => {
                  return (
                    <ListItem button component="a" href={social.link}>
                      <ListItemAvatar>
                        <Avatar alt={social.name} src={social.iconSrc} />
                      </ListItemAvatar>
                      <ListItemText primary={social.name} />
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </footer>
  );
};

export default CustomFooter;
