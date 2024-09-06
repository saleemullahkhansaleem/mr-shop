import { FC } from "react";
import * as Lucide from "lucide-react";

export type IconName = keyof typeof Lucide;

type IconComponent = FC<React.SVGProps<SVGSVGElement>>;

interface TestProps extends React.SVGProps<SVGSVGElement> {
  iconName: IconName;
}

const IconLucide: FC<TestProps> = ({ iconName, ...props }) => {
  const IconComponent = Lucide[iconName] as IconComponent | undefined;

  if (!IconComponent) {
    return <span title="Icon not found">Icon not found</span>;
  }

  return <IconComponent {...props} />;
};

export default IconLucide;
