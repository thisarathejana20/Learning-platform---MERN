import { Button } from "../ui/button";
import FormControls from "./FormControls";

const CommonForm = ({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled = false,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormControls
        formData={formData}
        setFormData={setFormData}
        formControls={formControls}
      />
      <Button disabled={isButtonDisabled} className="w-full mt-4">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
