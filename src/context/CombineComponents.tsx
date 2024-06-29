import { ComponentType, ReactNode } from "react";

type ComponentTypeWithChildren = ComponentType<{ children: ReactNode }>;

/**
 * New method management with context API REACT
 * for better maintainability split Context and providers in
 * isolated files.
 */
export const CombineComponents = (
  ...components: ComponentTypeWithChildren[]
): ComponentTypeWithChildren => {
  return components.reduce<ComponentTypeWithChildren>(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: { children: ReactNode }) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

