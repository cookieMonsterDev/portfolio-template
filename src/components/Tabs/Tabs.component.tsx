import { useEffect, useRef, useState } from "react";
import { TabProps } from "./Tabs.types";
import {
  Container,
  Item,
  Link,
  List,
  Slider,
  TabButton,
  TabButtonsContainer,
  TabPanel,
  TimeSpawns,
  Title,
} from "./Tabs.styled";
import LinkIcon from "@mui/icons-material/Link";
import config from "@config";
import { useInView } from "react-intersection-observer";

export const TabsComponent: React.FC<TabProps> = ({ list = config.experience }) => {
  const [active, setActive] = useState(list[0]);
  const [containerlength, setContainerlength] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculate = () => {
      const value =
        window.innerWidth > 775
          ? containerRef?.current?.scrollHeight!
          : containerRef?.current?.scrollWidth!;
      console.log(value)

      setContainerlength(value);
    };

    calculate();

    window.addEventListener("resize", calculate);

    return () => {
      window.removeEventListener("resize", calculate);
    };
  }, [containerRef]);

  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
    rootMargin: "-20px",
  });

  const sliderLength = containerlength / list.length;

  return (
    <Container aria-label="experience tabs" ref={ref} inView={inView}>
      <TabButtonsContainer
        aria-label="tab buttons container"
        role="tablist"
        ref={containerRef}
      >
        {list.map((e) => (
          <TabButton
            key={e.id}
            tabIndex={0}
            role="tab"
            aria-selected={e.title === active.title}
            aria-controls={`tabpanel-${e.id + 1}`}
            id={`tab-${e.id + 1}`}
            isActive={e.title === active.title}
            onClick={() => setActive(e)}
          >
            {e.title}
          </TabButton>
        ))}
        <Slider offset={active.id} length={sliderLength} />
      </TabButtonsContainer>
      <div aria-label="tabpanels container">
        {list.map((e) => (
          <TabPanel
            key={e.id}
            role="tabpanel"
            id={`tabpanel-${e.id + 1}`}
            aria-labelledby={`tab-${e.id + 1}`}
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
                <Item key={e}>{e}</Item>
              ))}
            </List>
          </TabPanel>
        ))}
      </div>
    </Container>
  );
};
