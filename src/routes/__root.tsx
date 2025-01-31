import { createRootRoute, Outlet } from '@tanstack/react-router';
import { SidebarContainer } from '@containers/SidebarContainer';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="w-full h-full flex items-start">
        <SidebarContainer />
        <div className="w-full h-full p-2">
          <Outlet />
        </div>
      </div>
    </>
  ),
});
