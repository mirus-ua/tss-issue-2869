import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/_dashboard/faq')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>faq</div>
}
