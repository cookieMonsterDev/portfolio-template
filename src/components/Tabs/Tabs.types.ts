export type TabProps = {
  list?: List[];
};

type List = {
  id: number;
  title: string;
  company_link: string;
  start_date: string;
  end_date: string;
  responsibilities: string[];
};
