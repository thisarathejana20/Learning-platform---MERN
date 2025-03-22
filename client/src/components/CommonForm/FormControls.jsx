import { Input } from "@/components/ui/input";
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
    const value = formData[controlItem.name] || "";

    switch (controlItem.componentType) {
      case "input":
        element = (
          <Input
            id={controlItem.name}
            name={controlItem.name}
            type={controlItem.type}
            placeholder={controlItem.placeholder}
            className="mt-1"
            value={value}
            onChange={(e) =>
              setFormData({ ...formData, [controlItem.name]: e.target.value })
            }
          />
        );
        break;
      case "select":
        element = (
          <Select
            value={value}
            onValueChange={(value) =>
              setFormData({ ...formData, [controlItem.name]: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={controlItem.label} />
            </SelectTrigger>
            <SelectContent>
              {controlItem?.options.map((option) => (
                <SelectItem key={option.id} value={option.id}>
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
            value={value}
            onChange={(e) =>
              setFormData({ ...formData, [controlItem.name]: e.target.value })
            }
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
          {renderComponentsByType(control)}
        </div>
      ))}
    </div>
  );
};

export default FormControls;
