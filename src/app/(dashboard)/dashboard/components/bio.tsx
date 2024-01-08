import { getBio } from "@/actions/get-bio";
import { BioForm } from "@/components/forms/bio-from";

const Bio = async () => {
  const bio = await getBio();

  return <BioForm initialData={bio} />;
};

export default Bio;
