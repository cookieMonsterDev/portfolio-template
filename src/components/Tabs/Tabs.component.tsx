import { useState } from "react";
import { TabProps } from "./Tabs.types";
import {
  Container,
  TabButton,
  TabButtonsContainer,
  TabPanel,
  TabPanelsContainer,
} from "./Tabs.styled";
import config from "@config";

export const TabsComponent: React.FC<TabProps> = ({ list = config.experience }) => {
  const [active, setActive] = useState(list[0].title);

  return (
    <Container aria-label="experience tabs">
      <TabButtonsContainer aria-label="tab buttons container">
        {list.map((e, i) => (
          <TabButton
            key={e.id}
            tabIndex={0}
            role="tab"
            aria-selected={e.title === active}
            aria-controls={`tabpanel-${i + 1}`}
            id={`tab-${i + 1}`}
            isActive={e.title === active}
            onClick={() => setActive(e.title)}
          >
            {e.title}
          </TabButton>
        ))}
      </TabButtonsContainer>
      <TabPanelsContainer aria-label="tabpanels container">
        {list.map((e, i) => (
          <TabPanel
            key={e.id}
            role="tabpanel"
            id={`tabpanel-${i + 1}`}
            aria-labelledby={`tab-${i + 1}`}
            hidden={e.title !== active}
          >
            {e.title}
          </TabPanel>
        ))}
      </TabPanelsContainer>
    </Container>
  );
};
