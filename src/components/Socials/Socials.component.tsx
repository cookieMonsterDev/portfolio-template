import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import {
  ContaineRight,
  ContainerLeft,
  EmailLink,
  Link,
  List,
  StripeLeft,
  StripeRigth,
} from "./Socials.styled";
import config from "@config";

export const SocialsComponent: React.FC = () => {
  return (
    <>
      <ContainerLeft>
        <List>
          <li>
            <Link href={config.socials.github_link} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </Link>
          </li>
          <li>
            <Link href={config.socials.linkedin_link} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </Link>
          </li>
          <li>
            <Link href={config.socials.telegram_Link} target="_blank" rel="noreferrer" aria-label="Telegram">
              <TelegramIcon />
            </Link>
          </li>
          <li>
            <Link href={`tel: ${config.socials.phone}`} aria-label="Phone">
              <LocalPhoneOutlinedIcon />
            </Link>
          </li>
        </List>
        <StripeLeft />
      </ContainerLeft>
      <ContaineRight>
        <EmailLink href={`mailto: ${config.socials.email}`} aria-label="Email">{config.socials.email}</EmailLink>
        <StripeRigth />
      </ContaineRight>
    </>
  );
};
