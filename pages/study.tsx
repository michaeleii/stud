import PageContent from "@/components/PageContent";
import PageHeading from "@/components/PageHeading";
import Pomodoro from "@/components/Pomodoro";

function Study() {
  return (
    <div>
      <PageHeading>Study</PageHeading>
      <PageContent>
        <Pomodoro />
      </PageContent>
    </div>
  );
}
export default Study;
