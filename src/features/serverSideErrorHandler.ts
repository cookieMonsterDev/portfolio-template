import axios from "axios";

type Redirect = {
  redirect: {
    destination: string;
  };
};

const serverSideErrorHandler = <T extends unknown>(error: T): Redirect => {
  if (!axios.isAxiosError(error))
    return {
      redirect: {
        destination: "/500",
      },
    };

  return {
    redirect: {
      destination: "/404",
    },
  };
};

export default serverSideErrorHandler;