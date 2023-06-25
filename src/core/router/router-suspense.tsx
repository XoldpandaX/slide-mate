import { type FC, type PropsWithChildren, Suspense } from 'react'

export const RouterSuspense: FC<PropsWithChildren> = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    {props.children}
  </Suspense>
)
