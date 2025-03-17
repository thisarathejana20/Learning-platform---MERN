import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const FormControls = ({ formControls = [], formData, setFormData }) => {
  const renderComponentsByType = (controlItem) => {
    let element = null;

    switch (controlItem.componentType) {
      case "input":
        element = (
          <Input
            id={controlItem.name}
            name={controlItem.name}
            type={controlItem.type}
            placeholder={controlItem.placeholder}
            className="mt-1"
          />
        );
        break;
      case "select":
        element = (
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={controlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {controlItem?.options.map((option) => (
                <SelectItem key={option.id} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            id={controlItem.name}
            name={controlItem.name}
            type={controlItem.type}
            placeholder={controlItem.placeholder}
            className="mt-1"
          />
        );
        break;
      default:
        element = (
          <Input
            id={controlItem.name}
            name={controlItem.name}
            type={controlItem.type}
            placeholder={controlItem.placeholder}
            className="mt-1"
          />
        );
        return null;
    }

    return element;
  };
  return (
    <div className="flex flex-col gap-3">
      {formControls.map((control) => (
        <div key={control.name}>
          <Label htmlFor={control.name}>{control.label}</Label>
          <Input
            id={control.name}
            type={control.type}
            placeholder={control.placeholder}
            className="mt-1"
          />
        </div>
      ))}
    </div>
  );
};

export default FormControls;
