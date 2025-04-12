import { getCurrentUser } from "@/lib/actions/auth.actions";
import Agent from "@/components/Agent";

const SyntalkicPage = async () => {
  const user = await getCurrentUser();
  return (
    <>
      <h3>Syntalkic Generation</h3>

      <Agent userName={user?.name || ""} userId={user?.id} type="generate" />
    </>
  );
};

export default SyntalkicPage;
