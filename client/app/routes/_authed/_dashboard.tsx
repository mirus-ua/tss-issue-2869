import { portfoliosQueryOptions } from '@/api/portfolio'
import { AppSidebar } from '@/components/app-sidebar'

import { SidebarProvider } from '@/components/ui/sidebar'
import { useBreadcrumbs } from '@/hooks/use-breadcrumbs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/_dashboard')({
  component: UserDashboardLayout,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(portfoliosQueryOptions())
  },
})

function UserDashboardLayout() {
  const { userProfile } = Route.useRouteContext()
  const breadcrumbs = useBreadcrumbs()

  return (
    <SidebarProvider>
      <AppSidebar userProfile={userProfile} />
    </SidebarProvider>
  )
}
