import { useState } from "react";
import { TabProps } from "./Tabs.types";
import {
  Container,
  Item,
  Link,
  List,
  TabButton,
  TabButtonsContainer,
  TabPanel,
  TimeSpawns,
  Title,
} from "./Tabs.styled";
import LinkIcon from "@mui/icons-material/Link";
import config from "@config";

export const TabsComponent: React.FC<TabProps> = ({ list = config.experience }) => {
  const [active, setActive] = useState(list[0]);

  return (
    <Container aria-label="experience tabs">
      <TabButtonsContainer aria-label="tab buttons container" role="tablist">
        {list.map((e, i) => (
          <TabButton
            key={e.id}
            tabIndex={0}
            role="tab"
            aria-selected={e.title === active.title}
            aria-controls={`tabpanel-${i + 1}`}
            id={`tab-${i + 1}`}
            isActive={e.title === active.title}
            onClick={() => setActive(e)}
          >
            {e.title}
          </TabButton>
        ))}
      </TabButtonsContainer>
      <div aria-label="tabpanels container">
        {list.map((e, i) => (
          <TabPanel
            key={e.id}
            role="tabpanel"
            id={`tabpanel-${i + 1}`}
            aria-labelledby={`tab-${i + 1}`}
            hidden={e.title !== active.title}
          >
            <Title>{e.title}</Title>
            <TimeSpawns>{e.start_date}</TimeSpawns>
            <Link>
              <a
                href={e.company_link}
                target="_blank"
                rel="noreferrer"
                aria-label="company-link"
              >
                <LinkIcon />
              </a>
            </Link>
            <List>
              {e.responsibilities.map((e) => (
                <Item>{e}</Item>
              ))}
            </List>
          </TabPanel>
        ))}
      </div>
    </Container>
  );
};
