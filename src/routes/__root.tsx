import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Sidebar } from '@components/Sidebar';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="w-full h-full flex items-start">
        <Sidebar />
        <div className="w-full h-full p-2">
          <Outlet />
        </div>
      </div>
    </>
  ),
});
