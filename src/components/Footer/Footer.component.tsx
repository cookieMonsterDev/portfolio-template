import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Container, Info, SocialItem, Socials, Stats } from "./Footer.styled";
import { FooterProps } from "./Footer.types";
import config from "@config";

export const FooterComponent: React.FC<FooterProps> = ({
  stargazersCount,
  forksCount,
  stats = true,
}) => {
  return (
    <Container>
      <Socials>
        <SocialItem>
          <a
            href={config.socials.github_link}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href={config.socials.linkedin_link}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href={config.socials.telegram_Link}
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
          >
            <TelegramIcon />
          </a>
        </SocialItem>
        <SocialItem>
          <a href={`mailto: ${config.socials.email}`} aria-label="email">
            <AlternateEmailOutlinedIcon />
          </a>
        </SocialItem>
        <SocialItem>
          <a href={`tel: ${config.socials.phone}`} aria-label="phone number">
            <LocalPhoneOutlinedIcon />
          </a>
        </SocialItem>
      </Socials>
      <a
        href={config.git.this_repo_link}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="This github repo"
      >
        <Info>
          <p>Designed & Build by Mykhailo Toporkov</p>
          {stats && (
            <Stats>
              <div>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                >
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                </svg>
                <p>{stargazersCount}</p>
              </div>
              <div>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                >
                  <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                </svg>
                <p>{forksCount}</p>
              </div>
            </Stats>
          )}
        </Info>
      </a>
    </Container>
  );
};