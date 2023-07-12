import { FC } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { HomeIcon } from '../HomeIcon'
import Link from 'next/link'
import { NavListItems } from './NavListItems'

type DesktopProps = {}

export const Desktop: FC<DesktopProps> = ({}) => {
  return (
    <NavigationMenu.Root className="relative z-[1] hidden w-screen lg:flex [&>div]:w-full">
      <NavigationMenu.List className="flex basis-[10%] justify-between px-20 py-[18px] w-full items-center">
        <NavigationMenu.Link asChild>
          <Link href="/">
            <HomeIcon />
          </Link>
        </NavigationMenu.Link>
        <div className="basis-[90%]">
          <NavListItems />
        </div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
