type NavItemProps = {
  title: string;
  isActive?: boolean;
};

export const NavItem = ({ title, isActive = false }: NavItemProps) => {
  return (
    <div
      className={`text-lg font-bold pb-2  cursor-pointer ${
        isActive
          ? "border-b-4 border-customGreen"
          : "border-b-4 border-transparent text-gray-500"
      } `}
    >
      {title}
    </div>
  );
};
